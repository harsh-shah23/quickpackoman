import { ArrowLeft, CheckCircle, Shield, Search, AlertTriangle, Settings } from 'lucide-react';

interface MetalDetectorsProps {
  onNavigate?: (page: string) => void;
}

const MetalDetectors = ({ onNavigate }: MetalDetectorsProps) => {
  const machines = [
    {
      image: '/Picture16.png',
      name: 'THS/PH21 Series Industrial Metal Detector',
      description: 'Advanced conveyor-based metal detection system with dual configurations for comprehensive product inspection and contamination prevention in production lines.',
    },
    {
      image: '/Picture17.png',
      name: 'Compact Metal Detector with Touchscreen',
      description: 'High-sensitivity metal detector featuring intuitive touchscreen interface and automatic rejection system for precise contamination detection in food and pharmaceutical products.',
    },
    {
      image: '/Picture15.png',
      name: 'Gravity Fall Metal Detector',
      description: 'Specialized gravity-fed metal detection system with quick-release inspection mechanism, ideal for free-flowing products and bulk material processing.',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Maximum Protection',
      description: 'Detect ferrous, non-ferrous, and stainless steel contaminants',
    },
    {
      icon: Search,
      title: 'High Sensitivity',
      description: 'Advanced detection technology for smallest metal particles',
    },
    {
      icon: AlertTriangle,
      title: 'Automatic Rejection',
      description: 'Instant product removal when contamination is detected',
    },
    {
      icon: Settings,
      title: 'Easy Calibration',
      description: 'User-friendly controls with multiple product memory settings',
    },
  ];

  const applications = [
    'Food Processing & Packaging',
    'Pharmaceutical Manufacturing',
    'Bakery & Confectionery',
    'Meat & Poultry Processing',
    'Dairy Products',
    'Fresh Produce & Vegetables',
    'Snack Foods & Cereals',
    'Pet Food Manufacturing',
    'Chemical & Cosmetics',
    'Plastics & Recycling',
  ];

  const benefits = [
    'HACCP and FDA compliance',
    'Prevents product recalls',
    'Protects processing equipment',
    'Ensures consumer safety',
    'Reduces liability risks',
    'Improves quality control',
    'Minimizes production waste',
    'Enhances brand reputation',
  ];

  const detectionCapabilities = [
    {
      type: 'Ferrous Metals',
      description: 'Iron, steel, and magnetic materials',
    },
    {
      type: 'Non-Ferrous Metals',
      description: 'Aluminum, copper, brass, and lead',
    },
    {
      type: 'Stainless Steel',
      description: 'All grades including 304 and 316',
    },
  ];

  const specifications = [
    {
      label: 'Detection Technology',
      value: 'Balanced Coil System',
    },
    {
      label: 'Sensitivity',
      value: 'Fe 0.5mm / Non-Fe 0.8mm / SS 1.0mm',
    },
    {
      label: 'Aperture Sizes',
      value: '150mm - 500mm (customizable)',
    },
    {
      label: 'Conveyor Speed',
      value: 'Up to 60 m/min',
    },
    {
      label: 'Operating Frequency',
      value: '50-1000 kHz (auto-adjustable)',
    },
    {
      label: 'Rejection System',
      value: 'Pneumatic / Mechanical options',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate?.('products')}
            className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industrial Metal Detectors
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              State-of-the-art metal detection systems designed to safeguard product quality and
              ensure consumer safety. Our industrial metal detectors provide reliable contamination
              detection for food, pharmaceutical, and manufacturing industries with unmatched
              sensitivity and accuracy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Metal Detection Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of metal detectors engineered for critical quality control
              applications. From conveyor systems to gravity fall units, we provide solutions
              for every production environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {machines.map((machine, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square bg-gray-50 overflow-hidden flex items-center justify-center">
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
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-4">
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

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Detection Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Our metal detectors utilize advanced balanced coil technology to identify all types
              of metal contaminants, regardless of orientation or location within the product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {detectionCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-800 to-blue-900 text-white p-8 rounded-xl"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white text-gray-900 rounded-full mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{capability.type}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Critical Quality Control Point
                </h4>
                <p className="text-gray-700">
                  Metal detection is a Critical Control Point (CCP) in HACCP plans. Our systems
                  provide the documentation and reliability required for regulatory compliance and
                  certification audits.
                </p>
              </div>
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
                Metal detectors are essential equipment across multiple industries where product
                purity and consumer safety are paramount. Our systems integrate seamlessly into
                existing production lines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-blue-800 text-white rounded-full p-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="text-gray-900 font-medium">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Business Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Implementing metal detection systems protects your brand, ensures compliance,
                and provides peace of mind that your products meet the highest safety standards.
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
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Metal Detection Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Advanced Detection Technology</p>
                      <p className="text-gray-300 text-sm">
                        Multi-frequency operation automatically adapts to product characteristics for
                        optimal sensitivity
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Hygienic Design</p>
                      <p className="text-gray-300 text-sm">
                        Stainless steel construction with IP65/IP69K protection for washdown
                        environments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Intuitive Operation</p>
                      <p className="text-gray-300 text-sm">
                        Touchscreen interface with multi-language support and comprehensive data
                        logging
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Support</p>
                      <p className="text-gray-300 text-sm">
                        Installation, validation, training, and ongoing calibration services
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
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Specifications vary by model and application. Contact us for detailed technical
                    data and custom configurations.
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
              How Metal Detection Works
            </h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                Our metal detectors use balanced coil technology with a transmitter coil that
                generates an electromagnetic field. When a metal contaminant passes through this
                field, it disrupts the balance between two receiver coils, triggering an immediate
                alarm and rejection response.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-gray-800 mb-2">1</div>
                  <p className="text-gray-900 font-semibold mb-2">Detection</p>
                  <p className="text-gray-600 text-sm">
                    Electromagnetic field scans product continuously
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-gray-800 mb-2">2</div>
                  <p className="text-gray-900 font-semibold mb-2">Identification</p>
                  <p className="text-gray-600 text-sm">
                    System identifies metal contamination instantly
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-gray-800 mb-2">3</div>
                  <p className="text-gray-900 font-semibold mb-2">Rejection</p>
                  <p className="text-gray-600 text-sm">
                    Contaminated product removed automatically
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Protect Your Products and Brand
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Ensure product safety and regulatory compliance with our reliable metal detection
              systems. Our specialists can help you select the right solution for your application
              and production requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors text-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-white text-blue-800 border-2 border-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg"
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

export default MetalDetectors;
