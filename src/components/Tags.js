import React from 'react';
import '../css/Tags.css';


function Tags(props) {
  return (
    <div className='Tags'>
      {
        Object.keys(props).map( function(key, i) {
          let tag = 'tag '  + key;
          
          return (
            <p key={i} className={tag}>{props[key]}</p>
          );
        })
      }
    </div>
  );
}

export default Tags;