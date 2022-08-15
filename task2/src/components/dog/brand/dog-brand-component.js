import { useState, memo } from "react"
import useFetch from "../../../hooks/useFetch"

import "./dog-brand-component.css"

const list = [];

/**
 * @description This component will return 10 button randomly from brand of dogs
 * @param {function} changeCurrentBrand
 * @returns links to 10 random dog pictures on the bottom, labeled by their breed.
 */

const DogBrandComponent = memo(function dogBrandFunction({ changeCurrentBrand }) {

    const url = "https://dog.ceo/api/breeds/list/all";

    const [brandList, setBrandList] = useState([])
    
    const [currentIndex, setCurrentIndex] = useState(-1)

    //get 10 random indexs from brand list
    const getRandomList = (list) => {
        const randomCount = 10;
        let randomList = []
        while (randomList.length < randomCount) {
            let random_item = list[Math.floor(Math.random() * list.length)]
            if (!randomList.includes(random_item))
                randomList.push(random_item)
        }

        return randomList
    }

    // change current clicked index and current brand name by parent function - changeCurrentBrand
    const changeCurrentIndex = (index) => {
        setCurrentIndex(index)
        changeCurrentBrand(brandList[index])
    }

    const { response} = useFetch(url)
    if (response && brandList.length == 0) {
        let data = response.message;
        let allkeys = Object.keys(data)

        //get all brands from response's data.
        allkeys.map(key => {
            if (data[key].length > 0) {
                data[key].map(item => {
                    list.push(key + "/" + item)
                })
            }
            else {
                list.push(key)
            }
        })
        setBrandList(getRandomList(list))
    }

    return (
        <div>
            {
                brandList.map((item, index) =>
                    <button
                        key={index}
                        className={"brand-btn " + (currentIndex == index ? "actived-btn" : "")}
                        onClick={() => { changeCurrentIndex(index) }}>
                        {item}
                    </button>
                )
            }
        </div>
    )

})

export default DogBrandComponent;