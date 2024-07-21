import React, { useState, useEffect, useContext } from "react"; // Importation des hooks et fonctions nécessaires de React
import { RecipeContext, RecipeProvider } from "./RecipeContext/Context"; // Importation de RecipeContext et RecipeProvider depuis le fichier de contexte
import RecipeDetail from "./Recipe/RecipeDetail"; // Importation du composant RecipeDetail
import RecipeList from "./Recipe/RecipeList"; // Importation du composant RecipeList

const Favorites = () => { // Définition du composant fonctionnel Favorites

    const context = useContext(RecipeContext); // Utilisation du hook useContext pour accéder à RecipeContext

    return ( // Retourne le JSX à rendre
        <div className="favorite-container"> // Div conteneur pour les recettes favorites
            <h1>Mes recettes favorites :</h1> // Titre de la section des recettes favorites
            {context.favorites.slice(0, 4).map((recipe: any, index: number) => ( // Parcours des 4 premières recettes favorites
                <div key={index} className="favorite-recipe"> // Div pour chaque recette favorite avec une clé unique
                    <RecipeList 
                    recipes={[recipe]} // Passage de la recette en tant que tableau au composant RecipeList
                    deleteRecipe={() => context.deleteFavorite(index)} // Passage d'une fonction pour supprimer la recette des favorites
                    />
                </div>
            ))}
        </div>
    );
}

export default Favorites; // Exportation du composant Favorites comme exportation par défaut