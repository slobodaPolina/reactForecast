import React from 'react';
import Image from './Image';

function SmallPreview(props) {
  return (
    <div class="row" style={{margin: "10px", height: "36px"}}>
        <div class="width45 row">
            <div class="cityTitle">{props.data.name}</div>
            <div class="cityTemp">{props.data.main.temp} °C</div>
            <div style={{ width: "36px" }}>
                <Image name={props.data.weather[0].main}/>
            </div>
        </div>
        <button class="roundButton removeButton">+</button>
    </div>
  );
}

export default SmallPreview;
