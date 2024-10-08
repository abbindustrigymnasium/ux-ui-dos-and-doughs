import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the '#' symbol from the hash and get the element by id
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Smooth scroll into view
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToHashElement;