import { ArrowLeft, CheckCircle, Zap, Shield, Settings, Package } from 'lucide-react';

interface InductionSealingMachinesProps {
  onNavigate?: (page: string) => void;
}

const InductionSealingMachines = ({ onNavigate }: InductionSealingMachinesProps) => {
  const machines = [
    {
      image: '/Picture2 copy copy.png',
      name: 'Super Seal Induction Sealer',
      description: 'Compact benchtop induction sealing system with digital controls and adjustable power settings for consistent, reliable seals on bottles and containers.',
    },
    {
      image: '/Picture3.png',
      name: 'Handheld Induction Cap Sealer',
      description: 'Portable induction sealing wand with ergonomic design, perfect for low-volume operations and manual sealing applications requiring flexibility and mobility.',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Instant Sealing',
      description: 'Electromagnetic induction creates hermetic seals in seconds',
    },
    {
      icon: Shield,
      title: 'Tamper Evidence',
      description: 'Provides visible proof of package integrity and freshness',
    },
    {
      icon: Settings,
      title: 'Adjustable Power',
      description: 'Variable power control for different cap sizes and materials',
    },
    {
      icon: Package,
      title: 'Universal Compatibility',
      description: 'Works with various container sizes and foil liner types',
    },
  ];

  const applications = [
    'Pharmaceutical Bottles & Vials',
    'Food & Beverage Containers',
    'Nutraceutical Products',
    'Cosmetics & Personal Care',
    'Chemical & Agrochemical Products',
    'Vitamin & Supplement Bottles',
    'Essential Oils & Aromatherapy',
    'Specialty Foods & Sauces',
    'Dairy & Beverage Products',
    'Industrial Liquids & Oils',
  ];

  const benefits = [
    'Extends product shelf life',
    'Prevents leakage and spills',
    'Maintains product freshness',
    'Tamper-evident security',
    'No contact contamination',
    'Fast production speeds',
    'Minimal maintenance required',
    'Cost-effective sealing solution',
  ];

  const sealingProcess = [
    {
      step: '1',
      title: 'Place Container',
      description: 'Position capped container under induction head',
    },
    {
      step: '2',
      title: 'Activate Sealing',
      description: 'Electromagnetic field heats foil liner instantly',
    },
    {
      step: '3',
      title: 'Bond Formation',
      description: 'Heat-activated adhesive bonds foil to container rim',
    },
    {
      step: '4',
      title: 'Complete Seal',
      description: 'Hermetic seal formed, cap removed reveals liner',
    },
  ];

  const specifications = [
    {
      label: 'Power Output',
      value: '400W - 3000W',
    },
    {
      label: 'Frequency',
      value: '20-50 kHz',
    },
    {
      label: 'Seal Diameter Range',
      value: '15mm - 130mm',
    },
    {
      label: 'Conveyor Speed',
      value: 'Up to 300 BPM (bottles per minute)',
    },
    {
      label: 'Cap Material Compatibility',
      value: 'PP, HDPE, LDPE, PET',
    },
    {
      label: 'Liner Types',
      value: 'Aluminum foil with wax, PE, or PS backing',
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
              Induction Sealing Machines
            </h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Advanced electromagnetic induction sealing technology for creating hermetic,
              tamper-evident seals on bottles and containers. Our induction sealers provide
              reliable, contactless sealing for pharmaceuticals, food, beverages, and industrial
              products requiring maximum freshness and security.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Induction Sealing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From benchtop units for small-scale operations to high-speed inline systems for
              production lines, we offer induction sealing equipment for every application and
              volume requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Induction Sealing Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Induction sealing uses electromagnetic energy to create a hermetic seal without
              direct contact with the container. The process is clean, fast, and creates a
              tamper-evident barrier that protects product integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sealingProcess.map((process, index) => (
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
              The Science Behind Induction Sealing
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
              When the capped container passes under the induction sealing head, a high-frequency
              electromagnetic field is generated. This field penetrates the cap and heats the
              aluminum foil liner instantly. The heat activates a polymer coating on the foil,
              which bonds to the container rim, creating an airtight, tamper-evident seal. The cap
              remains cool and the process is complete in milliseconds.
            </p>
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
                Induction sealing is the preferred method for creating tamper-evident seals across
                industries where product freshness, safety, and integrity are critical requirements.
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
                Implementing induction sealing technology delivers measurable benefits including
                reduced product returns, extended shelf life, and enhanced brand protection.
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
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Induction Sealing Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Energy Efficient Technology</p>
                      <p className="text-red-100 text-sm">
                        Precise electromagnetic control minimizes energy consumption while maximizing
                        seal quality
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Versatile Configuration</p>
                      <p className="text-red-100 text-sm">
                        Available in handheld, benchtop, and inline conveyor models for any
                        production scale
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Easy Integration</p>
                      <p className="text-red-100 text-sm">
                        Seamlessly integrates into existing filling and capping lines with minimal
                        modifications
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Comprehensive Support</p>
                      <p className="text-red-100 text-sm">
                        Installation, operator training, preventive maintenance, and technical
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
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Custom configurations available based on container size, production speed, and
                    specific sealing requirements.
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
              Liner Compatibility & Selection
            </h2>
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl">
              <p className="text-lg text-gray-700 mb-6">
                Induction sealing requires specialized foil liners inserted into caps. We provide
                guidance on selecting the appropriate liner material based on your product
                characteristics, container type, and storage conditions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg text-center">
                  <h4 className="font-bold text-gray-900 mb-2">Wax-Based Liners</h4>
                  <p className="text-gray-600 text-sm">
                    Ideal for dry products, vitamins, and supplements
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <h4 className="font-bold text-gray-900 mb-2">PE Foam Liners</h4>
                  <p className="text-gray-600 text-sm">
                    Best for liquids, sauces, and chemical products
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <h4 className="font-bold text-gray-900 mb-2">PS Foam Liners</h4>
                  <p className="text-gray-600 text-sm">
                    Suitable for cosmetics and personal care items
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Secure Your Products with Induction Sealing
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Protect product integrity, ensure consumer safety, and create tamper-evident packaging
              with our reliable induction sealing solutions. Let our specialists help you choose the
              right system for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
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

export default InductionSealingMachines;
