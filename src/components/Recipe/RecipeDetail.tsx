import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import RecipeContext from "../RecipeContext/Context";

const RecipeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const context = useContext(RecipeContext);
    
    return (
        <div className="favorite-container">
            {context.loading ? (
                <div>Loading...</div>
            ) : (
                <div className="favorite-recipe">
                    <div>
                        <img src={context.recipeDetail.photo} alt={context.recipeDetail.name} />
                    </div>
                    <div>
                        <h1>{context.recipeDetail.name}</h1>
                        <p>Cuisine: {context.recipeDetail.cuisine}</p>
                        <p>Ingredients: {context.recipeDetail.ingredients.join(", ")}</p>
                        <p>Preparation: {context.recipeDetail.preparation}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecipeDetail;