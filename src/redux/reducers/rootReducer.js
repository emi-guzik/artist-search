import { combineReducers } from 'redux';
import AlbumsReducer from './albumsReducer';
import ArtistsReducer from './artistsReducer';
import AlbumDetailsReducer from './albumDetailsReducer';

const RootReducer = combineReducers({
  Artists: ArtistsReducer,
  Albums: AlbumsReducer,
  AlbumDetails: AlbumDetailsReducer,
});

export default RootReducer;
