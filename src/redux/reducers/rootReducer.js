import { combineReducers } from 'redux';
import ArtistsReducer from './artistsReducer';

const RootReducer = combineReducers({
    Artists: ArtistsReducer
});

export default RootReducer;
