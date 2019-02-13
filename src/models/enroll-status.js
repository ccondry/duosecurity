/*
Check whether a user has completed enrollment.
*/

// user our local request wrapper for duo requests
const request = require('./request')

module.exports = function ({
  domain,
  ikey,
  skey,
  // required
  userId,
  // required
  activationCode
}) {

  const url = '/auth/v2/enroll_status'

  const qs = {
    user_id: userId,
    activation_code: activationCode
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
