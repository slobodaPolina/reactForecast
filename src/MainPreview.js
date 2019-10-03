import React from 'react';

function MainPreview(props) {
  return (
      <div class="width45 column">
          <div class="mainTitle bigText">{props.data.name}</div>
          <div class="row">
              <img class="mainPreview" src="images/{props.data.weather[0].main}.jpg"/>
              <div class="hugeText">{props.data.main.temp} °C</div>
          </div>
      </div>
  );
}

export default MainPreview;
