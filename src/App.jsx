import './App.css'
import { useState } from 'react';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [name , setName] = useState(`admin`);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn setName = {setName}/>} />
          <Route path='/chat' element={<Chat name={name}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
