import countReactions from '../modules/count-reactions.js';

describe('countReactions', () => {
  test('should count reactions from a list of posts', async () => {
    // Mock posts data
    const posts = [
      {
        like: {summary: {total_count: 5}},
        love: {summary: {total_count: 3}},
        haha: {summary: {total_count: 2}},
        wow: {summary: {total_count: 1}},
        sad: {summary: {total_count: 0}},
        angry: {summary: {total_count: 1}}},
      {
        like: {summary: {total_count: 10}},
        love: {summary: {total_count: 2}},
        haha: {summary: {total_count: 0}},
        wow: {summary: {total_count: 3}},
        sad: {summary: {total_count: 1}},
        angry: {summary: {total_count: 0}}},
    ];

    // Call the function
    const result = await countReactions(posts);

    // Assert the output
    expect(result).toEqual({
      totalLikes: 15,
      totalLoves: 5,
      totalHahas: 2,
      totalWows: 4,
      totalSads: 1,
      totalAngrys: 1,
      totalReactions: 28,
    });
  });
});
