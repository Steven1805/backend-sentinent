const { GoogleGenerativeAI } = require('@google/generative-ai')

require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.API_KEY)

async function generateEmotionsSummary (posts) {
  const simplifiedData = posts.map(post => ({ id: post.id, message: post.message }))

  const jsonString = JSON.stringify(simplifiedData, null, 2)

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  const prompt = `I have an array of posts, each represented as an object with properties "id" and "message". For each object in the array, 
                    I want you to extract the emotion evoked by each post "message". Here is the input data:
                    \n${jsonString}
                    \nI want you to give me the general emotion (like a little summary but don't repeat any post message) of the person based on all the emotions through his posts. 
                    Make the output like you talk to the person who made the posts.`

  const result = await model.generateContent(prompt)
  const response = await result.response

  const output = response.text()

  return { output }
}

module.exports = generateEmotionsSummary
