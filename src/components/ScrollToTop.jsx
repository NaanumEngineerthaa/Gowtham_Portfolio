import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // This hook grabs the current URL path (e.g., "/about", "/projects")
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the pathname changes, instantly scroll to X: 0, Y: 0 (the absolute top)
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't actually render any HTML, it just runs the logic above!
  return null;
};

export default ScrollToTop;