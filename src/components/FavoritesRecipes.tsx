import React, { useContext } from "react"; // Importation des hooks et fonctions nécessaires de React
import { useParams } from "react-router-dom" // Importation des hooks et fonctions nécessaires de React par défaut
import RecipeContext from "./RecipeContext/Context"; // Importation de RecipeContext et RecipeProvider depuis le fichier de contexte
import RecipeDetail from "./Recipe/RecipeDetail"; // Importation du composant RecipeDetail
import RecipeList from "./Recipe/RecipeList"; // Importation du composant RecipeList


interface Favorite {
    id: number;
    name: string;
    cuisine: string;
    photo: string;
    ingredients: string[];
    preparation: string[];
}

// Composant Favorites qui affiche les recettes favorites et les détails d'une recette en fonction de l'ID passé dans l'URL
const Favorites: React.FC = () => {
    const context = useContext(RecipeContext); // Utilisation du hook useContext pour accéder à RecipeContext
    const { id } = useParams<{ id: string }>(); // Récupération de l'ID passé dans l'URL

    const addToFavorites = (favorite: Favorite) => {
        context.addFavoriteRecipe(favorite); // Appel de la fonction addFavoriteRecipe dans RecipeContext
    }

    return (
        <div className="favorite-container">
            <h2>Mes favoris</h2>
            <RecipeList recipes={context.favorites} deleteRecipe={context.removeFavoriteRecipe} addToFavorites={addToFavorites} />
        </div>
    )
};

export default Favorites; // Exportation du composant Favorites comme exportation par défaut