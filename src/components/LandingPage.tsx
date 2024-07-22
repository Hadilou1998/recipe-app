import BoxLoading from "react-loading"; // Importation du composant BoxLoading pour l'affichage de la page de chargement
import RecipeContext from "./RecipeContext/Context"; // Importation du contexte RecipeContext
import { useContext, useState } from "react"; // Importation du contexte
import Footer from "./Footer"; // Importation du composant Footer
import Contact from "./Contact"; // Importation du composant Contact

export default function LandingPage() { // Définition de la fonction LandingPage
    const context = useContext(RecipeContext); // Utilisation du contexte RecipeContext

    return ( // Retour de la fonction LandingPage
        <div className="landingPage"> {/* Définition de la classe "landingPage" pour le conteneur de la page de chargement */}
            {context.isLoading ? ( // Si le chargement est en cours, afficher un composant de chargement
                <div className="loading"> {/* Définition de la classe "loading" pour le composant de chargement */}
                    <BoxLoading type="spinningBubbles" color="#111" height={100} width={100} /> {/* Affichage du composant de chargement */}
                </div>
            ) : ( // Sinon, afficher le contenu de la page de chargement
                <div className="landingPage"> {/* Définition de la classe "landingPage" pour le conteneur de la page de chargement */}
                    <Contact /> {/* Affichage du composant Contact */}
                    <Footer /> {/* Affichage du composant Footer */}
                </div>
            )}
        </div>
    );
}