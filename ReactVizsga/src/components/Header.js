import React from 'react'

import classes from './Header.module.css'

const Header= () => {
  return (
    <>
    <div className={classes.header}>
    <div className={classes.stars}></div>
    <div className={classes.stars2}></div>
    <div className={classes.stars3}></div>
    </div>
    <div className={classes.title}>
    <span>
        Our Foods
    </span>
    <br/>
    <span>
        Enjoy your meal
    </span>
    </div>  
    </>
  )
}


export default Header