/*
The /ping endpoint acts as a "liveness check" that can be called to verify that
Duo is up before trying to call other Auth API endpoints. Unlike the other
endpoints, this one does not have to be signed with the Authorization header.
*/

const moment = require('moment')
const request = require('request-promise-native')

module.exports = function ({domain}) {
  const now = moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ')

  const baseUrl = 'https://' + domain
  const url = '/auth/v2/ping'
  const method = 'GET'

  // return the request promise
  return request({
    baseUrl,
    url,
    method,
    headers: {
      'Date': now
    },
    json: true
  })
}
