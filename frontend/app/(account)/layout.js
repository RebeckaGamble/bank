import React from "react";
import NavLinks from "@/app/components/header/NavLinks";
import Nav from "@/app/components/header/Nav";

export default function userLayout({ children }) {
  return (
    <div className="w-screen">
     <Nav navLinks={<NavLinks isLoggedIn={false} />} />
      {children}
    </div>
  );
}
