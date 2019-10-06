import getCityCodeByName from '../vocabulary/vocabulary';

export const favorites = (field = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return field.concat([getCityByName(action.cityName)]);
        case 'REMOVE_FAVORITE':
            return field.filter(city => city.name !== action.cityName);
      default:
        return field;
   }
};

const getCityByName = cityName => {
    var cityCode = getCityCodeByName(cityName);
    if (cityCode) {
        return {};
        /*axios.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=' + cityCode + '&appid=c21880c5125c247d642c0e4058a0a704')
            .then(({ data }) => {
                console.info(data);
                return preprocessData(data);
            }).catch(error => {
                this.setState({isCityValid: false});
            });*/
    } else {
        //this.setState({isCityValid: false});
    }
}

function preprocessData(data) {
    data.main.temp = (data.main.temp - 273.15).toFixed(1);
    data.main.pressureMmHg = (data.main.pressure * 0.75).toFixed(2);
    return data;
}

export default favorites;
