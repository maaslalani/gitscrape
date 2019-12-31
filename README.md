# Gitscrape

A tool that allows you to to enter a repository or organization and retrieve information on all contributors, stargazers, and forkers.

## Getting started

NPM: `6.13.1`

Node: `v13.3.0`

1) Clone this repo: `git clone git@github.com:maaslalani/gitscrape.git`

2) Generate a Github token [here](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token)

3) Get a clearbit API key [here](https://dashboard.clearbit.com/api)

4) Inside the server folder rename `example.env` to `.env` and add in the API keys

5) Run the server and client
  

### Debugging

If you get the following:

```Access to fetch at 'http://localhost:3001/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.```

Install [this](https://chrome.google.com/webstore/detail/who-cors/hnlimanpjeeomjnpdglldcnpkppmndbp?hl=en) chrome extension and add `https://localhost` as the origin 

or 

Run this in your terminal. It opens a CORS disabled chrome instance

```open -a Google\ Chrome --args --disable-web-security --user-data-dir```
    

#### Server

```bash

$ npm install

$ npm start

```

  

#### Client

```bash

$ npm install

$ npm start

```

  

## Contribuition Guidelines

Coming soon :eyes:
