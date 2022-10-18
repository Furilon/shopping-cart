import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/shopping-cart">
                        <li>Homepage</li>
                    </Link>
                    <Link to="/shopping-cart/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/shopping-cart/cart">
                        {props.numOfItems > 0 ? (
                            <li>Cart ({props.numOfItems})</li>
                        ) : (
                            <li>Cart</li>
                        )}
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
