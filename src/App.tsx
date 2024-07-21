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

export default function App() { // Définition du composant fonctionnel App

  const [recipes, setRecipes] = useState(Data); // Déclaration de l'état recipes avec les données initiales

  const addRecipe = (recipe: any) => { // Fonction pour ajouter une recette
    setRecipes([...recipes, recipe]); // Mise à jour de l'état recipes avec la nouvelle recette
  };

  const deleteRecipe = (id: number) => { // Fonction pour supprimer une recette
    setRecipes(recipes.filter((_, i) => i !== id)); // Mise à jour de l'état recipes en filtrant la recette à supprimer
  };

  return ( // Retourne le JSX à rendre
    <div className="App"> {/* Wrapper autour de l'application */}
      <RecipeProvider> {/* Wrapper autour de RecipeProvider */}
        <Router> {/* Wrapper autour de Router */}
          <Header /> {/* Appel du composant Header */}
          <h1>Bienvenue sur notre application de recettes</h1> {/* Titre de la page */}
          <img src={Image} alt="Image" className="image" /> {/* Affichage de l'image */}
          <Routes> {/* Wrapper autour de Routes */}
            <Route path="/" element={<LandingPage />} /> {/* Route pour la page d'accueil */}
            <Route path="/recipes" element={<RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />} /> {/* Route pour la liste des recettes */}
            <Route path="/favorites" element={<Favorites />} /> {/* Route pour la page des recettes favorites */}
            <Route path="/add-recipe" element={<RecipeForm addRecipe={addRecipe} />} /> {/* Route pour la page d'ajout de recette */}
            <Route path="/about" element={<About />} /> {/* Route pour la page " propos" */}
          </Routes>
        </Router>
      </RecipeProvider>
    </div>
  );
};