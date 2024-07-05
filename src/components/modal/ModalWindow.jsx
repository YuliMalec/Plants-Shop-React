
import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css'
import Login from './Login';
import Register from './Register';

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

    
  
    
    
     
    return <>  <div 
 
      isOpen={props.modalIsOpen}
      
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
   > 
  {isLogin ? <Login closeModal={props.closeModal}
    setIsLogin={setIsLogin} isLogin={isLogin} 
    isRegister={isRegister} setIsRegister={setIsRegister}
    />
:
      <Register closeModal={props.closeModal} 
  setIsLogin={setIsLogin} isLogin={isLogin}
  isRegister={isRegister} setIsRegister={setIsRegister}
  />
 }

  
  </div>
    </>
}




export default ModalWindow;

