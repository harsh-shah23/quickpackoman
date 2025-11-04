import { ArrowLeft, CheckCircle, Settings, Shield, Zap } from 'lucide-react';

interface ShrinkWrappingMachinesProps {
  onNavigate?: (page: string) => void;
}

const ShrinkWrappingMachines = ({ onNavigate }: ShrinkWrappingMachinesProps) => {
  const machines = [
    {
      image: '/Picture4.jpg',
      name: 'Semi-automatic Minipack Modular – 50/70 System',
      description: 'High-performance automatic L-sealer with integrated shrink tunnel, perfect for medium to high-volume production.',
    },
    {
      image: '/Picture2.png',
      name: 'Minipack Synthesis/FM – 76/Replay – 40/55 ',
      description: 'Compact semi-automatic chamber machine ideal for small to medium-sized products with consistent quality.',
    },
    {
      image: '/Picture5.png',
      name: 'Mini Media',
      description: 'Versatile automatic L-sealer system designed for efficient packaging of various product sizes.',
    },
    {
      image: '/Picture6.png',
      name: 'Pratika 56 X1,X2, Smart, MPS',
      description: 'Advanced automatic shrink wrapper with superior sealing performance and energy-efficient operation.',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'High Efficiency',
      description: 'Fast processing speeds with consistent, professional results',
    },
    {
      icon: Settings,
      title: 'Easy Operation',
      description: 'User-friendly controls with minimal training required',
    },
    {
      icon: Shield,
      title: 'Durable Build',
      description: 'Robust construction from premium European components',
    },
    {
      icon: CheckCircle,
      title: 'Versatile',
      description: 'Handles various product sizes and packaging materials',
    },
  ];

  const applications = [
    'Food & Beverage Packaging',
    'Pharmaceutical Products',
    'Consumer Goods',
    'Books & Publications',
    'Electronics & Hardware',
    'Cosmetics & Personal Care',
    'Multi-pack Bundling',
    'Retail Display Packaging',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shrink Wrapping Machines</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Professional shrink wrapping solutions from Minipack-Torre, Italy's leading manufacturer
              of packaging equipment. Engineered for reliability, efficiency, and superior packaging quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Shrink Wrapping Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of premium shrink wrapping machines designed to meet diverse
              packaging requirements across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {machines.map((machine, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-contain p-4"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Applications
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our shrink wrapping machines are trusted across multiple industries for their
                reliability, precision, and consistent packaging quality.
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

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Why Choose Minipack-Torre?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Italian Engineering Excellence</p>
                    <p className="text-blue-100 text-sm">
                      Over 50 years of innovation in packaging technology
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Energy Efficient Design</p>
                    <p className="text-blue-100 text-sm">
                      Reduced operational costs with eco-friendly technology
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Comprehensive Support</p>
                    <p className="text-blue-100 text-sm">
                      Installation, training, and ongoing maintenance services
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Spare Parts Availability</p>
                    <p className="text-blue-100 text-sm">
                      Quick access to genuine parts for minimal downtime
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Upgrade Your Packaging Line?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our experts for a personalized consultation and discover the perfect
            shrink wrapping solution for your business.
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
      </section>
    </div>
  );
};

export default ShrinkWrappingMachines;
