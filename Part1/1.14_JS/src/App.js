import './App.css';
import React from 'react';
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming withou t an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0})

  const pointsInc = () =>setPoints({...points, [selected]:points[selected]+1})

  const random = (()=> setSelected(Math.floor(Math.random()*anecdotes.length)))

  //const largest = points.indexOf(Math.max(...points))

  const largest = () => {
		let max = 0, maxKey = 0
		
		for(let i in points) {
			if (points[i] > max) {
				maxKey = i
				max = points[i]
			}
		}
		return maxKey
	}

  return (
    <div>
      <h1>anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {points[selected]} votes
      <br></br>
      <button onClick={pointsInc}>vote</button>
      <button onClick={random}>next anecdote</button>

      <h1>anecdote with most votes</h1>
      {anecdotes[largest()]}
      <br></br>
      has {points[largest()]} votes
    </div>
  )
}

export default App