import React, { createContext, SetStateAction, useEffect, useState } from "react";
import RecipeList from "../Recipe/RecipeList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Favorites from "../FavoritesRecipes";

export const RecipeContext = createContext<any>(null);
export function RecipeProvider({ children }: { children: React.ReactNode }) {
    const base_url = process.env.REACT_APP_API_URL;
    const api_key = process.env.REACT_APP_API_KEY;

    const [favoritesList, setFavoritesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [recipesList, setRecipesList] = useState([]);
    const [recipeDetail, setRecipeDetail] = useState([]);
    const [recipeForm, setRecipeForm] = useState([]);
    const [perPage] = useState(10);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const handlePageClick = (e: { selected: number }) => {
        const newPage = e.selected;
        setCurrentPage(newPage);
        setLoading(true);
        getRecipes(newPage);
    };

    useEffect(() => {
        getRecipes(currentPage);
    }, [currentPage]);

    const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const getRecipes = async (page: number) => {
        const url = `${base_url}search?apiKey=${api_key}&query=${searchTerm}&from=${
            (page - 1) * perPage
        }&to=${page * perPage}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setRecipesList(data.hits);
            setTotalPages(Math.ceil(data.count / perPage));
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const searchRecipes = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("search", (searchTerm));
        setLoading(true);
        getRecipes(1);
    }

    return (
        <RecipeContext.Provider value={{
            loading,
            favorites: favoritesList,
            search: searchTerm,
            setSearch: setSearchTerm,
            recipesList,
            recipeDetail,
            favoritesList,
            updateSearch,
            searchRecipes,
        }}>
            {children}
        </RecipeContext.Provider>
    );
}

export default RecipeContext;