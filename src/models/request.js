// building hash of request
const crypto = require('crypto')
const moment = require('moment')
const request = require('request-promise-native')
const queryString = require('query-string')

// build a request for duo security by combining the request parameters into
// as string and hashing that string with our skey to form the authorization
// header with the ikey
module.exports = function ({
  domain,
  ikey,
  skey,
  url,
  qs,
  method = 'GET'
}) {
  const now = moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ')

  const baseUrl = 'https://' + domain

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

  if (qs) {
    // add URL query parameters
    canon += queryString.stringify(qs)
  }

  // hash the request string using our skey
  const pass = crypto.createHmac('sha1', skey)
      .update(canon)
      .digest('hex')

  // return the request promise
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
