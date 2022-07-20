// React
import React from 'react';


function CardKeyData( props ) {

    return (
        <div className="cards-keydata">
          <img
            src={props.iconSrc}
            alt={props.iconAlt}
            className={`${props.iconAlt}`}
          />
          <div>
            <strong>{props.compoValue}</strong>
            <br />
            <span>{props.compoType}</span>
          </div>
        </div>
      );
  }
  
  export default CardKeyData;