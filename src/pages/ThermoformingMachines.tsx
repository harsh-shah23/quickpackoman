import { ArrowLeft, CheckCircle, Package, Zap, Settings, Shield, Thermometer } from 'lucide-react';

interface ThermoformingMachinesProps {
  onNavigate?: (page: string) => void;
}

const ThermoformingMachines = ({ onNavigate }: ThermoformingMachinesProps) => {
  const features = [
    {
      icon: Thermometer,
      title: 'Precision Forming',
      description: 'Advanced heating and forming control for consistent package quality',
    },
    {
      icon: Package,
      title: 'Integrated System',
      description: 'Complete forming, filling, sealing, and cutting in one continuous process',
    },
    {
      icon: Zap,
      title: 'High-Speed Production',
      description: 'Automated operation delivers exceptional throughput rates',
    },
    {
      icon: Shield,
      title: 'MAP Capability',
      description: 'Built-in modified atmosphere packaging extends product shelf life',
    },
  ];

  const applications = [
    'Fresh Meat & Poultry',
    'Seafood Products',
    'Cheese & Dairy',
    'Deli Meats & Prepared Foods',
    'Fresh Produce & Salads',
    'Ready-to-Eat Meals',
    'Medical Devices',
    'Pharmaceutical Products',
    'Electronics Components',
    'Industrial Parts',
    'Bakery Items',
    'Confectionery Products',
  ];

  const benefits = [
    'Material efficiency with minimal waste',
    'Custom package shapes and sizes',
    'Superior product protection',
    'Extended shelf life with MAP',
    'Excellent product visibility',
    'Reduced labor costs',
    'Consistent package quality',
    'High production speeds',
    'Tamper-evident seals',
    'Space-efficient packaging',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Film Heating',
      description: 'Bottom film heated to optimal forming temperature',
    },
    {
      step: '2',
      title: 'Package Forming',
      description: 'Heated film shaped into package cavities using molds',
    },
    {
      step: '3',
      title: 'Product Loading',
      description: 'Products automatically or manually placed into formed packages',
    },
    {
      step: '4',
      title: 'Gas Flushing',
      description: 'Optional MAP gas injection to extend shelf life',
    },
    {
      step: '5',
      title: 'Top Film Sealing',
      description: 'Lid film hermetically sealed to bottom package',
    },
    {
      step: '6',
      title: 'Package Cutting',
      description: 'Individual packages separated and discharged',
    },
  ];

  const specifications = [
    {
      label: 'Package Formats',
      value: 'Customizable shapes and sizes',
    },
    {
      label: 'Output Speed',
      value: 'Up to 120 cycles per minute',
    },
    {
      label: 'Film Materials',
      value: 'Flexible multi-layer barrier films',
    },
    {
      label: 'Sealing Method',
      value: 'Heat seal with optional MAP',
    },
    {
      label: 'Control System',
      value: 'PLC with touchscreen HMI',
    },
    {
      label: 'Gas Options',
      value: 'CO₂, N₂, O₂ in various blends',
    },
  ];

  const machineTypes = [
    {
      type: 'Horizontal Thermoforming',
      description: 'Film fed horizontally through stations for forming, filling, sealing, and cutting',
      suitable: 'High-speed production, food products, medical devices',
      speeds: '40-120 cycles/minute',
    },
    {
      type: 'Vertical Thermoforming',
      description: 'Film processed vertically with gravity-assisted product loading',
      suitable: 'Liquids, granular products, powders',
      speeds: '30-80 cycles/minute',
    },
    {
      type: 'Rollstock Thermoforming',
      description: 'Continuous rollstock film formed into packages in inline process',
      suitable: 'Large-scale production, consistent products',
      speeds: '50-120 cycles/minute',
    },
  ];

  const filmTypes = [
    {
      type: 'Standard Barrier Films',
      properties: 'Good moisture and oxygen barrier',
      applications: 'General food products, moderate shelf life',
    },
    {
      type: 'High-Barrier Films',
      properties: 'Exceptional gas and moisture barrier',
      applications: 'Fresh meats, seafood, extended shelf life products',
    },
    {
      type: 'Transparent Films',
      properties: 'Crystal-clear product visibility',
      applications: 'Fresh produce, retail display products',
    },
    {
      type: 'Anti-Fog Films',
      properties: 'Prevents condensation buildup',
      applications: 'Fresh meats, prepared salads, chilled foods',
    },
  ];

  const advantages = [
    {
      title: 'Material Efficiency',
      description: 'Package formed from continuous rollstock minimizes scrap and reduces material costs compared to pre-formed containers.',
    },
    {
      title: 'Design Flexibility',
      description: 'Create custom package shapes, depths, and compartments tailored to your specific product requirements.',
    },
    {
      title: 'Production Speed',
      description: 'Integrated forming-filling-sealing process achieves higher throughput than separate packaging operations.',
    },
    {
      title: 'Product Protection',
      description: 'Hermetic seals with optional MAP provide superior protection against contamination and spoilage.',
    },
    {
      title: 'Space Efficiency',
      description: 'Compact packages maximize storage and shipping efficiency, reducing logistics costs.',
    },
    {
      title: 'Automation Benefits',
      description: 'Reduced labor requirements and consistent quality through automated process control.',
    },
  ];

  const industryApplications = [
    {
      industry: 'Food Processing',
      uses: ['Fresh and frozen meats', 'Seafood', 'Cheese and dairy', 'Ready meals', 'Snack foods'],
    },
    {
      industry: 'Medical & Pharmaceutical',
      uses: ['Surgical instruments', 'Syringes and needles', 'Diagnostic devices', 'Pharmaceutical products'],
    },
    {
      industry: 'Electronics',
      uses: ['Circuit boards', 'Components', 'Consumer electronics', 'Sensitive equipment'],
    },
    {
      industry: 'Industrial',
      uses: ['Small parts', 'Hardware', 'Automotive components', 'Tools and accessories'],
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
              Thermoforming Machines
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              Advanced thermoforming packaging systems that form, fill, seal, and cut packages in
              one continuous automated process. Our thermoforming machines deliver exceptional
              efficiency, material savings, and package quality for food, medical, and industrial
              applications requiring high-speed production and superior product protection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="aspect-video max-w-5xl mx-auto bg-gray-50 rounded-xl overflow-hidden shadow-2xl mb-8">
              <img
                src="/Picture333.jpg"
                alt="Thermoforming Machine"
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Forming-Filling-Sealing Solution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Thermoforming machines create packages directly from rollstock film, forming the
                package shape, filling with product, sealing with top film, and cutting individual
                packages in a single automated line. This integrated approach maximizes efficiency
                while minimizing material waste and labor costs.
              </p>
            </div>
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
              Thermoforming Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              The thermoforming process creates custom-shaped packages in a continuous workflow,
              from flat rollstock film to finished sealed packages ready for distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
              Machine Types & Configurations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {machineTypes.map((machine, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{machine.type}</h4>
                  <p className="text-gray-700 mb-4 text-sm">{machine.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold">Best For:</span> {machine.suitable}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Zap className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold">Speed:</span> {machine.speeds}
                      </p>
                    </div>
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
                Thermoforming is the preferred packaging method for applications requiring
                custom-shaped packages, high production volumes, material efficiency, and superior
                product protection.
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
                Thermoforming packaging delivers measurable advantages including reduced material
                costs, improved production efficiency, and enhanced product protection throughout
                the supply chain.
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
              Competitive Advantages
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Thermoforming technology offers distinct benefits over traditional packaging methods,
              making it the optimal choice for many high-volume production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Film Options & Materials
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Film selection is critical to achieving optimal package performance. We support all
              major thermoformable film types and can recommend the ideal material for your
              application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filmTypes.map((film, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{film.type}</h3>
                <p className="text-orange-600 font-semibold mb-2">{film.properties}</p>
                <p className="text-gray-600 text-sm">{film.applications}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Common Film Structures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="font-bold text-gray-900 mb-2">Basic Structure</p>
                <p className="text-sm text-gray-600">PE/PP single or co-extruded films</p>
                <p className="text-orange-600 font-semibold mt-2">50-100 microns</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="font-bold text-gray-900 mb-2">Barrier Structure</p>
                <p className="text-sm text-gray-600">Multi-layer with EVOH or PA barrier</p>
                <p className="text-orange-600 font-semibold mt-2">100-200 microns</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="font-bold text-gray-900 mb-2">High-Barrier Structure</p>
                <p className="text-sm text-gray-600">Multiple barrier layers with metallization</p>
                <p className="text-orange-600 font-semibold mt-2">150-250 microns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Industry-Specific Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryApplications.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                <ul className="space-y-2">
                  {industry.uses.map((use, useIndex) => (
                    <li key={useIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Thermoforming Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Reliability</p>
                      <p className="text-orange-100 text-sm">
                        Robust construction and quality components ensure years of dependable
                        operation with minimal downtime
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Format Flexibility</p>
                      <p className="text-orange-100 text-sm">
                        Quick changeover between package sizes and formats maximizes production
                        versatility
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Advanced Controls</p>
                      <p className="text-orange-100 text-sm">
                        Intuitive touchscreen interface with recipe management and real-time
                        monitoring
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Support</p>
                      <p className="text-orange-100 text-sm">
                        Installation, training, preventive maintenance, and responsive technical
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
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Custom configurations available for specialized applications. Contact us to
                    discuss your specific thermoforming requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Maximize Efficiency with Thermoforming
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Thermoforming technology delivers unmatched material efficiency, production speed, and
              package quality. Let our packaging experts help you design the optimal thermoforming
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

export default ThermoformingMachines;
