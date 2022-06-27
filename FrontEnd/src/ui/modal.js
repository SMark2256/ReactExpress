import Modal from 'react-modal';

import './modal.css'

const ModalBox = ({ inCart }) => {

      if(inCart){
            console.log("incart látom")
            }else{
                  console.log("incart nem látom")
            }

      return (
        <Modal
      //     {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className='modalbox'
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Kosár</h4>
            <p>
                  {inCart.foodName} 
                  {inCart.foodType} 
                  {inCart.foodPrice} 
            </p>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={props.onHide}>Close</Button> */}
          </Modal.Footer>
        </Modal>
      );
    }


    export default ModalBox