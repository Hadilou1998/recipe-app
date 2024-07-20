import React, { useReducer } from "react";
import axios from "axios";
import Context from "./Context";
import data from "../Database";
import reducer from "./Reducer";
import { FETCH_RECIPES, UPDATE_FAV_RECIPES, FETCH_RECIPE, TOGGLE_MODAL, TOGGLE_LOADING, SET_ERROR } from "../Types";

const base_url = process.env.REACT_APP_BASE_URL;
const api_key = process.env.REACT_APP_API_KEY;

const RecipeState = (props: { children: React.ReactNode }) => {
    const initialState = {
        name: "",
        recipes: [],
        recipe: {},
        favRecipes: JSON.parse(localStorage.getItem("favRecipes") || "[]"),
        modal: false,
        loading: false,
        error: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    // update recipes
    const updateFavRecipes = (recipe: any) => {
        dispatch({
            type: UPDATE_FAV_RECIPES,
            payload: recipe,
        });
    };
    
    // get recipes
    const fetchRecipes = async (name: string) => {
        const url = `${base_url}complexeSearch?apiKey=${api_key}&query=${name}&number=10`;
        toggleLoading();
        try {
            const response = await axios.get(url);
            const recipes = response.data.results;
            if (recipes === undefined || recipes.length === 0) {
                setError({ message: `No recipes found for ${name}` });
                toggleLoading();
                return;
            }
            dispatch({
                type: FETCH_RECIPES,
                payload: { name, recipes }
            });
            toggleLoading();
        } catch (error) {
            setError(error);
            console.error("Error fetching recipes:", error);
            toggleLoading();
        }
        updateFavRecipes({});
    };

    // get recipe
    const fetchRecipe = async (recipe: any) => {
        if (recipe.id === state.recipe.id) {
            toggleLoading();
            try {
                const res_ingredients = await axios.get(`${base_url}${recipe.id}/ingredientWidget.json?apiKey=${api_key}`);
                const res_instructions = await axios.get(`${base_url}${recipe.id}/analyzedInstructions?apiKey=${api_key}`);
                dispatch({
                    type: FETCH_RECIPE,
                    payload: { 
                        ...recipe, 
                        ingredients: res_ingredients.data.ingredients, 
                        instructions: res_instructions.data[0].steps 
                    }
                });
                toggleLoading();
                toggleModal();
            } catch (error) {
                setError(error);
                console.error("Error fetching recipe:", error);
                toggleLoading();
            }
        }
    };

    // toggle modal
    const toggleModal = () => {
        dispatch({
            type: TOGGLE_MODAL,
            payload: undefined
        });
    };

    // toggle loading
    const toggleLoading = () => {
        dispatch({
            type: TOGGLE_LOADING,
            payload: undefined
        });
    };

    // set error
    const setError = (error: any) => {
        dispatch({
            type: SET_ERROR,
            payload: error,
        });
    };

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