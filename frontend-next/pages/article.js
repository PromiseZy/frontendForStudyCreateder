import Navbar from "@/components/Navbar";
import { httpClient } from "@/service/httpClient";
import { useEffect,useState } from "react";

const article = () => {
  const [artData, setArtData] = useState([])


    useEffect(() => {
        const getArtData = async () => {
            try {
                const {data} = await httpClient.get('/api/articles?populate=*')
                await setArtData(data.data)
    
            } catch (error) {
                console.log(error)
            }
        }

        getArtData()
    }, [])
  
    function getSlug(path){
      return "/article/"+path
  }


    return(
      <>
        <div className="container">
            <Navbar/>
          <h1>THIS IS ARTICLE PAGE !!!!</h1>
          {artData.map((item, index) => {
        return (
          <div key={index}>
            <a href = {getSlug(item.attributes.slug)}>
                {item.attributes.title}
                </a>
          </div>
        );
      })}
        </div>
      </>
    )
  }
  
  
  export default article;