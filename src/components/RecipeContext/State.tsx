// Importation des dépendances nécessaires
import React, { useReducer } from "react";
import axios from "axios";
import Context from "./Context";
import data from "../Data";
import reducer from "./Reducer";
import { FETCH_RECIPES, UPDATE_FAV_RECIPES, FETCH_RECIPE, TOGGLE_MODAL, TOGGLE_LOADING, SET_ERROR } from "../Types";

// Définition des variables d'environnement pour l'URL de base et la clé API
const base_url = process.env.REACT_APP_BASE_URL;
const api_key = process.env.REACT_APP_API_KEY;

// Définition du composant RecipeState
const RecipeState = (props: { children: React.ReactNode }) => {
    // Définition de l'état initial
    const initialState = {
        name: "",
        recipes: [],
        recipe: {},
        favRecipes: JSON.parse(localStorage.getItem("favRecipes") || "[]"),
        modal: false,
        loading: false,
        error: null,
    };

    // Utilisation du hook useReducer pour gérer l'état
    const [state, dispatch] = useReducer(reducer, initialState);

    // Fonction pour mettre à jour les recettes favorites
    const updateFavRecipes = (recipe: any) => {
        dispatch({
            type: UPDATE_FAV_RECIPES,
            payload: recipe,
        });
    };
    
    // Fonction pour récupérer les recettes
    const fetchRecipes = async (name: string) => {
        // Construction de l'URL pour la requête API
        const url = `${base_url}complexeSearch?apiKey=${api_key}&query=${name}&number=10`;
        // Activation de l'indicateur de chargement
        toggleLoading();
        try {
            // Envoi de la requête GET
            const response = await axios.get(url);
            // Extraction des résultats
            const recipes = response.data.results;
            // Vérification si des recettes ont été trouvées
            if (recipes === undefined || recipes.length === 0) {
                setError({ message: `Aucune recette trouvée pour ${name}` });
                toggleLoading();
                return;
            }
            // Mise à jour de l'état avec les nouvelles recettes
            dispatch({
                type: FETCH_RECIPES,
                payload: { name, recipes }
            });
            // Désactivation de l'indicateur de chargement
            toggleLoading();
        } catch (error) {
            // Gestion des erreurs
            setError(error);
            console.error("Erreur lors de la récupération des recettes:", error);
            toggleLoading();
        }
        // Mise à jour des recettes favorites
        updateFavRecipes({});
    };

    // Fonction pour récupérer les détails d'une recette
    const fetchRecipe = async (recipe: any) => {
        if (recipe.id === state.recipe.id) {
            // Activation de l'indicateur de chargement
            toggleLoading();
            try {
                // Récupération des ingrédients
                const res_ingredients = await axios.get(`${base_url}${recipe.id}/ingredientWidget.json?apiKey=${api_key}`);
                // Récupération des instructions
                const res_instructions = await axios.get(`${base_url}${recipe.id}/analyzedInstructions?apiKey=${api_key}`);
                // Mise à jour de l'état avec les détails de la recette
                dispatch({
                    type: FETCH_RECIPE,
                    payload: { 
                        ...recipe, 
                        ingredients: res_ingredients.data.ingredients, 
                        instructions: res_instructions.data[0].steps 
                    }
                });
                // Désactivation de l'indicateur de chargement
                toggleLoading();
                // Affichage du modal
                toggleModal();
            } catch (error) {
                // Gestion des erreurs
                setError(error);
                console.error("Erreur lors de la récupération de la recette:", error);
                toggleLoading();
            }
        }
    };

    // Fonction pour basculer l'affichage du modal
    const toggleModal = () => {
        dispatch({
            type: TOGGLE_MODAL,
            payload: undefined
        });
    };

    // Fonction pour basculer l'indicateur de chargement
    const toggleLoading = () => {
        dispatch({
            type: TOGGLE_LOADING,
            payload: undefined
        });
    };

    // Fonction pour définir un message d'erreur
    const setError = (error: any) => {
        dispatch({
            type: SET_ERROR,
            payload: error,
        });
    };

    // Retour du Provider avec les valeurs et fonctions du contexte
    return (
        <Context.Provider value={{
            ...state,
            fetchRecipes,
            fetchRecipe,
            toggleModal,
            toggleLoading,
            setError,
            updateFavRecipes,   
        }}>
            {props.children}
        </Context.Provider>
    );
};
