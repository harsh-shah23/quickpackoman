import { ArrowLeft, CheckCircle, Settings, Shield, Zap, Package } from 'lucide-react';

interface PalletWrappingMachinesProps {
  onNavigate?: (page: string) => void;
}

const PalletWrappingMachines = ({ onNavigate }: PalletWrappingMachinesProps) => {
  const machines = [
    {
      image: '/Picture43.png',
      name: 'Automatic Turntable Stretch Wrapper',
      description: 'Fully automatic rotary turntable pallet wrapper with advanced pre-stretch technology for optimal film usage and secure load containment.',
    },
    {
      image: '/Picture222.jpg',
      name: 'Automatic Pallet Wrapper',
      description: 'Reliable turntable stretch wrapper with electronic controls, ideal for medium-volume operations requiring consistent wrapping quality.',
    },
    {
      image: '/Picture9.jpg',
      name: 'Fully Automatic pallet Wrapper',
      description: 'Heavy-duty multi-unit pallet wrapping solution designed for high-volume warehouses and distribution centers with various load configurations.',
    },
    {
      image: '/Picture10.png',
      name: 'Premium Stretch Wrapping Machine',
      description: 'High-performance turntable wrapper featuring intelligent film tension control and multiple wrapping programs for diverse applications.',
    },
    {
      image: '/Picture13.png',
      name: 'Advanced Turntable Stretch Wrapper',
      description: 'State-of-the-art automatic pallet wrapper with touchscreen controls and customizable wrapping patterns for maximum efficiency.',
    },
    {
      image: '/Picture14.png',
      name: 'Compact Automatic Stretch Wrapper',
      description: 'Space-efficient automatic turntable wrapper with integrated control panel and adjustable wrapping parameters for versatile packaging operations.',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'High Efficiency',
      description: 'Wrap up to 120 pallets per hour with automated operation',
    },
    {
      icon: Settings,
      title: 'Pre-Stretch Technology',
      description: 'Film savings up to 50% with optimal load containment',
    },
    {
      icon: Shield,
      title: 'Load Protection',
      description: 'Superior stability and protection during transport',
    },
    {
      icon: Package,
      title: 'Versatile Applications',
      description: 'Handle various pallet sizes and load configurations',
    },
  ];

  const applications = [
    'Warehouse & Distribution',
    'Food & Beverage Industry',
    'Pharmaceuticals',
    'Manufacturing Plants',
    'Logistics Centers',
    'Retail Distribution',
    'Export Packaging',
    'Chemical Industries',
  ];

  const benefits = [
    'Reduced film consumption and costs',
    'Consistent wrapping quality',
    'Improved load stability',
    'Faster wrapping cycles',
    'Enhanced worker safety',
    'Reduced product damage',
    'Weather and dust protection',
    'Tamper-evident packaging',
  ];

  const specifications = [
    {
      label: 'Turntable Speed',
      value: '0-12 RPM',
    },
    {
      label: 'Maximum Load',
      value: 'Up to 2000 kg',
    },
    {
      label: 'Turntable Diameter',
      value: '1500mm - 2000mm',
    },
    {
      label: 'Wrapping Height',
      value: 'Up to 2400mm',
    },
    {
      label: 'Film Width',
      value: '500mm',
    },
    {
      label: 'Pre-Stretch Ratio',
      value: 'Up to 300%',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate?.('products')}
            className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pallet Wrapping & Stretch Wrapping Machines
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Advanced pallet wrapping solutions engineered to secure, stabilize, and protect your
              loads during storage and transportation. From semi-automatic to fully automated systems
              with intelligent pre-stretch technology for maximum film efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Pallet Wrapping Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of turntable stretch wrappers designed to meet diverse operational
              requirements from small warehouses to large-scale distribution centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {machines.slice(0, 3).map((machine, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-contain p-6"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{machine.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{machine.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {machines.slice(3).map((machine, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-contain p-6"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{machine.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{machine.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features & Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Applications
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Pallet wrapping is essential across industries for securing loads, reducing damage,
                and ensuring safe transportation from warehouse to final destination.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-blue-600 text-white rounded-full p-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="text-gray-900 font-medium">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Operational Advantages
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Modern stretch wrapping technology delivers significant operational and financial
                benefits compared to manual wrapping methods.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-green-600 text-white rounded-full p-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="text-gray-900 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Pallet Wrapping Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Advanced Pre-Stretch Technology</p>
                      <p className="text-blue-100 text-sm">
                        Achieve up to 300% pre-stretch ratio for maximum film efficiency and cost savings
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Robust Construction</p>
                      <p className="text-blue-100 text-sm">
                        Heavy-duty design for continuous operation in demanding environments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Intelligent Control Systems</p>
                      <p className="text-blue-100 text-sm">
                        User-friendly interfaces with multiple wrapping programs and diagnostics
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Service Package</p>
                      <p className="text-blue-100 text-sm">
                        Installation, training, preventive maintenance, and genuine spare parts
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white text-gray-900 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-0">
                      <p className="text-sm text-gray-600 mb-1">{spec.label}</p>
                      <p className="font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Custom configurations available. Contact us for specifications tailored to your
                    specific load requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Pre-Stretch Technology Explained
            </h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                Pre-stretch technology is the key to maximizing film efficiency and reducing costs.
                By mechanically stretching the film before it's applied to the load, our machines
                deliver superior load containment while using significantly less film.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
                  <p className="text-gray-900 font-semibold mb-2">Film Savings</p>
                  <p className="text-gray-600 text-sm">
                    Reduce film consumption compared to manual wrapping
                  </p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
                  <p className="text-gray-900 font-semibold mb-2">Pre-Stretch Ratio</p>
                  <p className="text-gray-600 text-sm">
                    Maximum film elongation for optimal coverage
                  </p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <p className="text-gray-900 font-semibold mb-2">Load Security</p>
                  <p className="text-gray-600 text-sm">
                    Consistent tension and superior load stability
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Secure Your Loads Efficiently
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your packaging operations with automated pallet wrapping technology. Reduce
              costs, improve safety, and ensure consistent load protection. Let our specialists help
              you choose the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PalletWrappingMachines;
