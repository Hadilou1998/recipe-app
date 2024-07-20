import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul className="menu">
                <li className="logo">
                    <Link to="/">RECIPE APP</Link>
                </li> 
                <li className="item">
                    <Link to="/">Home</Link>
                </li>
                <li className="item">
                    <Link to="/recipes">Recipes</Link>
                </li>
                <li className="item">
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li className="item">
                    <Link to="/add-recipe">Add Recipe</Link>
                </li>
                <li className="item">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;