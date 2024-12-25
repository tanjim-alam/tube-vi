import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BuyYouTubeViews from './pages/BuyYouTubeViews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/buy-youtube-views' element={<BuyYouTubeViews/>}/>
    </Routes>
  )
}

export default App
