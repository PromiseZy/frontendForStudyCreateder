import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    
    
    const handleButton = () => {
        console.log("hello")
      }



  return (
    <div className="min-h-screen ">
      <div className='bg-green-200 w-full h-12 flex justify-center '>
        <span className="text-3xl text-amber-600 font-bold">Login Page</span>
      </div>
      <div className='flex justify-center text-center items-center py-12'>
        <div className='space-y-2 ' >
            <span>username<br/></span>
            <input className="text-amber-600 border-4 rounded-md" type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
            <span><br/>password<br/></span>
            <input className="text-amber-600 border-4 rounded-md" type="text" value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
      </div>
      <div className='space-y-2 space-x-4 justify-center text-center '>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButton}>เข้าสู่ระบบ</button>
            <a href="/register">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >ลงทะเบียน</button>
            </a>
        </div>
    </div>
  );
}

export default Login;
