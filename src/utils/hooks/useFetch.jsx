import { useState } from "react";
import { useEffect } from "react";

export default function useFetch(url) {
    
    const [datas, setDatas] = useState([])
    const [isLoading, steIsLoading] = useState(true)

    useEffect(() => {
        async function fetchDatas() {
            steIsLoading(true)
            const response = await fetch(url)
            const responseData = await response.json()
            if (response.ok) {
                setDatas(responseData)
                steIsLoading(false)
            } else {
                console.log("===")
            }
        }
        fetchDatas()
    }, [url])
    return {datas, isLoading}
}