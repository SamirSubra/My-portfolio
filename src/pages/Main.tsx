import { useState, useEffect } from 'react';
import "../styles/components/Main.scss";
import MeSection from "../components/sections/MeSection.tsx";
import HeroSection from "../components/sections/HeroSection.tsx";
import ProjectsSection from "../components/sections/ProjectsSection.tsx";
import ContactSection from "../components/sections/ContactSection.tsx";
import Header from "../layouts/Header";

const Main = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // 50% visibility
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        const sections = ['hero-section', 'me', 'projects', 'contact'];
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <div>
            <Header activeSection={activeSection} />
            <main id="Home">
                <HeroSection/>
                <MeSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>
        </div>
    );
};

export default Main;
