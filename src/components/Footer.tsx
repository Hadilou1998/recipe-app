import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-container" style={{ backgroundColor: "#f8f9fa", textAlign: "center", height: "3em", padding: "20px" }}>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Copyright &copy; Prépavenir 2024 All Rights Reserved.
                </p>
            </section>
        </div>
    )
}

export default Footer;