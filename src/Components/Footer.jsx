import React from "react";
import logo from "../assets/logo/logo.png";
import { FaWhatsapp, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-gradient-to-r from-[#1a1a1a] to-[#2c3e50] text-white shadow-lg">
      <div className="max-w-[1240px] mx-auto px-4 py-12 flex flex-col sm:flex-row justify-between items-center border-b border-gray-700">
        {/* Logo Section */}
        <div className="mb-8 sm:mb-0">
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp" offset={100}>
            <img src={logo} alt="Logo" className="w-32 h-auto" />
          </ScrollAnimation>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center items-center gap-6 text-2xl">
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp delay-0-5s" offset={100}>
            <a
              href="https://wa.me/923145493045"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-all duration-300"
            >
              <FaWhatsapp />
            </a>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp delay-1s" offset={100}>
            <a
              href="https://www.instagram.com/joshan__joshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp delay-1-5s" offset={100}>
            <a
              href="https://x.com/joshan_services"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] transition-all duration-300"
            >
              <FaTwitter />
            </a>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp delay-2s" offset={100}>
            <a
              href="https://github.com/joshan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#333] transition-all duration-300"
            >
              <FaGithub />
            </a>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__animated animate__fadeInUp delay-2-5s" offset={100}>
            <a
              href="https://www.linkedin.com/in/joshan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077B5] transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </ScrollAnimation>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-6 bg-[#1a1a1a]">
        <p className="text-center text-sm text-gray-400 font-black">
          Copyright &copy; {new Date().getFullYear()} JoshanJoshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;