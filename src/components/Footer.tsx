import { Link } from "react-router-dom"; // Importation de Link pour les liens internes

const Footer = () => { // Définition du composant Footer
    return ( // Rendu du composant
        <div className="footer-container" style={{ backgroundColor: "#add8e6", textAlign: "center", height: "3em", padding: "20px" }}> {/* Conteneur principal pour le pied de page */}
            <section className="footer-subscription"> {/* Section pour l'abonnement à la newsletter */}
                <p className="footer-subscription-heading"> {/* Titre pour l'abonnement à la newsletter */}
                    Copyright &copy; Prépavenir 2024 All Rights Reserved.
                </p>
            </section>
        </div>
    )
}

export default Footer; // Exportation du composant Footer comme exportation par défaut