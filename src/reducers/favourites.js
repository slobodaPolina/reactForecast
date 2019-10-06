export const favourites = (field = [], action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return field.concat([action.cityName]);
        case 'REMOVE_FAVOURITE':
            return field.filter(city => city !== action.cityName);
      default:
        return field;
   }
};
export default favourites;
