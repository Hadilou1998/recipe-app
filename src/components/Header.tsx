import { Link } from "react-router-dom"; // Importation de Link pour les liens de navigation

const Header = () => { // Définition du composant Header
    return ( // Rendu du composant
        <nav> {/* Navigation principale */}
            <ul className="menu"> {/* Liste de liens de navigation */}
                <li className="logo"> {/* Logo de l'application */}
                    <Link to="/">RECIPE APP</Link>
                </li> 
                <li className="item"> 
                    <Link to="/">Home</Link> {/* Lien vers la page d'accueil */}
                </li>
                <li className="item"> 
                    <Link to="/recipes">Recipes</Link> {/* Lien vers la page des recettes */}
                </li>
                <li className="item">
                    <Link to="/favorites">Favorites</Link> {/* Lien vers la page des recettes favorites */}
                </li>
                <li className="item">
                    <Link to="/add-recipe">Add Recipe</Link> {/* Lien vers la page d'ajout de recette */}
                </li>
                <li className="item">
                    <Link to="/about">About</Link> {/* Lien vers la page " propos" */}
                </li>
            </ul>
        </nav>
    );
};

export default Header; // Exportation du composant Header comme exportation par défaut