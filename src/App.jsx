import { useState } from 'react'
import './App.css'
import Chat from './components/Chat'
import SignIn from './components/SignIn'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { LogIn } from 'lucide-react'
function App() {
  const [logIn ,setLogIn] = useState(false);
  const [name,setName] = useState('');
  return (
    <>
      <div>
        {!logIn ? (
          <>
            <SignIn setLogIn={setLogIn} setName={setName}/>
          </>
        ):(
          <Chat name = {name}/>
        )}
      </div>
    </>
  )
}

export default App
