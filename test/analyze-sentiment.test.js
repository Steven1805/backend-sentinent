import generateEmotionsSummary from './emotion-summary.js';

describe('generateEmotionsSummary', () => {
  test('should generate emotions summary for provided posts', async () => {
    // Mock posts data
    const posts = [
      {id: 1, message: 'Feeling happy today!'},
      {id: 2, message: 'Feeling sad, need some cheering up.'},
      {id: 3, message: 'Excited about the upcoming event!'},
    ];

    // Call the function
    const result = await generateEmotionsSummary(posts);

    // Assert the output
    expect(result).toBeDefined();
    expect(result.output).toContain('happy');
    expect(result.output).toContain('sad');
    expect(result.output).toContain('excited');
  });
});
