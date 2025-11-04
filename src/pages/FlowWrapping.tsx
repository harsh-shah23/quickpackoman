import { ArrowLeft, CheckCircle, Zap, Package, Shield, Gauge } from 'lucide-react';

interface FlowWrappingProps {
  onNavigate?: (page: string) => void;
}

const FlowWrapping = ({ onNavigate }: FlowWrappingProps) => {
  const features = [
    {
      icon: Zap,
      title: 'High-Speed Operation',
      description: 'Wrap up to 200+ packages per minute for maximum productivity',
    },
    {
      icon: Package,
      title: 'Versatile Packaging',
      description: 'Handles various product shapes, sizes, and film materials',
    },
    {
      icon: Shield,
      title: 'Protective Sealing',
      description: 'Hermetic seals protect products from moisture and contamination',
    },
    {
      icon: Gauge,
      title: 'Precision Control',
      description: 'Advanced servo systems ensure accurate positioning and sealing',
    },
  ];

  const applications = [
    'Bakery Products (Bread, Buns, Cookies, Pastries)',
    'Confectionery (Chocolate Bars, Candy, Biscuits)',
    'Fresh Produce (Vegetables, Fruits)',
    'Frozen Foods',
    'Pharmaceutical Products',
    'Cosmetics & Toiletries',
    'Hardware & Industrial Parts',
    'Stationery & Office Supplies',
    'Medical Devices & Supplies',
    'Household Products',
    'Automotive Parts',
    'Electronics & Components',
  ];

  const benefits = [
    'Enhanced product shelf life through protective packaging',
    'Professional appearance increases consumer appeal',
    'Reduced labor costs through automation',
    'Consistent package quality and presentation',
    'Minimal film waste with precise cutting',
    'Quick changeover between different products',
    'Easy integration with upstream/downstream equipment',
    'Low maintenance requirements',
    'Energy-efficient operation',
    'Compact footprint saves floor space',
  ];

  const machineTypes = [
    {
      type: 'Horizontal Flow Wrappers',
      description: 'Standard configuration for most products, feeding horizontally through the machine with bottom or side sealing options',
      speed: '50-300 packages/minute',
      suitable: 'Bakery items, confectionery, bars, pouches, hardware items',
      features: ['Servo-driven operation', 'Touch screen controls', 'Automatic film tracking', 'Quick-release parts'],
    },
    {
      type: 'Vertical Flow Wrappers',
      description: 'Products loaded vertically, ideal for granular, powdered, or irregular items with top-seal configuration',
      speed: '30-200 packages/minute',
      suitable: 'Snacks, granular products, irregular shapes, loose items',
      features: ['Gravity-fed loading', 'Vibration feeders', 'Multi-head weighers compatible', 'Gusseted bag option'],
    },
    {
      type: 'Rotary Flow Wrappers',
      description: 'High-speed rotary jaw design for maximum throughput, continuous motion technology for demanding applications',
      speed: '150-600 packages/minute',
      suitable: 'High-volume confectionery, biscuits, ice cream bars, frozen treats',
      features: ['Continuous motion', 'No dwell time', 'Ultra-high speed', 'Minimal product damage'],
    },
  ];

  const filmMaterials = [
    {
      material: 'Polypropylene (OPP)',
      properties: 'Excellent clarity, high gloss, moisture barrier, good printability',
      applications: 'Bakery products, confectionery, fresh produce',
      temperature: '110-150°C sealing temperature',
    },
    {
      material: 'Polyethylene (PE)',
      properties: 'Flexible, puncture resistant, economical, good moisture barrier',
      applications: 'Frozen foods, hardware, general products',
      temperature: '120-180°C sealing temperature',
    },
    {
      material: 'Laminated Films',
      properties: 'Multi-layer construction, superior barrier, extended shelf life',
      applications: 'Pharmaceuticals, premium foods, medical devices',
      temperature: '130-200°C sealing temperature',
    },
    {
      material: 'Metallic Films',
      properties: 'Light barrier, attractive appearance, excellent protection',
      applications: 'Chocolate, premium confectionery, cosmetics',
      temperature: '140-190°C sealing temperature',
    },
  ];

  const specifications = [
    {
      label: 'Packaging Speed',
      value: '30-600 packages/minute (model dependent)',
    },
    {
      label: 'Film Width',
      value: '150-600mm',
    },
    {
      label: 'Product Height',
      value: 'Up to 120mm',
    },
    {
      label: 'Package Length',
      value: '80-450mm (adjustable)',
    },
    {
      label: 'Film Roll Diameter',
      value: 'Up to 350mm',
    },
    {
      label: 'Power Requirements',
      value: '220V/380V, 3-Phase, 50/60Hz',
    },
  ];

  const advantages = [
    {
      title: 'Superior Product Protection',
      description: 'Three-side sealed packages create a complete barrier against moisture, oxygen, dust, and contaminants. Clear film options allow product visibility while maintaining protection.',
    },
    {
      title: 'Exceptional Speed & Efficiency',
      description: 'Servo-driven technology enables precise high-speed operation with minimal downtime. Quick-change features allow rapid product changeovers without extensive adjustment.',
    },
    {
      title: 'Professional Presentation',
      description: 'Tight, wrinkle-free packages with crisp seals create an attractive retail appearance. Pre-printed film options enable eye-catching graphics and branding.',
    },
    {
      title: 'Cost-Effective Operation',
      description: 'Reduced film waste through precise cutting and sealing. Lower labor costs through automation. Minimal maintenance requirements reduce operational expenses.',
    },
    {
      title: 'Flexible Integration',
      description: 'Easily integrates with product feeders, checkweighers, metal detectors, printers, and case packing systems for complete packaging lines.',
    },
    {
      title: 'User-Friendly Controls',
      description: 'Intuitive touch screen interfaces with recipe storage for quick product changes. Diagnostic systems and error alerts minimize downtime and simplify troubleshooting.',
    },
  ];

  const optionalFeatures = [
    {
      feature: 'Gas Flushing System',
      description: 'Nitrogen or modified atmosphere injection for extended shelf life',
      benefits: 'Prevents oxidation, maintains freshness, extends product life',
    },
    {
      feature: 'Date Coding System',
      description: 'Integrated inkjet, thermal transfer, or hot stamp printing',
      benefits: 'Batch tracking, expiry dates, regulatory compliance',
    },
    {
      feature: 'Reject System',
      description: 'Automatic detection and removal of defective packages',
      benefits: 'Quality assurance, reduced waste, automated inspection',
    },
    {
      feature: 'Film Splice Table',
      description: 'Automatic or semi-automatic film roll splicing',
      benefits: 'Continuous operation, no production stops, increased uptime',
    },
    {
      feature: 'Product Grouping',
      description: 'Multiple products wrapped in single package',
      benefits: 'Multi-packs, variety packs, promotional packaging',
    },
    {
      feature: 'Servo Infeed System',
      description: 'Precision product spacing and orientation control',
      benefits: 'Accurate positioning, high-speed operation, consistent quality',
    },
  ];

  const industryApplications = [
    {
      industry: 'Bakery & Confectionery',
      uses: ['Bread loaves and buns', 'Cookies and biscuits', 'Chocolate bars', 'Candy and sweets'],
      requirements: 'Food-grade materials, easy cleaning, quick changeover, high-speed operation',
    },
    {
      industry: 'Food Processing',
      uses: ['Fresh produce', 'Frozen foods', 'Cheese portions', 'Ready meals'],
      requirements: 'Washdown capability, gas flushing option, temperature control, hygienic design',
    },
    {
      industry: 'Pharmaceuticals',
      uses: ['Medicine bottles', 'Blister packs', 'Medical devices', 'Sample packaging'],
      requirements: 'GMP compliance, validation capability, tamper-evident seals, clean room compatible',
    },
    {
      industry: 'Non-Food Products',
      uses: ['Hardware items', 'Cosmetics', 'Stationery', 'Industrial parts'],
      requirements: 'Versatile sizing, robust construction, easy adjustment, multi-product handling',
    },
  ];

  const operatingPrinciples = [
    {
      step: 'Product Feeding',
      description: 'Products are placed on infeed conveyor manually or automatically from upstream equipment',
      details: 'Infeed timing synchronized with film feed for optimal spacing',
    },
    {
      step: 'Film Unwinding',
      description: 'Film unwinds from roll and passes through forming shoulder creating tube around product',
      details: 'Automatic tension control maintains consistent film tracking',
    },
    {
      step: 'Longitudinal Sealing',
      description: 'Heated jaws create continuous seal along film overlap forming tube around product',
      details: 'Temperature and pressure precisely controlled for optimal seal',
    },
    {
      step: 'End Sealing & Cutting',
      description: 'Cross-seal jaws seal both ends of package and cut between packages',
      details: 'Servo-driven jaws track product motion for accurate positioning',
    },
    {
      step: 'Package Discharge',
      description: 'Completed packages exit machine for collection or downstream processing',
      details: 'Optional outfeed conveyors or case packing integration',
    },
  ];

  const maintenanceGuide = [
    'Daily cleaning of product contact surfaces',
    'Weekly inspection of sealing jaws and temperature',
    'Monthly lubrication of moving parts and chains',
    'Quarterly inspection of film tracking system',
    'Check and adjust seal temperature regularly',
    'Replace worn sealing bands as needed',
    'Clean film path rollers and sensors',
    'Verify film tension and tracking monthly',
    'Inspect and clean cooling systems',
    'Maintain spare parts inventory for quick repairs',
  ];

  const troubleshooting = [
    {
      issue: 'Weak or Incomplete Seals',
      causes: ['Temperature too low', 'Insufficient pressure', 'Dirty sealing jaws', 'Incorrect film type'],
      solutions: ['Increase seal temperature', 'Adjust jaw pressure', 'Clean sealing surfaces', 'Verify film specifications'],
    },
    {
      issue: 'Film Tracking Problems',
      causes: ['Uneven film roll', 'Worn rollers', 'Incorrect tension', 'Misaligned guides'],
      solutions: ['Check film roll quality', 'Replace worn rollers', 'Adjust tension control', 'Realign film guides'],
    },
    {
      issue: 'Wrinkled Packages',
      causes: ['Excessive film tension', 'Product too large', 'Forming shoulder misaligned', 'Speed mismatch'],
      solutions: ['Reduce film tension', 'Verify product size', 'Adjust forming shoulder', 'Synchronize speeds'],
    },
  ];

  const selectionGuide = [
    {
      consideration: 'Production Speed Requirements',
      factors: 'Current and future volume, shift patterns, growth projections',
      recommendation: 'Low volume (<50/min): Entry-level | Medium (50-200/min): Standard servo | High (>200/min): Rotary',
    },
    {
      consideration: 'Product Characteristics',
      factors: 'Size, shape, weight, fragility, special handling needs',
      recommendation: 'Uniform products: Standard | Irregular shapes: Vertical | Fragile: Low-speed servo',
    },
    {
      consideration: 'Film Requirements',
      factors: 'Film type, thickness, printed/plain, barrier properties',
      recommendation: 'Standard films: Basic unit | Specialty films: Advanced temperature control',
    },
    {
      consideration: 'Integration Needs',
      factors: 'Upstream feeders, checkweighers, metal detectors, case packers',
      recommendation: 'Plan complete line integration for optimal efficiency and automation',
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
              Flow Wrapping Machines
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              Advanced horizontal and vertical flow wrapping solutions for high-speed packaging
              automation. Our flow wrappers deliver consistent, professional packaging for bakery
              products, confectionery, fresh produce, pharmaceuticals, and industrial items. With
              servo-driven precision and versatile film handling, these machines provide reliable
              performance and attractive package presentation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture29879.jpg"
                  alt="Flow Wrapped Products"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture165.png"
                  alt="Flow Wrapping Machine"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Flow Wrapping Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Flow wrapping, also known as horizontal form-fill-seal, is the industry standard for
                high-speed packaging of individual products. The technology creates attractive,
                protective packages with three sealed edges, ensuring product integrity while
                providing excellent shelf appeal and extended shelf life.
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
              Flow Wrapper Types & Configurations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Choose from horizontal, vertical, or rotary flow wrapping configurations designed
              to match your production speed, product characteristics, and operational requirements.
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
                      <p className="text-sm text-gray-600 mb-1">Speed Range</p>
                      <p className="font-bold text-gray-900">{machine.speed}</p>
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

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Compatible Film Materials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filmMaterials.map((film, index) => (
                <div key={index} className="border-2 border-orange-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{film.material}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Properties:</p>
                      <p className="text-gray-700 text-sm">{film.properties}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Applications:</p>
                      <p className="text-gray-700 text-sm">{film.applications}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Temperature:</p>
                      <p className="text-gray-700 text-sm">{film.temperature}</p>
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
                Flow wrapping technology serves diverse industries requiring fast, reliable, and
                attractive packaging for individual products or multi-packs.
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
                Flow wrapping automation delivers significant operational advantages and return on
                investment for medium to high-volume packaging operations.
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
              How Flow Wrappers Work
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Understanding the flow wrapping process helps optimize settings and troubleshoot
              issues for consistent, high-quality package production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {operatingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full font-bold text-xl mb-4">
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
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-orange-900 mb-1">Benefits:</p>
                    <p className="text-sm text-orange-800">{option.benefits}</p>
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
              Flow wrapping technology offers superior performance and value for operations
              requiring high-speed, consistent packaging with professional presentation.
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

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Selection Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectionGuide.map((guide, index) => (
                <div key={index} className="border-l-4 border-orange-600 pl-6 py-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{guide.consideration}</h4>
                  <p className="text-gray-700 mb-3 text-sm">
                    <span className="font-semibold">Consider:</span> {guide.factors}
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
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
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Flow Wrappers?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Reliability</p>
                      <p className="text-orange-100 text-sm">
                        Industrial-grade construction and premium components ensure years of
                        dependable operation in demanding production environments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Servo-Driven Precision</p>
                      <p className="text-orange-100 text-sm">
                        Advanced servo motors provide accurate positioning, consistent sealing, and
                        high-speed operation with minimal vibration
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Easy Operation & Maintenance</p>
                      <p className="text-orange-100 text-sm">
                        Intuitive controls and accessible components minimize training time and
                        simplify routine maintenance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Support</p>
                      <p className="text-orange-100 text-sm">
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
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Custom configurations available for unique product dimensions, special film
                    requirements, and integration with complete packaging lines.
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
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Issues & Solutions</h3>
              <div className="space-y-6">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="border-l-4 border-orange-600 pl-4">
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
              Wrap Your Products with Precision
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Flow wrapping technology provides the speed, quality, and consistency required for
              professional packaging operations. Let our experts help you select the ideal flow
              wrapper for your products, production volumes, and operational requirements.
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

export default FlowWrapping;
