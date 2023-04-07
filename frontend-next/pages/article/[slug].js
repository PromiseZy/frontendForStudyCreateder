import Navbar from "@/components/Navbar";
import { httpClient } from "@/service/httpClient";
import { useEffect,useState } from "react";
import ReactMarkdown from 'react-markdown';

const articleSlug = () => {
  
  const [artData, setArtData] = useState()

  const renderers = {
    image: ({ src, alt, title }) => {
      return (
        <img
          src={src}
          alt={alt}
          title={title}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      );
    },
  };
  
  function getSlug(path){
    return "/article/"+path
  }
  function getImg(path){
    return "http://localhost:1337"+path
  }

  useEffect(() => {
    const getArtData = async () => {
        try {
            const {data} = await httpClient.get('/api/articles?populate=*&locale=all')
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
      <div>
        <div className="bg-red-300 h-full">
            <Navbar/>
          <div style={{fontFamily: 'Noto Sans Thai, sans-serif'}}>
              <p className="text-center font-black py-4 text-7xl">{artData.attributes.title}</p>
              <div className="px-32 py-4 font-semibold text-2xl">
                  <h2>{artData.attributes.intro}</h2>
                </div>
                <div className="px-32 py-4">
                  <img src={getImg(artData.attributes.mainImg.data[0].attributes.url)}></img>
                </div>
                <div className="px-32 pb-6" >
                <ReactMarkdown renderers={renderers} children={artData.attributes.content}/>
                {/* <ReactMarkdown >{artData.attributes.content}</ReactMarkdown> */}
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  
  export default articleSlug;