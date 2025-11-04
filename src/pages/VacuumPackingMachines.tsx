import { ArrowLeft, CheckCircle, Settings, Shield, Zap, Droplets } from 'lucide-react';

interface VacuumPackingMachinesProps {
  onNavigate?: (page: string) => void;
}

const VacuumPackingMachines = ({ onNavigate }: VacuumPackingMachinesProps) => {
  const machines = [
    {
      image: '/Picture6 copy.png',
      name: 'Double Chamber Vacuum Packing Machine',
      description: 'High-capacity dual chamber system for continuous operation, ideal for high-volume production environments with maximum efficiency.',
    },
    {
      image: '/Picture7.png',
      name: 'Double Chamber Industrial Vacuum Packing Machine',
      description: 'Heavy-duty vacuum chamber machine designed for demanding applications with large products and extended sealing bars.',
    },
    {
      image: '/Picture4.png',
      name: 'Compact Tabletop Vacuum Packing Machine',
      description: 'Space-saving single chamber unit perfect for small to medium production volumes with professional-grade performance.',
    },
    {
      image: '/Picture5 copy.png',
      name: 'Premium Big Chamber Vacuum Packing Machine',
      description: 'Advanced single chamber system with digital controls and programmable settings for precise vacuum packaging results.',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Cycle Times',
      description: 'Quick vacuum and sealing cycles for optimal productivity',
    },
    {
      icon: Settings,
      title: 'Digital Controls',
      description: 'Programmable settings with memory for different products',
    },
    {
      icon: Shield,
      title: 'Durable Construction',
      description: 'Stainless steel build for hygiene and longevity',
    },
    {
      icon: Droplets,
      title: 'Moisture Control',
      description: 'Advanced pump systems handle wet and dry products',
    },
  ];

  const applications = [
    'Fresh Meat & Poultry',
    'Seafood & Fish',
    'Cheese & Dairy Products',
    'Processed Foods',
    'Ready-to-Eat Meals',
    'Coffee & Dry Foods',
    'Medical Supplies',
    'Industrial Components',
  ];

  const benefits = [
    'Extended shelf life - up to 5x longer',
    'Prevents freezer burn and oxidation',
    'Maintains product freshness and flavor',
    'Reduces food waste and spoilage',
    'Hygienic and tamper-evident packaging',
    'Improved product presentation',
    'Cost-effective packaging solution',
    'Environmentally friendly - less preservatives needed',
  ];

  const specifications = [
    {
      label: 'Vacuum Level',
      value: 'Up to 99.9%',
    },
    {
      label: 'Sealing Bar Length',
      value: '300mm - 1200mm',
    },
    {
      label: 'Cycle Time',
      value: '15-45 seconds',
    },
    {
      label: 'Chamber Depth',
      value: '100mm - 250mm',
    },
    {
      label: 'Power Supply',
      value: '220V / 380V',
    },
    {
      label: 'Pump Capacity',
      value: '20-100 m³/h',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vacuum Packing Machines</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Professional vacuum packaging solutions engineered to preserve product freshness,
              extend shelf life, and maintain quality. From compact tabletop units to industrial
              double chamber systems for high-volume production.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vacuum Packing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of vacuum packaging machines designed to meet
              diverse production requirements across food, medical, and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {machines.map((machine, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-contain p-6"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{machine.name}</h3>
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
                Vacuum packaging is essential across multiple industries for preserving product
                quality, extending shelf life, and ensuring safe transportation and storage.
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
                Packaging Advantages
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Vacuum packaging provides unmatched benefits for product preservation and quality
                maintenance compared to traditional packaging methods.
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
                  Why Choose Our Vacuum Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Superior Vacuum Performance</p>
                      <p className="text-blue-100 text-sm">
                        High-quality pumps achieve optimal vacuum levels for maximum preservation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Hygienic Design</p>
                      <p className="text-blue-100 text-sm">
                        Stainless steel construction meets food safety and medical standards
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Easy Operation & Maintenance</p>
                      <p className="text-blue-100 text-sm">
                        User-friendly controls with simple cleaning and maintenance procedures
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Comprehensive Support</p>
                      <p className="text-blue-100 text-sm">
                        Installation, training, maintenance, and genuine spare parts availability
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
                    Specifications vary by model. Contact us for detailed technical information
                    specific to your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5x</div>
              <p className="text-gray-900 font-semibold mb-2">Longer Shelf Life</p>
              <p className="text-gray-600 text-sm">
                Products stay fresh up to 5 times longer with vacuum packaging
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-900 font-semibold mb-2">Vacuum Level</p>
              <p className="text-gray-600 text-sm">
                Maximum air removal for optimal product preservation
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-900 font-semibold mb-2">Operation Ready</p>
              <p className="text-gray-600 text-sm">
                Built for continuous production environments
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enhance Your Product Preservation
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Invest in professional vacuum packaging technology to reduce waste, extend shelf life,
              and maintain superior product quality. Our experts are ready to help you select the
              perfect system.
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

export default VacuumPackingMachines;
