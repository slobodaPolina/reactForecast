export const favourites = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return state.concat([action.city]);
        case 'REMOVE_FAVOURITE':
            return state.filter(city => city !== action.city);
      default:
        return state;
   }
};
export default favourites;
