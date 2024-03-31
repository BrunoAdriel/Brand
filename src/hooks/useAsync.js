import { useState, useEffect } from "react"

export const useAsync = (asyncFunction, dependencies = []) =>{
    const [data,  setData] = useState(null)
    const [loading, setLoadin] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoadin(true)
        asyncFunction()
            .then(data => {
                setData(data)
            })
            .catch(error =>{
                setError(error)
            })
            .finally(()=>{
                setLoadin(false)
            })
    },dependencies)

    return { data, loading, error }
}