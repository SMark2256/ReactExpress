import React from 'react'
import Foods from './Books.js'

import {GiFullPizza, GiHamburger} from 'react-icons/gi'
import {TbGlassFull} from 'react-icons/tb'
import {RiCake3Fill} from 'react-icons/ri'
import pizzas from '../media/Pizza.svg'
import breads from '../media/Bread.svg'
import burgers from '../media/Burger.svg'
import juices from '../media/Juice.svg'
import sandwiches from '../media/Sandwich.svg'
import steaks from '../media/Steak.svg'
import donuts from '../media/Donut.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import './BooksList.css'
import './scrollbar.css' //valami nem oké


const BooksList = ({setFoodtype, foods}) => {
      

  return (
      <div className="container-fluid list">
            <div className="row listelements">
                  <div className="col-2 justify-content-center h-75">
                        <div className="col-6 mx-2 py-4 bg-light text-black menulist">
                              <h2 className="text-center">Menü</h2><br></br>
                              <p className="menubtn" onClick={() => setFoodtype('burgers')}><img src={burgers} alt="burgers" /> Hamburgerek</p>
                              <p className="menubtn" onClick={() => setFoodtype('pizzas')}><img src={pizzas} alt="pizza" />  Pizzák</p>
                              <p className="menubtn" onClick={() => setFoodtype('drinks')}><img src={juices} alt="juices" /> Üditőitalok</p>
                              <p className="menubtn" onClick={() => setFoodtype('breads')}><img src={breads} alt="breads" /> Kenyérfélék</p>
                              <p className="menubtn" onClick={() => setFoodtype('sandwiches')}><img src={sandwiches} alt="sandwiches" /> Szendvicsek</p>
                              <p className="menubtn" onClick={() => setFoodtype('porks')}><img src={steaks} alt="steaks" /> Sülthusok</p>
                              <p className="menubtn" onClick={() => setFoodtype('desserts')}><img src={donuts} alt="donuts" /> Desszertek</p>
                        </div>
                  </div>
                  <div className="col-10">
                        <ul className="row col-lg-10">
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