import { Formulario } from './components/formulario.jsx'
import { Home } from './components/Home.jsx'
import { useState } from 'react'
import './App.css'

function App() {

  const [user,setUser] = useState ([])
  
  return (
    <div className="App">
      {
        !user.length > 0 
        ? <Formulario setUser={setUser}/>
        : <Home user={user} setUser = {setUser}/>
      }
       
    </div>
  )
} 

export default App
