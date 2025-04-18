import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//We are creating the different components
//We can use the different components across our whole application

//We can use the card component in the app funntion/component, which allow you to write code once and reuse multiple times
const Card = ({ title }) => {
  const [hasLiked, setHasLiked] =  useState(false);

  return  (
    <div className='card'>
      <h2>{title}</h2>

      <button onClick={() => {setHasLiked(!hasLiked)}}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
  
    </div>
  )
}

const App = () => {
  



  return (
    <div className='card-container'>
      <Card title="Star Wars"/>
      <Card title="Avatar"/>
      <Card title="The Lion King Movie"/>
    </div>    
  )
}

export default App
