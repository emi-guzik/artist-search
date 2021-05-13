// Express server used to resolve CORS restrictions on deezer API.

const express = require('express');

const app = express();
const port = 4000;
const axios = require('axios');
var cors = require('cors');

app.use(cors());

app.get('/getArtists', (req, res) => {
  const API = `https://api.deezer.com/search/artist?q=${req.query.q}`;
  axios(API)
    .then((response) => {
      res.json(response.data);
      return response;
    })
    .catch((err) => {
      res.send('error fetching data');
    });
});

app.get('/artist/:artistId/albums', (req, res) => {
  const API = `https://api.deezer.com/artist/${req.params.artistId}/albums`;
  axios(API)
    .then((response) => {
      res.json(response.data);
      return response;
    })
    .catch((err) => {
      res.send('error fetching data');
    });
});

app.get('/album/:albumId', (req, res) => {
  const API = `https://api.deezer.com/album/${req.params.albumId}`;
  axios(API)
    .then((response) => {
      res.json(response.data);
      return response;
    })
    .catch((err) => {
      res.send('error fetching data');
    });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
