import React, { useContext, useEffect, useState } from "react"; // Importation des hooks et fonctions nécessaires de React
import { useParams } from "react-router-dom" // Importation des hooks et fonctions nécessaires de React par défaut
import { RecipeContext } from "./RecipeContext/Context"; // Importation de RecipeContext et RecipeProvider depuis le fichier de contexte
import RecipeDetail from "./Recipe/RecipeDetail"; // Importation du composant RecipeDetail
import RecipeList from "./Recipe/RecipeList"; // Importation du composant RecipeList

const FavoritesRecipes = ({ recipes, removeFavorite }: { recipes: any[], removeFavorite: (index: number) => void }) => {
  // Utilisation du contexte RecipeContext
  const context = useContext(RecipeContext);
  const [favorites, setFavorites] = useState<any[]>([]);

  // Utilisation du hook useEffect pour mettre à jour les favoris lorsque les favoris sont modifiés
  useEffect(() => {
    setFavorites(context.favorites);
  }, [context.favorites]);

  // Utilisation du hook useParams pour récupérer l'ID de la recette à afficher
  const { id } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id || ""));

  const handleRecipe = (id: number) => {
    // Implement the handleRecipe function here
    console.log(`Handling recipe with id: ${id}`);
  };

  if (selectedRecipe) {
    return (
      <div className="recipe-container">
        <RecipeDetail recipe={selectedRecipe} handleRecipe={handleRecipe} />
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="favorite-container">
        <h1>Mes recettes favorites</h1>
        <p>Vous n'avez pas encore ajouté de recette à vos favoris.</p>
      </div>
    );
  }
  // Si aucune recette n'est sélectionnée, afficher la liste des favoris
  // et les actions de suppression
// Utilisation du contexte RecipeContext pour accéder aux favoris et à la fonction de suppression
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
            <th>Ingredients</th>
            <th>Préparation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {context.favorites.map((recipe: any, index: number) => (
            <tr key={index} className={recipe.name === "Pizza au chou-fleur" ? "pizza" : recipe.name === "Galette de haricots rouges" ? "galette" : ""}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img src={recipe.image} alt={recipe.name} />
              </td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
              <td><button onClick={() => context.deleteRecipe(index)}>Supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoritesRecipes;