import React from 'react'

import './Header.css'

const Header= ({setShow, show}) => {
  return (
    <div className="nav">
        <div className="blur">
          <div className="container-fluid">
            <div className="row d-flex col-12">
            <div className="col-12 py-3">
              <button className="btn mx-2 btn-primary" onClick={() => setShow(!show)}>Bejelentkezés</button>
            </div>
            <h1 className="col-12 py-1 mx-5 text-center">Our Foods</h1>
            {/* <div className="d-block">
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
            </div> */}
            
            </div>
          </div>
        </div>
      </div>
  )
}


export default Header