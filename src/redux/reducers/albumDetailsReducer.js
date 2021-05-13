const DefaultState = {
  loading: false,
  data: {},
  errorMsg: '',
};

const AlbumDetailsReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'ALBUM_DETAILS_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'ALBUM_DETAILS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };
    case 'ALBUM_DETAILS_ERROR':
      return {
        ...state,
        loading: false,
        errorMsg: "can't fetch album details",
      };
    default:
      return state;
  }
};

export default AlbumDetailsReducer;
