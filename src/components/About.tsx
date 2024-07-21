// Définition du composant fonctionnel About
const About = () => {
    // Retourne le JSX pour le composant About
    return ( 
        // Conteneur principal de la section About
        <div className="about"> 
            {/* Titre de la section About */}
            <h1>About Us</h1>
            {/* Description de la section About */}
            <p>
                Welcome to our recipe website, where we bring you a variety of
                delicious and easy-to-follow recipes. Our mission is to provide
                you with a platform to discover and share recipes with others.
                Whether you're a seasoned chef or a beginner, we have something
                for everyone.
            </p>
            {/* Section des fonctionnalités */}
            <div className="features">
                {/* Titre des fonctionnalités */}
                <h2>Our Features</h2>
                {/* Description des fonctionnalités */}
                <p>
                    Our website offers a wide range of features to enhance your
                    experience. Here are just a few of the features we offer:
                </p>
            </div>
            {/* Section de l'histoire */}
            <div className="features">
                {/* Titre de la section de l'histoire */}
                <h2>Our Story</h2>
                {/* Description de l'histoire */}
                <p>
                    Our team of passionate recipe enthusiasts is dedicated to
                    bringing you the best possible recipes. We carefully curate and
                    test each recipe to ensure that it's both delicious and
                    nutritious.
                </p>
            </div>
            {/* Section de l'équipe */}
            <div className="features">
                {/* Titre de la section de l'équipe */}
                <h2>Our Team</h2>
                {/* Description de l'équipe */}
                <p>
                    Our team consists of experienced chefs, food bloggers, and
                    recipe developers. We're committed to providing you with
                    quality content and a fun learning experience.
                </p>
            </div>
        </div>
    )
};

export default About; // Exportation du composant About pour utilisation dans d'autres fichiers