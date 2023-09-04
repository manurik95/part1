import { useState } from 'react'


const Button = (props) => {
  const handleButton = () => {
    props.setValue(props.value+1)
  }
  return <button onClick={handleButton}>{props.name}</button>
}

const StatisticLine = ({text, value,percentSign}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value} {percentSign? "%" :""}</td>
    </tr>
  )
}


const Statistics = ({good, neutral, bad}) => {
  const all = good+bad+neutral
  const average = (good + bad *(-1)) / all
  const positive = 100*good / all

  if (all===0) {
    return(
      <div>
        <h1>Statistcs</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
  return(
    <div>
      <h1>Statistcs</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value ={good} />
            <StatisticLine text="neutral" value ={neutral} />
            <StatisticLine text="bad" value ={bad} />
            <StatisticLine text="all" value ={all} />
            <StatisticLine text="average" value ={average} />
            <StatisticLine text="positive" value ={positive} percentSign /> 
          </tbody>
        </table>    
          
    </div>
  )}
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button name="good" value={good} setValue={setGood}/>
      <Button name="neutral" value={neutral} setValue={setNeutral}/>
      <Button name="bad" value={bad} setValue={setBad}/>
      
      
      <Statistics good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

export default App