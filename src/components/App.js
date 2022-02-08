import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Homepage'
import Shop from './shop/Shop'
import Cart from './cart/Cart'
import '../assets/styles/style.css'

function App() {
    const [numOfItems, setNumOfItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    // Keep a list of the flowers in the cart
    const [cartItems, setCartItems] = useState([])

    const onClick = (e) => {
        setNumOfItems(numOfItems + 1)
        setTotalPrice(
            Math.round(
                (totalPrice + +e.target.previousSibling.textContent) * 100
            ) / 100
        )
        setCartItems((prevItems) =>
            prevItems.concat({
                name: e.target.previousSibling.previousSibling.textContent,
                price: e.target.previousSibling.textContent,
                src: e.target.parentNode.firstChild.src,
                id: e.target.parentNode.id,
            })
        )
    }

    const onIncrease = (e) => {
        setNumOfItems(numOfItems + 1)
        setTotalPrice(
            Math.round(
                (totalPrice +
                    +e.target.parentNode.previousSibling.textContent) *
                    100
            ) / 100
        )
        setCartItems((prevItems) =>
            prevItems.concat({
                name: e.target.parentNode.previousSibling.previousSibling
                    .textContent,
                price: e.target.parentNode.previousSibling.textContent,
                src: e.target.parentNode.parentNode.firstChild.src,
                id: e.target.parentNode.parentNode.id,
            })
        )
    }

    const onDecrease = (e) => {
        console.log({
            name: e.target.parentNode.previousSibling.previousSibling
                .textContent,
            price: e.target.parentNode.previousSibling.textContent,
            src: e.target.parentNode.parentNode.firstChild.src,
            id: e.target.parentNode.parentNode.id,
        })
        setNumOfItems(numOfItems - 1)
        setTotalPrice(
            Math.round(
                (totalPrice -
                    +e.target.parentNode.previousSibling.textContent) *
                    100
            ) / 100
        )

        const obj = cartItems
            .map((item) => item.id)
            .indexOf(e.target.parentNode.parentNode.id)

        console.log(obj)
        setCartItems((prevItems) => [
            ...prevItems.slice(0, obj),
            ...prevItems.slice(obj + 1),
        ])
    }

    return (
        <div>
            <BrowserRouter>
                <Header numOfItems={numOfItems} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop onClick={onClick} />} />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                items={cartItems}
                                totalPrice={totalPrice}
                                numOfItems={numOfItems}
                                onIncrease={onIncrease}
                                onDecrease={onDecrease}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
