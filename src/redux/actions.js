export const GetArtists = (query) => async (dispatch) => {
  try {
    dispatch({
      type: 'ARTISTS_LOADING',
    });
    const express = require('express');
    const app = express();
    const port = 3000;
    const axios = require('axios');

    app.get('/getArtists', (req, res) => {
      const API = `https://api.deezer.com/search?q=artist:'${query}'`;
      axios(API)
        .then((response) => {
          console.log(response.data);
          res.json(response.data);
          dispatch({
            type: 'ARTISTS_SUCCESS',
            payload: response.data,
          });
        })
        .catch((err) => {
          res.send('errr!!!');
        });
    });
    
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  } catch (e) {
    dispatch({
      type: 'ARTISTS_ERROR',
    });
  }
};
