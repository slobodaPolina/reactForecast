import React from 'react';

function MainPreview(props) {
  return (
      <div>
          <div class="mainTitle">{props.data.name}</div>
          <div>
              <img class="mainPreview" src="images/{props.data.weather[0].main}.jpg"/>
              <div class="mainTemp">{props.data.main.temp}</div>
          </div>
      </div>
  );
}

export default MainPreview;
