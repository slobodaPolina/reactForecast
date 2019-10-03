import React from 'react';
import MainPreview from './MainPreview';
import Forecast from './Forecast';
import SearchBar from './SearchBar';
import SmallPreview from './SmallPreview';

var city = {"coord":{"lon":145.77,"lat":-16.92},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":300.15,"pressure":1007,"humidity":74,"temp_min":300.15,"temp_max":300.15},"visibility":10000,"wind":{"speed":3.6,"deg":160},"clouds":{"all":40},"dt":1485790200,"sys":{"type":1,"id":8166,"message":0.2064,"country":"AU","sunrise":1485720272,"sunset":1485766550},"id":2172797,"name":"Cairns","cod":200};
function App() {
  return (
    <div className="App">
        <div>Погода здесь</div>
        <button>Обновить геолокацию</button>
        <MainPreview data={city}/>
        <Forecast data={city}/>
        <div>Избранное</div>
        <SearchBar />
        <div>
            <SmallPreview data={city}/>
            <Forecast data={city}/>
        </div>
    </div>
  );
}

export default App;
