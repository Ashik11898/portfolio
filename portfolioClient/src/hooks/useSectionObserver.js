import { useEffect, useRef } from "react";

const useSectionObserver = (sectionRefs, setVisibleSections) => {
  useEffect(() => {
    // Ensure the refs are properly initialized
    if (!sectionRefs.current || sectionRefs.current.length === 0) return;

    // Create a single IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        const updates = {};
        entries.forEach((entry) => {
          updates[entry.target.id] = entry.isIntersecting;
        });
        setVisibleSections((prev) => ({ ...prev, ...updates }));
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe all sections
    const currentRefs = sectionRefs.current.filter((ref) => ref); // Avoid null/undefined refs
    currentRefs.forEach((ref) => observer.observe(ref));

    // Cleanup observer when component unmounts or refs change
    return () => {
      currentRefs.forEach((ref) => observer.unobserve(ref)); // Unobserve all sections
      observer.disconnect(); // Disconnect the observer
    };
  }, [sectionRefs, setVisibleSections]); // Dependencies ensure this runs only when sectionRefs or setVisibleSections change
};

export default useSectionObserver;
