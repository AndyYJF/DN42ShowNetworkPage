import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NetworkMap from './components/NetworkMap';
import NodeList from './components/NodeList';
import PeeringPolicy from './components/PeeringPolicy';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cyber-darker text-cyber-blue">
      <Navbar />
      <Hero />
      <NetworkMap />
      <NodeList />
      <PeeringPolicy />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
