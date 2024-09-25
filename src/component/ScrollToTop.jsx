import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Trigger effect whenever the route changes

  return null;
};

export default ScrollToTop;
