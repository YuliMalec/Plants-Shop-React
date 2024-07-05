import { createStore } from "redux";
 export   const defaultState = {
    isModal:'close'
}
export function modalIsOpen (state = defaultState,action){
    switch(action.type){
       case 'Toggle':
        return {...state, isModal: 'open'} 

        case 'Close':
            return {...state,isModal: 'close'}
        default:
            return state;
    }
}


console.log(defaultState)
const store = createStore(modalIsOpen)

