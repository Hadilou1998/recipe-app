import React, { useContext, useEffect, useState } from "react"; // Importation des hooks et fonctions nécessaires de React
import { useParams } from "react-router-dom" // Importation des hooks et fonctions nécessaires de React par défaut
import { RecipeContext } from "./RecipeContext/Context"; // Importation de RecipeContext et RecipeProvider depuis le fichier de contexte
import RecipeDetail from "./Recipe/RecipeDetail"; // Importation du composant RecipeDetail
import RecipeList from "./Recipe/RecipeList"; // Importation du composant RecipeList

const FavoritesRecipes = () => {
    const context = useContext(RecipeContext);

  return (
    <div className="favorite-container">
      <h1>Mes recettes favorites</h1>
      <p>Voici les recettes que vous avez ajoutées aux favoris :</p>
      {context.favoriteRecipe.slice(0, 4).map((recipe: any, index: number) => (
        <div key={index} className="favorite-recipe">
          <table>
            <tbody>
              <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} alt={recipe.name} width="100" height="100" /></td>
                <td>
                  <p>{recipe.ingredients.join(", ")}</p>
                </td>
                <td>
                  <p>{recipe.preparation.join(", ")}</p>
                </td>
              </tr>
            </tbody>
          </table>
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