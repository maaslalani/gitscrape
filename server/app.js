import express from 'express';
import octokit from '@octokit/graphql';

import dotenv from 'dotenv'
dotenv.config()

import Clearbit from 'clearbit';
const { Client } = Clearbit;
const clearbit = new Client({ key: process.env.CLEARBIT_TOKEN });

const { graphql } = octokit;
const app = express();

const fetchUsers = ({user, repository}) => 
  `{
      repository(owner: "${user}", name: "${repository}") {
        stargazers(first: 20) {
          nodes {
            name
            login
            email
            url
            websiteUrl
          }
        }
        forks(first: 20) {
          nodes {
            owner {
              ... on User {
                name
                login
                email
                url
                websiteUrl
              }
            }
          }
        }
        owner {
          ... on User {
            name
            login
            email
            url
            websiteUrl
          }
        }
      }
    }
  `;

const fetchOrganization = ({organization}) =>
  `{
      organization(login: "${organization}") {
        repositories(first: 20) {
          nodes {
            stargazers(first: 20) {
              nodes {
                name
                login
                email
                url
                websiteUrl
              }
            }
            forks(first: 20) {
              nodes {
                owner {
                  ... on User {
                    name
                    login
                    email
                    url
                    websiteUrl
                  }
                }
              }
            }
            owner {
              ... on User {
                name
                login
                email
                url
                websiteUrl
              }
            }
          }
        }
      }
   }
  `;

app.get('/organization/:organization', async function(request, response) {
  try {
    const { organization } = await graphql(fetchOrganization(request.params),
      {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    );

    response.json(await organizationToUsers(organization));

  } catch (error) {
    console.log(error);
    response.json([{
      error: "Could not fetch repository"
    }]);
  }
});

app.get('/:user/:repository', async function(request, response) {
  try {
    const { repository } = await graphql(fetchUsers(request.params),
      {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    );

    const uniqueUsers = await repositoryToUsers(repository);
    response.json(uniqueUsers);

  } catch (error) {
    response.json([{
      error: "Could not fetch repository"
    }]);
  }
});


async function getUserLinkedin(email){
  try {
    const person = await clearbit.Person.find({email});
    if (!person.linkedin.handle) throw 'No linkedin';
    return 'https://linkedin.com/' + person.linkedin.handle;
  } catch (error) {
    return '';
  }
}

async function repositoryToUsers(repository) {
  const { forks, stargazers } = repository;

  const users = [
    repository.owner,
    ...forks.nodes,
    ...stargazers.nodes,
  ];

  // Since stargazers can also be forkers, filter out duplicates
  const seenUsers = new Set();
  let uniqueUsers = users.filter(user => {
    if (!user) {
      return false;
    }

    const duplicate = seenUsers.has(user.login);

    seenUsers.add(user.login);
    return !duplicate;
  });

  uniqueUsers = await Promise.all(uniqueUsers.map(async user => ({
    name: user.name,
    login: user.login,
    email: user.email,
    url: user.url,
    websiteUrl: user.websiteUrl,
    linkedin: await getUserLinkedin(user.email),
  })));

  return uniqueUsers;
}

async function organizationToUsers(organization) {
  const users = await Promise.all(organization.repositories.nodes
    .map(async repository => await repositoryToUsers(repository)));

  const seenUsers = new Set();
  const uniqueUsers = users.filter(user => {
    if (!user) {
      return false;
    }

    const duplicate = seenUsers.has(user.login);

    seenUsers.add(user.login);
    return !duplicate;
  });

  return uniqueUsers[0];
}

app.listen(3001);
