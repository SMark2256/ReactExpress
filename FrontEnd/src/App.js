import React, {useState,useEffect,useCallback} from 'react'
import BooksList from './components/BooksList'
import Footer from './components/Footer'
import Header from './components/Header'

//import { collection, getDocs } from 'firebase/firestore'
import db from './util/firebase.js'
import { ref, onValue, onChildRemoved} from "firebase/database"

import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const axios = require('axios')


function App() {
  const [foods, setFoods] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(true)
  const [foodtype, setFoodtype] = useState('best-foods')


  //https://www.youtube.com/watch?v=jcnBoWRGw4o&ab_channel=MartinDichtler
  //https://firebase.google.com/docs/web/setup

  //https://firebase.google.com/docs/database/web/read-and-write  -- adatkezelés

  const fetchMoviesHandler = useCallback( async (foodtype) => {
    setLoading(true);
    try {
       

      // const response = await axios.get( `https://ig-food-menus.herokuapp.com/best-foods` );
      // const data = await response.data;
      // console.log(data);
     
      // const foodselements = [];
      // for (const key in data) {
      //   foodselements.push({
      //         id: data[key].id,
      //         name: data[key].name,
      //         img: data[key].img,
      //         price: data[key].price,
      //         rate: data[key].rate,
      //     });
      // }
      // setFoods(foodselements);
      // console.log(foodselements);





        const starCountRef = ref(db, `/foods/${foodtype}`)
        onValue(starCountRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
          const response = childSnapshot.val()

          const data = response
            console.log(data)
          const foodselements = [];
  
        for (const key in data) {
          foodselements.push({
              key: key,
              id: data[key].id,
              name: data[key].name,
              type: foodtype,
              img: data[key].img,
              price: data[key].price,
              rate: data[key].rate
            });
        }
        //console.log(foodselements)
        setFoods(foodselements);
          })
          
        })










       
        

    }catch (e){
        console.log(e);
    }
    setLoading(false);
  }, [])
  
  
  async  function addHandler(foods) {
  
    const response = await fetch(`https://reactvizsga-default-rtdb.europe-west1.firebasedatabase.app/foods/${foodtype}.json`, {
        method: 'POST',
        body: JSON.stringify(foods),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = response.json();
    console.log(data);
  
  }
  
  
  
  useEffect(() => {
    fetchMoviesHandler(foodtype);
  }, [foodtype]);
  

  return (
    <React.Fragment>
      <Header foods={foods} setShow={setShow} show={show} addHandler={addHandler} fetchMoviesHandler={fetchMoviesHandler}/>
      <section className='foodtable'>
        {foodtype && show && !isLoading && foods.length > 0 && <BooksList setFoodtype={setFoodtype} foods={foods}/>}
        {show && !isLoading && foods.length === 0 && <p>Found no foods</p>}
        {isLoading && 
            <div className='loading py-5'>
            <h1>Loading...</h1>
            <img src={logo} className="App-logo" alt="logo" />  
          </div>}
      </section>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
