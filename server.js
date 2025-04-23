const express = require('express');
const Mercury = require('@postlight/mercury-parser');
const fetch = require('node-fetch');
const app = express();

app.get('/', (req, res) => {
  res.send('Mercury Parser is live!');
});

app.get('/parser', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'Missing ?url= parameter' });
  }

  try {
    const result = await Mercury.parse(url, { fetch, contentType: 'text/html' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/parser', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'Missing ?url= parameter' });
  }

  try {
    const result = await Mercury.parse(url, { fetch, contentType: 'text/html' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

