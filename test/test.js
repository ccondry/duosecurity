require('dotenv').load()
const auth = require('./models/auth')

const domain = process.env.API_DOMAIN
const ikey = process.env.IKEY
const skey = process.env.SKEY

auth({domain, ikey, skey, username: 'username@domain.com'})
.then(r => console.log(r))
.catch(e => console.log(e.message))
