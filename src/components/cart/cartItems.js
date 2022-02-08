const CartItem = (props) => {
    return (
        <div className="cartItem" id={props.id}>
            <img
                src={props.src}
                alt="One of the flowers that you put into your cart"
            />
            <p>{props.name}</p>
            <p>{props.price}</p>
            <div>
                <button onClick={props.onIncrease}>+</button>
                <p>{props.numOfItems}</p>
                <button onClick={props.onDecrease}>-</button>
            </div>
            <p>Subtotal: ${props.totalPrice}</p>
        </div>
    )
}

const CartItems = (props) => {
    const items = props.items.reduce((arr, item) => {
        let flowerObj = {}
        const particularFlowerObj = props.items.filter(
            (flower) => flower.id === item.id
        )

        flowerObj = {
            id: item.id,
            src: item.src,
            name: item.name,
            numOfItems: particularFlowerObj.length,
            price: item.price,
            totalPrice: item.price * particularFlowerObj.length,
        }



        if (arr.some(item => item.name === flowerObj.name)) {
            return arr
        } else return arr.concat(flowerObj)
            
    }, [])

    return items.map((item) => (
        <CartItem
            key={item.id}
            id={item.id}
            src={item.src}
            name={item.name}
            price={item.price}
            totalPrice={item.totalPrice}
            numOfItems={item.numOfItems}
            onIncrease={props.onIncrease}
            onDecrease={props.onDecrease}
        />
    ))
}

export default CartItems
