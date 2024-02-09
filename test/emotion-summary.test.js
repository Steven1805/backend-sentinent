import generateEmotionsSummary from '../modules/emotion-summary.js';

// Mocking GoogleGenerativeAI class
jest.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: jest.fn().mockImplementation(() => {
      return {
        getGenerativeModel: jest.fn().mockReturnValue({
          generateContent: jest.fn().mockResolvedValue({
            response: { text: () => 'Mocked output' },
          }),
        }),
      };
    })
  };
});

describe('generateEmotionsSummary', () => {
  test('should generate emotions summary based on provided posts', async () => {
    // Mock posts data
    const posts = [
      { id: 1, message: 'Feeling happy today!' },
      { id: 2, message: 'Feeling sad, need some cheering up.' },
      { id: 3, message: 'Excited about the upcoming event!' },
    ];

    // Call the function
    const result = await generateEmotionsSummary(posts);

    // Assert the output
    expect(result).toBeDefined();
    expect(result.output).toEqual('Mocked output');
  });
});
