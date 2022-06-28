import React, { useState, useEffect } from 'react'
//import { Route, BrowserRouter as Router } from 'react-router-dom'
//components
import FoodsList from './components/Foodslist'
import Footer from './components/Footer'
import Header from './components/Header'
import ModalBox from './ui/modal'
//util
import fetchMoviesHandler from './util/Getdata.js'
//css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [foods, setFoods] = useState([])
  const [foodtype, setFoodtype] = useState('burgers')
  const [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(true)
  const [inCart, setinCart] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    fetchMoviesHandler(foodtype,setFoods,setLoading);
  }, [foodtype]);

  return (
    <React.Fragment>
      <Header open={() => setOpenModal(true)}  inCart={inCart} foods={foods} foodtype={foodtype} setShow={setShow} show={show} fetchMoviesHandler={fetchMoviesHandler}/>
      <ModalBox open={openModal} onClose={() => setOpenModal(false)} inCart={inCart} setinCart={setinCart}/>
    <section className= {openModal === false ? 'foodtable' : 'foodtable foodtableBlur'}>
        {show && foods.length > 0 && 
          <FoodsList inCart={inCart} setinCart={setinCart} isLoading={isLoading} setFoodtype={setFoodtype} foods={foods}/>
        }
        {show && !isLoading && foods.length === 0 && 
          <p className='text-center text-bold'>Found no foods</p>
        }
      </section>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
