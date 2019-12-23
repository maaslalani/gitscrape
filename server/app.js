import express from 'express';
import octokit from '@octokit/graphql';

const { graphql } = octokit;

const app = express();

const userNodes = `
  nodes {
    name
    login
    email
    url
    websiteUrl
  }
`;

const fetchUsers = ({user, repository}) => 
  `{
      repository(owner: "${user}", name: "${repository}") {
        stargazers(first: 20) {
          ${userNodes}
        }
        forks(first: 20) {
          nodes {
            mentionableUsers(last: 1) {
              ${userNodes}
            }
          }
        }
        mentionableUsers(last: 20) {
          ${userNodes}
        }
      }
    }
  `;

app.get('/:user/:repository', async function(request, response) {
  const { repository } = await graphql(fetchUsers(request.params),
    {
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    }
  );

  const { mentionableUsers, forks, stargazers } = repository;

  const users = [
    ...mentionableUsers.nodes,
    ...forks.nodes.map(fork => fork.mentionableUsers.nodes[0]),
    ...stargazers.nodes,
  ];

  // Since stargazers can also be forkers, filter out duplicates
  const seenUsers = new Set();
  const uniqueUsers = users.filter(user => {
    const duplicate = seenUsers.has(user.login);
    seenUsers.add(user.login);
    return !duplicate;
  });

  response.json(uniqueUsers);
});

app.listen(3001);
