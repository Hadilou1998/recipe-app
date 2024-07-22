import React, { useContext } from "react"; // Importation de React et du hook useContext
import RecipeContext from "../RecipeContext/Context"; // Importation de RecipeContext depuis le fichier de contexte

interface Ingredient {
    name: string;
    quantity: string;
    unit: string;
}

interface RecipeProps {
    name: string;
    cuisine: string;
    photo: string;
    ingredients: Ingredient[];
    preparation: string;
}

const RecipeDetail: React.FC<RecipeProps> = ({ name, cuisine, photo, ingredients, preparation }) => { // Déclaration du composant RecipeDetail avec des props
    return ( // Définition du composant RecipeDetail en JSX
        <div className="favorite-container"> {/* Affichage des détails de la recette */}
            <h2>{name}</h2> {/* Affichage du nom de la recette */}
            <h3>Cuisine: {cuisine}</h3> {/* Affichage de la cuisine de la recette */}
            <div className="favorite-recipe"> {/* Affichage de l'image de la recette */}
                <img src={photo} alt={name} />
            </div>
            <h4>Ingredients:</h4> {/* Affichage des ingrédients de la recette */}
            <ul> {/* Affichage des détails des ingrédients */}
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name} - {ingredient.quantity}</li>
                ))}
            </ul>
            <h4>Préparation:</h4> {/* Affichage de la préparation de la recette */}
            <p>{preparation}</p>
            <button onClick={() => { // Action lors du clic sur le bouton "Ajouter à mes favoris"
                // Récupération du contexte RecipeContext
                const context = useContext(RecipeContext);
                // Ajout de la recette à la liste des favoris
                context.addFavoriteRecipe({ name, cuisine, photo, ingredients, preparation });
                // Affichage du message de confirmation
                console.log("Recette ajoutée à vos favoris");
            }}>Ajouter à mes favoris</button> {/* Bouton "Ajouter à mes favoris" */}
        </div>
    );
};

export default RecipeDetail; // Exportation du composant RecipeDetail comme exportation par défaut