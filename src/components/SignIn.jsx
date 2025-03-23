import { Bot } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const SignIn = ({setLogIn,setName}) => {

  return (
    <>
      <div>
          <h1 className='text-3xl pt-3'>Neura-Chat</h1>
          <p>Powered by Gemini</p>
          <div className='flex flex-col lg:flex text-center justify-center items-center'>
            <div className='pt-36'>
              <h1 className="font-mono text-2xl text-indigo-900 drop-shadow-md text-center px-5">
                <TypeAnimation
                  sequence={[
                    "Step into the future with Neura-Chat... Sign in and let’s explore intelligence beyond limits!",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                />
              </h1>
            </div>
            <div className='h-screen flex flex-col justify-start items-center mt-6 pb-10 mr-4'>
              <div>
                <Bot className='h-12 w-12 m-5'/>
              </div>
              <div className='p-20 rounded-lg shadow-lg backdrop-blur-md bg-white/30 border border-white/20 flex flex-col'>
                <h1 className='pt-3 text-center'>Sign-In</h1>
                <div>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    setLogIn(true);
                    setName(e.target[0].value);
                    return 
                  }}>
                      <div className='text-start pt-3'><label>Name</label></div>
                      <div className='p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg'>
                        <input type='text' placeholder='Enter your Name' className='w-full px-4 py-2 bg-white text-black rounded-md outline-none' required/>
                      </div>
                      <div className='text-start pt-3'><label>Email</label><br/></div>
                      <div className='p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg'>
                        <input type='email' placeholder='Enter your Email' className='w-full px-4 py-2 bg-white text-black rounded-md outline-none' required/>
                      </div>
                      <div className='text-start pt-3'><label>Password</label><br/></div>
                      <div className='p-[2px] bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg'>
                        <input type='password' placeholder='Enter your Password' className='w-full px-4 py-2 bg-white text-black rounded-md outline-none' required/>
                      </div>
                      <div className='pt-5'>
                        <button className='px-6 py-3 text-white font-semibold bg-black/80 hover:bg-black rounded-xl shadow-lg hover:scale-105 transition duration-300'>
                          LogIn
                        </button>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
          <footer className='text-start p-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 text-white w-screen'>
            <p>&copy;Copyrightclaim-2025</p>
          </footer>
      </div>
    </>
  );
};

export default SignIn;