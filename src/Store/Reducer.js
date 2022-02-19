import {CHANGE_VALUE, ADD_VALUE, OPEN_MODAL, CLOSE_MODAL, DEL_MODAL, DEL_ITEM, EDIT_ITEM, CHANGE_VAL, SAVE_ITEM} from './Actions'

const initalState = {
    text: '',
    List: [],
    isOpen: false,
    modalContent: {},
    newText: '',
    newModalText: ''
}



export const Reducer = (state = initalState, action) => {
    switch(action.type){
        case CHANGE_VALUE : 
             return {...state, text: action.payload}
        case ADD_VALUE:
            return {...state, List: action.payload, text: ''}
        case  OPEN_MODAL:
            return {...state, isOpen:true }
        case  DEL_MODAL:
            return {...state, modalContent:action.payload}  
        case DEL_ITEM:
            return {... state, List: action.payload}    
        case  CLOSE_MODAL:
            return{...state, isOpen:false}   
        case  EDIT_ITEM:
            return {...state,modalContent:action.payload} 
                   
        default:
            return state
    }
}