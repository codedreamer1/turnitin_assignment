import { useState, useEffect } from "react"

/**
 * 
 * @description fetch data by API 
 * @param {url, options} 
 * @returns response, error, loading
 */

const useFetch = (url, options = null) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const doFetch = async () => {
            setLoading(true)
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }
        doFetch()
    }, [url])

    return { response, error, loading }
}

export default useFetch;