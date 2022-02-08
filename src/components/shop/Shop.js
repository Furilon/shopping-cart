import Items from "./Items"
import { useState } from "react"

import Img0 from "../../assets/flower0.png"
import Img1 from "../../assets/flower1.png"
import Img2 from "../../assets/flower2.png"
import Img3 from "../../assets/flower3.png"
import Img4 from "../../assets/flower4.png"

const Shop = (props) => {
    const [flowers, setFlowers] = useState([
        {
            src: Img0,
            name: "Alpine",
            price: 22.49,
            id: 0,
        },
        {
            src: Img1,
            name: "Liloza",
            price: 22.49,
            id: 1,
        },
        {
            src: Img2,
            name: "Viktoria",
            price: 27.89,
            id: 2,
        },
        {
            src: Img3,
            name: "Milo",
            price: 18.99,
            id: 3,
        },
        {
            src: Img4,
            name: "Ayarok",
            price: 31.99,
            id: 4,
        },
    ])
    return (
        <div id="shop">
            <Items items={flowers} onClick={props.onClick}/>
        </div>
    )
}

export default Shop