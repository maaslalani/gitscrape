import Github from 'octonode';

const Client = Github.client();

Client.get('/users/maaslalani', {}, function (err, status, body, headers) {
  console.log(body);
});
