import React, { useState } from "react"; // Importation de React et du hook useState
import "./App.css"; // Importation du fichier CSS pour l'application
import Header from "./components/Header"; // Importation du composant Header
import About from "./components/About"; // Importation du composant About
import RecipeList from "./components/Recipe/RecipeList"; // Importation du composant RecipeList
import RecipeForm from "./components/Recipe/RecipeForm"; // Importation du composant RecipeForm
import Favorites from "./components/FavoritesRecipes"; // Importation du composant Favorites
import { RecipeProvider } from "./components/RecipeContext/Context"; // Importation de RecipeProvider depuis le contexte
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importation des composants de routage de react-router-dom
import LandingPage from "./components/LandingPage"; // Importation du composant LandingPage
import Data from "./components/Data"; // Importation des données initiales
import Image from "./i36528-ragout-minute-de-haricots-blancs.jpg"; // Importation de l'image

export default function App() {
  const [recipes, setRecipes] = useState(Data);

  const addRecipe = (recipe: any) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (id: number) => {
    setRecipes(recipes.filter((_, i) => i !== id));
  };

  return (
    <div className="App">
      <RecipeProvider>
        <Router>
          <Header />
          <h1>Bienvenue sur notre application de recettes</h1>
          <img src={Image} alt="Image" className="image" />
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