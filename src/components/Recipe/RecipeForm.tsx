import React, { useState } from 'react';
import Recipe from '../../App';

export interface Recipe {
    id: number;
    name: string;
    cuisine: string;
    photo: string;
    ingredients: string[];
    preparation: string;
}

interface RecipeFormProps {
    handleAddRecipe: (recipe: Recipe) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ handleAddRecipe }) => {

    const initialFormState: Recipe = {
        id: 0,
        name: "",
        cuisine: "",
        photo: "",
        ingredients: [],
        preparation: ""
    }

    const [formData, setFormData] = useState(initialFormState);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "ingredients") {
            setFormData({
                ...formData,
                [name]: value.split(',').map(ingredient => ingredient.trim())
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const recipe: Recipe = {
            ...formData,
            id: Date.now(),
            ingredients: formData.ingredients.join('/').split(',').map(ingredient => ingredient.trim())
        }
        handleAddRecipe(recipe);
        console.log(recipe);
        setFormData({
            ...initialFormState
        });
    }

    return (
        <div className="recipe-container">
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                            </td>
                            <td>
                                <label htmlFor="cuisine">Cuisine:</label>
                                <input type="text" id="cuisine" name="cuisine" value={formData.cuisine} onChange={handleChange} />
                            </td>
                            <td>
                                <label htmlFor="photo">Photo:</label>
                                <input type="url" id="photo" name="photo" value={formData.photo} onChange={handleChange} />
                            </td>
                            <td>
                                <label htmlFor="ingredients">Ingredients:</label>
                                <textarea id="ingredients" name="ingredients" value={formData.ingredients.join(', ')} onChange={handleChange} />
                            </td>
                            <td>
                                <label htmlFor="preparation">Preparation:</label>
                                <textarea id="preparation" name="preparation" value={formData.preparation} onChange={handleChange} />
                            </td>
                            <td>
                                <button type="submit">Create</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>   
    )
};

export default RecipeForm;