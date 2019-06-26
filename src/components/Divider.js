import React from 'react';
import '../css/Divider.css';


function Divider(props) {
  let temp = 'section-break-5 ' + props.detail;

  return (
    <hr className={temp} />
  );
}

export default Divider;