import BoxLoading from "react-loading"; // Importation du composant BoxLoading pour l'affichage de la page de chargement
import RecipeContext from "./RecipeContext/Context"; // Importation du contexte RecipeContext
import { useContext, useState } from "react"; // Importation du contexte
import Footer from "./Footer"; // Importation du composant Footer
import Contact from "./Contact"; // Importation du composant Contact

export default function LandingPage() {
    const context = useContext(RecipeContext);

    return (
        <div className="landingPage">
            {context.isLoading ? (
                <div className="loading">
                    <BoxLoading type="spinningBubbles" color="#111" height={100} width={100} />
                </div>
            ) : (
                <div className="landingPage">
                    <Contact />
                    <Footer />
                </div>
            )}
        </div>
    );
}