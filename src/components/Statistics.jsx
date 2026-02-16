import { networkConfig } from '../config';

export default function Statistics() {
  const stats = [
    {
      label: 'Established',
      value: new Date(networkConfig.establishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'cyber-blue',
    },
    {
      label: 'Average Hops',
      value: networkConfig.statistics.averageHops.toFixed(1),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'cyber-green',
    },
    {
      label: 'Continents',
      value: networkConfig.statistics.continentsCovered,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'cyber-purple',
    },
    {
      label: 'Total Peers',
      value: networkConfig.statistics.totalPeers,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'cyber-blue',
    },
    {
      label: 'Total Nodes',
      value: networkConfig.statistics.totalNodes,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'cyber-green',
    },
    {
      label: 'Network Uptime',
      value: '99.94%',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'cyber-purple',
    },
  ];

  return (
    <section id="stats" className="py-20 bg-cyber-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-glow-blue mb-4">
            Network Statistics
          </h2>
          <p className="text-cyber-blue/70 max-w-2xl mx-auto">
            Real-time metrics and performance indicators of our DN42 network infrastructure
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="cyber-card group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`text-${stat.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}>
                  {stat.icon}
                </div>
                <div className={`w-2 h-2 rounded-full bg-${stat.color} animate-glow-pulse`}></div>
              </div>
              <div className={`text-4xl font-display font-bold text-${stat.color} mb-2 cyber-glow`}>
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-cyber-blue/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="cyber-card text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-display font-bold text-cyber-green mb-2">24/7</div>
                <div className="text-xs uppercase text-cyber-blue/60">Network Monitoring</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-cyber-purple mb-2">&lt; 50ms</div>
                <div className="text-xs uppercase text-cyber-blue/60">Average Latency</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-cyber-blue mb-2">100%</div>
                <div className="text-xs uppercase text-cyber-blue/60">ROA Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
