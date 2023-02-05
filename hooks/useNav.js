import { useEffect, useState } from "react";

const useNav = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(0);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY > 110) {
      setNavbar(110);
    } else {
      setNavbar(0);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    return ()=> window.removeEventListener("scroll", changeBackground);
  }, []);

  return { navbar };
};

export default useNav;
