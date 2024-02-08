# Sentiment Detector

Sentiment Detector is an application designed to analyze the sentiment of user posts collected via the Facebook Graph API and provide feedback based on the reactions to those posts. 
It utilizes Google Gemini API to prompt the Google AI to assess the feelings evoked by each post's message and generate a general synthesis of the user's emotions.

## Installation

1. Ensure you have Node.js installed on your system. Sentiment Detector requires Node.js version greater than 16.x.x. Versions 16 or lower are not compatible.

2. Clone this repository to your local machine.
 ```bash
 git clone https://github.com/SentimentDetector/backend-sentinent.git
 ```
   
3. Navigate to the project directory.
```bash
cd backend-sentinent/
```
    
4. Create a `.env` file in the project root.

5. Inside the `.env` file, add your Gemini API key as `API_KEY=` and add the port you want to use as `PORT=`
```plaintext
API_KEY=YOUR_GEMINI_API_KEY
PORT=YOUR_PORT
```
6. Install dependencies
 ```bash
 npm install
 ```

## Usage

1. Once installation is complere, start the server by running
```bash
npm start
```

2. Make a call to the **/feed-back** endpoint with the following query parameters:
- **'userId'**: The user's Facebook ID
- **'accessToken'**: The access token to use the Facebook Graph API
- **'limit'**: The number of posts to be considered

Example:
```bash
GET /feed-back?userId=USER_ID&accessToken=ACCESS_TOKEN&limit=10
```

Receive feedback based on the reactions to each post and the sentiment analysis provided by Google AI.

## Code Quality

This project follows strict coding standards to ensure consistency and maintainability. We use ESLint, a JavaScript linter, to analyze our code for potential errors, stylistic inconsistencies, and code smells. ESLint helps us maintain a high level of code quality by enforcing best practices and coding standards.

To maintain consistent code quality, we recommend running ESLint before committing your changes to the repository. You can find our ESLint configuration in the `.eslintrc.js` file.
