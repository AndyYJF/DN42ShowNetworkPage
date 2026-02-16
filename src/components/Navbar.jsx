import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-cyber-dark/95 backdrop-blur-md border-b border-cyber-blue/30' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border-2 border-cyber-blue relative animate-flicker">
              <div className="absolute inset-1 bg-cyber-blue/20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-cyber-blue font-display font-bold">
                DN
              </div>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-glow-blue">
                MyAS Network
              </h1>
              <p className="text-xs text-cyber-blue/60">Network Operations Center</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['map', 'nodes', 'peering', 'stats'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm uppercase tracking-wider hover:text-cyber-green transition-colors duration-300 relative group"
              >
                {section}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-green group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('peering')}
            className="cyber-button text-xs md:text-sm px-4 py-2 md:px-6 md:py-3"
          >
            Request Peering
          </button>
        </div>
      </div>
    </nav>
  );
}
