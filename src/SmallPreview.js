import React from 'react';

function SmallPreview(props) {
  return (
    <div>
        <div class="cityTitle">{props.data.name}</div>
        <div class="cityTemp">{props.data.main.temp}</div>
        <img class="cityPreview" src="images/{props.data.weather[0].main}.jpg"/>
        <div class="cityRemove">{props.data.main.temp}+</div>
    </div>
  );
}

export default SmallPreview;
