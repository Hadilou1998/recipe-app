import React, { useState } from 'react';

interface Recipe {
    id: number;
    name: string;
    cuisine: string;
    photo: string;
    ingredients: string[];
    preparation: string[];
}

interface RecipeFormProps {
    addRecipe: (recipe: Recipe) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ addRecipe }) => {
    const [name, setName] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [photo, setPhoto] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newRecipe: Recipe = {
            id: 0,
            name,
            cuisine,
            photo,
            ingredients: ingredients.split(','),
            preparation: preparation.split(',')
        };
        addRecipe(newRecipe);
    }

    return (
        <div className="recipe-create">
            <form name='create' onSubmit={handleSubmit}>
                <div className="create-input-container">
                    <div className="half-input">
                        <label>Nom de la recette:</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
                    </div>
                    <div className="half-input">
                        <label>Cuisine:</label>
                        <input type="text" name="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder='Cuisine'/>
                    </div>
                    <div className="half-input">
                        <label>Photo:</label>
                        <input type="text" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder='Photo'/>
                    </div>
                    <div className="half-input">
                        <label>Ingrédients:</label>
                        <textarea name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder='Ingredients'/>
                    </div>
                    <div className="half-input">
                        <label>Préparation:</label>
                        <textarea name="preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)} placeholder='Preparation'/>
                    </div>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default RecipeForm;