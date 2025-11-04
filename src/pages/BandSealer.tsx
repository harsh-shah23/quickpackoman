import { ArrowLeft, CheckCircle, Zap, Settings, Shield, Thermometer } from 'lucide-react';

interface BrandSealerProps {
  onNavigate?: (page: string) => void;
}

const BrandSealer = ({ onNavigate }: BrandSealerProps) => {
  const features = [
    {
      icon: Thermometer,
      title: 'Precise Temperature Control',
      description: 'Adjustable heat settings ensure optimal sealing for various materials',
    },
    {
      icon: Zap,
      title: 'Continuous Operation',
      description: 'Non-stop sealing capability for high-volume production environments',
    },
    {
      icon: Settings,
      title: 'Adjustable Speed',
      description: 'Variable conveyor speed to match production requirements',
    },
    {
      icon: Shield,
      title: 'Reliable Sealing',
      description: 'Consistent hermetic seals protect contents from contamination',
    },
  ];

  const applications = [
    'Food Packaging (Snacks, Grains, Spices)',
    'Pharmaceutical Products',
    'Cosmetics & Personal Care',
    'Chemical Powders & Granules',
    'Medical Supplies & Devices',
    'Electronic Components',
    'Agricultural Seeds',
    'Pet Food & Treats',
    'Coffee & Tea Packaging',
    'Detergents & Cleaning Products',
    'Industrial Parts & Hardware',
    'Textile & Garment Accessories',
  ];

  const benefits = [
    'Continuous operation increases productivity',
    'Consistent seal quality reduces rejects',
    'Adjustable for various bag sizes',
    'Suitable for multiple film materials',
    'Optional date coding capability',
    'Minimal operator training required',
    'Low maintenance requirements',
    'Compact footprint saves floor space',
    'Energy-efficient heating elements',
    'Quick return on investment',
  ];

  const sealerTypes = [
    {
      type: 'Horizontal Band Sealers',
      description: 'Continuous horizontal sealing for pouches and bags laid flat, ideal for standard packaging operations with consistent throughput',
      orientation: 'Horizontal seal orientation',
      suitable: 'Food products, retail packaging, pharmaceuticals, general manufacturing',
      features: ['Flat bag sealing', 'Integrated conveyors', 'Height adjustable', 'Optional cooling zone'],
    },
    {
      type: 'Vertical Band Sealers',
      description: 'Vertical sealing configuration for standing pouches and bags, space-saving design for facilities with limited floor space',
      orientation: 'Vertical seal orientation',
      suitable: 'Limited space operations, heavy products, bulk materials, industrial packaging',
      features: ['Space-efficient design', 'Heavy-duty construction', 'Vertical bag handling', 'Compact footprint'],
    },
    {
      type: 'Heavy-Duty Band Sealers',
      description: 'Industrial-grade sealers for thick materials and large bags, reinforced construction for demanding applications',
      orientation: 'Horizontal or vertical available',
      suitable: 'Large bags, thick films, industrial materials, high-volume production',
      features: ['Reinforced frame', 'Wide sealing band', 'High wattage heating', 'Extended seal width'],
    },
  ];

  const filmMaterials = [
    {
      material: 'Polyethylene (PE)',
      properties: 'Flexible, heat-sealable, moisture barrier, economical',
      sealingTemp: '120-180°C',
      applications: 'Food bags, retail packaging, general products',
    },
    {
      material: 'Polypropylene (PP)',
      properties: 'High clarity, good barrier properties, heat resistant',
      sealingTemp: '140-200°C',
      applications: 'Snack foods, textiles, clear packaging',
    },
    {
      material: 'Laminated Films',
      properties: 'Multi-layer construction, superior barrier, printable',
      sealingTemp: '150-220°C',
      applications: 'Coffee, pet food, pharmaceuticals, premium products',
    },
    {
      material: 'Aluminum Foil Laminates',
      properties: 'Excellent barrier, light protection, long shelf life',
      sealingTemp: '160-220°C',
      applications: 'Medical products, electronics, specialty foods',
    },
  ];

  const specifications = [
    {
      label: 'Sealing Speed',
      value: '0-12 meters per minute (variable)',
    },
    {
      label: 'Seal Width',
      value: '6mm to 12mm',
    },
    {
      label: 'Maximum Bag Thickness',
      value: 'Up to 0.6mm (combined)',
    },
    {
      label: 'Temperature Range',
      value: '0-300°C (adjustable)',
    },
    {
      label: 'Power Supply',
      value: '220V / 50Hz or 110V / 60Hz',
    },
    {
      label: 'Conveyor Height',
      value: '700-900mm (adjustable)',
    },
  ];

  const advantages = [
    {
      title: 'Continuous Production',
      description: 'Unlike impulse sealers that require cooling time between seals, band sealers operate continuously without interruption, maximizing throughput for high-volume operations.',
    },
    {
      title: 'Versatile Materials',
      description: 'Handles a wide range of thermoplastic films including PE, PP, PVC, laminates, and aluminum foil composites with simple temperature adjustments.',
    },
    {
      title: 'Integrated Printing',
      description: 'Optional hot stamp or inkjet coding attachments enable date coding, batch numbers, and expiry marking directly during the sealing process.',
    },
    {
      title: 'Consistent Quality',
      description: 'Precise temperature control and constant pressure ensure uniform seal strength across every package, reducing rejects and customer complaints.',
    },
    {
      title: 'Operational Efficiency',
      description: 'Simple controls and minimal setup time enable operators to quickly change products or adjust settings, reducing downtime between production runs.',
    },
    {
      title: 'Cost Effectiveness',
      description: 'Durable construction and simple mechanism result in low maintenance costs and extended service life, providing excellent return on investment.',
    },
  ];

  const optionalFeatures = [
    {
      feature: 'Date Coding System',
      description: 'Hot stamp or inkjet printer for date, batch, and expiry marking',
      benefits: 'Traceability, compliance, inventory management',
    },
    {
      feature: 'Gas Flushing Attachment',
      description: 'Nitrogen or gas injection before sealing for extended shelf life',
      benefits: 'Preserves freshness, prevents oxidation, extends product life',
    },
    {
      feature: 'Cooling Zone',
      description: 'Extended cooling section for immediate seal strength',
      benefits: 'Handles bags immediately, faster production, no waiting',
    },
    {
      feature: 'Embossing Roller',
      description: 'Creates textured or patterned seal for enhanced appearance',
      benefits: 'Professional look, improved grip, brand differentiation',
    },
    {
      feature: 'Bag Counting System',
      description: 'Automatic counting for batch tracking and inventory',
      benefits: 'Accurate production records, quality control, efficiency tracking',
    },
    {
      feature: 'Adjustable Height Stand',
      description: 'Pneumatic or manual height adjustment for operator comfort',
      benefits: 'Ergonomic operation, accommodates different operators, reduces fatigue',
    },
  ];

  const industryApplications = [
    {
      industry: 'Food & Beverage',
      uses: ['Snack food packaging', 'Coffee and tea bags', 'Spices and seasonings', 'Dried fruits and nuts'],
      requirements: 'Food-safe materials, washdown capability, date coding, gas flushing option',
    },
    {
      industry: 'Pharmaceuticals',
      uses: ['Medical device packaging', 'Powder medications', 'Sterile supplies', 'Sample packaging'],
      requirements: 'Clean room compatible, validation capability, traceability, precision control',
    },
    {
      industry: 'Chemicals & Industrial',
      uses: ['Powder chemicals', 'Granular materials', 'Industrial parts', 'Hardware components'],
      requirements: 'Heavy-duty construction, wide seal capability, thick film handling, corrosion resistance',
    },
    {
      industry: 'Cosmetics & Personal Care',
      uses: ['Sample sachets', 'Beauty products', 'Wipes and tissues', 'Travel-size items'],
      requirements: 'Attractive seals, gentle handling, multiple film types, compact design',
    },
  ];

  const maintenanceGuide = [
    'Clean heating elements and conveyor belts weekly',
    'Check and replace Teflon tape monthly',
    'Lubricate moving parts every 3 months',
    'Inspect and clean cooling fans regularly',
    'Verify temperature calibration quarterly',
    'Replace worn conveyor belts as needed',
    'Keep seal area free from debris and film residue',
    'Test emergency stop function monthly',
    'Maintain proper ventilation around unit',
    'Store spare parts for quick replacement',
  ];

  const selectionGuide = [
    {
      consideration: 'Production Volume',
      factors: 'Packages per hour, shift duration, growth projections',
      recommendation: 'Low volume (<1000/day): Basic model | High volume (>5000/day): Heavy-duty with cooling',
    },
    {
      consideration: 'Bag Size Range',
      factors: 'Minimum and maximum dimensions, thickness, weight',
      recommendation: 'Standard bags: Horizontal model | Large/heavy bags: Vertical or heavy-duty model',
    },
    {
      consideration: 'Film Material',
      factors: 'Film type, thickness, single or laminated',
      recommendation: 'Standard films: Basic unit | Thick/laminated: Heavy-duty with higher wattage',
    },
    {
      consideration: 'Additional Features',
      factors: 'Date coding, gas flushing, counting, embossing needs',
      recommendation: 'Specify requirements upfront for integrated installation and optimal performance',
    },
  ];

  const operatingPrinciples = [
    {
      step: 'Bag Feeding',
      description: 'Filled bags are placed on the conveyor belt, either manually or from upstream filling equipment',
      details: 'Consistent placement ensures uniform sealing and prevents jamming',
    },
    {
      step: 'Heating Zone',
      description: 'The bag passes between heated sealing bands that melt the thermoplastic material',
      details: 'Temperature-controlled heating elements maintain precise sealing temperature',
    },
    {
      step: 'Pressure Application',
      description: 'Tensioned bands apply constant pressure to create hermetic seal',
      details: 'Spring-loaded mechanism ensures consistent pressure across seal width',
    },
    {
      step: 'Cooling Zone',
      description: 'Optional cooling section solidifies the seal before bag discharge',
      details: 'Air or water cooling provides immediate seal strength',
    },
    {
      step: 'Discharge',
      description: 'Sealed bags exit the machine ready for collection or downstream processing',
      details: 'Conveyor height adjustable for integration with packaging lines',
    },
  ];

  const troubleshooting = [
    {
      issue: 'Weak or Incomplete Seals',
      causes: ['Temperature too low', 'Insufficient pressure', 'Dirty sealing band', 'Film incompatible'],
      solutions: ['Increase temperature setting', 'Adjust band tension', 'Clean heating elements', 'Verify film specifications'],
    },
    {
      issue: 'Wrinkled Seals',
      causes: ['Temperature too high', 'Speed too slow', 'Uneven bag feeding', 'Damaged Teflon tape'],
      solutions: ['Reduce temperature', 'Increase conveyor speed', 'Ensure straight feeding', 'Replace Teflon tape'],
    },
    {
      issue: 'Bags Jamming',
      causes: ['Improper height adjustment', 'Bag overfilled', 'Conveyor misalignment', 'Foreign material'],
      solutions: ['Adjust conveyor height', 'Reduce fill volume', 'Realign conveyor', 'Clear debris'],
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
              Brand Sealer
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Professional continuous brand sealing machines for high-volume packaging operations. Our
              brand sealers provide reliable, consistent hermetic seals for plastic bags and pouches
              filled with food, pharmaceuticals, chemicals, and consumer products. With adjustable
              temperature and speed controls, these sealers handle various film materials and bag
              sizes efficiently.
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
                  src="/Picture2.jpg"
                  alt="Band Sealer Machine"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Continuous Sealing Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Band sealers are the workhorse of packaging operations, offering continuous, reliable
                sealing without the start-stop limitations of impulse sealers. From compact table-top
                models for small businesses to heavy-duty industrial systems with integrated coding
                and gas flushing, our band sealers deliver consistent quality at production speeds.
              </p>
            </div>
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
              Band Sealer Types & Configurations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Choose from horizontal, vertical, or heavy-duty band sealing configurations designed
              to match your production requirements, space constraints, and product characteristics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {sealerTypes.map((sealer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{sealer.type}</h3>
                  <p className="text-blue-100 text-sm">{sealer.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Orientation</p>
                      <p className="font-bold text-gray-900">{sealer.orientation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Best Suited For</p>
                      <p className="font-semibold text-gray-900">{sealer.suitable}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {sealer.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Compatible Film Materials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filmMaterials.map((film, index) => (
                <div key={index} className="border-2 border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{film.material}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Properties:</p>
                      <p className="text-gray-700 text-sm">{film.properties}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Sealing Temperature:</p>
                      <p className="text-gray-700 text-sm">{film.sealingTemp}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Applications:</p>
                      <p className="text-gray-700 text-sm">{film.applications}</p>
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
                Band sealers are essential across industries for securing product freshness,
                preventing contamination, and providing tamper-evident packaging for consumer
                confidence.
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
                Band sealing technology offers significant advantages over manual sealing methods and
                intermittent sealing equipment for medium to high-volume operations.
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
              How Band Sealers Work
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Understanding the operating principle helps optimize settings and troubleshoot issues
              for consistent, high-quality sealing results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {operatingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{principle.step}</h3>
                <p className="text-gray-700 text-sm mb-3">{principle.description}</p>
                <p className="text-gray-600 text-xs italic">{principle.details}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Optional Features & Enhancements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {optionalFeatures.map((option, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{option.feature}</h4>
                  <p className="text-gray-700 mb-3 text-sm">{option.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Benefits:</p>
                    <p className="text-sm text-blue-800">{option.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Competitive Advantages
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Band sealers deliver superior performance and value for production environments
              requiring consistent quality and continuous operation.
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

      <section className="bg-gray-50 py-16 px-4">
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
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Key Requirements:</p>
                  <p className="text-sm text-gray-700">{industry.requirements}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Selection Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectionGuide.map((guide, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6 py-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{guide.consideration}</h4>
                  <p className="text-gray-700 mb-3 text-sm">
                    <span className="font-semibold">Consider:</span> {guide.factors}
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Recommendation:</p>
                    <p className="text-sm text-gray-700">{guide.recommendation}</p>
                  </div>
                </div>
              ))}
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
                  Why Choose Our Band Sealers?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Reliability</p>
                      <p className="text-blue-100 text-sm">
                        Heavy-duty construction and industrial-grade components ensure years of
                        dependable operation in demanding production environments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Precise Control</p>
                      <p className="text-blue-100 text-sm">
                        Digital temperature controllers and variable speed drives enable exact
                        parameter settings for optimal seal quality
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Easy Maintenance</p>
                      <p className="text-blue-100 text-sm">
                        Accessible components and simple design minimize downtime and reduce
                        maintenance costs throughout the equipment lifecycle
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Support</p>
                      <p className="text-blue-100 text-sm">
                        Installation assistance, operator training, maintenance programs, and
                        responsive technical support ensure maximum uptime
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
                    Custom configurations available for unique bag sizes, special film requirements,
                    and integration with upstream filling or downstream packaging equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Maintenance & Troubleshooting
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Maintenance Checklist</h3>
              <div className="space-y-3">
                {maintenanceGuide.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Issues & Solutions</h3>
              <div className="space-y-6">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">{item.issue}</h4>
                    <div className="mb-2">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Possible Causes:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {item.causes.map((cause, cIndex) => (
                          <li key={cIndex}>• {cause}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Solutions:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {item.solutions.map((solution, sIndex) => (
                          <li key={sIndex}>• {solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seal Your Products with Confidence
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Band sealers provide the reliability, speed, and consistency required for professional
              packaging operations. Let our experts help you select the ideal band sealing system for
              your products, production volumes, and operational requirements.
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

export default BrandSealer;
