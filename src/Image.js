import React from 'react';

function Image(props) {
  return (
      <img src={"/images/" + props.name + ".jpg"} style={{width: "100%", height: "100%", 'object-fit': "fill"}}/>
  );
}

export default Image;
