import React, { useContext } from "react";
import RecipeIngredient from "./RecipeIngredient";
import { RecipeContext } from "../RecipeContext/Context";

function RecipeList({ recipes, deleteRecipe }: { recipes: any[], deleteRecipe: (index: number) => void }) {
    const handleDelete = (index: number) => {
        deleteRecipe(index);
    };

    return (
        <div className="recipe-list">
            {recipes.map((recipe, index) => (
                <div key={index} className="recipe">
                    <h2>{recipe.name}</h2>
                    <img src={recipe.photo} alt={recipe.name} />
                    <p>Cuisine: {recipe.cuisine}</p>
                    <p>Préparation: {recipe.preparation}</p>
                    <RecipeIngredient ingredients={recipe.ingredients} />
                    <button onClick={() => handleDelete(index)}>Supprimer</button>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;