import React from 'react';

function SmallPreview(props) {
  return (
    <div class="SmallPreviewContainer row">
        <div class="smallCityInfo row">
            <div class="cityTitle">{props.data.name}</div>
            <div class="cityTemp">{props.data.main.temp} °C</div>
            <img class="cityPreview" src="images/{props.data.weather[0].main}.jpg"/>
        </div>
        <button class="roundButton removeButton">+</button>
    </div>
  );
}

export default SmallPreview;
