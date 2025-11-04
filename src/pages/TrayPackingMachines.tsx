import { ArrowLeft, CheckCircle, Package, Zap, Settings, Shield } from 'lucide-react';

interface TrayPackingMachinesProps {
  onNavigate?: (page: string) => void;
}

const TrayPackingMachines = ({ onNavigate }: TrayPackingMachinesProps) => {
  const machines = [
    {
      image: '/Picture6.jpg',
      name: 'Manual Tray Sealing Machine',
      description: 'Compact benchtop tray sealer ideal for small to medium production runs. Features easy-to-use controls, quick tray changeover, and reliable sealing performance for pre-formed trays with various film materials.',
    },
    {
      image: '/Picture7.jpg',
      name: 'Automatic Tray Sealing Line',
      description: 'High-speed automated tray sealing system with integrated loading, Modified Atmosphere Packaging (MAP), sealing, and discharge. Designed for continuous production environments requiring maximum throughput and consistent quality.',
    },
  ];

  const features = [
    {
      icon: Package,
      title: 'Multiple Tray Formats',
      description: 'Handles various tray sizes and materials with quick changeover',
    },
    {
      icon: Shield,
      title: 'MAP Capability',
      description: 'Modified atmosphere packaging for extended shelf life',
    },
    {
      icon: Zap,
      title: 'Fast Sealing Cycles',
      description: 'Quick seal times maintain production efficiency',
    },
    {
      icon: Settings,
      title: 'Precision Control',
      description: 'Adjustable temperature, time, and pressure parameters',
    },
  ];

  const applications = [
    'Fresh Meat & Poultry',
    'Seafood Products',
    'Prepared Meals & Ready-to-Eat',
    'Fresh Produce & Salads',
    'Cheese & Dairy Products',
    'Deli Meats & Cold Cuts',
    'Fresh Pasta & Noodles',
    'Bakery Items',
    'Snack Foods',
    'Fruits & Vegetables',
    'Medical & Pharmaceutical',
    'Industrial Components',
  ];

  const benefits = [
    'Extended product shelf life with MAP',
    'Superior product presentation',
    'Tamper-evident packaging security',
    'Reduced product oxidation and spoilage',
    'Clear visibility of product',
    'Hygienic sealed environment',
    'Stackable for efficient shipping',
    'Retail-ready packaging solution',
  ];

  const sealingMethods = [
    {
      name: 'Heat Seal',
      description: 'Traditional thermal bonding of film to tray flange using controlled heat and pressure',
      suitable: 'General purpose applications with most film types',
    },
    {
      name: 'Vacuum Skin Packaging',
      description: 'Film drawn tightly around product contours under vacuum for second-skin appearance',
      suitable: 'High-value proteins, seafood, and premium products',
    },
    {
      name: 'Modified Atmosphere (MAP)',
      description: 'Tray atmosphere replaced with gas blend to extend shelf life before sealing',
      suitable: 'Fresh meat, poultry, seafood, and produce',
    },
    {
      name: 'Vacuum & Gas Flush',
      description: 'Combination of vacuum removal followed by protective gas injection',
      suitable: 'Maximum shelf life for highly perishable items',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Tray Loading',
      description: 'Pre-filled trays manually or automatically loaded into machine',
    },
    {
      step: '2',
      title: 'Gas Flushing (Optional)',
      description: 'Air replaced with protective gas mixture if MAP enabled',
    },
    {
      step: '3',
      title: 'Film Application',
      description: 'Flexible film positioned over tray opening',
    },
    {
      step: '4',
      title: 'Sealing & Cutting',
      description: 'Heat seals film to tray flange and trims excess',
    },
  ];

  const specifications = [
    {
      label: 'Tray Sizes',
      value: '50mm x 50mm to 420mm x 300mm',
    },
    {
      label: 'Seal Speed (Manual)',
      value: '2-6 cycles per minute',
    },
    {
      label: 'Seal Speed (Automatic)',
      value: '20-60 trays per minute',
    },
    {
      label: 'Film Materials',
      value: 'PP, PE, PET, multi-layer barrier films',
    },
    {
      label: 'Tray Materials',
      value: 'Plastic (PP, PET, PS), Aluminum, Paperboard',
    },
    {
      label: 'Gas Options',
      value: 'CO₂, N₂, O₂ in various blends',
    },
  ];

  const filmTypes = [
    {
      type: 'Standard Barrier Films',
      features: 'Good moisture and oxygen barrier for moderate shelf life extension',
    },
    {
      type: 'High-Barrier Films',
      features: 'Exceptional barrier properties for maximum freshness retention',
    },
    {
      type: 'Anti-Fog Films',
      features: 'Prevents condensation buildup maintaining product visibility',
    },
    {
      type: 'Peelable Films',
      features: 'Easy-open feature for consumer convenience',
    },
  ];

  const gasBlends = [
    {
      product: 'Red Meat',
      blend: '70-80% O₂, 20-30% CO₂',
      benefit: 'Maintains red color, inhibits bacteria',
    },
    {
      product: 'Poultry',
      blend: '30% CO₂, 70% N₂',
      benefit: 'Prevents oxidation, extends freshness',
    },
    {
      product: 'Seafood',
      blend: '40% CO₂, 30% N₂, 30% O₂',
      benefit: 'Controls spoilage organisms',
    },
    {
      product: 'Cheese',
      blend: '30% CO₂, 70% N₂',
      benefit: 'Prevents mold growth',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate?.('products')}
            className="flex items-center space-x-2 text-white hover:text-orange-200 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tray Packing Machines
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              Professional tray sealing equipment for creating attractive, protective packaging for
              fresh foods, prepared meals, and other products. Our manual and automatic tray
              sealers offer flexible solutions ranging from small-scale operations to high-volume
              production lines, with advanced Modified Atmosphere Packaging (MAP) capabilities to
              maximize product shelf life and quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manual & Automatic Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From compact benchtop units perfect for specialty food shops to fully automated
              production lines for large-scale manufacturers, we provide tray sealing solutions
              tailored to your production volume and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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

          <div className="bg-orange-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-full mb-4">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tray Sealing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Our tray sealing systems create a hermetic seal between flexible film and rigid
              trays, protecting contents from contamination while extending shelf life through
              optional atmosphere modification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processSteps.map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Sealing Methods & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {sealingMethods.map((method, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{method.name}</h4>
                  <p className="text-gray-700 mb-3">{method.description}</p>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm font-medium">{method.suitable}</p>
                  </div>
                </div>
              ))}
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
                Tray sealing is the packaging method of choice for fresh and prepared foods where
                product visibility, shelf life, and presentation are critical to commercial
                success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-orange-600 text-white rounded-full p-1 flex-shrink-0">
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
                Tray sealing delivers measurable advantages including reduced waste, improved food
                safety, enhanced shelf appeal, and significant shelf life extension when combined
                with MAP technology.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
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

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Modified Atmosphere Packaging (MAP)
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              MAP technology replaces the air inside sealed trays with precisely controlled gas
              mixtures that dramatically extend product freshness. Different products require
              specific gas combinations optimized for their characteristics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Product-Specific Gas Blends
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gasBlends.map((blend, index) => (
                <div key={index} className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{blend.product}</h4>
                  <p className="text-orange-600 font-semibold mb-2">{blend.blend}</p>
                  <p className="text-gray-600 text-sm">{blend.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Shelf Life Extension Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-orange-600 mb-2">3-5x</p>
                <p className="text-gray-900 font-semibold mb-1">Fresh Meat</p>
                <p className="text-gray-600 text-sm">2-3 days to 7-15 days</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-orange-600 mb-2">2-3x</p>
                <p className="text-gray-900 font-semibold mb-1">Poultry</p>
                <p className="text-gray-600 text-sm">3-4 days to 8-12 days</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-orange-600 mb-2">2-4x</p>
                <p className="text-gray-900 font-semibold mb-1">Seafood</p>
                <p className="text-gray-600 text-sm">2-3 days to 6-10 days</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-orange-600 mb-2">3-4x</p>
                <p className="text-gray-900 font-semibold mb-1">Prepared Meals</p>
                <p className="text-gray-600 text-sm">3-5 days to 12-18 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Film Options
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              The selection of appropriate sealing film is critical to achieving optimal shelf
              life, product protection, and visual presentation. We support all major film types
              and can recommend the best option for your application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filmTypes.map((film, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{film.type}</h3>
                <p className="text-gray-600">{film.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Tray Sealing Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Flexible Configuration</p>
                      <p className="text-orange-100 text-sm">
                        Manual, semi-automatic, and fully automatic models to match your production
                        needs and budget
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Quick Format Changes</p>
                      <p className="text-orange-100 text-sm">
                        Tool-free tray size changeover enables production flexibility without
                        lengthy downtime
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Consistent Seal Quality</p>
                      <p className="text-orange-100 text-sm">
                        Precise temperature and pressure control ensures reliable hermetic seals
                        every cycle
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Comprehensive Training</p>
                      <p className="text-orange-100 text-sm">
                        Complete operator training, installation support, and ongoing technical
                        assistance
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
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Custom specifications available for specialized applications. Contact us to
                    discuss your specific tray sealing requirements.
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
              Machine Selection Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Manual Tray Sealers</h3>
                <p className="text-gray-600 mb-4">Best suited for:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Small batch production (up to 500 trays/day)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Specialty food shops and delis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Product development and testing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Limited floor space operations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automatic Tray Sealers</h3>
                <p className="text-gray-600 mb-4">Best suited for:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">High-volume production (500+ trays/day)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Central kitchens and food processors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Integration with production lines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Labor cost reduction requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enhance Product Quality & Shelf Life
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Tray sealing with MAP technology is proven to reduce waste, improve food safety, and
              extend distribution reach. Let our packaging experts help you select the ideal
              solution for your products and production requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-lg"
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

export default TrayPackingMachines;
