/*
The /logo endpoint provides a programmatic way to retrieve your stored logo.
*/

// user our local request wrapper for duo requests
const request = require('./request')

module.exports = function ({
  domain,
  ikey,
  skey
}) {
  const url = '/auth/v2/logo'
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
