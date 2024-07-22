// Importation des dépendances nécessaires de React
import React, { createContext, SetStateAction, useEffect, useState } from "react";
// Importation du composant RecipeList
import RecipeList from "../Recipe/RecipeList";
// Importation du composant FontAwesomeIcon pour les icônes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importation de l'icône de recherche
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// Importation du composant Favorites
import Favorites from "../FavoritesRecipes";

// Création du contexte pour les recettes
export const RecipeContext = createContext<any>(null);

// Définition du composant RecipeProvider
export function RecipeProvider({ children }: { children: React.ReactNode }) {
    // Récupération de l'URL de base de l'API depuis les variables d'environnement
    const base_url = process.env.REACT_APP_API_URL;
    // Récupération de la clé API depuis les variables d'environnement
    const api_key = process.env.REACT_APP_API_KEY;

    // Initialisation de l'état pour les recettes favorites
    const [favoriteRecipe, setFavoriteRecipe] = useState([]);
    // Initialisation de l'état pour le terme de recherche
    const [searchTerm, setSearchTerm] = useState<string>("");
    // Initialisation de l'état pour la liste des recettes
    const [recipesList, setRecipesList] = useState([]);
    // Initialisation de l'état pour les détails d'une recette
    const [recipeDetail, setRecipeDetail] = useState([]);
    // Initialisation de l'état pour le formulaire de recette
    const [recipeForm, setRecipeForm] = useState([]);
    // Définition du nombre de recettes par page
    const [perPage] = useState(10);
    // Initialisation de l'état de chargement
    const [loading, setLoading] = useState(true);
    // Initialisation de l'état pour la page courante
    const [pageCount, setPageCount] = useState(1);
    // Initialisation de l'état pour le nombre total de pages
    const [totalPages, setTotalPages] = useState(0);

    // Fonction pour gérer le clic sur une page
    const handlePageClick = (e: { selected: number }) => {
        const newPage = e.selected;
        setPageCount(newPage);
        setLoading(true);
        getRecipes(newPage);
    };

    // Fonction pour mettre à jour le terme de recherche
    const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Fonction asynchrone pour récupérer les recettes
    const getRecipes = async (page: number) => {
        const from = (page - 1) * perPage;
        const to = from + perPage;
        const url = `${base_url}search?apiKey=${api_key}&query=${searchTerm}&from=${
            (page - 1) * perPage
        }&to=${from + perPage}`;
        const response = await fetch(url);
        const data = await response.json();
        setRecipesList(data.hits.slice(from, to));
        setFavoriteRecipe(data.hits);
        setLoading(false);
        setTotalPages(data.hits.length / perPage);
        return recipesList;
    };

    // Fonction pour effectuer la recherche de recettes
    const searchRecipes = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("search", searchTerm);
        setLoading(true);
        getRecipes(1);
    };

    // Retourne le provider du contexte avec les valeurs nécessaires
    return (
        <RecipeContext.Provider value={{
            recipesList,
            loading,
            totalPages,
            searchRecipes,
            updateSearch,
            favoriteRecipe,
            handlePageClick,
        }}>
            {children}
        </RecipeContext.Provider>
    );
}

// Exportation par défaut du contexte
export default RecipeContext;