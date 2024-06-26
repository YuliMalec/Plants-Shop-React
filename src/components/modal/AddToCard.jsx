import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css'
import Login from './Login';
Modal.setAppElement(document.getElementById('root'));
function AddToCard (props){

    const [isLogin,setIsLogin] = React.useState(true)
    const [isRegister,setIsRegister] = React.useState(true)
  
    let subtitle;
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    
  
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
       function closeModal() {
        props.setIsOpen(false);
      }
     
    return <>  <div >
 
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
  {isLogin && <Login closeModal={closeModal}/>}
    </Modal>
  </div>
    </>
}




export default AddToCard;

