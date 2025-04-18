import React from 'react'

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted");
  };
  return (
    <>
    <div className="relative z-10 flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-300">
      <h1 className="text-3xl pt-3 text-white">Neura-Chat</h1>
      <p className="text-white">Powered by Gemini</p>
      
      <div className='flex flex-col text-center justify-center items-center w-full'>
        <div className='pt-36'>
          <h1 className="font-mono text-2xl text-white drop-shadow-md px-5 md:w-[50vw]">
            <TypeAnimation
              sequence={[
                "Step into the future with Neura-Chat... Sign in and let's explore intelligence beyond limits!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </h1>
        </div>

        <div className='h-screen flex flex-col justify-start items-center mt-6 pb-10'>
          <Bot className='h-12 w-12 m-5 text-white' />
          <div className='p-20 rounded-lg shadow-lg backdrop-blur-md bg-white/30 border border-white/20 flex flex-col'>
            <h1 className='pt-3 text-center text-black'>Sign-up</h1>
            <form onSubmit={handleSubmit}>
              <div className='text-start pt-3'><label>Name</label></div>
              <div className='p-[2px] bg-gradient-to-r from-black via-gray-800 to-gray-300 rounded-lg'>
                <input type='text' placeholder='Enter your Name' className='w-full px-4 py-2 bg-white text-black rounded-md outline-none' required/>
              </div>

              <div className='text-start pt-3'><label>Email</label></div>
              <div className='p-[2px] bg-gradient-to-r from-black via-gray-800 to-gray-300 rounded-lg'>
                <input type='email' placeholder='Enter your Email' className='w-full px-4 py-2 bg-white text-black rounded-md outline-none' required/>
              </div>

              <div className='text-start pt-3'><label>Password</label></div>
              <div className='p-[2px] bg-gradient-to-r from-black via-gray-800 to-gray-300 rounded-lg'>
                <input type='password' placeholder='Enter your Password' className='w-full px-4 py-2 bg-white text-black rounded-md outline-none' required/>
              </div>

              <div className='pt-5'>
                <button className='px-6 py-3 text-white font-semibold bg-black/80 hover:bg-black rounded-xl shadow-lg hover:scale-105 transition duration-300'>
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <footer className='text-center p-3 bg-gradient-to-t from-black via-gray-800 to-gray-300 text-white w-full shadow-lg'>
        <p>&copy; Copyrightclaim-2025</p>
      </footer>
    </div>
  </>
  )
}

export default SignUp
