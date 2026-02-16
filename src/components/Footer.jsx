export default function Footer() {
  return (
    <footer className="py-12 border-t border-cyber-blue/20 bg-cyber-dark/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-display font-bold text-cyber-blue mb-4">DN42 Network</h3>
              <p className="text-sm text-cyber-blue/60 leading-relaxed">
                Building a decentralized network infrastructure for the future. Join us in expanding the DN42 ecosystem.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-cyber-blue mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://dn42.eu" target="_blank" rel="noopener noreferrer" className="text-cyber-blue/60 hover:text-cyber-green transition-colors">
                    DN42 Wiki
                  </a>
                </li>
                <li>
                  <a href="https://dn42.eu/howto/Getting-Started" target="_blank" rel="noopener noreferrer" className="text-cyber-blue/60 hover:text-cyber-green transition-colors">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="https://dn42.eu/services/Looking-Glasses" target="_blank" rel="noopener noreferrer" className="text-cyber-blue/60 hover:text-cyber-green transition-colors">
                    Looking Glass
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-cyber-blue mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://git.dn42.dev" target="_blank" rel="noopener noreferrer" className="text-cyber-blue/60 hover:text-cyber-green transition-colors">
                    DN42 Registry
                  </a>
                </li>
                <li>
                  <a href="https://dn42.eu/services/IRC" target="_blank" rel="noopener noreferrer" className="text-cyber-blue/60 hover:text-cyber-green transition-colors">
                    IRC Channel
                  </a>
                </li>
                <li>
                  <a href="https://dn42.eu/services/Whois" target="_blank" rel="noopener noreferrer" className="text-cyber-blue/60 hover:text-cyber-green transition-colors">
                    Whois Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-cyber-blue/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-cyber-blue/60">
                © {new Date().getFullYear()} DN42 AS Network. All rights reserved.
              </div>
              <div className="text-sm text-cyber-purple font-mono">
                This page was 100% created by Claude Code
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse"></div>
              <div className="w-2 h-2 bg-cyber-blue rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-cyber-purple rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
