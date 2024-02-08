const processReactions = require('./count-reactions')
const getPosts = require('./get-posts-selected')
const getFeedback = require('./feedback')
const generateEmotionsSummary = require('./emotion-summary')

async function analyzeSentiment (userId, accessToken, limit) {
  try {
    const postsSelected = await getPosts(userId, accessToken, limit)
    const reactionsSummary = await processReactions(postsSelected.data)
    const feedback = await getFeedback(reactionsSummary)
    const emotionsSummary = await generateEmotionsSummary(postsSelected.data)
    const response = { reactionsSummary, feedback, emotionsSummary }
    return response
  } catch (error) {
    throw new Error(error)
  }
}
module.exports = analyzeSentiment
