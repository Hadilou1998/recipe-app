import React, { useContext } from "react"; // Importation de React et du hook useContext
import RecipeContext from "../RecipeContext/Context"; // Importation de RecipeContext depuis le fichier de contexte
import RecipeList from "../Recipe/RecipeList"; // Importation du composant RecipeList

const RecipeDetail = () => { // Définition du RecipeDetail en tant que composant React
    
    const context = useContext(RecipeContext); // Utilisation du hook useContext pour accéder à RecipeContext

    const deleteRecipe = (index: number) => {
        context.deleteFavoriteRecipe(index); // Appel de la fonction deleteFavoriteRecipe dans RecipeContext
    }

    return (
        <RecipeList recipes={context.favorites} deleteRecipe={deleteRecipe} /> // Affichage des recettes favorites dans une liste    
    );
};

export default RecipeDetail; // Exportation du composant RecipeDetail comme exportation par défaut