import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div id="header">
            <nav>
                <ul>
                    <Link to="/">
                        <li>Garden Today</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/cart">
                        {props.numOfItems > 0 
                        ? (<li>Cart ({props.numOfItems})</li>)
                        : (<li>Cart</li>)}
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header
