import Navbar from "@/components/Navbar";
import { httpClient } from "@/service/httpClient";
import { useEffect,useState } from "react";
import ArticleCard from "@/components/ArticleCard";


const article = () => {
  const [artData, setArtData] = useState([])


    useEffect(() => {
        const getArtData = async () => {
            try {
                const {data} = await httpClient.get('/api/articles?populate=*&locale=all')
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

  function getImg(path){
    return "http://localhost:1337"+path
}


    return(
      <>
        <div className="bg-red-300 h-screen">
            <Navbar/>
          <div className="">
            <div className="text-white capitalize text-center text-2xl font-black mb-10">
              This is article page !!
            </div>
          </div>
          <div className="m-2 p-2 flex flex-row flex-warp flex-auto">
          {artData.map((item, index) => {
        return (
          <div key={index} className="mr-4">
            {/* <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image= {getImg(item.attributes.mainImg.data[0].attributes.url)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.attributes.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.attributes.intro}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href = {getSlug(item.attributes.slug)}>
                            <Button size="small">Show more</Button>
                        </a>
                    </CardActions>
                    </Card> */}
              <ArticleCard props={item} />
          </div>
        );
      })}
      </div>
        </div>
      </>
    )
  }
  
  
  export default article;