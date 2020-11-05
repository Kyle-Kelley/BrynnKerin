import React from "react";
// import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const isDesktoporLaptop = useMediaQuery({
    query: `(min-device-width: 1224px)`,
  });
  return isDesktoporLaptop ? <DesktopNav /> : <MobileNav />;
}

// export default function Header() {
//   const [width, setWidth] = useState(null);
//   const breakpoint = 1200;

//   useEffect(() => {
//     const handleWindowResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleWindowResize);

//     // Return a function from the effect that removes the event listener
//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, []);
//   return width < breakpoint ? <MobileNav /> : <DesktopNav />;
// }
