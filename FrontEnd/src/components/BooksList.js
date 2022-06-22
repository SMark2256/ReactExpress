import React from 'react'
import Foods from './Books.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './BooksList.css'
import './scrollbar.css' //valami nem oké

import IMAGES from '../images/Images.js'

const BooksList = ({setFoodtype, foods}) => {
      

  return (
      <div className="container-fluid list">
            <div className="row listelements">
                  <div className="col-2 justify-content-center h-75">
                        <div className="col-6 py-4 bg-light text-black menulist">
                              <h2 className="text-center">Menü</h2><br></br>
                              <p className="menubtn" onClick={() => setFoodtype('burgers')}><img src={IMAGES.burgers} alt="burgers" /> Hamburgerek</p>
                              <p className="menubtn" onClick={() => setFoodtype('pizzas')}><img src={IMAGES.pizzas} alt="pizza" />  Pizzák</p>
                              <p className="menubtn" onClick={() => setFoodtype('drinks')}><img src={IMAGES.juices} alt="juices" /> Üditőitalok</p>
                              <p className="menubtn" onClick={() => setFoodtype('breads')}><img src={IMAGES.breads} alt="breads" /> Kenyérfélék</p>
                              <p className="menubtn" onClick={() => setFoodtype('sandwiches')}><img src={IMAGES.sandwiches} alt="sandwiches" /> Szendvicsek</p>
                              <p className="menubtn" onClick={() => setFoodtype('porks')}><img src={IMAGES.steaks} alt="steaks" /> Sülthusok</p>
                              <p className="menubtn" onClick={() => setFoodtype('desserts')}><img src={IMAGES.donuts} alt="donuts" /> Desszertek</p>
                        </div>
                  </div>
                  <div className="col-10">
                        <ul className="row col-lg-10">
                              {foods.map((foods) => (
                                    <Foods
                                          id={foods.id}
                                          type={foods.type}
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