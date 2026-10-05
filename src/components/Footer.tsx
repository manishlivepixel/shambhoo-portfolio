import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-secondary/10 text-secondary/60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <Link href="/" className="flex flex-col text-secondary font-serif leading-none tracking-wider">
              <span className="text-2xl font-bold uppercase">Shambhoo</span>
              <span className="text-2xl font-bold text-accent uppercase">Phalke</span>
            </Link>
            <p className="text-xs tracking-widest uppercase mt-2">Animation • Media • Strategy • Business Development</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-xs tracking-widest uppercase font-medium">
            <Link href="#about" className="hover:text-accent transition-colors">About</Link>
            <Link href="#experience" className="hover:text-accent transition-colors">Experience</Link>
            <Link href="#expertise" className="hover:text-accent transition-colors">Expertise</Link>
            <Link href="#work" className="hover:text-accent transition-colors">Work</Link>
            <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
            <a href="https://www.linkedin.com/in/shambhoophalke/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
              <FaLinkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-secondary/10 text-xs tracking-widest">
          <p>© 2026 Shambhoo Phalke. All rights reserved.</p>
          <p className="mt-4 md:mt-0 opacity-50">PORTFOLIO</p>
        </div>
      </div>
    </footer>
  );
}
