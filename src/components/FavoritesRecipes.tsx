import React, { useContext, useEffect, useState } from "react"; // Importation des hooks et fonctions nécessaires de React
import { useParams } from "react-router-dom" // Importation des hooks et fonctions nécessaires de React par défaut
import { RecipeContext } from "./RecipeContext/Context"; // Importation de RecipeContext et RecipeProvider depuis le fichier de contexte
import RecipeDetail from "./Recipe/RecipeDetail"; // Importation du composant RecipeDetail
import RecipeList from "./Recipe/RecipeList"; // Importation du composant RecipeList

const FavoritesRecipes = () => {
    const context = useContext(RecipeContext);

  return (
    <div className="favorite-container">
      {context.favoriteRecipe.slice(0, 4).map((recipe: any, index: number) => (
        <div key={index} className="favorite-recipe">
          <RecipeList
            recipes={[recipe]}
            deleteRecipe={() => {}}
            addToFavorites={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default FavoritesRecipes;