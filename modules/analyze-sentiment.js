const fb = require('fb');
const processReactions = require('./count-reactions');
const getPosts = require('./get-posts-selected');
const getFeedback = require('./feedback');

async function analyzeSentiment(userId, accessToken, limit) {
  try {
    const postsSelected = await getPosts(userId, accessToken, limit);
    const reactionsSummary = await processReactions(postsSelected.data);
    const feedback = await getFeedback(reactionsSummary);
    const response = { reactionsSummary, feedback };
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
module.exports = analyzeSentiment;
