// Importation de React et du hook useContext
import React, { useContext } from "react";
// Importation de RecipeContext depuis le fichier de contexte
import RecipeContext from "../RecipeContext/Context";

// Définition du composant RecipeDetail avec ses props typées
function RecipeDetail({ recipe, handleRecipe }: { recipe: {
    name: string;
    cuisine: string;
    photo: string;
    ingredients: string[];
    preparation: string[];
    id: number;
}, handleRecipe: (id: number) => void }){

    // Extraction de la fonction addToFavorites du contexte
    const { addToFavorites } = useContext(RecipeContext);

    // Fonction pour ajouter une recette aux favoris
    const handleAddToFavorites = () => {
        addToFavorites(recipe.id);
    }
    
    // Vérification si une recette est sélectionnée
    if (!recipe) {
        return <div>Aucune recette sélectionnée</div>;
    }

    // Rendu du composant
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
                            <td><button onClick={handleAddToFavorites}>Ajouter aux favoris</button></td>
                            <td><button onClick={() => handleRecipe(recipe.id)}>Supprimer</button></td>                        
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// Exportation du composant RecipeDetail
export default RecipeDetail;