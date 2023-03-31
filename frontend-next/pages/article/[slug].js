import Navbar from "@/components/Navbar";
import { httpClient } from "@/service/httpClient";
import { useEffect,useState } from "react";
import ReactMarkdown from 'react-markdown';

const articleSlug = () => {
  
  const [artData, setArtData] = useState()

  function getSlug(path){
    return "/article/"+path
  }
  function getImg(path){
    return "http://localhost:1337"+path
  }

  useEffect(() => {
    const getArtData = async () => {
        try {
            const {data} = await httpClient.get('/api/articles?populate=*')
            await setArtData(data.data)
            for(let i=0;i<data.data.length;i++){
              if(getSlug(data.data[i].attributes.slug)===window.location.pathname){
                setArtData(data.data[i])
                console.log(data.data[i])
              }
            }


        } catch (error) {
            console.log(error)
        }
    }

    getArtData()
}, [])

    if(!artData){
      return <Navbar/>
    }

    return(
      <>
        <div className="container">
            <Navbar/>
          THIS IS ARTI SLUG PAGE !!!!
          <div className="title">
              <h1>{artData.attributes.name}</h1>
              <h2>{artData.attributes.intro}</h2>
            </div>
            <div className="image">
              <img src={getImg(artData.attributes.mainImg.data[0].attributes.url)}></img>
            </div>
            <div className="richText" >
            <ReactMarkdown >{artData.attributes.content}</ReactMarkdown>
            </div>
        </div>
      </>
    )
  }
  
  
  export default articleSlug;