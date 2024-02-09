import FB from 'fb';

/**
 * Retrieves selected posts from a user's Facebook account.
 * @param {string} userId - The ID of the user whose posts are being retrieved.
 * @param {string} accessToken - The access token for authentication.
 * @param {number} limit - The limit of posts to retrieve.
 * @return {Promise<Object>} A promise resolving to the response containing
 * selected posts.
 */
async function getPostSelected(userId, accessToken, limit) {
  try {
    FB.setAccessToken(accessToken);
    const apiPath = `/${userId}/posts`;
    const fields = `id,created_time,story,message,shares,reactions
                  .type(LIKE).limit(0).summary(1).as(like),reactions
                  .type(LOVE).limit(0).summary(1).as(love),reactions
                  .type(HAHA).limit(0).summary(1).as(haha),reactions
                  .type(WOW).limit(0).summary(1).as(wow),reactions
                  .type(SAD).limit(0).summary(1).as(sad),reactions
                  .type(ANGRY).limit(0).summary(1).as(angry)`;

    const params = {fields, limit};
    const response = await FB.api(apiPath, 'GET', params);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export default getPostSelected;
