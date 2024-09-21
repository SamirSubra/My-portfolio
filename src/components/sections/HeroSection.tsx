import "../../styles/components/HeroSection.scss";
import Reveal from "../utils/Reveal.tsx";

const HeroSection = () => {
    return (
        <section id="hero-section">
            <Reveal as={"h1"} className={"hello-text"}>Hello ! </Reveal>
            <Reveal as={"p"}>Fraîchement diplômé d'un BUT en Informatique, je suis spécialisé dans le développement web.
                Je suis motivé
                pour contribuer à des projets innovants et ambitieux !</Reveal>
        </section>
    );
};

export default HeroSection;