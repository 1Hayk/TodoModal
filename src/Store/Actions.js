export const CHANGE_VALUE = "CHANGE_VALUE"
export const ADD_VALUE = "ADD_VALUE"
export const OPEN_MODAL = 'OPEN_MODAL'
export const DEL_MODAL = "DEL_MODAL"
export const DEL_ITEM = 'DEL_ITEM'
export const EDIT_ITEM = "EDIT_ITEM"
export const CHANGE_VAL = "CHANGE_VAL"
export const SAVE_ITEM = 'SAVE_ITEM'
export const CLOSE_MODAL = 'CLOSE_MODAL'


export const changeInputValue = (payload) => {
    return {
        type:CHANGE_VALUE,
        payload

    }
}
export const  addInputValue = (payload) => {
  return {
      type:  ADD_VALUE,
      payload
  }
}



export const openModal = () => {
    return {
        type: OPEN_MODAL,
        
        

    }
}

export const delModal = (payload) => {
    return {
        type:DEL_MODAL,
        payload
    }
}
export const delItem = (payload) => {
    return {
        type:DEL_ITEM,
        payload
    }
}
export const editItem = (payload) => {
    return {
        type:EDIT_ITEM,
        payload
    }
}
export const changeVal = (payload) => {
    return {
        type:CHANGE_VAL,
        payload
    }
}
export const saveModalItem = (payload) => {
    return {
        type:SAVE_ITEM,
        payload
    }
}
export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}