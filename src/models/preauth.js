/*
The /preauth endpoint determines whether a user is authorized to log in, and
(if so) returns the user's available authentication factors.
*/

// user our local request wrapper for duo requests
const request = require('./request')

module.exports = function ({
  domain,
  ikey,
  skey,
  // optional
  ipaddr,
  // it is required to provide either userId or username
  userId,
  username,
  // optional
  trustedDeviceToken
}) {

  const url = '/auth/v2/preauth'

  const qs = {
    user_id: userId,
    username,
    ipaddr,
    trusted_device_token: trustedDeviceToken
  }

  const method = 'POST'

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
