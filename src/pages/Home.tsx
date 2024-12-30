import "../styles/pages/Main.scss";
import MeSection from "../components/sections/MeSection.tsx";
import HeroSection from "../components/sections/HeroSection.tsx";
import ProjectsSection from "../components/sections/ProjectsSection.tsx";
import ContactSection from "../components/sections/ContactSection.tsx";

const Home = () => {


    return (
        <main id="Home">
            <HeroSection/>
            <MeSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
    );
};

export default Home;
