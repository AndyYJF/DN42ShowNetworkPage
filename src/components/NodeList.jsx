import { networkConfig } from '../config';

export default function NodeList() {
  return (
    <section id="nodes" className="py-20 bg-cyber-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-glow-blue mb-4">
            Network Nodes
          </h2>
          <p className="text-cyber-blue/70 max-w-2xl mx-auto">
            Complete list of our infrastructure nodes with real-time status monitoring
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="cyber-card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyber-blue/30">
                  <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-cyber-blue/60 font-display">
                    Status
                  </th>
                  <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-cyber-blue/60 font-display">
                    Node ID
                  </th>
                  <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-cyber-blue/60 font-display">
                    Location
                  </th>
                  <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-cyber-blue/60 font-display">
                    Hostname
                  </th>
                  <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-cyber-blue/60 font-display">
                    Clearnet
                  </th>
                  <th className="text-right py-4 px-4 text-sm uppercase tracking-wider text-cyber-blue/60 font-display">
                    Uptime
                  </th>
                  <th className="text-right py-4 px-4 text-sm uppercase tracking-wider text-cyber-blue/60 font-display">
                    Peers
                  </th>
                </tr>
              </thead>
              <tbody>
                {networkConfig.nodes.map((node, index) => (
                  <tr
                    key={node.id}
                    className="border-b border-cyber-blue/10 hover:bg-cyber-blue/5 transition-colors duration-200"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className={`status-indicator status-${node.status}`}></div>
                        <span className={`text-xs uppercase ${
                          node.status === 'online' ? 'text-cyber-green' :
                          node.status === 'maintenance' ? 'text-yellow-400' :
                          'text-cyber-red'
                        }`}>
                          {node.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-mono text-cyber-purple font-semibold">{node.id}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="text-cyber-blue">{node.city}</div>
                        <div className="text-xs text-cyber-blue/50">{node.country}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-mono text-sm text-cyber-blue/80">{node.hostname}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-mono text-sm text-cyber-blue/80">{node.clearnetHost}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className={`font-mono font-semibold ${
                        node.uptime >= 99.9 ? 'text-cyber-green' :
                        node.uptime >= 99.5 ? 'text-yellow-400' :
                        'text-cyber-red'
                      }`}>
                        {node.uptime}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="font-mono text-cyber-purple font-semibold">{node.peers}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="cyber-card text-center">
              <div className="text-3xl font-display font-bold text-cyber-green mb-2">
                {networkConfig.nodes.filter(n => n.status === 'online').length}
              </div>
              <div className="text-xs uppercase text-cyber-blue/60">Online Nodes</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-display font-bold text-yellow-400 mb-2">
                {networkConfig.nodes.filter(n => n.status === 'maintenance').length}
              </div>
              <div className="text-xs uppercase text-cyber-blue/60">Maintenance</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-display font-bold text-cyber-purple mb-2">
                {networkConfig.statistics.totalPeers}
              </div>
              <div className="text-xs uppercase text-cyber-blue/60">Total Peers</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-display font-bold text-cyber-blue mb-2">
                {(networkConfig.nodes.reduce((sum, n) => sum + n.uptime, 0) / networkConfig.nodes.length).toFixed(2)}%
              </div>
              <div className="text-xs uppercase text-cyber-blue/60">Avg Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
