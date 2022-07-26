import React from 'react'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{id: 1, name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')

  const addName = (event)=>{
    event.preventDefault()

    const newGuy ={
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(newGuy))
    setNewName('')
  } 

  const handleAdd = (event) =>{
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value = {newName} onChange = {handleAdd}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          {persons.map(person =><p key={person.id}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App
