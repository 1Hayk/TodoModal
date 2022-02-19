import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {changeInputValue, addInputValue} from '../Store/Actions'



export const TodoListHeader = () => {
    const {text,List} = useSelector(state => state)
    const dispatch = useDispatch()

    const changeValue = (value) => {
        dispatch(changeInputValue(value))
    }

    const addValue = (e) => {
        e.preventDefault()
        if(text === ''){
            alert("input's value is empty")
        }else{
         List.push({text, id:List.length + 1})
              dispatch(addInputValue(List))
        }
        
    }
    return(
        <div>
            <form onSubmit={(e) => addValue(e)} >
            <input type="text" value={text} onChange={(e) =>changeValue(e.target.value)} />
            <button>Add</button>
            
            </form>
           
            
        </div>
    )
}