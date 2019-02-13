/*
The /auth_status endpoint "long-polls" for the next status update from the
authentication process for a given transaction. That is to say, if no status
update is available at the time the request is sent, it will wait until there is
an update before returning a response.
*/

// user our local request wrapper for duo requests
const request = require('./request')

module.exports = function ({
  domain,
  ikey,
  skey,
  // txid of the request to check
  txid
}) {
  const url = '/auth/v2/auth_status'
  const qs = {
    txid
  }
  const method = 'GET'

  // return the request promise
  return request({
    domain,
    ikey,
    skey,
    url,
    method,
    qs
  })
}
