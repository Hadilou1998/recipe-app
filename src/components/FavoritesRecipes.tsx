import React, { useState, useEffect, useContext } from "react"; // Importation des hooks et fonctions nécessaires de React
import { RecipeContext, RecipeProvider } from "./RecipeContext/Context"; // Importation de RecipeContext et RecipeProvider depuis le fichier de contexte
import RecipeDetail from "./Recipe/RecipeDetail"; // Importation du composant RecipeDetail
import RecipeList from "./Recipe/RecipeList"; // Importation du composant RecipeList

const Favorites = () => { // Définition du composant Favorites
    const context = useContext(RecipeContext); // Utilisation du contexte RecipeContext pour accéder aux données et aux fonctions

    return ( // Rendu du composant
        <div className="favorite-container"> {/* Conteneur principal pour les recettes favorites */}
            <h1>Mes recettes favorites :</h1> {/* Titre principal pour les recettes favorites */}
            {context.favoriteRecipe.map((recipe: any, index: number) => ( // Boucle sur les recettes favorites et affichage de chaque recette dans un composant RecipeList
                <div key={index} className="favorite-recipe"> {/* Conteneur pour chaque recette favorite */}
                    <RecipeList 
                        recipes={[recipe]}
                        deleteRecipe={() => context.deleteFavorite(index)}
                    /> {/* Affichage de la recette dans le composant RecipeList */}
                </div>
            ))}
        </div>
    );
}

export default Favorites; // Exportation du composant Favorites comme exportation par défaut