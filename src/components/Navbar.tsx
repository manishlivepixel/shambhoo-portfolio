"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "ABOUT", href: "/#about" },
  { name: "EXPERTISE", href: "/#expertise" },
  { name: "EXPERIENCE", href: "/#experience" },
  { name: "WORK", href: "/#work" },
  { name: "STRENGTHS", href: "/#strengths" },
  { name: "INSIGHTS", href: "/#insights" },
  { name: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 w-full z-40 transition-all duration-500 ease-in-out border-b border-transparent",
          isScrolled
            ? "bg-primary/90 backdrop-blur-md border-secondary/10 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex flex-col text-secondary font-serif leading-none tracking-wider">
            <span className="text-xl font-bold uppercase">Shambhoo</span>
            <span className="text-xl font-bold text-accent uppercase">Phalke</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.2em] font-medium text-secondary/70 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://www.linkedin.com/in/shambhoophalke/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary/70 hover:text-accent transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <Link
              href="#contact"
              className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all text-xs tracking-widest font-medium rounded-sm"
            >
              LET&apos;S CONNECT
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <button
              className="text-secondary"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-primary flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-secondary hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-secondary hover:text-accent tracking-widest uppercase transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 flex flex-col items-center gap-6">
                <a
                  href="https://www.linkedin.com/in/shambhoophalke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary/70 hover:text-accent transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span className="text-sm tracking-widest">LINKEDIN</span>
                </a>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-all text-sm tracking-widest font-medium"
                >
                  LET&apos;S CONNECT
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
