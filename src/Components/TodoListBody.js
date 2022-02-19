import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { openModal, delModal, editItem } from "../Store/Actions"





export const TodoListBody = () => {


    const {List, } = useSelector(state => state)
    const dispatch = useDispatch()


    const styles = {
        display:'flex',
        width:'300px',
        justifyContent:'space-between',
        alignItems:'center'
    }
    
    const openDel = (item, id) => {
        const modalDelContent = {
            id,
            type:'delete'
            
        }
        dispatch(openModal(item, id))
        dispatch(delModal(modalDelContent))
    }

    const openEdit = (text ,id) => {
        const modalEditContent = {
            type: 'edit',
            id,
            text
        }
        dispatch(openModal())
        dispatch(editItem(modalEditContent))
    }



    return(<div>
        {
            List.map((item, index) => {
                return(
                    <div  style = {styles}key={index}>
                        <input type="checkbox" />
                        <p>{item.text}</p>
                        <button onClick={() => openDel(item, item.id)}>Delete</button>
                        <button onClick={() => openEdit(item.text, item.id)} >Edit</button>
                       
                    </div>
                )
            })
        }
    </div>

    )
}