import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function preprocessData(data) {
    data.main.temp = (data.main.temp - 273.15).toFixed(1);
    data.main.pressureAtm = (data.main.pressure * 0.001).toFixed(2);
    data.main.pressureMmHg = (data.main.pressure * 0.75).toFixed(2);
    return data;
}

var city = {"coord":{"lon":145.77,"lat":-16.92},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":300.15,"pressure":1007,"humidity":74,"temp_min":300.15,"temp_max":300.15},"visibility":10000,"wind":{"speed":3.6,"deg":160},"clouds":{"all":40},"dt":1485790200,"sys":{"type":1,"id":8166,"message":0.2064,"country":"AU","sunrise":1485720272,"sunset":1485766550},"id":2172797,"name":"Cairns","cod":200};


ReactDOM.render(<App data={preprocessData(city)}/>, document.getElementById('root'));
