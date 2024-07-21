import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import RecipeList from "./components/Recipe/RecipeList";
import RecipeForm from "./components/Recipe/RecipeForm";
import Favorites from "./components/FavoritesRecipes";
import { RecipeProvider } from "./components/RecipeContext/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Data from "./components/Data";

export default function App() {
  
  const [recipes, setRecipes] = useState(Data);

  const addRecipe = (recipe: any) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (index: number) => {
    setRecipes(recipes.filter((recipe, i) => i !== index));
  };

  return (
    <div className="App">
      <RecipeProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/recipes" element={<RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/add-recipe" element={<RecipeForm addRecipe={addRecipe} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </RecipeProvider>
    </div>
  );
}