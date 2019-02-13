// load env vars
require('dotenv').load()
// this library
const duo = require('../src/index')

// get env vars
const domain = process.env.API_DOMAIN
const ikey = process.env.IKEY
const skey = process.env.SKEY

const username = 'ccondry@cisco.com'
// test auth with async
// duo.auth({domain, ikey, skey, username, async: true})
// .then(r => console.log(r))
// .catch(e => console.log(e.message))

// ping - simple health check of the web service. no credentials.
// duo.ping({domain})
// .then(r => console.log(r))
// .catch(e => console.log(e.message))

// check - same as ping, but credentials and hashing are required/checked
// duo.check({domain, ikey, skey})
// .then(r => console.log(r))
// .catch(e => console.log(e.message))

// logo - get your stored logo
// duo.logo({domain, ikey, skey})
// .then(r => console.log(r))
// .catch(e => console.log(e.message))

// check status of async
// duo.authStatus({domain, ikey, skey, txid: '5a4ed4cd-5d62-495a-8dda-fe53d35b707a'})
// .then(r => console.log(r))
// .catch(e => console.log(e.message))

// preauth
// duo.preauth({domain, ikey, skey, username})
// .then(r => console.log(r))
// .catch(e => console.log(e.message))

// enroll
// duo.enroll({domain, ikey, skey, username: 'cisdemosystem@gmail.com', validSecs: 60})
// .then(r => console.log(r))
// .catch(e => console.log(e.message))

// enroll-status
duo.enrollStatus({domain, ikey, skey, userId: 'DU1OB8KRUA1S8A15DDHL', activationCode: 'duo://bF3bVzxwVV6oIob5Gbj1-YXBpLTJkZmUwYjQ3LmR1b3NlY3VyaXR5LmNvbQ'})
.then(r => console.log(r))
.catch(e => console.log(e.message))
