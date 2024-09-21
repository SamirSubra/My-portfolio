import "../../styles/components/Contact.scss";
import Reveal from "../utils/Reveal.tsx";

const ContactSection = () => {
    return (
        <section id="contact">
            <Reveal as={"div"} className={"title"}>
                <h2>Me contacter</h2>
                <p>Faissons connaissance ! </p>
                <div className="line"></div>
            </Reveal>
            <Reveal as={"div"}>
                <form action="../includes/contact.php" method="post">
                    <div className="elements">
                        <div className="input">
                            <input type="text" name="nom" id="nom" required/>
                            <label htmlFor="nom">Nom & Prénom</label>
                        </div>
                        <div className="input">
                            <input type="text" name="email" id="email" required/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input_message">
                            <textarea name="message" id="message" required></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <input type="submit" value="Envoyer" name="envoyer"/>
                    </div>
                </form>
            </Reveal>
</section>
)
    ;
};

export default ContactSection;