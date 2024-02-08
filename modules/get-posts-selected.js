const fb = require('fb')

async function getPostSelected (userId, accessToken, limit) {
  try {
    fb.setAccessToken(accessToken)
    const apiPath = `/${userId}/posts`
    const fields = 'id,created_time,story,message,shares,reactions.type(LIKE).limit(0).summary(1).as(like),reactions.type(LOVE).limit(0).summary(1).as(love),reactions.type(HAHA).limit(0).summary(1).as(haha),reactions.type(WOW).limit(0).summary(1).as(wow),reactions.type(SAD).limit(0).summary(1).as(sad),reactions.type(ANGRY).limit(0).summary(1).as(angry)'
    const params = { fields, limit }
    const response = await fb.api(apiPath, 'GET', params)
    return response
  } catch (error) {
    throw new Error(error)
  }
}
module.exports = getPostSelected
