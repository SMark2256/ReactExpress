import React, {useState} from 'react'

//css
import 'bootstrap/dist/css/bootstrap.min.css'
import './Foods.css'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
//images
import carticon from '../images/media/cart.png'
import heartunfilled from '../images/media/heartunfilled.png'
import heartfilled from '../images/media/heartfilled.png'
import IMAGES from '../images/Images.js'

const Foods = (props) => {
      const [imgIcon, setimgIcon] = useState(heartunfilled)
      const [imgClass, setimgClass] = useState("")


      const iconChange = (imgTo) =>{
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
              <img src={props.img} onError={e => { e.currentTarget.src = IMAGES.logo; setimgClass("Food-logo") }} className={imgClass} height="150" width="150" alt=""/>
              <div><p className="rankingstaricon"><FontAwesomeIcon icon={faRankingStar} /> {props.rate}</p></div>
              </div>
              <div className="row justify-content-center">
              <h2>{props.name}</h2>
              <p className="pricetag">${props.price}</p>
              </div>
              <div className="iconbutton row justify-content-center"><h2>
                  <button className="heart mx-2"><img src={imgIcon} className="hearticon" alt="" onClick={() => iconChange(imgIcon)}/></button>
                  <button className="cart mx-2"><img src={carticon} className="carticon" alt="" onClick={() => intoCart(props.id, props.type)}/></button>
                  </h2>
              </div>
        </li>
        </div>
  )
}

export default Foods