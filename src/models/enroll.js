/*
The /enroll endpoint provides a programmatic way to enroll new users with Duo
two-factor authentication. It creates the user in Duo and returns a code (as a
barcode image) that Duo Mobile can scan with its built-in camera. Scanning the
barcode adds the user's account to the app so that they receive and respond to
Duo Push login requests.
*/

// user our local request wrapper for duo requests
const request = require('./request')

module.exports = function ({
  domain,
  ikey,
  skey,
  // optional - Username for the created user. If not given, a random username
  // will be assigned and returned.
  username,
  // optional - Seconds for which the activation code will remain valid.
  // Default: 86400 (one day).
  validSecs
}) {

  const url = '/auth/v2/enroll'

  const qs = {
    username,
    valid_secs: validSecs
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
