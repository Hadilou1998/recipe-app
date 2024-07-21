import React, { useState } from "react";
import Data from "./Data";

const Favorites = () => {
    const [recipes, setRecipes] = useState(Data);

    return (
        <div className="favorite-container">
            <h1>Mes recettes favorites :</h1>
            <div className="favorite-recipe">
                {recipes.map((recipe, index) => (
                    <div key={index} className="favorite-card">
                        <div className="favorite-image">
                            <img src={recipe.photo} alt={recipe.name} />
                        </div>
                        <div className="favorite-content">
                            <h2>{recipe.name}</h2>
                            <p>{recipe.cuisine}</p>
                            <p>{recipe.ingredients}</p>
                            <p>{recipe.preparation}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites;