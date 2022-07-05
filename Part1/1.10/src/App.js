import './App.css';
import React from 'react';
import { useState } from 'react';


const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) =>{
  return(
    <div>{props.text} {props.value}</div>
  )
}

const Statistics = (props) => {
  const {good, bad, neutral} = props
  const all = bad+good+neutral

  if(all ===0 ){
    return(
      <div>no feedback given</div>
    )
  }  

  return(
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={bad+good+neutral} />
      <StatisticLine text="average" value ={(good-bad)/(bad+good+neutral)} />
      <StatisticLine text="percentage" value ={(good/(bad+good+neutral))*100 + '%'}/>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  const goodIncBy1 = () => setGood(good+1)
  const badIncBy1 = () => setBad(bad+1)
  const neutralIncBy1 = () => setNeutral(neutral+1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={goodIncBy1} text='good'/>
      <Button onClick={neutralIncBy1} text='neutral'/>
      <Button onClick={badIncBy1} text='bad'/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App