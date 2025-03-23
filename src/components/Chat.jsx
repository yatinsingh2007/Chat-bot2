import React, { useEffect, useState } from 'react'
import {Send} from 'lucide-react';
import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import ReactMarkdown from "react-markdown";
const Chat = ({name}) => {
    const [load,setLoad] = useState(true);
    const [arr,setArr] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        },2500)
        fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAcT9RK3AEReJZjfSN4BcSYMeTs10hS4t4`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{text: `Greet Me`}],
                        },
                    ],
                }),
            }
        ).then((resp) => resp.json()).then((result) => {
            console.log(result.candidates[0].content.parts[0].text);
            setArr([result.candidates[0].content.parts[0].text])
          }).catch((err) => {
            console.log(err);
            setArr([`Unfortunately I am not Able To fetch The Data.`])
          })
    },[]);
    const startChat = (e) => {
        e.preventDefault();
        console.log(e);
        setArr((prevArr) => [...prevArr,e.target[0].value]);
        fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAcT9RK3AEReJZjfSN4BcSYMeTs10hS4t4`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{text: e.target[0].value}],
                        },
                    ],
                }),
            }
        ).then((resp) => resp.json())
        .then((result) => {
            e.target.reset()
            return setArr((prevArr) => [...prevArr,result.candidates[0].content.parts[0].text])})
        .catch(() => {
            setArr((prevArr) => [...prevArr,`Error: Could Not Fetch The Response.`])
        })
        
    }
  return (
    <>
        <div>
            {load ? <>
                <div className='flex justify-center items-center h-screen'>
                    <DotLottieReact src="https://lottie.host/3dd87458-e9d6-488d-81dc-9523c603053e/X5jm5knDCj.lottie" loop autoplay className='w-96' />
                </div>
            </> : <>
            <div className='h-screen'>
                <header className='text-start p-2 text-3xl'>
                    Start Chattting {name} !!!
                </header>
                <main className='h-96'>
                <div className="rounded-lg shadow-lg backdrop-blur-md bg-white/30 border border-white/20 m-20 p-4 h-full overflow-auto flex flex-col">
                {arr.map((text, i) => (
                    <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <div className={`m-2 p-2 rounded-lg max-w-[75%] ${i % 2 === 0 ? "bg-[#37474F] text-white text-left" : "bg-white text-black text-right"}`}>
                        <ReactMarkdown>{text}</ReactMarkdown>
                    </div>
                    </div>
                ))}
                </div>
                </main>
                <div className='w-full flex justify-center'>
                    <form className='w-96 m-16 flex justify-between gap-4' onSubmit={startChat}>
                        <div className='w-96'>
                            <input type='text' placeholder='Enter SomeThing' required className='w-full rounded-full p-2'/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button type='submit'>
                                <Send/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </>
}
        </div>
    </>
  )
}

export default Chat
