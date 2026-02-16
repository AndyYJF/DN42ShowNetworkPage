import { networkConfig } from '../config';

export default function PeeringPolicy() {
  return (
    <section id="peering" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-glow-blue mb-4">
            Peering Policy
          </h2>
          <p className="text-cyber-blue/70 max-w-2xl mx-auto">
            We maintain an {networkConfig.peeringPolicy.type} peering policy. Connect with us to expand the DN42 network.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Requirements */}
          <div className="cyber-card">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 border-2 border-cyber-green flex items-center justify-center">
                <svg className="w-6 h-6 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-cyber-green">Requirements</h3>
            </div>
            <ul className="space-y-3">
              {networkConfig.peeringPolicy.requirements.map((req, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-cyber-green mt-1">▸</span>
                  <span className="text-cyber-blue/80 text-sm leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preferred Methods */}
          <div className="cyber-card">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 border-2 border-cyber-purple flex items-center justify-center">
                <svg className="w-6 h-6 text-cyber-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-cyber-purple">Tunnel Methods</h3>
            </div>
            <ul className="space-y-3">
              {networkConfig.peeringPolicy.preferredMethods.map((method, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-cyber-purple mt-1">▸</span>
                  <span className="text-cyber-blue/80 text-sm leading-relaxed">{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Network Information */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="cyber-card">
            <h3 className="text-2xl font-display font-bold text-cyber-blue mb-6 text-center">
              Network Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs uppercase text-cyber-blue/60 mb-2">AS Number</div>
                <div className="font-mono text-lg text-cyber-purple font-semibold">{networkConfig.asNumber}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-cyber-blue/60 mb-2">Established</div>
                <div className="font-mono text-lg text-cyber-green">{networkConfig.establishedDate}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-cyber-blue/60 mb-2">IPv4 Range</div>
                <div className="font-mono text-lg text-cyber-blue">{networkConfig.ipRanges.ipv4}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-cyber-blue/60 mb-2">IPv6 Range</div>
                <div className="font-mono text-lg text-cyber-blue">{networkConfig.ipRanges.ipv6}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="cyber-card text-center">
            <h3 className="text-2xl font-display font-bold text-cyber-blue mb-4">
              Ready to Peer?
            </h3>
            <p className="text-cyber-blue/70 mb-6">
              Contact us to establish a peering session
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${networkConfig.contact.email}`}
                className="cyber-button inline-block"
              >
                Email: {networkConfig.contact.email}
              </a>
              <a
                href={`https://t.me/${networkConfig.contact.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button border-cyber-purple text-cyber-purple hover:text-cyber-darker inline-block"
              >
                Telegram: {networkConfig.contact.telegram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
