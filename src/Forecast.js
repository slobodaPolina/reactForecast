import React from 'react';

function Forecast(props) {
  return (
    <div>
        <div>
            <div class="paramTitle">Ветер</div>
            <div class="paramValue">{props.data.wind.speed}</div>
        </div>
        <div>
            <div class="paramTitle">Облачность</div>
            <div class="paramValue">{props.data.weather[0].description}</div>
        </div>
        <div>
            <div class="paramTitle">Давление</div>
            <div class="paramValue">{props.data.pressureMmHg}</div>
        </div>
        <div>
            <div class="paramTitle">Влажность</div>
            <div class="paramValue">{props.data.humidity}</div>
        </div>
        <div>
            <div class="paramTitle">Координаты</div>
            <div class="paramValue">[ {props.data.coord.lon}, {props.data.coord.lat}]</div>
        </div>
    </div>
  );
}

export default Forecast;
