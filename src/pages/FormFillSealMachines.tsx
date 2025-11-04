import { ArrowLeft, CheckCircle, Package, Gauge, Settings, Zap } from 'lucide-react';

interface FormFillSealMachinesProps {
  onNavigate?: (page: string) => void;
}

const FormFillSealMachines = ({ onNavigate }: FormFillSealMachinesProps) => {
  const machines = [
    {
      image: '/Picture4 copy.jpg',
      name: 'Vertical Form Fill Seal Machine with Multi-Head Weigher',
      description: 'High-performance VFFS system integrated with precision multi-head weigher for accurate portioning and packaging of dry products, snacks, and granular materials at high speeds.',
    },
  ];

  const features = [
    {
      icon: Package,
      title: 'Complete Automation',
      description: 'Forms bags, fills product, and seals in continuous operation',
    },
    {
      icon: Gauge,
      title: 'Precision Weighing',
      description: 'Multi-head weigher ensures accurate portion control',
    },
    {
      icon: Zap,
      title: 'High-Speed Production',
      description: 'Up to 80 bags per minute depending on product and size',
    },
    {
      icon: Settings,
      title: 'Versatile Packaging',
      description: 'Multiple bag styles including pillow, gusset, and quad seal',
    },
  ];

  const applications = [
    'Snack Foods & Chips',
    'Coffee & Tea',
    'Nuts & Seeds',
    'Dried Fruits',
    'Candy & Confectionery',
    'Frozen Foods',
    'Pet Foods & Treats',
    'Granular Products',
    'Powdered Foods',
    'Cereal & Grains',
    'Pasta & Rice',
    'Baked Goods',
  ];

  const benefits = [
    'Reduced labor costs through automation',
    'Consistent packaging quality',
    'Minimized product waste',
    'Faster production speeds',
    'Lower packaging material costs',
    'Improved hygiene and food safety',
    'Flexible bag size changeover',
    'Enhanced product presentation',
  ];

  const bagStyles = [
    {
      name: 'Pillow Bag',
      description: 'Standard three-side seal bag, most economical option',
    },
    {
      name: 'Gusseted Bag',
      description: 'Side or bottom gussets allow bag to stand upright on shelf',
    },
    {
      name: 'Quad Seal Bag',
      description: 'Four corner seals create premium box-bottom appearance',
    },
    {
      name: 'Block Bottom Bag',
      description: 'Flat bottom with expanded sides for maximum stability',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Film Unwind',
      description: 'Roll of packaging film feeds into machine',
    },
    {
      step: '2',
      title: 'Bag Forming',
      description: 'Film formed into tube shape and sealed longitudinally',
    },
    {
      step: '3',
      title: 'Product Filling',
      description: 'Precise amount of product dispensed into bag',
    },
    {
      step: '4',
      title: 'Sealing & Cutting',
      description: 'Top seal, cut, and bottom seal in continuous motion',
    },
  ];

  const specifications = [
    {
      label: 'Bag Width',
      value: '80mm - 350mm',
    },
    {
      label: 'Bag Length',
      value: '100mm - 500mm',
    },
    {
      label: 'Film Width',
      value: '200mm - 720mm',
    },
    {
      label: 'Speed',
      value: '30-80 bags/min (product dependent)',
    },
    {
      label: 'Fill Weight Range',
      value: '10g - 5000g',
    },
    {
      label: 'Film Material',
      value: 'PE, PP, Laminated films, Foil laminates',
    },
    {
      label: 'Weigher Type',
      value: '10-14 head multi-head weigher',
    },
    {
      label: 'Accuracy',
      value: '±0.5g to ±2g (product dependent)',
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
              Form Fill Seal Machines
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Complete automated packaging solution that forms bags from roll stock film, fills them
              with precise product quantities, and seals them in one continuous operation. Our
              Vertical Form Fill Seal (VFFS) systems with integrated multi-head weighers deliver
              unmatched speed, accuracy, and efficiency for high-volume production environments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced VFFS Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Form Fill Seal machines integrate cutting-edge technology to deliver consistent,
              high-quality packaging at production speeds that maximize your throughput and
              profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16 max-w-4xl mx-auto">
            {machines.map((machine, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square bg-gray-50 overflow-hidden flex items-center justify-center">
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

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Form Fill Seal Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              The VFFS process combines multiple packaging operations into a single, streamlined
              workflow. From roll stock to finished package, everything happens automatically.
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
              Multi-Head Weigher Technology
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-6">
              The integrated multi-head weigher is the brain of the system. Product is fed into
              multiple hoppers, and the control system instantly calculates the best combination of
              hoppers to achieve the target weight with maximum accuracy. This computer-optimized
              approach delivers consistent portions at high speeds while minimizing product
              giveaway.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">±0.5g</p>
                <p className="text-gray-700 font-semibold">Weighing Accuracy</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">80</p>
                <p className="text-gray-700 font-semibold">Bags Per Minute</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">14</p>
                <p className="text-gray-700 font-semibold">Weighing Heads</p>
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
                Form Fill Seal technology is the industry standard for packaging a wide variety of
                dry, free-flowing products. From snack foods to frozen items, VFFS machines handle
                diverse product characteristics with consistent results.
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
                Investing in VFFS technology transforms your packaging operation, reducing costs
                while improving quality, consistency, and production capacity.
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
              Bag Style Options
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Choose from multiple bag configurations to match your product requirements and create
              the perfect shelf presentation. Our VFFS machines can be configured for various bag
              styles with quick changeover capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {bagStyles.map((style, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{style.name}</h3>
                <p className="text-gray-600 text-sm">{style.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Film Compatibility
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-6">
              Our VFFS machines work with a wide range of packaging films including polyethylene,
              polypropylene, laminated structures, and foil composites. Film selection depends on
              product characteristics, barrier requirements, and desired shelf life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900 mb-1">PE Films</p>
                <p className="text-gray-600 text-sm">Economical, moisture barrier</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900 mb-1">PP Films</p>
                <p className="text-gray-600 text-sm">High clarity, grease resistant</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900 mb-1">Laminates</p>
                <p className="text-gray-600 text-sm">Multiple barrier layers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900 mb-1">Foil Laminates</p>
                <p className="text-gray-600 text-sm">Maximum barrier protection</p>
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
                  Why Choose Our Form Fill Seal Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Reliability</p>
                      <p className="text-blue-100 text-sm">
                        Industrial-grade components and construction ensure years of dependable
                        operation with minimal downtime
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">User-Friendly Controls</p>
                      <p className="text-blue-100 text-sm">
                        Intuitive touchscreen interface with recipe storage for quick product
                        changeovers
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Hygienic Design</p>
                      <p className="text-blue-100 text-sm">
                        Stainless steel construction with tool-free access for easy cleaning and
                        sanitation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Support</p>
                      <p className="text-blue-100 text-sm">
                        Installation, training, preventive maintenance programs, and 24/7 technical
                        support
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
                    Custom configurations available to meet specific product requirements and
                    production goals. Contact us for detailed specifications.
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
              Advanced Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <Settings className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Date Coding</h3>
                <p className="text-gray-600">
                  Integrated printing systems for date codes, lot numbers, and barcodes directly on
                  bags
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gas Flushing</h3>
                <p className="text-gray-600">
                  Modified atmosphere packaging (MAP) capabilities to extend product shelf life
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <Gauge className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Control</h3>
                <p className="text-gray-600">
                  Integrated checkweighers and metal detectors for comprehensive quality assurance
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Revolutionize Your Packaging Operation
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your production line with automated Form Fill Seal technology. Our experts
              will help you select the optimal configuration for your products, production volumes,
              and packaging requirements.
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

export default FormFillSealMachines;
