import React, { useState, useEffect, useContext } from "react"; // Importation des hooks et fonctions nécessaires de React
import { RecipeContext, RecipeProvider } from "./RecipeContext/Context"; // Importation de RecipeContext et RecipeProvider depuis le fichier de contexte
import RecipeDetail from "./Recipe/RecipeDetail"; // Importation du composant RecipeDetail
import RecipeList from "./Recipe/RecipeList"; // Importation du composant RecipeList

const Favorites = () => {
    const context = useContext(RecipeContext);

    return (
        <div className="favorite-container">
            <h1>Mes recettes favorites :</h1>
            {context.favoriteRecipe.map((recipe: any, index: number) => (
                <div key={index} className="favorite-recipe">
                    <RecipeList 
                        recipes={[recipe]}
                        deleteRecipe={() => context.deleteFavorite(index)}
                    />
                </div>
            ))}
        </div>
    );
}

export default Favorites; // Exportation du composant Favorites comme exportation par défaut