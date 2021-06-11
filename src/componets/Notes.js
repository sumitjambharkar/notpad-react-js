import React,{useEffect,useState} from 'react'

const Notes = () => {
    const [notes, setNotes] = useState([{
        title:'',
        content:''
    }])
    useEffect(()=>{
        fetch('/notes').then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonNote=>setNotes(jsonNote))
    })
    return (
        <div className="container">
            <h1>Notes page</h1>
            {notes.map(note=>
            <div className="card" style={{ width: '18rem' }}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
            </div>
            )}
            
        </div>
    )
}

export default Notes
