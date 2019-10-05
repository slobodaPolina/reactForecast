export const geolocation = (state = {}, action) => {
    switch (action.type) {
      case 'SET_GEOLOCATION':
         return Object.assign({}, state, { geolocation: action.city });
      default:
        return state;
   }
};
export default geolocation;
