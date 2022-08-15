import React, { useState } from "react"
import useFetch from "../../../hooks/useFetch"
import "./dog-image-component.css"

/**
 * @description return dog image randomly in the current brand of dog.
 * @param {string} brand 
 * @returns Dog image | Error | Loading...
 */

const DogImageComponent = ({ brand }) => {

    //random dog image url
    const url = 'https://dog.ceo/api/breed/' + brand + '/images/random'

    //fetch random dog image
    const { response, loading, error } = useFetch(url)

    return (
        <div >
            {loading && <p className="loading-bar"> Loding...</p>}
            {error && <p> Something went wrong</p>}
            {response && <img className="dog-image" src={response.message} />}
        </div>
    )
}


export default DogImageComponent;