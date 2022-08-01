import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook= ()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

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
        <div><Filter filter ={filter} handleFilter={handleFilter}/></div>
        <h3>Add a new</h3>
        <PersonForm addName={addName} newName={newName} handleAddName={handleAddName} number={number} handleAddNumber={handleAddNumber} />
      <h2>Numbers</h2>
      <div>
          {filtered.map(person =><p key={person.id}>{person.name} {person.number}</p>)}
      </div>
    </div>
  )
}

export default App
