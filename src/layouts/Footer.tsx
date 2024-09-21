import "../styles/layouts/Footer.scss";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="contenu">
                {/*<a href="#">Mentions légales</a>*/}
                <span></span>
                <p>© Copyright 2023. Made by Samir Subra</p>
                <div className="socials">
                    <a className="social" href="https://www.linkedin.com/in/samir-subra-859331258/">
                        <img src="src/assets/images/linkedin-brands-solid.svg" alt="Logo linkedin"/>
                    </a>
                    <a className="social" href="https://github.com/SamirSubra">
                        <img src="src/assets/images/github-brands-solid.svg" alt="Logo github"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;