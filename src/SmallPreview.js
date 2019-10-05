import React from 'react';
import Image from './Image';

function SmallPreview(props) {
  return (
    <div className="row SmallPreviewContainer">
        <div className="width45 row">
            <div className="cityTitle">{props.data.name}</div>
            <div className="cityTemp">{props.data.main.temp} °C</div>
            <div className="width36px">
                <Image name={props.data.weather[0].main}/>
            </div>
        </div>
        <button className="roundButton removeButton">+</button>
    </div>
  );
}

export default SmallPreview;
