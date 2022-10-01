import CartItems from './cartItems';

const Cart = (props) => {
    return (
        <>
            {props.numOfItems !== 0 ? (
                <div id="cartWrapper">
                    <div id="cart">
                        <CartItems
                            items={props.items}
                            onIncrease={props.onIncrease}
                            onDecrease={props.onDecrease}
                        />
                    </div>
                    <p>Total Cost: {props.totalPrice}</p>
                    <button>Proceed to Checkout</button>
                </div>
            ) : (
                <div id="cart">
                    <p>There are no items in your cart!</p>
                </div>
            )}
        </>
    );
};

export default Cart;
