import React from 'react'
import Foods from './Books.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './BooksList.css'


const BooksList = (props) => {
      

  return (
      <div class="container">
      <div class="row">
        <div class="col-2">
              menü
        </div>
        <div class="col-10">
            <ul className="row col-lg-12">
                  {props.foods.map((foods) => (
                        <Foods
                              key={foods.id}
                              name={foods.name}
                              img={foods.img}
                              price={foods.price}
                              rate={foods.rate}
                        />
                  ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default BooksList