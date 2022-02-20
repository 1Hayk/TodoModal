import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeModal, delItem, changeVal, saveEditText } from '../../Store/Actions';


export const TodoListModal = () => {
    const {isOpen, List, modalContent,newText, newModalText} = useSelector(state => state)
    const dispatch = useDispatch()


    

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
      let subtitle;
      const close = () => {
          dispatch(closeModal())
      }

      const dell = (id) => {
        
        const newList = List.filter(item => item.id !== id)
        dispatch(delItem(newList))
        
        close()
      }
      const change = (value) => {
        dispatch(changeVal(value))
        
      }



      const save = (id) => {
        const item = List[id - 1]
        item.text = newText
       dispatch(saveEditText(List))
       close()
       
      }


      

 
    return(
    <div>
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      
    >
    <h1> Modal</h1>
    <p>Do you want to {modalContent.type} this item?</p>
    {
      modalContent.type === 'delete' ? <div><button onClick={() => dell(modalContent.id)} >Delete</button>
      <button onClick={close}>cancel</button> </div>:
      <div>
        <textarea defaultValue={modalContent.text} cols="30" rows="10" onChange={(e) => change(e.target.value)}/>
        <button onClick={() => save(modalContent.id)} >Save</button>
       
        <button onClick={close}>Cancel</button>
      </div> 
    }
    
    </Modal>
  </div>
  )
}







