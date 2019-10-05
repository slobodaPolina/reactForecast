import { combineReducers } from 'redux';
import favourites from './favourites';
import geolocation from './geolocation';

export default combineReducers({
    favourites,
    geolocation,
    cityName: (state = {}) => state
});
