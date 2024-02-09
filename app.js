import express from 'express';
import cors from 'cors';
import analyzeSentiment from './modules/analyze-sentiment.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const port = process.env.PORT;

// Utiliser le middleware cors
app.use(cors());

app.get('/feed-back', async (req, res) => {
  try {
    const {userId, accessToken, limit} = req.query;
    if (!userId || !accessToken || !limit) {
      return res.status(400).json({
        error: 'One or more required parameters have not been provided.',
      });
    }
    const result = await analyzeSentiment(userId, accessToken, limit);

    // Configurer les en-têtes CORS dans la réponse
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Une erreur interne s\'est produite.'});
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
