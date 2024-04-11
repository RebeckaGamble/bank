"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeButton from "../ThemeButton";
import NavLinks from "./NavLinks";

export default function Nav( {navLinks }) {
  return (
    <nav className="bg-[#005fa5] dark:bg-[#414142] max-w-screen h-10 flex items-center relative">
      <div className="flex flex-row w-full xl:max-w-[90rem] xl:mx-auto justify-between px-4 text-white">
        <div className="uppercase font-semibold">
          <Link href="/">Chas Bank</Link>
        </div>
        <div className="flex flex-row mr-4">
          <ul className="flex flex-row gap-4">
           {navLinks}
          </ul>
        </div>
        <div className="top-1 right-1 absolute">
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
}
