import React, { useContext } from "react"; // Importation des hooks et fonctions nécessaires de React
import { useParams } from "react-router-dom" // Importation des hooks et fonctions nécessaires de React par défaut
import RecipeContext from "./RecipeContext/Context"; // Importation de RecipeContext et RecipeProvider depuis le fichier de contexte
import RecipeDetail from "./Recipe/RecipeDetail"; // Importation du composant RecipeDetail
import RecipeList from "./Recipe/RecipeList"; // Importation du composant RecipeList

export interface Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    isFavorite: boolean;
}

// Composant Favorites qui affiche les recettes favorites et les détails d'une recette en fonction de l'ID passé dans l'URL
function Favorites() {
    const { id } = useParams<{ id: string }>(); // Récupération de l'ID de la recette depuis l'URL
    const context = useContext(RecipeContext); // Récupération du contexte RecipeContext


    // Fonction pour supprimer une recette de la liste des favorites
    const deleteRecipe = (index: number) => {
        context.deleteRecipe(index); // Appel de la fonction deleteRecipe du contexte pour supprimer la recette de la liste des favorites
    }

    // Retourne le JSX à afficher selon les conditions ci-dessus
    return (
        <div className="container">
            {id? (
                <RecipeDetail id={parseInt(id)} addToFavorites={context.addToFavorites} />
            ) : (
                <RecipeList recipes={context.favoriteRecipe} deleteRecipe={deleteRecipe} />
            )}
        </div>
    );
};

export default Favorites; // Exportation du composant Favorites comme exportation par défaut