import { ArrowLeft, CheckCircle, Package, Zap, Settings, Layers } from 'lucide-react';

interface PouchPackingMachinesProps {
  onNavigate?: (page: string) => void;
}

const PouchPackingMachines = ({ onNavigate }: PouchPackingMachinesProps) => {
  const machines = [
    {
      image: '/Picture5 copy copy.png',
      name: 'Automatic Pouch Packing Solutions',
      description: 'High-performance automated pouch packaging systems for a wide variety of products including liquids, powders, granules, and solids. Our machines create attractive, shelf-ready pouches with superior seal integrity and visual appeal for retail and industrial applications.',
    },
  ];

  const features = [
    {
      icon: Package,
      title: 'Versatile Formats',
      description: 'Handles stand-up pouches, flat pouches, and spouted pouches',
    },
    {
      icon: Zap,
      title: 'High-Speed Operation',
      description: 'Up to 60 pouches per minute depending on size and product',
    },
    {
      icon: Layers,
      title: 'Multi-Product Capability',
      description: 'Packages liquids, pastes, powders, granules, and solids',
    },
    {
      icon: Settings,
      title: 'Easy Changeover',
      description: 'Quick format changes with minimal downtime between runs',
    },
  ];

  const applications = [
    'Food & Snacks',
    'Spices & Seasonings',
    'Rice & Grains',
    'Flour & Baking Mixes',
    'Sauces & Condiments',
    'Beverages & Concentrates',
    'Pet Food & Treats',
    'Pharmaceutical Products',
    'Nutraceuticals & Supplements',
    'Personal Care Products',
    'Detergents & Cleaners',
    'Agricultural Products',
  ];

  const benefits = [
    'Attractive shelf presentation',
    'Reduced packaging material costs',
    'Extended product shelf life',
    'Enhanced brand visibility',
    'Space-efficient storage and shipping',
    'Consumer-friendly reclosable options',
    'Environmentally friendly packaging',
    'Improved production efficiency',
  ];

  const pouchTypes = [
    {
      name: 'Stand-Up Pouches',
      description: 'Gusseted bottom allows pouch to stand upright on shelf for maximum visibility and consumer appeal',
    },
    {
      name: 'Flat Pouches',
      description: 'Three or four-side seal pouches ideal for lightweight products and maximizing shelf space',
    },
    {
      name: 'Spouted Pouches',
      description: 'Integrated spout closure for liquids and semi-liquids, offering convenience and reusability',
    },
    {
      name: 'Zipper Pouches',
      description: 'Reclosable zipper feature maintains product freshness after opening for multi-use products',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Pouch Loading',
      description: 'Pre-made pouches automatically fed from magazine',
    },
    {
      step: '2',
      title: 'Opening & Positioning',
      description: 'Vacuum system opens pouch and positions for filling',
    },
    {
      step: '3',
      title: 'Product Filling',
      description: 'Precise dosing system fills pouch with product',
    },
    {
      step: '4',
      title: 'Sealing & Discharge',
      description: 'Heat sealing closes pouch and discharges finished package',
    },
  ];

  const specifications = [
    {
      label: 'Pouch Width',
      value: '100mm - 350mm',
    },
    {
      label: 'Pouch Length',
      value: '100mm - 450mm',
    },
    {
      label: 'Speed',
      value: '30-60 pouches/min (product dependent)',
    },
    {
      label: 'Fill Volume Range',
      value: '50ml - 5000ml',
    },
    {
      label: 'Pouch Materials',
      value: 'Laminated films, PE, PP, PET, Aluminum foil composites',
    },
    {
      label: 'Filling Systems',
      value: 'Auger, volumetric cup, multi-head weigher, liquid pump',
    },
  ];

  const fillingOptions = [
    {
      type: 'Auger Filler',
      suitable: 'Powders and fine granules',
      accuracy: '±0.5% - 1%',
    },
    {
      type: 'Volumetric Cup',
      suitable: 'Free-flowing granular products',
      accuracy: '±1% - 2%',
    },
    {
      type: 'Multi-Head Weigher',
      suitable: 'Snacks, chips, irregular products',
      accuracy: '±0.3% - 1%',
    },
    {
      type: 'Liquid Pump',
      suitable: 'Liquids, pastes, sauces',
      accuracy: '±0.5% - 1%',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate?.('products')}
            className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pouch Packing Machines
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Advanced automated packaging systems designed for filling and sealing pre-made pouches
              with exceptional speed, accuracy, and reliability. Our pouch packing machines handle
              diverse product types and pouch formats, delivering consistent quality and attractive
              shelf-ready packages that enhance brand presence and consumer appeal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pouch Packaging Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From food products to pharmaceuticals, our pouch packing machines provide the
              flexibility and performance needed to meet diverse packaging requirements while
              maintaining the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16 max-w-4xl mx-auto">
            {machines.map((machine, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-video bg-gray-50 overflow-hidden flex items-center justify-center">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{machine.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{machine.description}</p>
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

      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Pouch Packing Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Our rotary or intermittent motion systems guide pre-made pouches through a series of
              precisely timed stations, ensuring consistent filling, sealing, and quality control
              at every step of the packaging process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processSteps.map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Advantages of Pre-Made Pouches
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-6">
              Unlike form-fill-seal systems that create pouches from roll stock, pouch packing
              machines use pre-made pouches that offer superior graphics, premium appearance, and
              unique features like zippers, spouts, and windows. This approach provides maximum
              shelf appeal and brand differentiation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-black-600 mb-2">360°</p>
                <p className="text-gray-700 font-semibold">Print Coverage</p>
                <p className="text-gray-600 text-sm mt-2">Full-surface graphics and branding</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-black-600 mb-2">Premium</p>
                <p className="text-gray-700 font-semibold">Appearance</p>
                <p className="text-gray-600 text-sm mt-2">Professional finishing and features</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-black-600 mb-2">Quick</p>
                <p className="text-gray-700 font-semibold">Format Change</p>
                <p className="text-gray-600 text-sm mt-2">Minimal downtime between products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Applications
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Pouch packaging has become the preferred format across multiple industries due to
                its versatility, consumer convenience, and cost-effectiveness compared to rigid
                containers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
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
                Business Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transitioning to pouch packaging delivers measurable advantages including reduced
                material costs, improved logistics efficiency, and enhanced consumer appeal that
                drives sales.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-blue-600 text-white rounded-full p-1 flex-shrink-0">
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

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Pouch Format Options
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Our machines accommodate various pouch styles to meet specific product requirements
              and marketing objectives. Each format offers unique advantages for different
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {pouchTypes.map((style, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{style.name}</h3>
                <p className="text-gray-600">{style.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Available Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Zipper Closures</h4>
                <p className="text-gray-600 text-sm">Reclosable for freshness</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Tear Notches</h4>
                <p className="text-gray-600 text-sm">Easy opening feature</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Hang Holes</h4>
                <p className="text-gray-600 text-sm">Retail display option</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Clear Windows</h4>
                <p className="text-gray-600 text-sm">Product visibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Filling System Options
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Our pouch packing machines can be configured with various filling systems optimized
              for your specific product characteristics and accuracy requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {fillingOptions.map((option, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.type}</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-gray-600 font-semibold mr-2">Best for:</span>
                    <span className="text-gray-700">{option.suitable}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-600 font-semibold mr-2">Accuracy:</span>
                    <span className="text-green-600 font-bold">{option.accuracy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Pouch Packing Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Modular Design</p>
                      <p className="text-white-100 text-sm">
                        Expandable configuration allows adding stations for date coding, gas
                        flushing, or quality inspection
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Precise Filling Control</p>
                      <p className="text-white-100 text-sm">
                        Advanced dosing systems ensure consistent fill weights and volumes with
                        minimal product giveaway
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Sanitary Construction</p>
                      <p className="text-white-100 text-sm">
                        Stainless steel food-grade design with easy-clean surfaces meets hygiene
                        standards
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Full Support Package</p>
                      <p className="text-white-100 text-sm">
                        Installation, operator training, spare parts inventory, and ongoing
                        technical assistance
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
                    Custom configurations available based on pouch size, product type, production
                    speed, and special requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Additional Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gas Flushing (MAP)</h3>
                <p className="text-gray-600">
                  Modified atmosphere packaging extends shelf life by replacing air with nitrogen or
                  gas blends
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <Settings className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Date Code Printing</h3>
                <p className="text-gray-600">
                  Integrated inkjet or thermal transfer printers add production dates, lot codes, and
                  barcodes
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Inspection</h3>
                <p className="text-gray-600">
                  Automated vision systems verify fill levels, seal integrity, and print quality
                  during production
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Packaging with Pouches
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Pouch packaging combines visual appeal, functionality, and cost-efficiency to deliver
              packaging that stands out on the shelf and drives consumer preference. Let our team
              help you select the ideal pouch packing solution for your products.
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

export default PouchPackingMachines;
