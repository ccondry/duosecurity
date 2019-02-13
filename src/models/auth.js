/*
The /auth endpoint performs second-factor authentication for a user by sending a
push notification to the user's smartphone app, verifying a passcode, or placing
a phone call. It is also used to send the user a new batch of passcodes via SMS.
*/

// user our local request wrapper for duo requests
const request = require('./request')

module.exports = function ({
  domain,
  ikey,
  skey,
  // it is required to provide either userId or username
  userId,
  username,
  // required - must be one of: auto, push, passcode, sms, phone
  factor = 'auto',
  // optional
  ipaddr,
  // optional - if true, auth request returns immediately with txid.
  // use auth_status API to check txid status.
  async,
  // required - should be device ID or 'auto' to select user's first device
  device = 'auto',
  // optional, may use if factor = push
  type,
  // optional, may use if factor = push
  displayUsername,
  // optional, may use if factor = push
  pushinfo,
  // passcode is required if factor = passcode
  passcode
}) {

  const url = '/auth/v2/auth'

  const qs = {
    user_id: userId,
    username,
    factor,
    ipaddr,
    async: async === true ? 1 : undefined,
    device,
    type,
    display_username: displayUsername,
    pushinfo,
    passcode
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
