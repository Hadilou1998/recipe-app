import React, { useState, useEffect, useContext } from "react";
import { RecipeContext, RecipeProvider } from "./RecipeContext/Context";
import RecipeDetail from "./Recipe/RecipeDetail";
import RecipeList from "./Recipe/RecipeList";

const Favorites = () => {

    const context = useContext(RecipeContext);

    return (
        <div className="favorite-container">
            <h1>Mes recettes favorites :</h1>
            {context.favorites.slice(0, 4).map((recipe: any, index: number) => (
                <div key={index} className="favorite-recipe">
                    <RecipeList 
                    recipes={[recipe]}
                    deleteRecipe={() => context.deleteFavorite(index)}
                    />
                </div>
            ))}
        </div>
    );
}

export default Favorites;