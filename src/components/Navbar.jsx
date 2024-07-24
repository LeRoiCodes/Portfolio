// import React from 'react'
import { FaFacebook, } from "react-icons/fa6";
import logo from "../assets/Logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className=" mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2l">
            <a href="https://www.linkedin.com/in/brandon-nyamkimbi/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/LeRoiCodes?page=1&tab=repositories" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/vladimir_leroi_chunswae/" target="_blank"><FaInstagram /></a>
            <a href="https://web.facebook.com/brandon.armand.56" target="_blank"><FaFacebook /></a>
        </div>
    </nav>
  )
}
