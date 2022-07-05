import './App.css';
import React from 'react';
import { useState } from 'react';

const Statistics = (props) =>{
  if(props.all ===0 ){
    return(
      <div>no feedback given</div>
    )
  }


  return(
  <div>
    <p>good: {props.good}</p>
    <p>neutral: {props.neutral}</p>
    <p>bad: {props.bad}</p>
    <p>all: {props.all}</p>
    <p>average: {props.average}</p>
    <p>percentage: {props.percentage}%</p>
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {()=>setGood(good+1)}>good</button>
      <button onClick = {()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick = {()=>setBad(bad+1)}>bad</button>

      <h1>statistics</h1>
      <Statistics
        good= {good}
        neutral= {neutral}
        bad= {bad}
        all= {bad+good+neutral}
        average= {(good-bad)/(bad+good+neutral)}
        percentage= {(good/(bad+good+neutral))*100}
        />
    </div>
  )

}

export default App