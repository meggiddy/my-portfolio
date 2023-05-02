import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ScrollToTop() {
  const navigate = useNavigate();

  useEffect(() => {
    const unlisten = navigate((location, action) => {
      if (action === "POP") {
        return;
      }
      window.scrollTo(0, 0);
    });

    return unlisten;
  }, [navigate]);

  return null;
}

export default ScrollToTop;
