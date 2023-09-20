import React from 'react';
import video1 from '../img/login1.gif';
import SignIn from './Signin';



function Login() {
    return(
        <div className="flex w-full h-screen">
            
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center">
                <div className=" bg-gradient-to-tr">
                <img src={video1} alt="" className="gif "/>
                </div>
                {/* <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/> */}
            </div>
            <div className="w-full flex items-center justify-center lg:w-1/2  bg-gray-200">
               <SignIn />
            </div>
        </div>
    )
}
export default Login