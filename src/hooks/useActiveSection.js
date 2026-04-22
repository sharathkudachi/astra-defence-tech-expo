import { useState, useEffect, useRef } from 'react';

/**
 * useActiveSection
 * Tracks which section ID is currently in the viewport.
 * Uses a more robust "center-point" detection logic.
 * @param {string[]} sectionIds - Array of section IDs to observe.
 */
const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState('');
  
  // Use a ref to keep track of intersection states for all sections
  const intersectionStates = useRef({});

  useEffect(() => {
    // Options: A narrow horizontal strip in the middle of the screen
    // This ensures that the section at the center of the viewer's focus is highlighted.
    const options = {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        intersectionStates.current[entry.target.id] = entry.isIntersecting;
      });

      // Find the first section that is intersecting from the top
      // We iterate in the order they appear in the nav (which matches the DOM)
      const currentActive = sectionIds.find(id => intersectionStates.current[id]);
      
      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeId;
};

export default useActiveSection;
