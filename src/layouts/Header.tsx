import { useState, useRef, useEffect } from 'react';
import '../styles/layouts/Header.scss';

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [isActive, setIsActive] = useState(false);
    const burgerRef = useRef<HTMLDivElement | null>(null);
    const navbarRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleLinkClick = () => {
            setIsActive(false);
        };

        const navbarLinks = navbarRef.current?.querySelectorAll('a');
        navbarLinks?.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        return () => {
            navbarLinks?.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, [navbarRef]);

    return (
        <header id="header">
            <div className="contenu">
                <div className="photo_nom">
                    <p>Samir Subra</p>
                </div>
                <nav className={`navbar ${isActive ? 'active' : ''}`} ref={navbarRef}>
                    <a href="#hero-section" className={activeSection === 'hero-section' ? 'active' : ''}>Accueil</a>
                    <a href="#me" className={activeSection === 'me' ? 'active' : ''}>Moi</a>
                    <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projets</a>
                    <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
                </nav>
                <div className={`burger ${isActive ? 'active' : ''}`} ref={burgerRef} onClick={toggleMenu}>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
