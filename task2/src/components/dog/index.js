import React, { useEffect, useState } from "react";

import DogBrandComponent from "./brand/dog-brand-component";
import DogImageComponent from "./image/dog-image-component";

/**
 * @description show dog image randomly
 * @returns Dog component that return random dog image
 */
const DogComponent = () => {

    const [currentBrand, setCurrentBrand] = useState("affenpinscher")

    //change current brand of dog by brand-list child-component
    const changeCurrentBrand = (brand) => {
        setCurrentBrand(brand)
    }

    return (
        <div>
            <DogImageComponent brand={currentBrand} />
            <div className="brand-component">
                <DogBrandComponent changeCurrentBrand={changeCurrentBrand} />
            </div>
        </div>
    )
}

export default DogComponent