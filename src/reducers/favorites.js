import getCityCodeByName from '../vocabulary/vocabulary';

export const favorites = (field = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            if (field.find(city => city.name === action.cityName)) {
                return field;
            }
            let city = getCity(action.cityName, action.successCallback, action.failureCallback);
            return city ? field.concat([city]) : field;
        case 'REMOVE_FAVORITE':
            return field.filter(city => city.name !== action.cityName);
      default:
        return field;
   }
};

function getCity(cityName, successCallback, failureCallback) {
    function preprocessData(data) {
        data.main.temp = (data.main.temp - 273.15).toFixed(1);
        data.main.pressureMmHg = (data.main.pressure * 0.75).toFixed(2);
        return data;
    }

    var cityCode = getCityCodeByName(cityName);
    if (cityCode) {
        var city = {"coord":{"lon":145.77,"lat":-16.92},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":300.15,"pressure":1007,"humidity":74,"temp_min":300.15,"temp_max":300.15},"visibility":10000,"wind":{"speed":3.6,"deg":160},"clouds":{"all":40},"dt":1485790200,"sys":{"type":1,"id":8166,"message":0.2064,"country":"AU","sunrise":1485720272,"sunset":1485766550},"id":2172797,"name":"Cairns","cod":200};
        return preprocessData(city);
        /*axios.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=' + cityCode + '&appid=c21880c5125c247d642c0e4058a0a704')
            .then(({ data }) => {
                console.info(data);
                return preprocessData(data);
            }).catch(error => {
                failureCallback();
            });*/
    } else {
        failureCallback();
    }
}

export default favorites;
