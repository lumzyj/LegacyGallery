import React from 'react'
import video from '../img/sign.gif';
import Form from "../components/Form"

const Signupup = () => {
  return (
    
    <div className="flex w-full h-screen">
    <div className="w-full flex items-center justify-center lg:w-1/2 bg-gray-200">
        <Form />
    </div>
    <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center">
        <div className=" bg-gradient-to-tr">
        <img src={video} alt="" className="gif "/>
        </div>
        {/* <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/> */}
    </div>
</div>
    
  )
}

export default Signupup