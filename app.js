const express = require('express');
const app = express();
const port = 3000;
const analyzeSentiment = require('./modules/analyze-sentiment')
require('dotenv').config();

app.get('/feed-back', async (req, res) => {
  try {
    const { userId, accessToken, limit } = req.query;
    if (!userId || !accessToken || !limit) {
      return res.status(400).json({ error: 'Tous les paramètres nécessaires ne sont pas fournis.' });
    }
    const result = await analyzeSentiment(userId, accessToken, limit);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur interne s\'est produite.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
