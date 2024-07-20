import RecipeContext from "./RecipeContext/Context";
import React, { useContext, useEffect, useState } from "react";
import RecipeDetail from "./Recipe/RecipeDetail";
import RecipeList from "./Recipe/RecipeList";

const Favorites = () => {
    const context = useContext(RecipeContext);

    return (
        <div className="favorite-container">
            {context.favorites.slice(0, 3).map((recipe: any, index: number) => (
                <div className="favorite-recipe" key={index}>
                    <img src={recipe.photo} alt={recipe.name} />
                    <h3>{recipe.name}</h3>
                    <p>{recipe.cuisine}</p>
                    <p>{recipe.ingredients.join(", ")}</p>
                    <p>{recipe.preparation}</p>
                </div>
            ))}
        </div>
    );
}

export default Favorites;