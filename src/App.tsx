import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import RecipeList from "./components/Recipe/RecipeList";
import RecipeForm from "./components/Recipe/RecipeForm";
import Favorites from "./components/FavoritesRecipes";
import { RecipeProvider } from "./components/RecipeContext/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <RecipeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/add-recipe" element={<RecipeForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </RecipeProvider>
      </div>
    </Router>
  );
}