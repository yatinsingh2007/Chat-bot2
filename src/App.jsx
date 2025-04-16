import { useState } from 'react'
import './App.css'
import Chat from './components/Chat'
import SignIn from './components/SignIn'
function App() {
  const [logIn ,setLogIn] = useState(false);
  const [name,setName] = useState('');
  return (
    <>
      {!logIn ? <SignIn setLogIn={setLogIn} setName={setName} /> : <Chat name={name} />}
    </>
  )
}

export default App
