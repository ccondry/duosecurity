// building hash of request
const crypto = require('crypto')
const moment = require('moment')
const request = require('request-promise-native')
const queryString = require('query-string')

function auth ({domain, ikey, skey, username}) {
  const now = moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ')

  const baseUrl = 'https://' + domain
  const url = '/auth/v2/auth'
  const qs = {
    device: 'auto',
    factor: 'auto',
    username
  }
  const method = 'POST'

  // create stringified request, we will hash this and use it for our requests
  let canon = ''

  // add date string
  // Tue, 21 Aug 2012 17:29:18 -0000
  canon += now

  // add newline
  canon += '\n'
  // add HTTP method
  canon += method
  // add newline
  canon += '\n'
  // add our API domain
  canon += domain
  // add newline
  canon += '\n'
  // add URL path
  canon += url
  // add newline
  canon += '\n'

  // add URL query parameters
  canon += queryString.stringify(qs)

  // console.log(canon)

  // hash the request string using our skey
  const pass = crypto.createHmac('sha1', skey)
      .update(canon)
      .digest('hex')

  return request({
    baseUrl,
    url,
    method,
    qs,
    auth: {
      user: ikey,
      pass
    },
    headers: {
      'Date': now
    },
    json: true
  })

}

module.exports = auth
