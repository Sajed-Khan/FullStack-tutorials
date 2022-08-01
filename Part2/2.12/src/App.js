import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [country, setCountry] = useState([])
  const [filter, setFilter] = useState('')

  const hook= ()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountry(response.data)
      })
  }
  useEffect(hook, [])

  const filtered = country.filter(country => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase())
  })

  const handleFilter = (event) =>{
		setFilter(event.target.value)
  } 

  return (
    <div>
      find countries <input value={filter} onChange={handleFilter} />
      {filtered.map(country =><p key={country.name.common}>{country.name.common}</p>)}
    </div>
  )
}

export default App
