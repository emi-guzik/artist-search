export const GetArtists = (query) => async (dispatch) => {
  dispatch({
    type: 'ARTISTS_LOADING',
  });
  try {
    fetch(`http://localhost:4000/getArtists?q=${query}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: 'ARTISTS_SUCCESS',
          payload: data,
        })
      );
  } catch (e) {
    console.log(e);
    dispatch({
      type: 'ARTISTS_ERROR',
    });
  }
};

export const GetAlbumFromArtist = (artistId) => async (dispatch) => {
  dispatch({
    type: 'ALBUMS_LOADING',
  });
  try {
    fetch(`http://localhost:4000/artist/${artistId}/albums`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: 'ALBUMS_SUCCESS',
          payload: data,
        })
      );
  } catch (e) {
    console.log(e);
    dispatch({
      type: 'ALBUMS_ERROR',
    });
  }
};

export const GetAlbumDetails = (albumId) => async (dispatch) => {
  dispatch({
    type: 'ALBUM_DETAILS_LOADING',
  });
  try {
    fetch(`http://localhost:4000/album/${albumId}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: 'ALBUM_DETAILS_SUCCESS',
          payload: data,
        })
      );
  } catch (e) {
    console.log(e);
    dispatch({
      type: 'ALBUM_DETAILS_ERROR',
    });
  }
};
