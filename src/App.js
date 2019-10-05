import React from 'react';
import MainPreview from './MainPreview';
import Forecast from './Forecast';
import SearchBar from './SearchBar';
import SmallPreview from './SmallPreview';

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
        <div className="favorites">
            <div className="smallCityCard">
                <SmallPreview data={props.data}/>
                <Forecast data={props.data}/>
            </div>
            <div className="smallCityCard">
                <SmallPreview data={props.data}/>
                <Forecast data={props.data}/>
            </div>
            <div className="smallCityCard">
                <SmallPreview data={props.data}/>
                <Forecast data={props.data}/>
            </div>
        </div>
    </div>
  );
}

export default App;
