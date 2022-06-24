import React from 'react'
//util
import addHandler from '../util/Postdata.js'
//icon
import { CgProfile } from 'react-icons/cg'
//css
import './Header.css'

const Header= ({foodtype, foods, setShow, show}) => {
  return (
    <div className="nav">
        <div className="blur">
          <div className="container-fluid col-12 row">
            <div className="col-4 gx-0 py-3">
              <button className="btn mx-5 btn-primary" onClick={() => setShow(!show)}>Főoldal</button>
              <button className="btn mx-2 btn-primary" onClick={() => setShow(!show)}>Rendelés</button>
              <button className="btn mx-2 btn-primary" onClick={() => setShow(!show)}>Bejelentkezés</button>
            </div>

            <div className="col-4 py-2 text-center">
              <h1>Our Foods</h1>
              {/* <button className="btn mx-2 btn-warning" onClick={() => addHandler(foods,foodtype)}>Kosár</button> */}
            </div>
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
            </div>
            
            </div> */}

            <div className="col-4 text-center py-3">
              <CgProfile size={40} role="button" className="mx-4 bg-dark text-white rounded-circle" onClick={() => console.log("profile page")}/>
            </div>
          </div>
        </div>
      </div>
  )
}


export default Header