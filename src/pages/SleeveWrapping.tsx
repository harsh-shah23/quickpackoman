import { ArrowLeft, CheckCircle, Settings, Shield, Zap, Package } from 'lucide-react';

interface SleeveWrappingProps {
  onNavigate?: (page: string) => void;
}

const SleeveWrapping = ({ onNavigate }: SleeveWrappingProps) => {
  const machines = [
    {
      image: '/Picture1.png',
      name: 'Automatic Sleeve Wrapping Line',
      description: 'Complete high-speed sleeve wrapping solution with integrated product handling, film application, and shrink tunnel for maximum throughput.',
    },
    {
      image: '/Picture3.jpg',
      name: 'PVC Shrink Sleeving for Jars/Bottles/Cans etc.',
      description: 'Versatile semi-automatic sleeve applicator ideal for medium production volumes with easy changeover capabilities.',
    },
    {
      image: '/Picture2 copy.png',
      name: 'Industrial Sleeve System',
      description: 'Heavy-duty sleeve wrapping system designed for demanding applications with precise film registration and efficient operation.',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'High Speed',
      description: 'Process up to 150 products per minute with precision',
    },
    {
      icon: Settings,
      title: 'Quick Changeover',
      description: 'Tool-free format changes in minutes for different sizes',
    },
    {
      icon: Shield,
      title: 'Reliable Performance',
      description: 'Industrial-grade components for 24/7 operation',
    },
    {
      icon: Package,
      title: 'Film Efficiency',
      description: 'Optimized film usage reduces material costs',
    },
  ];

  const applications = [
    'Beverage Bottles & Cans',
    'Multi-pack Bundling',
    'Dairy Products',
    'Food Containers',
    'Personal Care Products',
    'Household Goods',
    'Promotional Packaging',
    'Tamper-Evident Sealing',
  ];

  const benefits = [
    'Full 360° product coverage',
    'Superior graphics quality',
    'Tamper-evident packaging',
    'Reduced material costs vs. labels',
    'Environmentally friendly',
    'Enhanced brand visibility',
    'Compatible with various film types',
    'Minimal maintenance requirements',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sleeve Wrapping Machines</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Advanced sleeve wrapping technology delivering full-body decoration and protection
              for bottles, cans, and containers. Engineered for efficiency, quality, and reliability
              in high-speed production environments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sleeve Wrapping Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From compact semi-automatic systems to fully automated high-speed lines, we offer
              sleeve wrapping solutions tailored to your production requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
                Sleeve wrapping is the preferred choice for brands seeking impactful 360° graphics
                and secure, tamper-evident packaging across multiple industries.
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
                Sleeve wrapping offers numerous advantages over traditional labeling methods,
                delivering superior branding and protection.
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
                  Why Choose Our Sleeve Wrapping Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Precision Engineering</p>
                      <p className="text-blue-100 text-sm">
                        European-manufactured systems with precise film placement and sealing
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Maximum Uptime</p>
                      <p className="text-blue-100 text-sm">
                        Robust design and quality components ensure reliable production
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Flexible Integration</p>
                      <p className="text-blue-100 text-sm">
                        Easy integration with existing production lines and equipment
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Support</p>
                      <p className="text-blue-100 text-sm">
                        Installation, operator training, maintenance, and spare parts availability
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white text-gray-900 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-600 mb-1">Production Speed</p>
                    <p className="font-semibold">Up to 150 products/minute</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-600 mb-1">Product Diameter</p>
                    <p className="font-semibold">40mm - 180mm</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-600 mb-1">Product Height</p>
                    <p className="font-semibold">80mm - 350mm</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-600 mb-1">Film Material</p>
                    <p className="font-semibold">PVC, PETG, OPS, PLA</p>
                  </div>
                  <div className="pb-3">
                    <p className="text-sm text-gray-600 mb-1">Film Thickness</p>
                    <p className="font-semibold">30 - 80 microns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transform Your Product Packaging
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover how sleeve wrapping can elevate your brand presence and packaging efficiency.
            Contact our specialists for a customized solution.
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

export default SleeveWrapping;
