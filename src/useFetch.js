import { useState } from "react"
export default (url)=>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    fetch(url)
    .then(response=>response.json())
    .then(data=>setData(data))
    .catch(err=>setError(err))
    .finally(()=>setLoading(false))
    return{
        data,
        error,
        loading
    }
}