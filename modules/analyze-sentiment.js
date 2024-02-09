import processReactions from './count-reactions.js';
import getPosts from './get-posts-selected.js';
import getFeedback from './feedback.js';
import generateEmotionsSummary from './emotion-summary.js';

/**
 * Analyzes sentiment based on user feedback.
 * @param {string} userId - The ID of the user.
 * @param {string} accessToken - The access token authentication.
 * @param {number} limit - The number of posts to analyze.
 * @return {Promise<Object>} An object containing sentiment analysis results.
 */
async function analyzeSentiment(userId, accessToken, limit) {
  try {
    const postsSelected = await getPosts(userId, accessToken, limit);
    const reactionsSummary = await processReactions(postsSelected.data);
    const feedback = await getFeedback(reactionsSummary);
    const emotionsSummary = await generateEmotionsSummary(postsSelected.data);
    const response = {reactionsSummary, feedback, emotionsSummary};
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export default analyzeSentiment;
