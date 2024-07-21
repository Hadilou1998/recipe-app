import React, { useContext } from "react";
import RecipeIngredient from "./RecipeIngredient";

function RecipeList({ recipes, deleteRecipe }: { recipes: any[], deleteRecipe: (index: number) => void }) {

    const handleDelete = (index: number) => {
        deleteRecipe(index);
    };

    return (
        <div className="recipe-list">
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
                    {recipes.map((recipe, index) => (
                        <tr key={index} className={recipe.name === "Pizza" ? "pizza" : recipe.name === "Burrito" ? "burrito" : ""}>
                            <td>{recipe.name}</td>
                            <td>{recipe.cuisine}</td>
                            <td><img src={recipe.photo} alt={recipe.name} width="100" height="100"/></td>
                            <td className="content_td">
                                <p>{recipe.ingredients}</p>
                            </td>
                            <td className="content_td">
                                <p>{recipe.preparation}</p>
                            </td>
                            <td>
                                <button className="delete" onClick={() => handleDelete(index)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecipeList;