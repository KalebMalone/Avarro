import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This line forces the browser to the top-left (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers every time the path changes

  return null;
}