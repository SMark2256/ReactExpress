import React from 'react'
//component
import Foods from './Foods.js'
//css
import './Foodslist.css'
//images
import IMAGES from '../images/Images.js'

const FoodsList = ({setFoodtype, foods, isLoading, setinCart}) => {
      

  return (
      <div className="container-fluid list">
            <div className="row listelements gx-5">
                  <div className="col-2 h-75">
                        <div className="col-6 py-4 mx-5 bg-light text-black menulist">
                              <h2 className="text-center">MENU</h2>
                              <p className="menubtn" onClick={() => setFoodtype('burgers')}><img src={IMAGES.burgers} alt="burgers" /> Hamburgerek</p>
                              <p className="menubtn" onClick={() => setFoodtype('pizzas')}><img src={IMAGES.pizzas} alt="pizza" />  Pizzák</p>
                              <p className="menubtn" onClick={() => setFoodtype('drinks')}><img src={IMAGES.juices} alt="juices" /> Üditőitalok</p>
                              <p className="menubtn" onClick={() => setFoodtype('breads')}><img src={IMAGES.breads} alt="breads" /> Kenyérfélék</p>
                              <p className="menubtn" onClick={() => setFoodtype('sandwiches')}><img src={IMAGES.sandwiches} alt="sandwiches" /> Szendvicsek</p>
                              <p className="menubtn" onClick={() => setFoodtype('porks')}><img src={IMAGES.steaks} alt="steaks" /> Sülthusok</p>
                              <p className="menubtn" onClick={() => setFoodtype('desserts')}><img src={IMAGES.donuts} alt="donuts" /> Desszertek</p>
                        </div>
                  </div>
                  <div className="col-10 foodslist">
                  {isLoading ? 
                  
                        <div className='container col-10 justify-content-center loading py-5'>
                              <div className='row col-8 justify-content-center'>
                              <img src={IMAGES.logo} className="App-logo col-2" alt="logo" /> 
                              </div>
                              <div className='row py-5 col-8 font-weight-bold'>
                              <h1>Loading...</h1> 
                              </div>
                        </div>
                        
                        :
        
                        <ul className="row col-lg-11 mx-5">
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
                  }
                  </div>
            </div>
      </div>
  )
}

export default FoodsList