import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookSquare, faInstagram, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div>
            <div className="contact-form">
                <form className="contact-us">
                    <div className="contact-title">
                        <h2>Get In Touch</h2>
                        <p>We'd love to hear from you.</p>
                    </div>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea cols={30} placeholder="Message" />
                    <button type="submit">Send</button>
                </form>
                <div className="contact-location">
                    <h2>Contact Us</h2>
                    <div className="offices">
                        <h5>Anytown USA</h5>
                        <address>
                            123 Main St
                            <br />
                            Anytown, USA 12345
                            <br />
                            Phone: 555-555-5555
                        </address>
                        <ul className="social-media">
                            <li>
                                <a href="http://" className="facebook">
                                    <FontAwesomeIcon icon={faFacebookSquare} fixedWidth />
                                </a>
                            </li>
                            <li>
                                <a href="http://" className="instagram">
                                    <FontAwesomeIcon icon={faInstagram} fixedWidth />
                                </a>
                            </li>
                            <li>
                                <a href="http://" className="twitter">
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

export default Contact;