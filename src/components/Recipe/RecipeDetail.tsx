import React, { useContext } from "react"; // Importation de React et du hook useContext
import RecipeContext from "../RecipeContext/Context"; // Importation de RecipeContext depuis le fichier de contexte

function RecipeDetail({ recipe, handleRecipe }: { recipe: {
    name: string;
    cuisine: string;
    photo: string;
    ingredients: string[];
    preparation: string[];
    id: number; // Added id property
}, handleRecipe: (id: number) => void }){ // Modification du type de props pour inclure handleRecipe

    const { addToFavorites } = useContext(RecipeContext); 
    
    if (!recipe) {
        return <div>Aucune recette sélectionnée</div>;
    }

    return (
        <div className="recipe-list">
            <table>
                <thead>
                    <tr className="header-row">
                        <th>Nom</th>
                        <th>Cuisine</th>
                        <th>Photo</th>
                        <th>Ingrédients</th>
                        <th>Préparation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recipe && (
                        <tr key={recipe.id}>
                            <td>{recipe.name}</td>
                            <td>{recipe.cuisine}</td>
                            <td><img src={recipe.photo} alt={recipe.name} width="100" height="100" /></td>
                            <td>
                                <p>{recipe.ingredients.join(", ")}</p>
                            </td>
                            <td>
                                <p>{recipe.preparation.join(", ")}</p>
                            </td>
                            <td><button onClick={() => addToFavorites(recipe)}>Ajouter aux favoris</button></td>
                            <td><button onClick={() => handleRecipe(recipe.id)}>Supprimer</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default RecipeDetail; // Exportation du composant RecipeDetail comme exportation par défaut