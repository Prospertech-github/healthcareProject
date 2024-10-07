"use client";

import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import Container from "../Container";
import Buttons from "../Buttons/Buttons";

export default function Navbar() {
  const [display, setDisplay] = useState(false);

  return (
    <header className="bg-background px-3 py-10 relative shadow-2xl">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-[#f4f4f4] text-xl font-bold">AHU-IKE</div>

          <div className="text-[#f4f4f4] font-extrabold text-xl lg:hidden">
            {!display ? (
              <CiMenuBurger onClick={() => setDisplay(true)} size={28} />
            ) : (
              <MdClose onClick={() => setDisplay(false)} size={28} />
            )}
          </div>

          <nav
            className={`absolute left-0 top-[108px] w-full bg-background opacity-90 h-[70vh] lg:flex lg:relative lg:h-fit lg:top-0 lg:w-fit ${
              !display ? "hidden" : ""
            }`}
          >
            <ul className="flex flex-col justify-center items-center h-full gap-10 text-xl font-extrabold text-[#f4f4f4] lg:flex-row lg:w-fit lg:gap-20">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              
              <Buttons text="Request a call" nav/>
            </ul>

          </nav>
        </div>
      </Container>
    </header>
  );
}
