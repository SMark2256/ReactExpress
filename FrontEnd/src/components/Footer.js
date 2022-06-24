import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start fixed-bottom">
    <div className='menu'>
        <div className="container py-2 col-lg-12">
            <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12 text-center">
            <h5 className="text-uppercase">NYITVATARTÁS</h5>
            
            <p>
                Hétfő - vasárnap 11:00-22:00
            </p>
          </div>

          <div className="col-lg-4 col-md-12 text-center">
            <h5 className="text-uppercase">ELÉRHETŐSÉGEINK</h5>
    
            <p>
                2060 Bicske, Szent Béla út 22.<br/>
                Tel: (22) 261 ***, (22) 565 ***
            </p>
            </div>

            <div className="col-lg-4 col-md-12">
            <h5 className="text-uppercase text-center">ÉTELRENDELÉS</h5>
    
            <p className="text-center">
                Hívja minden nap a <strong>(22) 565 ***</strong> számot és Budapest belterületén ingyenesen házhoz visszük rendelését!
                Vidéki rendelés esetén kiszállítási díjat számítunk fel.
            </p>
            </div>
        </div>
        </div>

        <div className="text-center">
        <strong> © 2022 Copyright</strong>: &nbsp;
        <a className="text-light" href="https://github.com/SMark2256/ReactExpress" target="_blank" rel="noreferrer" >SMark2256</a>
        </div>
    </div>
  </footer>

  )
}

export default Footer