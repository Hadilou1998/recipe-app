import React, { useState } from 'react';

interface Recipe {
    name: string;
    cuisine: string;
    photo: string;
    ingredients: string;
    preparation: string;
}

const RecipeForm = ({ handleAddRecipe }: { handleAddRecipe: (recipe: Recipe) => void }) => {
    const [recipe, setRecipe] = useState<Recipe>({
        name: "",
        cuisine: "",
        photo: "",
        ingredients: "",
        preparation: ""
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRecipe({
            ...recipe,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddRecipe(recipe);
        setRecipe({
            name: "",
            cuisine: "",
            photo: "",
            ingredients: "",
            preparation: ""
        });
    }

    return (
        <div className="recipe-create">
            <form name='create' onSubmit={handleSubmit}>
                <div className="create-input-container">
                    <div className="half-input">
                        <label>Nom de la recette:</label>
                        <input type="text" name="name" value={recipe.name} onChange={handleChange} placeholder='Name'/>
                    </div>
                    <div className="half-input">
                        <label>Cuisine:</label>
                        <input type="text" name="cuisine" value={recipe.cuisine} onChange={handleChange} placeholder='Cuisine'/>
                    </div>
                    <div className="half-input">
                        <label>Photo:</label>
                        <input type="text" name="photo" value={recipe.photo} onChange={handleChange} placeholder='Photo URL'/>
                    </div>
                    <div className="half-input">
                        <label>Ingrédients:</label>
                        <input type="text" name="ingredients" value={recipe.ingredients} onChange={handleChange} placeholder='Ingredients'/>
                    </div>
                    <div className="half-input">
                        <label>Préparation:</label>
                        <textarea name="preparation" value={recipe.preparation} onChange={handleChange} placeholder='Preparation'/>
                    </div>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>   
    );
};

export default RecipeForm;