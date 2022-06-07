import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const __dirname =
  '/Users/danyil/Documents/LPNU/Calendar-for-better-time-management';
const server = express();
const port = 3000;

server.use('/css', express.static(__dirname + '/css'));
server.use('/img', express.static(__dirname + '/img'));
server.use('/js', express.static(__dirname + '/js'));
server.engine('html', require('ejs').renderFile);

server.get('/', (req, res) => {
  res.render(__dirname + '/index.html');
});
server.get('/account', (req, res) => {
  res.render(__dirname + '/pages/account_details.html');
});
server.get('/account/edit', (req, res) => {
  res.render(__dirname + '/pages/edit_account_details.html');
});
server.get('/event/new', (req, res) => {
  res.render(__dirname + '/pages/add_new_event.html');
});
server.get('/event/:id', (req, res) => {
  res.render(__dirname + '/pages/event_details.html');
});
server.get('/event/edit/:id', (req, res) => {
  res.render(__dirname + '/pages/edit_event_details.html');
});
server.get('/login', (req, res) => {
  res.render(__dirname + '/pages/login.html');
});
server.get('/sign_up', (req, res) => {
  res.render(__dirname + '/pages/sign_up.html');
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
