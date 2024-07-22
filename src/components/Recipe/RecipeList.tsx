import React, { useContext } from "react";
import { RecipeContext } from "../RecipeContext/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function RecipeList({ recipes, deleteRecipe, addToFavorites }: { recipes: any[], deleteRecipe: (index: number) => void, addToFavorites: (index: number) => void }) {

    const context = useContext(RecipeContext);

    const handleRecipe = (index: number) => {
        deleteRecipe(index);
    };

    const handleFavorite = (index: number) => {
        addToFavorites(index);
    }

    return (
        <div>
            <form onSubmit={(e) => context.searchRecipes} className="search-form">
                <input type="text" className="search-bar" name="name" placeholder="Rechercher une recette..." onChange={(e) => context.updateSearch(e)} value={context.search} />
                <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faSearch} fixedWidth />
                </button>
            </form>
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

export default RecipeList;