// Importe React et le hook useState
import React, { useState } from 'react';

// Définit l'interface pour une recette
interface Recipe {
    name: string;
    cuisine: string;
    photo: string;
    ingredients: string[];
    preparation: string[];
}

// Définit les props du composant RecipeForm
interface RecipeFormProps {
    addRecipe: (recipe: Recipe) => void;
}

// Définit le composant RecipeForm
const RecipeForm: React.FC<RecipeFormProps> = ({ addRecipe }) => {
    // Initialise les états pour chaque champ du formulaire
    const [name, setName] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [photo, setPhoto] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');

    // Gère la soumission du formulaire
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Crée un nouvel objet recette
        const newRecipe: Recipe = {
            name,
            cuisine,
            photo,
            ingredients: ingredients.split(','),
            preparation: preparation.split(',')
        };
        // Appelle la fonction addRecipe avec la nouvelle recette
        addRecipe(newRecipe);
    }

    // Rendu du composant
    return (
        <div className="recipe-create">
            <form name='create' onSubmit={handleSubmit}>
                <div className="create-input-container">
                    {/* Champ pour le nom de la recette */}
                    <div className="half-input">
                        <label>Nom de la recette:</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
                    </div>
                    {/* Champ pour le type de cuisine */}
                    <div className="half-input">
                        <label>Cuisine:</label>
                        <input type="text" name="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder='Cuisine'/>
                    </div>
                    {/* Champ pour l'URL de la photo */}
                    <div className="half-input">
                        <label>Photo:</label>
                        <input type="text" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder='Photo URL'/>
                    </div>
                    {/* Champ pour les ingrédients */}
                    <div className="half-input">
                        <label>Ingrédients:</label>
                        <textarea name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder='Ingredients'/>
                    </div>
                    {/* Champ pour les étapes de préparation */}
                    <div className="half-input">
                        <label>Préparation:</label>
                        <textarea name="preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)} placeholder='Preparation'/>
                    </div>
                    {/* Bouton pour soumettre le formulaire */}
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
};

// Exporte le composant RecipeForm
export default RecipeForm;