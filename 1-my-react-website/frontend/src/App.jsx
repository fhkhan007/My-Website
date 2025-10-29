import React from 'react'
import { Navbar } from 'react-bootstrap';
import AppRoutes from "./routes/AppRoutes"


const App = () => {
  return (
    <>
     <Navbar/>
     <main>
      <AppRoutes/>
     </main>
    </>
  )
}

export default App