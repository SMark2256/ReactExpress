import React from 'react'
import logo from '../logo.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeartCircleCheck,faRankingStar } from '@fortawesome/free-solid-svg-icons'
import './Books.css'

const Foods = (props) => {
  return (
        <div className="col-2 card mx-2">
        <li className="col-12 container ">
              <div className="rankingstar justify-content-center">
              <img src={props.img} onError={e => { e.currentTarget.src = logo; e.currentTarget.className = "Food-logo" }} height="150" width="150"/>
              <div><p className="rankingstaricon"><FontAwesomeIcon icon={faRankingStar} /> {props.rate}</p></div>
              </div>
              <div className="row justify-content-center">
              <h2>{props.name}</h2>
              <p className="pricetag">${props.price}</p>
              </div>
              <div className="iconbutton row justify-content-center"><h2>
                  <button className="heart mx-2"><FontAwesomeIcon className="hearticon" icon={faHeartCircleCheck} /></button>
                  <button className="cart mx-2"><FontAwesomeIcon className="carticon" icon={faCartShopping} /></button>
                  </h2>
              </div>
        </li>
        </div>
  )
}

export default Foods