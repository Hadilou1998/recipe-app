import React, { useContext, useEffect, useState } from "react"; // Importation des hooks et fonctions nécessaires de React
import { useParams } from "react-router-dom" // Importation des hooks et fonctions nécessaires de React par défaut
import { RecipeContext } from "./RecipeContext/Context"; // Importation de RecipeContext et RecipeProvider depuis le fichier de contexte
import RecipeDetail from "./Recipe/RecipeDetail"; // Importation du composant RecipeDetail
import RecipeList from "./Recipe/RecipeList"; // Importation du composant RecipeList

const FavoritesRecipes = ({ recipes, removeFavorite }: { recipes: any[], removeFavorite: (index: number) => void }) => {
  // Utilisation du contexte RecipeContext
  const context = useContext(RecipeContext);
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    if (context) {
      setFavorites(context.favorites);
    }
  }, [context]);

  if (!favorites || favorites.length === 0) {
    return (
      <div className="favorite-container">
        <h1>Mes recettes favorites</h1>
        <p>Vous n'avez pas encore de recettes favorites.</p>
      </div>
    );
  }

  return (
    <div className="favorite-container">
      <h1>Mes recettes favorites</h1>
      <p>Voici la liste de vos recettes favorites :</p>
      <table>
        <thead>
          <tr className="header-row">
            <th>Nom</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingrédients</th>
            <th>Préparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((recipe, index) => (
            <tr key={recipe.id}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img src={recipe.photo} alt={recipe.name} width="100" height="100" /></td>
              <td>
                <p>{recipe.ingredients.join(", ")}</p>
              </td>
              <td>
                <p>{recipe.preparation.join(", ")}</p>
              </td>
              <td><button onClick={() => removeFavorite(index)}>Supprimer des favoris</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ); 
};

export default FavoritesRecipes;