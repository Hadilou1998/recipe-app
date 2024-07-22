import React, { useContext } from "react"; // Importation de React et du hook useContext
import { useParams } from "react-router-dom"; // Importation du hook useParams de react-router-dom
import RecipeContext from "../RecipeContext/Context"; // Importation de RecipeContext depuis le fichier de contexte
import { Recipe } from "../FavoritesRecipes"; // Importation de la structure de données Recipe

interface RecipeDetailProps {
    id: number; // ID de la recette
    addToFavorites: (recipe: Recipe) => void; // Fonction pour ajouter une recette à
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ addToFavorites }) => { // Définition du composant RecipeDetail avec props

    const context = useContext(RecipeContext); // Utilisation du hook useContext pour accéder à RecipeContext
    
    return ( // Retourne le JSX à rendre
        <div className="favorite-container"> {/* Wrapper autour des détails de la recette */}
            {context.loading ? ( // Vérifie si les données sont en cours de chargement
                <div>Loading...</div> // Affiche un message de chargement si les données ne sont pas encore disponibles
            ) : ( // Sinon, affiche les détails de la recette
                <div className="favorite-recipe"> {/* Wrapper autour des détails de la recette */}
                    <div> {/* Div pour l'image de la recette */}
                        <img src={context.recipeDetail.photo} alt={context.recipeDetail.name} /> {/* Affiche l'image de la recette */}
                    </div>
                    <div> {/* Div pour les détails de la recette */}
                        <h1>{context.recipeDetail.name}</h1> {/* Affiche le nom de la recette */}
                        <p>Cuisine: {context.recipeDetail.cuisine}</p> {/* Affiche la cuisine de la recette */}
                        <p>Ingredients: {context.recipeDetail.ingredients.join(", ")}</p> {/* Affiche les ingrédients de la recette */}
                        <p>Preparation: {context.recipeDetail.preparation}</p> {/* Affiche la préparation de la recette */}
                    </div>
                    <button onClick={() => addToFavorites(context.recipeDetail)}>Ajouter à mes favorites</button> {/* Bouton pour ajouter la recette à la liste des favorites */}
                </div>
            )}
        </div>
    );
}

export default RecipeDetail; // Exportation du composant RecipeDetail comme exportation par défaut