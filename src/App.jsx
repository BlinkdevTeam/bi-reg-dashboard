import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page from './custom-components/Page'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Page/>
    </>
  )
}

export default App
