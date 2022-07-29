import React from 'react'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{id: 1, name: 'Arto Hellas', number: 456787876}]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')

  const addName = (event)=>{
    event.preventDefault()

    const newGuy ={
      name: newName,
      id: persons.length + 1,
      number: number
    }

    if(persons.find(persons=>persons.name===newName)){
      //console.log('found the dude')
      window.alert(newName + " is already added to phonebook")
    }
    else{
      setPersons(persons.concat(newGuy))
      setNewName('')
      setNumber('')
    }
  } 

  const handleAddName = (event) =>{
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
		//console.log(event.target.value)
		setNumber(event.target.value)
	}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value = {newName} onChange = {handleAddName}/>
        </div>
        <div>
          number: <input value = {number} onChange= {handleAddNumber}/>
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          {persons.map(person =><p key={person.id}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )
}

export default App
