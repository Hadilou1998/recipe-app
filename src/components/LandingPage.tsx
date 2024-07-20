import Favorites from "./FavoritesRecipes";
import BoxLoading from "react-loading";
import RecipeContext from "./RecipeContext/Context";
import { useContext } from "react";
import Footer from "./Footer";
import Contact from "./Contact";

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
                    <Favorites />
                    <Contact />
                    <Footer />
                </div>
            )}
        </div>
    );
};