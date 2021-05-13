const DefaultState = {
    loading: false,
    data: [],
    errorMsg: '',
  };
  
  const AlbumsReducer = (state = DefaultState, action) => {
    switch (action.type) {
      case 'ALBUMS_LOADING':
        return {
          ...state,
          loading: true,
        };
      case 'ALBUMS_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload.data,
          errorMsg: '',
        };
      case 'ALBUMS_ERROR':
        return {
          ...state,
          loading: false,
          errorMsg: "can't fetch albums",
        };
      default:
        return state;
    }
  };
  
  export default AlbumsReducer;