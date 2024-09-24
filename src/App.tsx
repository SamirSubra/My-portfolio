import {BrowserRouter, Route, Routes} from "react-router-dom"
import Main from "./pages/Main.tsx";
import Footer from "./layouts/Footer.tsx";
import {useEffect, useState} from "react";
import Header from "./layouts/Header.tsx";
function App() {
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
    <BrowserRouter>
      <div id="app">
          <Header activeSection={activeSection} />
        <Routes>
          <Route path="/*" element={<Main/>} />
        </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
