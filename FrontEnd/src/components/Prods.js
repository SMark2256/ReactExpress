import React from 'react'
//css
import './Foods.css'

const Prods = ({name, type, price}) => {
  return (
      <>
            <li className='col-4 border border-4'>
                 {name}
            </li>
            <li className='col-4 border border-4'>
                  {type}
            </li>
            <li className='col-4 border border-4'>
                  ${price}
            </li>
      </>
  )
}

export default Prods