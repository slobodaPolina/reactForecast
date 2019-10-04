import React from 'react';
import Image from './Image';

function MainPreview(props) {
  return (
      <div class="width45 column">
          <div class="mainTitle bigText">{props.data.name}</div>
          <div class="row">
              <Image name={props.data.weather[0].main}/>
              <div class="hugeText">{props.data.main.temp}°C</div>
          </div>
      </div>
  );
}

export default MainPreview;
