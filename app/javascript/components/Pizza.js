import React from 'react';

function Pizza(props) {
  return (
  <div>
      {props.data.image_url}
      Name: {props.data.name}
      Price: {props.data.price}
      Description: {props.data.description}
  </div>
  );
}

export default Pizza;
