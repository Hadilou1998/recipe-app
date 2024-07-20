import { FETCH_RECIPES, UPDATE_FAV_RECIPES, FETCH_RECIPE, TOGGLE_MODAL, TOGGLE_LOADING, SET_ERROR } from "../Types";

export default function (state: any, action: { type: string; payload: any }) {

    switch (action.type) {

        case UPDATE_FAV_RECIPES:

        let updatedFavRecipes = [...state.favRecipes.filter((item: { id: string | number }) => item.id !== action.payload.id)];        if (!action.payload.fav) {
            updatedFavRecipes = [...updatedFavRecipes, { ...action.payload, fav: true }];
        }
        localStorage.setItem("favRecipes", JSON.stringify(updatedFavRecipes));

        const favIds = updatedFavRecipes.map((item) => item.id);
        let updatedRecipes;
        updatedRecipes = [...state.recipes.map((item: { id: string | number }) => item.id === favIds.find((id) => id === item.id) ? { ...item, fav: true } : { ...item, fav: false })];
        return {
            ...state,
            favRecipes: updatedFavRecipes,
            recipes: updatedRecipes,
        };

        case FETCH_RECIPES:
        return {
            ...state,
            name: action.payload.name.toUpperCase(),
            recipes: action.payload.recipes,
        };

        case FETCH_RECIPE:
        return {
            ...state,
            recipe: action.payload,
        };
        
        case TOGGLE_MODAL:
        return {
            ...state,
            modal: !state.modal,
        };

        case TOGGLE_LOADING:
        return {
            ...state,
            loading: !state.loading,
        };

        case SET_ERROR:
        return {
            ...state,
            error: action.payload,
        };

        default:
            return state;
    }
}