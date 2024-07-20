import React, { useContext } from "react";
import RecipeIngredient from "./RecipeIngredient";
import { RecipeContext } from "../RecipeContext/Context";

const RecipeList = () => {
    const { recipes } = useContext(RecipeContext);

    return (
        <div className="recipe-container">
            <h2>Liste des recettes</h2>
            {recipes.map((recipe: {
                id: string | number,
                name: string,
                photo: string,
                cuisine: string,
                preparation: string,
                ingredients: any[]
            }) => (
                <div key={recipe.id} className="recipe-card">
                    <h3>{recipe.name}</h3>
                    <img src={recipe.photo} alt={recipe.name} />
                    <p>Cuisine: {recipe.cuisine}</p>
                    <p>Préparation: {recipe.preparation}</p>
                    <RecipeIngredient ingredients={recipe.ingredients} />
                </div>
            ))}
        </div>
    );
};

export default RecipeList;