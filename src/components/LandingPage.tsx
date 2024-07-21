import Favorites from "./FavoritesRecipes"; // Importation du composant Favorites
import BoxLoading from "react-loading"; // Importation du composant BoxLoading pour l'affichage de la page de chargement
import RecipeContext from "./RecipeContext/Context"; // Importation du contexte RecipeContext
import { useContext } from "react"; // Importation du contexte
import Footer from "./Footer"; // Importation du composant Footer
import Contact from "./Contact"; // Importation du composant Contact

export default function LandingPage() { // Définition du composant LandingPage
    const context = useContext(RecipeContext); // Utilisation du contexte RecipeContext pour accéder aux données et aux fonctions

    return ( // Rendu du composant
        <div className="landingPage"> {/* Conteneur principal pour la page d'accueil */}
            {context.isLoading ? ( // Affichage de la page de chargement si les données sont en cours de chargement
                <div className="loading">
                    <BoxLoading type="spinningBubbles" color="#111" height={100} width={100} /> {/* Affichage du composant BoxLoading pour la page de chargement */}
                </div>
            ) : (
                <div className="landingPage">
                    <Favorites /> {/* Affichage du composant Favorites pour les recettes favorites */}
                    <Contact /> {/* Affichage du composant Contact pour les informations de contact */}
                    <Footer /> {/* Affichage du composant Footer pour les informations de copyright */}
                </div>
            )}
        </div>
    );
};