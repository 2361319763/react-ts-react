import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from '@/router'
import '@/assets/style/App.css'

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  )
}
export default App;