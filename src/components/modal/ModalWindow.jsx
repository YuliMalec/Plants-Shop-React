
import React from 'react';
import Login from './Login';
import Register from './Register';

function ModalWindow (props){

    const [isLogin,setIsLogin] = React.useState(true)
    const [isRegister,setIsRegister] = React.useState(false)
  
    
     
    return <>  <div > 
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

