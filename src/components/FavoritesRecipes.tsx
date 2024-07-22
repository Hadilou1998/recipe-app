import React, { useContext } from "react"; // Importation des hooks et fonctions nécessaires de React
import { useParams } from "react-router-dom" // Importation des hooks et fonctions nécessaires de React par défaut
import RecipeContext from "./RecipeContext/Context"; // Importation de RecipeContext et RecipeProvider depuis le fichier de contexte
import RecipeDetail from "./Recipe/RecipeDetail"; // Importation du composant RecipeDetail
import RecipeList from "./Recipe/RecipeList"; // Importation du composant RecipeList


// Composant Favorites qui affiche les recettes favorites et les détails d'une recette en fonction de l'ID passé dans l'URL
function Favorites() {
    const context = useContext(RecipeContext); // Utilisation du hook useContext pour accéder à RecipeContext
    const { id } = useParams(); // Utilisation du hook useParams pour récupérer l'ID de la recette passé dans l'URL

    // fonction pour supprimer une recette de l'état favorites
    const deleteRecipe = (index: number) => {
        context.deleteFavoriteRecipe(index); // Appel de la fonction deleteFavoriteRecipe dans RecipeContext
    }

    // Si aucune recette n'est présente dans l'état favorites, on affiche un message d'erreur
    if (context.favorites.length === 0) {
        return (
            <div>
                <h2>Favorites</h2>
                <p>No favorite recipes found.</p>
            </div>
        );
    }
};

export default Favorites; // Exportation du composant Favorites comme exportation par défaut