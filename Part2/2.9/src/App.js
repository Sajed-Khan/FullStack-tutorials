import React from 'react'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

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

  const filtered = persons.filter(persons => {
    return persons.name.toLowerCase().includes(filter.toLowerCase());
  });

  const handleAddName = (event) =>{
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
		//console.log(event.target.value)
		setNumber(event.target.value)
	}

  const handleFilter = (event) =>{
    //console.log(event.target.value)
		setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>filter shown with <input onChange={handleFilter}/></div>
        <h3>add a new</h3>
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
          {filtered.map(person =><p key={person.id}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )
}

export default App
