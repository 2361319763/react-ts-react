import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '@/router'
import '@/assets/style/App.css'

const App: React.FC = () => {
  console.log('App 被加载')
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
export default App;