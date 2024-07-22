import React, { useContext } from "react"; // Importation de React et du hook useContext
import RecipeContext from "../RecipeContext/Context"; // Importation de RecipeContext depuis le fichier de contexte
import FavoritesRecipes from "../FavoritesRecipes";

function RecipeDetail(){ // Définition du composant RecipeDetail

    const { recipe } = useContext(RecipeContext); // Récupération des données de la recette à partir du contexte
    const { name, cuisine, photo, ingredients, preparation } = recipe; // Déstructuration des données de la recette

    const addToFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]"); // Récupération des favoris depuis le localStorage ou initialisation à []
        localStorage.setItem("favorites", JSON.stringify([...favorites, recipe])); // Ajout de la recette aux favoris et mise à jour du localStorage
        console.log("Recette ajoutée aux favoris");
    };

    const deleteRecipe = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]"); // Récupération des favoris depuis le localStorage ou initialisation à []
        const updatedFavorites = favorites.filter((fav: any) => fav.id !== recipe.id); // Suppression de la recette des favoris et mise à jour du localStorage
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        console.log("Recette supprimée des favoris");
    };

    if (!recipe) { // Si aucune recette n'est sélectionnée, on renvoie null
        return null;
    } else {
        return (
            <div className="favorite-container"> {/* Affichage des détails de la recette */}
                <table>
                    <thead>
                        <tr className="header-row">
                            <th>Nom</th>
                            <th>Cuisine</th>
                            <th>Photo</th>
                            <th>Ingredients</th>
                            <th>Préparation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={name === "Pizza au chou-fleur" ? "pizza" : name === "Galette de haricots rouges" ? "galette" : ""}>
                            <td>{name}</td>
                            <td>{cuisine}</td>
                            <td><img src={photo} alt={name} width="100" height="100" /></td>
                            <td className="content_td">
                                <p>{ingredients.join(", ")}</p>
                            </td>
                            <td className="content_td">
                                <p>{preparation}</p>
                            </td>
                            <td><button onClick={addToFavorites}>Ajouter aux favoris</button></td>
                            <td><button onClick={deleteRecipe}>Supprimer des favoris</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
};

export default RecipeDetail; // Exportation du composant RecipeDetail comme exportation par défaut