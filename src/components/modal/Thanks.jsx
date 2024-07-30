import React from 'react';
import style from './modal.module.css'

function Thanks(props) {
    return (
        <div className={style['container-modal']}>
        <article className={style.modal}>
            <h5>Thanks for your order!!!</h5>
         </article>   
        </div>
    );
}

export default Thanks;