import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeartCircleCheck,faRankingStar } from '@fortawesome/free-solid-svg-icons'
import './Books.css'

const Foods = (props) => {
  return (
        <div className="col-2 card mx-1">
        <li className="col-12 container">
              <div className="rankingstar row">
              <img src={props.img} height="120" width="120"/>
              <div><p className="rankingstaricon"><FontAwesomeIcon icon={faRankingStar} /> {props.rate}</p></div>
              </div>
              <div className="row text-center">
              <h2>{props.name}</h2>
              <p className="pricetag">${props.price}</p>
              </div>
              <div className="iconbutton row"><h2>
                  <button className="heart"><FontAwesomeIcon className="hearticon" icon={faHeartCircleCheck} /></button>
                  <button className="cart"><FontAwesomeIcon className="carticon" icon={faCartShopping} /></button>
                  </h2>
              </div>
        </li>
        </div>
  )
}

export default Foods