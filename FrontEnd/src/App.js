import React, { useState, useEffect } from 'react'
//components
import FoodsList from './components/Foodslist'
import Footer from './components/Footer'
import Header from './components/Header'
<<<<<<< HEAD
import Cart from './components/Cart'
=======
import ModalBox from './ui/modal'
>>>>>>> 7a9d44cf2f3d22c1e75dc5deaa2c8601c32822fe
//util
import fetchMoviesHandler from './util/Getdata.js'
//css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
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
<<<<<<< HEAD
    <>
      <Header inCart={inCart} foods={foods} foodtype={foodtype} setShow={setShow} show={show} fetchMoviesHandler={fetchMoviesHandler}/>
      <Cart foods={foods}/>
      <section className='foodtable'>
        {show && foods.length > 0 && <FoodsList inCart={inCart} setinCart={setinCart} isLoading={isLoading} setFoodtype={setFoodtype} foods={foods}/>}
        {show && !isLoading && foods.length === 0 && <p className='text-center text-bold'>Found no foods</p>}
=======
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
>>>>>>> 7a9d44cf2f3d22c1e75dc5deaa2c8601c32822fe
      </section>
      <Footer/>
    </>
  );
}

export default App;
