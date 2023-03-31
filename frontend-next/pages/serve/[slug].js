import Navbar from "@/components/Navbar";
import { httpClient } from "@/service/httpClient";
import { useEffect,useState } from "react";
import ReactMarkdown from 'react-markdown';


const serveSlug = () => {
  
  const [serData, setSerData] = useState()

  function getImg(path){
    return "http://localhost:1337"+path
  }

  function getSlug(path){
    return "/serve/"+path
  }

  useEffect(() => {
    const getSerData = async () => {
        try {
            const {data} = await httpClient.get('/api/serves?populate=*')
            for(let i=0;i<data.data.length;i++){
              if(getSlug(data.data[i].attributes.slug)===window.location.pathname){
                setSerData(data.data[i])
                console.log(data.data[i])
              }
            }

        } catch (error) {
            console.log(error)
        }
    }

    getSerData()
}, [])
    if(!serData){
      return <Navbar/>
    }
    return(
      <>
      
        <div className="container" >
            <Navbar/>
            <div className="title">
              <h1>{serData.attributes.name}</h1>
              <h2>{serData.attributes.intro}</h2>
            </div>
            <div className="image">
              <img src={getImg(serData.attributes.mainImg.data[0].attributes.url)}></img>
            </div>
            <div className="richText" >
            <ReactMarkdown >{serData.attributes.content}</ReactMarkdown >
            </div>
        </div>
      </>
    )
  }
  
  
  export default serveSlug;