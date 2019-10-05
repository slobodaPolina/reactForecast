import React from 'react';
import Image from './Image';

function MainPreview(props) {
  return (
      <div className="width45 column">
          <div className="mainTitle bigText">{props.data.name}</div>
          <div className="row">
              <Image name={props.data.weather[0].main}/>
              <div className="hugeText">{props.data.main.temp}°C</div>
          </div>
      </div>
  );
}

export default MainPreview;
