import React, {useState, useEffect} from 'react'
//components
import BooksList from './components/BooksList'
import Footer from './components/Footer'
import Header from './components/Header'
//util
import fetchMoviesHandler from './util/Getdata.js'
//css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [foods, setFoods] = useState([])
  const [foodtype, setFoodtype] = useState('best-foods')
  const [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(true)
  

  useEffect(() => {
    fetchMoviesHandler(foodtype,setFoods,setLoading);
  }, [foodtype]);

  console.log("LOADING?"+isLoading)
  return (
    <React.Fragment>
      <Header foods={foods} foodtype={foodtype} setShow={setShow} show={show} fetchMoviesHandler={fetchMoviesHandler}/>
      <section className='foodtable'>
        {show && foods.length > 0 && 
          <BooksList isLoading={isLoading} setFoodtype={setFoodtype} foods={foods}/>
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
