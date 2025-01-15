import React, { useState, useRef, useEffect } from "react";
import NavbarSection from './sections/NavbarSection';
import './App.css';
import './assets/styles/sectionStyles.css';
import DeveloperCard from './sections/DeveloperCard';
import BlogDetails from './sections/BlogDetails';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import FormPage from './pages/FormPage';

function App() {
  const sections = [
    { Component: BlogDetails, id: "blog" },
    { Component: SkillsPage, id: "skills" },
    { Component: ProjectsPage, id: "projects" },
    { Component: ExperiencePage, id: "experience" },
    { Component: FormPage, id: "form" },
  ];

  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);
  const debounceTimeout = useRef(null);

  const handleScrollToSection = (id) => {
    const section = sectionRefs.current.find((ref) => ref.id === id);
    
    if (section) {
      const topOffset = section.offsetTop;
      const offset = 100;
      console.log("top:",topOffset - offset);
      
      window.scrollTo({
        top: topOffset - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        } else {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: false,
          }));
        }
      });
    }, { threshold: 0.3 }); // Only trigger at 30% visibility

    sectionRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);



  return (
    <div className='app-parent'>
      <div className='load-pages'>
        <NavbarSection onScrollToSection={handleScrollToSection} currentComponent={visibleSections} />
        <div className='home-block'>
          <DeveloperCard />
          <div className='left-container'>
            {sections.map(({ Component, id }, index) => (
              <div
                key={id}
                id={id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`section section-space ${visibleSections[id] ? "animate" : ""}`}
              >
                <Component />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
