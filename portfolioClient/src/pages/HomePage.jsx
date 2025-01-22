import React,{useState,useRef,useEffect} from "react";
import NavbarSection from "../sections/NavbarSection";
import DeveloperCard from "../sections/DeveloperCard";
import BlogDetails from '../sections/BlogDetails';
import ProjectsPage from '../pages/ProjectsPage';
import ExperiencePage from '../pages/ExperiencePage';
import SkillsPage from '../pages/SkillsPage';
import FormPage from '../pages/FormPage';
import FooterSection from "../sections/FooterSection";

function HomePage({ showPopup, showInputScreen }) {
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef([]);
 
    const sections = [
    { Component: BlogDetails, id: "blog" },
    { Component: SkillsPage, id: "skills" },
    { Component: ProjectsPage, id: "projects" },
    { Component: ExperiencePage, id: "experience" },
    { Component: FormPage, id: "form" },
   
    ];

    const handleScrollToSection = (id) => {
        const section = sectionRefs.current.find((ref) => ref.id === id);
        if (section) {
        const topOffset = section.offsetTop;
        const offset = 100;
        window.scrollTo({ top: topOffset - offset, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            setVisibleSections((prev) => ({
                ...prev,
                [entry.target.id]: entry.isIntersecting,
            }));
            });
        }, { threshold: 0.3 });
    
        sectionRefs.current.forEach((ref) => observer.observe(ref));
        return () => observer.disconnect();
    }, []);

  return (
    <>
        <NavbarSection
          onScrollToSection={handleScrollToSection}
          currentComponent={visibleSections}
          showInputScreen={showInputScreen}
        />
        <div className={`home-block ${showPopup || showInputScreen ? "popupVisible" : ""}`}>
            <DeveloperCard />
            <div className="left-container">
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
    </>
    
  );
}

export default HomePage;