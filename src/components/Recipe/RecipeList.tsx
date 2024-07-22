// Importation des dépendances nécessaires
import React, { useContext } from "react";
import { RecipeContext } from "../RecipeContext/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Définition du composant RecipeList avec ses props
function RecipeList({ recipes, deleteRecipe, addToFavorites }: { recipes: any[], deleteRecipe: (index: number) => void, addToFavorites: (index: number) => void }) {

    // Utilisation du contexte RecipeContext
    const context = useContext(RecipeContext);

    // Fonction pour gérer la suppression d'une recette
    const handleRecipe = (index: number) => {
        deleteRecipe(index);
    };

    // Fonction pour gérer l'ajout d'une recette aux favoris
    const handleFavorite = (index: number) => {
        addToFavorites(index);
    }

    return (
        <div>
            {/* Formulaire de recherche */}
            <form onSubmit={(e) => context.searchRecipes} className="search-form">
                <input type="text" className="search-bar" name="name" placeholder="Rechercher une recette..." onChange={(e) => context.updateSearch(e)} value={context.search} />
                <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faSearch} fixedWidth />
                </button>
            </form>
            {/* Liste des recettes */}
            <div className="recipe-list">
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
                        {/* Mapping des recettes pour créer les lignes du tableau */}
                        {recipes.map((recipe: any, index: number) => (
                            <tr key={index} className={recipe.name === "Pizza au chou-fleur" ? "pizza" : recipe.name === "Galette de haricots rouges" ? "galette" : ""}>
                                <td>{recipe.name}</td>
                                <td>{recipe.cuisine}</td>
                                <td><img src={recipe.photo} alt={recipe.name} width="100" height="100" /></td>
                                <td className="content_td">
                                    <p>{recipe.ingredients.join(", ")}</p>
                                </td>
                                <td className="content_td">
                                    <p>{recipe.preparation}</p>
                                </td>
                                <td><button onClick={() => handleRecipe(index)}>Supprimer</button></td>
                                <td><button onClick={() => handleFavorite(index)}>Ajouter à mes favoris</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Exportation du composant RecipeList
export default RecipeList;