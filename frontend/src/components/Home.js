import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {editUpdate} from '../redux/koratUpdateContentSlice'

const baseURL = "https://jsonplaceholder.typicode.com/posts"

function Home() {


  const [post,setPost] = useState(null);

  useEffect(() => {
      axios.get(baseURL).then((response) => {
          setPost(response.data)
          //console.log(response.data);
        })
  });
  if(!post) return ;
  return (
    <div className="App">
      <div className='bg-green-200 w-full h-32 p-32 flex justify-center'>
        <span className="text-3xl text-amber-600 font-bold">“</span>
        <span className="text-3xl font-bold ">Korat Lifestyle </span>
        <span className="text-3xl text-amber-600 font-bold">สไตล์ชีวิตของคนโคราช” </span>
      </div>
    </div>
  );
}

export default Home;
