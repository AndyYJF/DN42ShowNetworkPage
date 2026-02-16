import { networkConfig } from '../config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Scanline effect */}
      <div className="scanline"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status indicator */}
          <div className="inline-flex items-center space-x-2 mb-8 px-4 py-2 border border-cyber-green/30 bg-cyber-green/5">
            <div className="status-indicator status-online"></div>
            <span className="text-cyber-green text-sm uppercase tracking-wider">All Systems Operational</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 text-glow-blue animate-flicker">
            {networkConfig.asName}
          </h1>

          {/* AS Number */}
          <div className="inline-block mb-6 px-6 py-3 cyber-border bg-cyber-dark/50">
            <span className="text-2xl md:text-3xl font-display text-cyber-purple text-glow-purple">
              {networkConfig.asNumber}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-cyber-blue/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {networkConfig.description}
          </p>

          {/* Network info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <div className="cyber-card">
              <div className="text-xs text-cyber-blue/60 uppercase tracking-wider mb-2">IPv4 Range</div>
              <div className="text-lg font-mono text-cyber-green">{networkConfig.ipRanges.ipv4}</div>
            </div>
            <div className="cyber-card">
              <div className="text-xs text-cyber-blue/60 uppercase tracking-wider mb-2">IPv6 Range</div>
              <div className="text-lg font-mono text-cyber-green">{networkConfig.ipRanges.ipv6}</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })}
              className="cyber-button"
            >
              Explore Network
            </button>
            <button
              onClick={() => document.getElementById('peering')?.scrollIntoView({ behavior: 'smooth' })}
              className="cyber-button border-cyber-purple text-cyber-purple hover:text-cyber-darker"
              style={{
                '--tw-shadow-color': 'rgba(181, 55, 242, 0.5)',
              }}
            >
              Request Peering
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyber-blue/50 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-cyber-blue rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
