import React from 'react';

function Image(props) {
  return (
      <img className="weatherImage" src={"/images/" + props.name + ".jpg"} alt="Weather" />
  );
}

export default Image;
