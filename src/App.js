import React from 'react';
import MainPreview from './MainPreview';
import Forecast from './Forecast';
import SearchBar from './SearchBar';
import SmallPreview from './SmallPreview';

function App(props) {
  return (
    <div class="fixed-margin-children">
        <div class="header">
            <div class="bigText flex1">Погода здесь</div>
            <button class="georefRefresh">Обновить геолокацию</button>
            <div class="flex1"></div>
        </div>
        <div class="row main">
            <MainPreview data={props.data}/>
            <div class="width45">
                <Forecast data={props.data}/>
            </div>
        </div>
        <SearchBar />
        <div class="favorites">
            <div class="smallCityCard">
                <SmallPreview data={props.data}/>
                <Forecast data={props.data}/>
            </div>
            <div class="smallCityCard">
                <SmallPreview data={props.data}/>
                <Forecast data={props.data}/>
            </div>
            <div class="smallCityCard">
                <SmallPreview data={props.data}/>
                <Forecast data={props.data}/>
            </div>
        </div>
    </div>
  );
}

export default App;
