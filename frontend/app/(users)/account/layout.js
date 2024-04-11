import React from "react";
import Link from "next/link";
import Nav from "@/app/components/header/Nav";
import NavLinks from "@/app/components/header/NavLinks";

export default function accountLayout({ children }) {
  return (
    <div className="w-screen">
     <Nav navLinks={<NavLinks isLoggedIn={true} handleLogout={() => setIsLogedIn(false)} />} />
      {children}
    </div>
  );
}
