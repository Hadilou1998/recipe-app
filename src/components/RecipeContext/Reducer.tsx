// Importe les types d'actions nécessaires
import { FETCH_RECIPES, UPDATE_FAV_RECIPES, FETCH_RECIPE, TOGGLE_MODAL, TOGGLE_LOADING, SET_ERROR } from "../Types";

// Définit la fonction reducer qui prend l'état actuel et une action
export default function (state: any, action: { type: string; payload: any }) {

    // Utilise un switch pour gérer différents types d'actions
    switch (action.type) {

        // Cas de mise à jour des recettes favorites
        case UPDATE_FAV_RECIPES:

        // Filtre les recettes favorites pour exclure celle en cours de modification
        let updatedFavRecipes = [...state.favRecipes.filter((item: { id: string | number }) => item.id !== action.payload.id)];
        // Si la recette n'est pas favorite, l'ajoute à la liste des favoris
        if (!action.payload.fav) {
            updatedFavRecipes = [...updatedFavRecipes, { ...action.payload, fav: true }];
        }
        // Met à jour le stockage local avec les nouvelles recettes favorites
        localStorage.setItem("favRecipes", JSON.stringify(updatedFavRecipes));

        // Crée un tableau des IDs des recettes favorites
        const favIds = updatedFavRecipes.map((item) => item.id);
        let updatedRecipes;
        // Met à jour la liste complète des recettes en marquant les favorites
        updatedRecipes = [...state.recipes.map((item: { id: string | number }) => item.id === favIds.find((id) => id === item.id) ? { ...item, fav: true } : { ...item, fav: false })];
        // Retourne le nouvel état
        return {
            ...state,
            favRecipes: updatedFavRecipes,
            recipes: updatedRecipes,
        };

        // Cas de récupération des recettes
        case FETCH_RECIPES:
        // Retourne le nouvel état avec les recettes récupérées et le nom en majuscules
        return {
            ...state,
            name: action.payload.name.toUpperCase(),
            recipes: action.payload.recipes,
        };

        // Cas de récupération d'une recette spécifique
        case FETCH_RECIPE:
        // Retourne le nouvel état avec la recette récupérée
        return {
            ...state,
            recipe: action.payload,
        };
        
        // Cas de basculement de l'état du modal
        case TOGGLE_MODAL:
        // Retourne le nouvel état en inversant l'état du modal
        return {
            ...state,
            modal: !state.modal,
        };

        // Cas de basculement de l'état de chargement
        case TOGGLE_LOADING:
        // Retourne le nouvel état en inversant l'état de chargement
        return {
            ...state,
            loading: !state.loading,
        };

        // Cas de définition d'une erreur
        case SET_ERROR:
        // Retourne le nouvel état avec l'erreur définie
        return {
            ...state,
            error: action.payload,
        };

        // Cas par défaut : retourne l'état inchangé
        default:
            return state;
    }
}