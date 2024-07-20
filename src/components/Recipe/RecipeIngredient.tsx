import React from "react";

const RecipeIngredient: React.FC<{ ingredients: { text: string }[] }> = ({ ingredients }) => {
    return (
        <ul className="ingredient-list">
            {ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-text">{ingredient.text}</li>
            ))}
        </ul>
    )
}

export default RecipeIngredient;