import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css'
import Login from './Login';
import Register from './Register';

Modal.setAppElement(document.getElementById('root'));
function ModalWindow (props){

    const [isLogin,setIsLogin] = React.useState(true)
    const [isRegister,setIsRegister] = React.useState(false)
  

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

    
  
    
       const closeModal=()=> {
        props.setIsOpen(false);
      }
     
    return <>  <div >
 
    <Modal
      isOpen={props.modalIsOpen}
      
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
  {isLogin ? <Login closeModal={closeModal}
    setIsLogin={setIsLogin} isLogin={isLogin} 
    isRegister={isRegister} setIsRegister={setIsRegister}
    />
:
      <Register closeModal={closeModal} 
  setIsLogin={setIsLogin} isLogin={isLogin}
  isRegister={isRegister} setIsRegister={setIsRegister}
  />
 }

    </Modal>
  </div>
    </>
}




export default ModalWindow;

