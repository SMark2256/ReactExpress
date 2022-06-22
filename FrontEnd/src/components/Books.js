import React, {useState} from 'react'


import 'bootstrap/dist/css/bootstrap.min.css'
import './Books.css'


import logo from '../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import carticon from '../media/cart.png'
import heartunfilled from '../media/heartunfilled.png'
import heartfilled from '../media/heartfilled.png'



const Foods = (props) => {
      const [imgIcon, setimgIcon] = useState(heartunfilled)

      const imgChange = (imgTo) =>{
            imgTo === heartunfilled ? setimgIcon(heartfilled) : setimgIcon(heartunfilled)
      }


      const intoCart = (foodName, foodType) =>{
            console.log(foodName)
            console.log(foodType)
      }

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
                  <button className="heart mx-2"><img src={imgIcon} className="hearticon" onClick={() => imgChange(imgIcon)}/></button>
                  <button className="cart mx-2"><img src={carticon} className="carticon" onClick={() => intoCart(props.id, props.type)}/></button>
                  </h2>
              </div>
        </li>
        </div>
  )
}

export default Foods