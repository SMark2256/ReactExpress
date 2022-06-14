import React from 'react'

import './Header.css'

const Header= ({setShow,show,addHandler,foods,setFoodtype,fetchMoviesHandler}) => {
  return (
    <div className="nav">
        <div className="blur">
          <div className="container">
            <h1>Our Foods</h1>
            <div className="d-flex col-12">
            <div className="d-block">
              <button className="btn-lg mx-2 btn-primary" onClick={fetchMoviesHandler}>Fetch Movies</button>
              <button className="btn-lg mx-2 btn-primary" onClick={() => setShow(!show)}>Show/Hide</button>
              <button className="btn-lg mx-2 btn-primary" onClick={() => addHandler(foods)}>Upload</button>
            </div>
            <div className="container col-2">
            <div className="row col-8">
              <button className="btn mx-2  btn-success" onClick={() => setFoodtype('desserts')}>Hamburger</button>
            </div>
            <div className="row col-8">
              <button className="btn mx-2  btn-success" onClick={() => setFoodtype('breads')}>Drinks</button>
            </div>  
              <button className="btn mx-2  btn-success" onClick={() => setFoodtype('porks')}>Pizza</button>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}


export default Header