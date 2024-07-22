import React, { useContext } from "react";
import { RecipeContext } from "../RecipeContext/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function RecipeList({ recipes, deleteRecipe }: { recipes: any[], deleteRecipe: (index: number) => void }) {

    const context = useContext(RecipeContext);

    const handleDelete = (index: number) => {
        deleteRecipe(index);
    };

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
                        {recipes.map((recipe, index) => (
                            <tr key={index} className={recipe.name === "Pizza au chou-fleur" ? "pizza" : recipe.name === "Galette de haricots rouges" ? "galette" : ""}>
                                <td>{recipe.name}</td>
                                <td>{recipe.cuisine}</td>
                                <td><img src={recipe.photo} alt={recipe.name} width="100" height="100" /></td>
                                <td>{recipe.ingredients.join(", ")}</td>
                                <td>{recipe.preparation}</td>
                                <td><button onClick={() => handleDelete(index)}>Supprimer</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

    return (
        <div className="recipe-list">
            <h2>Mes recettes</h2>
            <div className="search-bar">
                <input type="text" placeholder="Rechercher une recette..." />
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <div className="recipe-item">
                            <div className="recipe-image">
                                <img src={recipe.image} alt={recipe.name} />
                            </div>
                            <div className="recipe-details">
                                <h3>{recipe.name}</h3>
                                <p>{recipe.description}</p>
                                <button onClick={() => handleDelete(index)}>Supprimer</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;