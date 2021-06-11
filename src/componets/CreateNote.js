import React,{useState} from 'react'
import axios from 'axios'

const CreateNote = () => {
    const [input, setInput] = useState({
        title:'',
        content:''
    })
    function handleChange(event){
        const {name,value} = event.target;
        setInput(PreventDefault=>{
            return{
                ...PreventDefault,
                [name]: value,
            }
            
        })

    }
    function handleClick(event){
        event.preventDefault()
        const newNote ={
            title:input.title,
            content:input.content
        }
        axios.post('http://localhost:3001/create',newNote)

    }

    return (
        <div className="container">
            <h1>Create Note Page</h1>
            <form>
                <div className="form-group">
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off"  className="form-control" placeholder="title"/>
                </div>

                <div className="form-group">
                <textarea onChange={handleChange} name="content"  value={input.content} autoComplete="off"  className="form-control" placeholder="content"/>
                </div>

                <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
            </form>
            
        </div>
    )
}

export default CreateNote
