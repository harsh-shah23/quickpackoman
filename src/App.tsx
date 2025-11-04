import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import ShrinkWrappingMachines from './pages/ShrinkWrappingMachines';
import SleeveWrapping from './pages/SleeveWrapping';
import VacuumPackingMachines from './pages/VacuumPackingMachines';
import PalletWrappingMachines from './pages/PalletWrappingMachines';
import MetalDetectors from './pages/MetalDetectors';
import InductionSealingMachines from './pages/InductionSealingMachines';
import FormFillSealMachines from './pages/FormFillSealMachines';
import PouchPackingMachines from './pages/PouchPackingMachines';
import TrayPackingMachines from './pages/TrayPackingMachines';
import ThermoformingMachines from './pages/ThermoformingMachines';
import LabelingMachines from './pages/LabelingMachines';
import CartonStrappingMachines from './pages/CartonStrappingMachines';
import CartonSealingMachines from './pages/CartonSealingMachines';
import BrandSealer from './pages/BandSealer';
import FlowWrapping from './pages/FlowWrapping';
import ClingWrapping from './pages/ClingWrapping';
import LiquidFillingCapping from './pages/LiquidFillingCapping';
import CorrugatedBoxStrapping from './pages/CorrugatedBoxStrapping';
import OrbitWrapping from './pages/OrbitWrapping';
import CartonErectors from './pages/CartonErectors';
import CheckWeigher from './pages/CheckWeigher';
import ProtectivePackaging from './pages/ProtectivePackaging';
import Footer from './components/Footer';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: string) => {
    navigate(`/${page === 'home' ? '' : page}`);
  };

  const getCurrentPage = () => {
    const path = location.pathname.substring(1) || 'home';
    return path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About onNavigate={handleNavigate} />} />
          <Route path="/products" element={<Products onNavigate={handleNavigate} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shrink-wrapping-machines" element={<ShrinkWrappingMachines onNavigate={handleNavigate} />} />
          <Route path="/sleeve-wrapping" element={<SleeveWrapping onNavigate={handleNavigate} />} />
          <Route path="/vacuum-packing-machines" element={<VacuumPackingMachines onNavigate={handleNavigate} />} />
          <Route path="/pallet-wrapping-machines" element={<PalletWrappingMachines onNavigate={handleNavigate} />} />
          <Route path="/metal-detectors" element={<MetalDetectors onNavigate={handleNavigate} />} />
          <Route path="/induction-sealing-machines" element={<InductionSealingMachines onNavigate={handleNavigate} />} />
          <Route path="/form-fill-seal-machines" element={<FormFillSealMachines onNavigate={handleNavigate} />} />
          <Route path="/pouch-packing-machines" element={<PouchPackingMachines onNavigate={handleNavigate} />} />
          <Route path="/tray-packing-machines" element={<TrayPackingMachines onNavigate={handleNavigate} />} />
          <Route path="/thermoforming-machines" element={<ThermoformingMachines onNavigate={handleNavigate} />} />
          <Route path="/labeling-machines" element={<LabelingMachines onNavigate={handleNavigate} />} />
          <Route path="/carton-strapping-machines" element={<CartonStrappingMachines onNavigate={handleNavigate} />} />
          <Route path="/carton-sealing-machines" element={<CartonSealingMachines onNavigate={handleNavigate} />} />
          <Route path="/brand-sealer" element={<BrandSealer onNavigate={handleNavigate} />} />
          <Route path="/flow-wrapping" element={<FlowWrapping onNavigate={handleNavigate} />} />
          <Route path="/cling-wrapping" element={<ClingWrapping onNavigate={handleNavigate} />} />
          <Route path="/liquid-filling-capping" element={<LiquidFillingCapping onNavigate={handleNavigate} />} />
          <Route path="/corrugated-box-strapping" element={<CorrugatedBoxStrapping onNavigate={handleNavigate} />} />
          <Route path="/orbit-wrapping" element={<OrbitWrapping onNavigate={handleNavigate} />} />
          <Route path="/carton-erectors" element={<CartonErectors onNavigate={handleNavigate} />} />
          <Route path="/check-weigher" element={<CheckWeigher onNavigate={handleNavigate} />} />
          <Route path="/protective-packaging" element={<ProtectivePackaging onNavigate={handleNavigate} />} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
