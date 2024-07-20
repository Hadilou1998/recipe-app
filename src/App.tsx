import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import RecipeList from "./components/Recipe/RecipeList";
import { RecipeProvider } from "./components/RecipeContext/Context";
import RecipeDetail from "./components/Recipe/RecipeDetail";
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
            <Route path="/recipe" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </RecipeProvider>
      </div>
    </Router>
  );
}