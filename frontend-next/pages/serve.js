import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { httpClient } from "@/service/httpClient";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const serve = () => {
    const [serData, setSerData] = useState([])


    useEffect(() => {
        const getSerData = async () => {
            try {
                const {data} = await httpClient.get('/api/serves?populate=*')
                await setSerData(data.data)
                console.log(data)
                console.log(data.data[0].attributes.mainImg.data[0].attributes.url)
    
            } catch (error) {
                console.log(error)
            }
        }

        getSerData()
    }, [])
    
    function getImg(path){
        return "http://localhost:1337"+path
    }
    function getSlug(path){
        return "/serve/"+path
    }

    return(
      <>
        <div className="bg-red-300 h-full">
            <Navbar/>
          <div className="">
            <div className="text-white capitalize text-center text-2xl font-black">
              This is serve page !!
            </div>
          </div>
          {serData.map((item, index) => {
        return (
          <div key={index} className="">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image= {getImg(item.attributes.mainImg.data[0].attributes.url)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.attributes.name}
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
  
  
  export default serve;