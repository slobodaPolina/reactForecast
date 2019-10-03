import React from 'react';

function Forecast(props) {
  return (
    <div class="forecastContainer column">
        <div class="forecastRow row">
            <div class="paramTitle">Ветер</div>
            <div class="paramValue">{props.data.wind.speed} meter/sec</div>
        </div>
        <div class="forecastRow row">
            <div class="paramTitle">Облачность</div>
            <div class="paramValue">{props.data.weather[0].description}</div>
        </div>
        <div class="forecastRow row">
            <div class="paramTitle">Давление</div>
            <div class="paramValue">{props.data.main.pressureMmHg} mm Hg</div>
        </div>
        <div class="forecastRow row">
            <div class="paramTitle">Влажность</div>
            <div class="paramValue">{props.data.main.humidity}%</div>
        </div>
        <div class="forecastRow row">
            <div class="paramTitle">Координаты</div>
            <div class="paramValue">[{props.data.coord.lon}, {props.data.coord.lat}]</div>
        </div>
    </div>
  );
}

export default Forecast;
