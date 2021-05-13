const DefaultState = {
  loading: false,
  data: [],
  errorMsg: ''
};

const ArtistsReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'ARTISTS_LOADING': 
      return {
          ...state,
          loading: true,
      };
      case 'ARTISTS_SUCCESS': 
      return {
          ...state,
          loading: false,
          data: action.payload,
          errorMsg: '',
      };
      case 'ARTISTS_ERROR': 
      return {
          ...state,
          loading: false,
          errorMsg: "can't fetch artists",
      };
    default:
      return state;
  }
};

export default ArtistsReducer;