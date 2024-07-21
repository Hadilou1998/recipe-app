import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"; // Import the address book icon
import { faFacebook, faFacebookSquare, faInstagram, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons"; // Import the social media icons

const Contact = () => { // Retourne le JSX pour le composant Contact
    return ( // Conteneur principal de la section Contact
        <div> {/* Titre de la section Contact */}
            <div className="contact-form"> {/* Formulaire de contact */}
                <form className="contact-us"> {/* Titre du formulaire et champs de saisie */}
                    <div className="contact-title"> {/* Titre du formulaire et description */}
                        <h2>Get In Touch</h2> {/* Titre du formulaire */}
                        <p>We'd love to hear from you.</p> {/* Description du formulaire */}
                    </div>
                    <input type="text" placeholder="Name" /> {/* Champ de saisie pour le nom */}
                    <input type="email" placeholder="Email" /> {/* Champ de saisie pour l'adresse email */}
                    <textarea cols={30} placeholder="Message" /> {/* Champ de saisie pour le message */}
                    <button type="submit">Send</button> {/* Bouton pour envoyer le message */}
                </form>
                <div className="contact-location"> {/* Section de l'emplacement */}
                    <h2>Contact Us</h2> {/* Titre de la section de l'emplacement */}
                    <div className="offices"> {/* Emplacements */}
                        <h5>Anytown USA</h5> {/* Emplacement 1 */}
                        <address> {/* Adresse de l'emplacement 1 */}
                            123 Main St
                            <br /> 
                            Anytown, USA 12345
                            <br />
                            Phone: 555-555-5555
                        </address>
                        <ul className="social-media"> {/* Réseaux sociaux */}
                            <li> {/* Lien vers Facebook */}
                                <a href="http://" className="facebook"> {/* Icône de Facebook */}
                                    <FontAwesomeIcon icon={faFacebookSquare} fixedWidth /> 
                                </a>
                            </li>
                            <li> {/* Lien vers Instagram */}
                                <a href="http://" className="instagram"> {/* Icône d'Instagram */}
                                    <FontAwesomeIcon icon={faInstagram} fixedWidth />
                                </a>
                            </li>
                            <li> {/* Lien vers Twitter */}
                                <a href="http://" className="twitter"> {/* Icône de Twitter */}
                                    <FontAwesomeIcon icon={faTwitter} fixedWidth />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; // Exportation du composant Contact en tant que composant par défaut