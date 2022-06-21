import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start fixed-bottom">
    <div className='menu'>
        <div className="container py-2 col-lg-12">
            <div className="row justify-content-center">
          

          <div className="col-lg-5 col-md-12 mx-4">
            <h5 className="text-uppercase">ELÉRHETŐSÉGEINK</h5>
    
            <p>
                2060 Bicske, Szent Béla út 22.<br/>
                Tel: (22) 261 ***, (22) 565 ***
            </p>

            <h5 className="text-uppercase">NYITVATARTÁS</h5>
    
            <p>
                Hétfő - vasárnap 11:00-22:00
            </p>
            </div>

            <div className="col-lg-3 col-md-12 ">
            <h5 className="text-uppercase">ÉTELRENDELÉS</h5>
    
            <p>
                Hívja minden nap a <strong>(22) 565 ***</strong> számot és Bicske belterületén ingyenesen házhoz visszük rendelését!
                Vidéki rendelés esetén kiszállítási díjat számítunk fel.
                Ételhordós menükiszállításról érdeklődjön Tolnai Csillánál a <strong>(30) 274 ***</strong> számon.
            </p>
            </div>
        </div>
        </div>

        <div className="text-center p-2">
        <strong> © 2022 Copyright</strong>: &nbsp;
        <a className="text-light" href="https://github.com/SMark2256" target="_blank">SMark2256</a>
        </div>
    </div>
  </footer>

  )
}

export default Footer