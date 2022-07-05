import React, { useState, useEffect } from 'react'
//components
import FoodsList from './components/Foodslist'
import Footer from './components/Footer'
import Header from './components/Header'
import Cart from './components/Cart'
//util
import fetchMoviesHandler from './util/Getdata.js'
//css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  const [foods, setFoods] = useState([])
  const [foodtype, setFoodtype] = useState('best-foods')
  const [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(true)
  const [inCart, setinCart] = useState([])

  useEffect(() => {
    fetchMoviesHandler(foodtype,setFoods,setLoading);
  }, [foodtype]);

  return (
    <>
      <Header inCart={inCart} foods={foods} foodtype={foodtype} setShow={setShow} show={show} fetchMoviesHandler={fetchMoviesHandler}/>
      <Cart foods={foods}/>
      <section className='foodtable'>
        {show && foods.length > 0 && <FoodsList inCart={inCart} setinCart={setinCart} isLoading={isLoading} setFoodtype={setFoodtype} foods={foods}/>}
        {show && !isLoading && foods.length === 0 && <p className='text-center text-bold'>Found no foods</p>}
      </section>
      <Footer/>
    </>
  );
}

export default App;
