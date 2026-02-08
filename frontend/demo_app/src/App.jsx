import { useState } from 'react'
import LoginScreen from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginScreen/>
    </>
  )
}

export default App
