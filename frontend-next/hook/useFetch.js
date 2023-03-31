import { useState } from "react"
import { httpClient } from "@/service/httpClient"

export const useFetch = () =>{
    
    const [serData, setSerData] = useState([])

    const getSerData = async () => {
        try {
            const {data} = await httpClient.get('/api/serves?populate=*')
            await setSerData(data)

        } catch (error) {
            console.log(error)
        }
    }

    return {
        serData,getSerData
    }
}