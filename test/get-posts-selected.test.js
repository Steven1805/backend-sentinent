import getPostsSelected from './get-posts-selected.js';
import FB from 'fb';

// Mocking FB.setAccessToken
jest.mock('fb', () => ({
  setAccessToken: jest.fn(),
  api: jest.fn().mockImplementation((apiPath, method, params) => {
    // Mocking response data
    const mockResponse = {
      data: [
        {
          id: '1',
          created_time: '2024-02-09T12:00:00',
          story: 'Sample story',
          message: 'Sample message',
          shares: { count: 5 },
          reactions: {
            like: { summary: { total_count: 10 } },
            love: { summary: { total_count: 5 } },
            haha: { summary: { total_count: 2 } },
            wow: { summary: { total_count: 3 } },
            sad: { summary: { total_count: 1 } },
            angry: { summary: { total_count: 0 } }
          }
        }
      ]
    };
    return Promise.resolve(mockResponse);
  })
}));

describe('getPostsSelected', () => {
  test('should retrieve selected posts from Facebook API', async () => {
    // Mock data
    const userId = '123456789';
    const accessToken = 'sampleAccessToken';
    const limit = 10;

    // Call the function
    const result = await getPostsSelected(userId, accessToken, limit);

    // Assert the output
    expect(FB.setAccessToken).toHaveBeenCalledWith(accessToken);
    expect(FB.api).toHaveBeenCalledWith(
        `/${userId}/posts`,
        'GET',
        { fields: expect.any(String), limit }
    );
    expect(result).toEqual({
      data: [
        {
          id: '1',
          created_time: '2024-02-09T12:00:00',
          story: 'Sample story',
          message: 'Sample message',
          shares: { count: 5 },
          reactions: {
            like: { summary: { total_count: 10 } },
            love: { summary: { total_count: 5 } },
            haha: { summary: { total_count: 2 } },
            wow: { summary: { total_count: 3 } },
            sad: { summary: { total_count: 1 } },
            angry: { summary: { total_count: 0 } }
          }
        }
      ]
    });
  });
});
