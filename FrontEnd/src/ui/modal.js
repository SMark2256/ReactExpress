import React, { useRef } from 'react'
//components
import Prods from '../components/Prods'
import emailjs from '@emailjs/browser'
//css
import './modal.css'

const ModalBox = ({ inCart, setinCart, open, onClose }) => {
  console.log("modal inCart")
    console.log(inCart)
  const prodelements = []

  for (const key in inCart) {
    for (const key2 in inCart[key]) {
      prodelements.push({
            name: inCart[key][key2].name,
            price: inCart[key][key2].price,
            type: inCart[key][key2].type
            })
      }
  }

  var fullprice = 0
if(prodelements.length > 0)
  fullprice = prodelements.map(prodelements => prodelements.price).reduce((acc, amount) => acc + amount);


  console.log('fullprice')
  console.log(fullprice)
  



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_2z8u1sg', form.current, 'lL5OdZDW5pX_NkWP1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }) 

    e.target.reset()

    fullprice = 0
    setinCart([])

    alert(`Köszönjük a rendelésed! Az email kiküldésre került!`);

  }


    if(!open) return null
      return (
      <>
          <div className='modalbox bg-light'>
            <div className='row col-12'>
              <div className='col-11'>
            <h1 className='fw-bold text-center ps-5'>Kosár</h1>
            </div>
            <div className='col-1 py-2'>
            <button onClick={onClose} className='btn-sm text-center w-50 btn-primary'>X</button>
            </div>
            </div>
          <form  ref={form} onSubmit={sendEmail}>
          <div className='mx-5 col-12'>
              <div className='col-6 pb-2 py-4'>
                <h2 className='fw-bold'>Termékek:</h2>
              </div>
            </div>
              <div className='py-2 border border-4 rounded-top mx-5'>
                <div className='pe-3'>
                  <ul className="row col-12 text-black">
                    <li className='col-4 border border-4'>
                    <h3>Név</h3>
                    </li>

                    <li className='col-4 border border-4'>
                    <h3>Kategória</h3>
                    </li>

                    <li className='col-4 border border-4'>
                    <h3>Ár</h3>
                    </li>
                  </ul>
              </div>
              <ul className="row col-12 text-black overflow-auto table">
                  {prodelements.map((elements) => (
                        <Prods
                              name={elements.name}
                              type={elements.type}
                              price={elements.price}
                        />
                  ))}
              </ul>
              </div>
              <div className='row col-12 py-4 pe-5'>
                <div className='col-10'>
                  <h2 className='fw-bold text-end'>Összesen fizetendő: </h2>
                  </div>
                <div className='col-2 fs-3 fw-bold'>
                $<input name='price' className='priceinput bg-light fs-3 fw-bold' value={fullprice}/>
                </div>
              </div>
              
            
            <div className='row col-12 py-2 justify-content-center'>
                <div className='col-6 w-25'>
                <label for='name' className='form-label'>Név:</label>
                <input name='name' type='text' className='form-control' required></input>
                </div>
                <div className='col-6 w-25'>
                <label for='email' className='form-label'>Email:</label>
                <input name='email_to' type='email' className='form-control' required></input>
                </div>
            </div>
            <div className='row justify-content-center fixed-bottom pb-5'>
              <button onClick={() => {setinCart([]); fullprice=0}}  className='btn-lg btn-primary mx-2 w-25'>
                Töröl
              </button>
              <button type="submit" className='btn-lg btn-primary mx-2 w-25'>
                Megrendelés
              </button>           
          </div>
        </form>
      </div>
    </>
      );
    }


    export default ModalBox