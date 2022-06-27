import React, {useState} from 'react'
//icons
import { BsFillCartCheckFill } from 'react-icons/bs'

import ModalBox from '../ui/modal.js'

const Cart = (inCart) =>{
    
  const [modalShow, setModalShow] = useState(false);
  console.log(inCart)


    return (
        <>
        <BsFillCartCheckFill size={40} role="button" className="mx-4 text-white" onClick={() => setModalShow(true)}/>
        { modalShow && <ModalBox inCart={inCart}/> }
        </>
        
    )
}



export default Cart