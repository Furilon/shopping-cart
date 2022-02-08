import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div id="home">
            Home to a beautiful, modern flower shop. <br />
            <Link to="/shop"><button>Shop</button></Link>
        </div>
    )
}

export default Home