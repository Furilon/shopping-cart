import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="home">
            <h3>Home to a beautiful, modern flower shop.</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores obcaecati tenetur necessitatibus quae. Esse
                asperiores modi laudantium aut dolores! Eaque, aliquam quae
                eveniet sit laborum nihil quibusdam quos numquam laudantium.
            </p>
            <Link to="/shopping-cart/shop">
                <span>Shop</span>
            </Link>
        </div>
    );
};

export default Home;
