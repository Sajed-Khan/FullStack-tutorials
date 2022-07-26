import React from 'react'
import Note from './components/Note'
import { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  //remove props and use [] to initalize useState with empty list
  //const [newNote, setNewNote]= useState('new note....') ' ' acts as placeholder
  const [newNote, setNewNote]= useState('')
  const [showAll, setShowAll] = useState(true)
  

  const addNote = (event) =>{
    event.preventDefault() //prvents default action of submitting a form causing page to reload
   // console.log('button clicked', event.target)
    const noteObject ={
      content : newNote,
      date: new Date().toISOString(),
      important: Math.random()<0.5,
      id: notes.length +1,
    }
    setNotes(notes.concat(noteObject)) //creates new copy of array with new item added at the end
    setNewNote('')//resets the value of the controlled input element
  }

  const noteChange =(event)=>{
    console.log(event.target.value)
    setNewNote(event.target.value) //allows change of text within field by synchronizing changes made to the field
  }

  const noteToShow = showAll? notes : notes.filter(note => note.important) 

  return(
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=> setShowAll(!showAll)}>show {showAll? 'important' : 'all'}</button>
      </div>
      <ul>
        {
          noteToShow.map(note => <Note key={note.id} note= {note}/>)
        }
      </ul>
      <form onSubmit={addNote}> 
        <input value={newNote} onChange={noteChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App