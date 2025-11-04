import { ArrowLeft, CheckCircle, Package, Zap, Settings, Shield, Box } from 'lucide-react';

interface CartonSealingMachinesProps {
  onNavigate?: (page: string) => void;
}

const CartonSealingMachines = ({ onNavigate }: CartonSealingMachinesProps) => {
  const features = [
    {
      icon: Box,
      title: 'Uniform Sealing',
      description: 'Consistent tape application ensures secure closure for every carton',
    },
    {
      icon: Zap,
      title: 'High-Speed Operation',
      description: 'Seal up to 30 cartons per minute for maximum productivity',
    },
    {
      icon: Settings,
      title: 'Adjustable Format',
      description: 'Quickly adapt to different carton sizes without tools',
    },
    {
      icon: Shield,
      title: 'Tamper Evidence',
      description: 'Professional sealing provides visible security and protection',
    },
  ];

  const applications = [
    'E-commerce Shipping Cartons',
    'Distribution Center Packaging',
    'Retail Product Boxes',
    'Food & Beverage Cases',
    'Pharmaceutical Cartons',
    'Industrial Product Packaging',
    'Electronics Shipping Boxes',
    'Apparel & Textile Cartons',
    'Automotive Parts Packaging',
    'Export & International Shipping',
    'Subscription Box Fulfillment',
    'Returns & Reverse Logistics',
  ];

  const benefits = [
    'Reduces labor costs by 50-70%',
    'Increases packaging throughput',
    'Ensures consistent seal quality',
    'Reduces tape waste by 30%',
    'Improves workplace ergonomics',
    'Enhances package appearance',
    'Provides tamper evidence',
    'Minimizes repetitive strain injuries',
    'Quick ROI (typically 12-18 months)',
    'Improves warehouse efficiency',
  ];

  const machineTypes = [
    {
      type: 'Automatic Case Sealers',
      description: 'Fully automated inline systems with integrated conveyors that automatically adjust to carton height and seal top and bottom simultaneously',
      speeds: '15-30 cartons per minute',
      suitable: 'High-volume fulfillment, distribution centers, automated packaging lines',
      features: ['Auto carton sizing', 'Top & bottom sealing', 'Conveyor integration', 'PLC controls'],
    },
    {
      type: 'Semi-Automatic Sealers',
      description: 'Operator-assisted machines requiring manual carton positioning with automatic tape application and cutting',
      speeds: '8-15 cartons per minute',
      suitable: 'Medium-volume operations, varied carton sizes, flexible production',
      features: ['Manual loading', 'Automatic taping', 'Quick adjustments', 'Compact footprint'],
    },
    {
      type: 'Random Case Sealers',
      description: 'Advanced automatic systems that automatically detect and adapt to varying carton dimensions without manual adjustment',
      speeds: '12-25 cartons per minute',
      suitable: 'Mixed carton sizes, e-commerce fulfillment, multi-SKU operations',
      features: ['Auto size detection', 'No adjustments needed', 'Wide size range', 'Smart controls'],
    },
  ];

  const sealingPatterns = [
    {
      pattern: 'Tape I-Pattern',
      description: 'Single tape strip along center seam',
      uses: 'Light to medium-weight cartons, standard shipping',
      features: 'Economical tape usage, quick application',
    },
    {
      pattern: 'Tape H-Pattern',
      description: 'Center seam plus edge tapes forming H shape',
      uses: 'Heavy products, reinforced sealing, enhanced security',
      features: 'Maximum strength, tamper evidence',
    },
    {
      pattern: 'Tape U-Pattern',
      description: 'Tape wraps around leading and trailing edges',
      uses: 'Secure closure, dust protection, enhanced appearance',
      features: 'Complete edge coverage, professional look',
    },
  ];

  const specifications = [
    {
      label: 'Sealing Speed',
      value: 'Up to 30 cartons per minute',
    },
    {
      label: 'Carton Length',
      value: '150mm to 800mm',
    },
    {
      label: 'Carton Width',
      value: '150mm to 600mm',
    },
    {
      label: 'Carton Height',
      value: '100mm to 600mm (auto-adjusting)',
    },
    {
      label: 'Tape Width',
      value: '48mm, 60mm, or 75mm',
    },
    {
      label: 'Drive System',
      value: 'Belt conveyor or roller bed',
    },
  ];

  const tapeTypes = [
    {
      type: 'Acrylic Tape',
      properties: 'Clear appearance, excellent UV resistance, long-term adhesion',
      applications: 'Long-term storage, temperature variations, outdoor exposure',
      advantages: 'Won\'t yellow, excellent holding power, resists temperature extremes',
    },
    {
      type: 'Hot Melt Tape',
      properties: 'Aggressive initial tack, excellent adhesion to difficult surfaces',
      applications: 'Cold storage, recycled cartons, dusty environments, quick turnaround',
      advantages: 'Works in cold, bonds to challenging surfaces, immediate adhesion',
    },
    {
      type: 'Natural Rubber Tape',
      properties: 'Superior quick stick, excellent conformability, economical',
      applications: 'Standard shipping, smooth cartons, room temperature storage',
      advantages: 'Cost-effective, good performance, conformable',
    },
    {
      type: 'Water-Activated Tape',
      properties: 'Reinforced paper, bonds to carton fibers, tamper-evident',
      applications: 'High-security shipments, high-value products, fraud prevention',
      advantages: 'Maximum security, eco-friendly, professional appearance',
    },
  ];

  const advantages = [
    {
      title: 'Labor Efficiency',
      description: 'Automated sealing eliminates manual taping, reducing labor costs by 50-70% while freeing staff for higher-value activities and improving overall productivity.',
    },
    {
      title: 'Consistent Quality',
      description: 'Every carton receives uniform tape application with consistent tension, ensuring reliable sealing, professional appearance, and reduced customer complaints.',
    },
    {
      title: 'Material Savings',
      description: 'Precise tape dispensing eliminates over-application and waste, reducing tape consumption by 30% compared to manual methods while maintaining seal integrity.',
    },
    {
      title: 'Ergonomic Benefits',
      description: 'Automated sealing eliminates repetitive bending, reaching, and twisting motions that cause workplace injuries, improving safety and reducing workers\' compensation claims.',
    },
    {
      title: 'Production Speed',
      description: 'High-speed automatic sealing keeps pace with upstream operations, eliminating packaging bottlenecks and maximizing facility throughput.',
    },
    {
      title: 'Flexibility',
      description: 'Quick changeover between carton sizes and formats enables efficient multi-product operations without lengthy setup times or specialized tools.',
    },
  ];

  const industryApplications = [
    {
      industry: 'E-commerce & Fulfillment',
      uses: ['Online order packaging', 'Subscription box sealing', 'Return item processing', 'Multi-SKU fulfillment'],
      requirements: 'Fast changeover, varied sizes, high volume, integration with WMS',
    },
    {
      industry: 'Food & Beverage',
      uses: ['Case sealing', 'Display carton assembly', 'Retail-ready packaging', 'Distribution packaging'],
      requirements: 'Sanitary design, washdown capability, food-safe materials, rapid operation',
    },
    {
      industry: 'Manufacturing & Distribution',
      uses: ['Product packaging', 'Component kitting', 'Warehouse shipping', 'Pallet preparation'],
      requirements: 'Heavy-duty construction, varied products, integration with conveyors',
    },
    {
      industry: 'Pharmaceuticals',
      uses: ['Product carton sealing', 'Sample kit packaging', 'Clinical supply distribution', 'Compliance packaging'],
      requirements: 'Tamper evidence, traceability, GMP compliance, validation capability',
    },
  ];

  const integrationOptions = [
    {
      option: 'Standalone Operation',
      description: 'Independent case sealer with manual carton feeding and collection',
      benefits: 'Low investment, maximum flexibility, easy relocation, minimal floor space',
      suited: 'Small to medium operations, varied production schedules, multiple locations',
    },
    {
      option: 'Inline Integration',
      description: 'Sealer integrated with powered conveyors and upstream/downstream equipment',
      benefits: 'Automated flow, higher throughput, reduced handling, optimized efficiency',
      suited: 'High-volume operations, dedicated packaging lines, automated facilities',
    },
    {
      option: 'Complete Packaging Line',
      description: 'Fully integrated system with case forming, filling, sealing, labeling, and palletizing',
      benefits: 'Maximum automation, minimal labor, consistent quality, peak efficiency',
      suited: 'Large-scale distribution, dedicated products, continuous operation',
    },
  ];

  const maintenanceFeatures = [
    'Tool-free adjustments for quick changeover',
    'Self-diagnostic systems alert to issues',
    'Quick-release tape head for easy loading',
    'Accessible drive components',
    'Heavy-duty construction for long life',
    'Standard electrical components',
    'Comprehensive operator manuals',
    'Minimal daily maintenance required',
    'Self-lubricating bearings',
    'Readily available spare parts',
  ];

  const selectionCriteria = [
    {
      factor: 'Production Volume',
      consideration: 'Choose machine capacity based on current and projected throughput requirements',
      guidance: 'Semi-auto for <10 CPM, uniform auto for 10-25 CPM, random auto for >20 CPM mixed sizes',
    },
    {
      factor: 'Carton Size Range',
      consideration: 'Consider minimum and maximum dimensions plus frequency of size changes',
      guidance: 'Uniform sealers for consistent sizes, random sealers for varied dimensions',
    },
    {
      factor: 'Integration Requirements',
      consideration: 'Evaluate need for conveyor integration and automation with upstream/downstream equipment',
      guidance: 'Standalone for flexibility, inline for dedicated high-volume operations',
    },
    {
      factor: 'Floor Space',
      consideration: 'Account for machine footprint, infeed/outfeed space, and operator access',
      guidance: 'Semi-auto for limited space, full auto requires adequate floor space',
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
              Carton Sealing Machines
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              Professional case sealing equipment for secure, efficient closure of shipping cartons
              and boxes. Our carton sealing machines automate the taping process, delivering
              consistent seal quality, increased productivity, and reduced labor costs for
              warehouses, distribution centers, and manufacturing facilities of all sizes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
              <div className="max-w-3xl mx-auto aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture1242.png"
                  alt="Automatic Carton Sealing Machine"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Automated Case Sealing Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From compact semi-automatic table-top units to fully automated random case sealers
                with integrated conveyors, our machines provide reliable, professional sealing that
                improves efficiency, reduces costs, and ensures every package is securely closed
                for safe transportation and delivery.
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
              Machine Types & Configurations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Choose from semi-automatic, uniform automatic, or random case sealing systems designed
              to match your production volume, carton variety, and automation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {machineTypes.map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-orange-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{machine.type}</h3>
                  <p className="text-orange-100 text-sm">{machine.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Sealing Speed</p>
                      <p className="font-bold text-gray-900">{machine.speeds}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Best Suited For</p>
                      <p className="font-semibold text-gray-900">{machine.suitable}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {machine.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Sealing Patterns
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sealingPatterns.map((pattern, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{pattern.pattern}</h4>
                  <p className="text-gray-700 mb-3 text-sm">{pattern.description}</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Best For:</p>
                      <p className="text-gray-600 text-sm">{pattern.uses}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Features:</p>
                      <p className="text-gray-600 text-sm">{pattern.features}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Tape Types & Selection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tapeTypes.map((tape, index) => (
                <div key={index} className="border-2 border-orange-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{tape.type}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Properties:</p>
                      <p className="text-gray-700 text-sm">{tape.properties}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Applications:</p>
                      <p className="text-gray-700 text-sm">{tape.applications}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Advantages:</p>
                      <p className="text-gray-700 text-sm">{tape.advantages}</p>
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
                Case sealing machines are essential across industries for efficient, secure closure
                of shipping cartons, reducing labor costs and ensuring consistent quality.
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
                Automated case sealing delivers immediate cost savings, improved productivity, and
                enhanced workplace safety compared to manual taping operations.
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
              Modern case sealing equipment delivers measurable improvements in efficiency, quality,
              and cost savings compared to manual methods and older technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100">
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
              Industry-Specific Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {industryApplications.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                <div className="mb-4">
                  <p className="font-semibold text-gray-900 mb-3">Common Applications:</p>
                  <ul className="space-y-2">
                    {industry.uses.map((use, useIndex) => (
                      <li key={useIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-700">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Key Requirements:</p>
                  <p className="text-sm text-gray-700">{industry.requirements}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Integration Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrationOptions.map((option, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3">{option.option}</h4>
                  <p className="text-orange-100 mb-4 text-sm">{option.description}</p>
                  <div className="mb-4">
                    <p className="font-semibold mb-2 text-sm">Benefits:</p>
                    <p className="text-orange-100 text-sm">{option.benefits}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-sm">Best For:</p>
                    <p className="text-orange-100 text-sm">{option.suited}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Selection Guide
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Choose the right case sealer based on your specific operational requirements and
              production environment for optimal performance and return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {selectionCriteria.map((criteria, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{criteria.factor}</h3>
                <p className="text-gray-700 mb-3">{criteria.consideration}</p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Guidance:</p>
                  <p className="text-sm text-gray-700">{criteria.guidance}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Maintenance & Reliability Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {maintenanceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-900 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Case Sealers?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Reliability</p>
                      <p className="text-orange-100 text-sm">
                        Heavy-duty construction and quality components ensure years of consistent
                        performance in demanding production environments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Quick Changeover</p>
                      <p className="text-orange-100 text-sm">
                        Tool-free adjustments enable rapid format changes between carton sizes for
                        maximum production flexibility
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Tape Efficiency</p>
                      <p className="text-orange-100 text-sm">
                        Precision tape dispensing reduces waste by 30% compared to manual methods
                        while ensuring secure seals
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Support</p>
                      <p className="text-orange-100 text-sm">
                        Installation, operator training, preventive maintenance programs, and
                        responsive technical support for maximum uptime
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
                    Custom configurations available for unique carton dimensions, special tape
                    requirements, and integration with existing production lines.
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
              Automate Your Carton Sealing
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Case sealing machines deliver immediate labor savings, increased throughput, and
              consistent quality. Let our experts help you select the ideal sealing solution for
              your carton sizes, production volumes, and operational requirements.
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

export default CartonSealingMachines;
