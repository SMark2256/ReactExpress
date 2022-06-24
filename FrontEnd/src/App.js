import React, {useState,useEffect} from 'react'
//components
import BooksList from './components/BooksList'
import Footer from './components/Footer'
import Header from './components/Header'
//util
import fetchMoviesHandler from './util/Getdata.js'
//css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//images
import IMAGES from './images/Images.js'

function App() {
  const [foods, setFoods] = useState([])
  const [foodtype, setFoodtype] = useState('best-foods')
  const [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(true)
  

  useEffect(() => {
    fetchMoviesHandler(foodtype,setFoods,setLoading);
  }, [foodtype]);

  return (
    <React.Fragment>
      <Header foods={foods} setShow={setShow} show={show} fetchMoviesHandler={fetchMoviesHandler}/>
      <section className='foodtable'>
        {foodtype && show && !isLoading && foods.length > 0 && 
          <BooksList setFoodtype={setFoodtype} foods={foods}/>
        }
        {show && !isLoading && foods.length === 0 && 
          <p>Found no foods</p>
        }
        {isLoading && 
          <div className='loading py-5'>
            <h1>Loading...</h1>
            <img src={IMAGES.logo} className="App-logo" alt="logo" />  
          </div>
        }
      </section>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
