const Item = (props) => {
    return (
        <div className="item" id={props.id}>
            <img src={props.src} alt="Garden Flower for sale" />
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onClick={props.onClick}>Add to cart</button>
        </div>
    )
}

const Items = (props) => {
    return props.items.map((item) => (
        <Item
            key={item.id}
            id={item.id}
            name={item.name}
            src={item.src}
            price={item.price}
            onClick={props.onClick}
        />
    ))
}

export default Items
