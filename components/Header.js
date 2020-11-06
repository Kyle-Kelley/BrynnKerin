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
