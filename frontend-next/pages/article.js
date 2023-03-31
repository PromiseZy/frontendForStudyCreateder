import Navbar from "@/components/Navbar";
import { httpClient } from "@/service/httpClient";
import { useEffect,useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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

  function getImg(path){
    return "http://localhost:1337"+path
}


    return(
      <>
        <div className="container">
            <Navbar/>
          <h1>THIS IS ARTICLE PAGE !!!!</h1>
          {artData.map((item, index) => {
        return (
          <div key={index}>
            <Card sx={{ maxWidth: 345 }}>
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
                    </Card>
            
          </div>
        );
      })}
        </div>
      </>
    )
  }
  
  
  export default article;