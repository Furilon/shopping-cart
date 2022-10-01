import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="home">
            Home to a beautiful, modern flower shop. <br />
            <Link to="/shop">
                <span>Shop</span>
            </Link>
        </div>
    );
};

export default Home;
