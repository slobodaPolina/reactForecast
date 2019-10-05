import React from 'react';
import MainPreview from './MainPreview';
import Forecast from './Forecast';
import SearchBar from './SearchBar';
import Favorites from './Favorites';

function App(props) {
  return (
    <div className="fixed-margin-children">
        <div className="header">
            <div className="bigText flex1">Погода здесь</div>
            <button className="georefRefresh">Обновить геолокацию</button>
            <div className="flex1"></div>
        </div>
        <div className="row main">
            <MainPreview data={props.data}/>
            <div className="width45">
                <Forecast data={props.data}/>
            </div>
        </div>
        <SearchBar />
        <Favorites />
    </div>
  );
}

export default App;
