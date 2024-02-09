import getFeedback from '../modules/feedback.js';

describe('getFeedback', () => {
  test('should generate feedback based on provided reactions summary', async () => {
    // Mock reactions summary
    const reactionsSummary = {
      totalLikes: 10,
      totalLoves: 5,
      totalHahas: 2,
      totalWows: 3,
      totalSads: 1,
      totalAngrys: 0,
    };

    // Call the function
    const result = await getFeedback(reactionsSummary);

    // Assert the output
    expect(result).toEqual({
      totalScore: 24, // (10 * 1) + (5 * 2) + (2 * 1) + (3 * 1) + (1 * -1) + (0 * -2)
      feedback: 'Your sentiment score is influenced by the types and quantity of reactions on your posts. Your positive interactions outweigh the negative ones, your posts are radiating positivity! Your audience loves engaging with your content.'
    });
  });
});
