/*
The /check endpoint can be called to verify that the Auth API integration and
secret keys are valid, and that the signature is being generated properly.
*/

// user our local request wrapper for duo requests
const request = require('./request')

// check our credentials and request hashing
module.exports = function ({
  domain,
  ikey,
  skey
}) {
  const url = '/auth/v2/check'
  const method = 'GET'

  // return the request promise
  return request({
    domain,
    ikey,
    skey,
    url,
    method
  })
}
