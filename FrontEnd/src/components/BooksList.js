import React from 'react'
import Foods from './Books.js'

import {GiFullPizza, GiHamburger} from 'react-icons/gi'
import {TbGlassFull} from 'react-icons/tb'
import {RiCake3Fill} from 'react-icons/ri'

import 'bootstrap/dist/css/bootstrap.min.css'
import './BooksList.css'
import './scrollbar.css' //valami nem oké


const BooksList = ({setFoodtype, foods}) => {
      

  return (
      <div className="container-fluid justify-content-center list">
            <div className="row listelements">
                  <div className="col-4 justify-content-center h-75">
                        <div className="col-8 mx-5 py-4 bg-light text-black menulist">
                              <h2 className="text-center">Menü</h2><br></br>
                              <button className="btn" onClick={() => setFoodtype('burgers')}><GiHamburger size={30}/> Hamburgerek</button>
                              <button className="btn" onClick={() => setFoodtype('pizzas')}><GiFullPizza size={30}/> Pizzák</button>
                              <button className="btn" onClick={() => setFoodtype('drinks')}><TbGlassFull size={30}/> Üditőitalok</button>
                              <button className="btn" onClick={() => setFoodtype('desserts')}><RiCake3Fill size={30}/> Desszertek</button>
                        </div>
                  </div>
                  <div className="col-8">
                        <ul className="row col-lg-12">
                              {foods.map((foods) => (
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