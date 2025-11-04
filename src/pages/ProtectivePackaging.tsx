import { ArrowLeft, CheckCircle, Zap, Package, Shield, Gauge } from 'lucide-react';

interface ProtectivePackagingProps {
  onNavigate?: (page: string) => void;
}

const ProtectivePackaging = ({ onNavigate }: ProtectivePackagingProps) => {
  const features = [
    {
      icon: Zap,
      title: 'Damage Prevention',
      description: 'Cushion and protect products from shock, vibration, and impact during transit',
    },
    {
      icon: Package,
      title: 'Versatile Materials',
      description: 'Air pillows, bubble wrap, foam, paper cushioning for all product types',
    },
    {
      icon: Shield,
      title: 'Cost Reduction',
      description: 'Reduce returns, replacements, and customer complaints from shipping damage',
    },
    {
      icon: Gauge,
      title: 'On-Demand Systems',
      description: 'Create custom-sized protective packaging instantly at point of use',
    },
  ];

  const applications = [
    'E-Commerce Fulfillment',
    'Electronics & Fragile Items',
    'Glass & Ceramics',
    'Automotive Parts',
    'Medical Devices',
    'Food & Beverage',
    'Cosmetics & Beauty Products',
    'Furniture & Home Goods',
    'Industrial Equipment',
    'Pharmaceuticals',
    'Retail Distribution',
    'Third-Party Logistics (3PL)',
  ];

  const benefits = [
    'Prevents product damage during shipping and handling',
    'Reduces returns and replacement costs',
    'Improves customer satisfaction and brand reputation',
    'Customizable protection for any product size or shape',
    'On-demand systems eliminate inventory of pre-made materials',
    'Reduces warehouse storage space requirements',
    'Lightweight materials lower shipping costs',
    'Environmentally friendly options available',
    'Quick and easy application speeds packing process',
    'Professional appearance enhances unboxing experience',
  ];

  const packagingTypes = [
    {
      type: 'Air Pillow Systems',
      description: 'On-demand inflatable air cushions created from continuous film roll',
      materials: 'HDPE or LDPE film with air chambers',
      suitable: 'Void fill, blocking and bracing, surface protection, lightweight cushioning',
      advantages: ['Low material cost', 'Space-efficient storage', 'Fast production', 'Lightweight'],
      considerations: ['Puncture risk', 'Not for heavy items', 'Requires air supply', 'Film inventory'],
    },
    {
      type: 'Paper Cushioning Systems',
      description: 'Kraft paper converted into cushioning pads, rolls, or void fill',
      materials: '100% recyclable kraft paper, no plastic',
      suitable: 'Eco-conscious brands, general cushioning, void fill, wrapping fragile items',
      advantages: ['Fully recyclable', 'Sustainable', 'Good cushioning', 'Premium appearance'],
      considerations: ['Less water resistant', 'Heavier than air', 'More expensive', 'Bulkier storage'],
    },
    {
      type: 'Bubble Wrap & Film',
      description: 'Traditional bubble wrap and foam films on rolls for wrapping and protection',
      materials: 'Polyethylene film with air bubbles in various sizes',
      suitable: 'Wrapping fragile items, surface protection, general cushioning, electronics',
      advantages: ['Excellent cushioning', 'Easy to use', 'Reusable', 'Clear visibility'],
      considerations: ['Bulky storage', 'Not eco-friendly', 'Pre-made sizes', 'Manual application'],
    },
    {
      type: 'Foam & Polyethylene',
      description: 'Foam sheets, rolls, and custom-cut shapes for precise protection',
      materials: 'Polyethylene foam, polyurethane foam, anti-static foam options',
      suitable: 'Electronics, precision instruments, heavy items, custom product protection',
      advantages: ['Superior protection', 'Customizable', 'Anti-static options', 'Professional'],
      considerations: ['Higher cost', 'Storage space', 'Cutting required', 'Not recyclable'],
    },
  ];

  const specifications = [
    {
      label: 'Air Pillow Production',
      value: 'Up to 50 feet per minute (system dependent)',
    },
    {
      label: 'Paper Cushioning Speed',
      value: '20-60 feet per minute',
    },
    {
      label: 'Material Width Options',
      value: '8", 12", 16", 20" (standard sizes)',
    },
    {
      label: 'Cushioning Thickness',
      value: '1/8" to 2" (material dependent)',
    },
    {
      label: 'Film Roll Capacity',
      value: '2000-5000 feet per roll',
    },
    {
      label: 'Power Requirements',
      value: '110V or 220V (system dependent)',
    },
  ];

  const advantages = [
    {
      title: 'Damage Prevention & Cost Savings',
      description: 'Protective packaging prevents product damage during shipping, handling, and storage. Even a 5% reduction in damaged shipments can save thousands in returns, replacements, and customer service costs. Professional protection builds customer trust and reduces negative reviews.',
    },
    {
      title: 'On-Demand Efficiency',
      description: 'Modern on-demand systems create protective packaging at point of use, eliminating inventory of bulky pre-made materials. Convert compact film or paper rolls into custom-sized cushioning instantly, reducing storage space by 80% or more while ensuring perfect fit for every product.',
    },
    {
      title: 'Improved Packing Speed',
      description: 'Quick-deploy protective materials speed packing operations and reduce labor costs. Workers can grab, wrap, and cushion products in seconds without cutting, measuring, or assembling complex packaging. Faster packing means higher throughput and lower labor cost per package.',
    },
    {
      title: 'Sustainable Options',
      description: 'Paper-based cushioning systems offer 100% recyclable, plastic-free protection that appeals to environmentally conscious consumers. Many systems use recycled content and biodegradable materials, helping meet sustainability goals while maintaining excellent product protection.',
    },
    {
      title: 'Enhanced Customer Experience',
      description: 'Professional protective packaging creates positive unboxing experiences that build brand loyalty. Clean, organized cushioning materials with branded options show attention to detail and product care. Happy customers are more likely to leave positive reviews and make repeat purchases.',
    },
    {
      title: 'Versatile Protection',
      description: 'From delicate electronics to heavy automotive parts, protective packaging solutions adapt to any product. Multiple material options, densities, and formats ensure optimal protection for specific applications. Custom-fit protection prevents movement and impact damage during transit.',
    },
  ];

  const operatingPrinciples = [
    {
      step: 'Material Storage',
      description: 'Compact film or paper rolls loaded into dispensing system',
      details: 'Rolls contain 2000-5000 feet of material in minimal space',
    },
    {
      step: 'Material Feed',
      description: 'Film or paper fed through conversion mechanism',
      details: 'Automated feeding ensures consistent material flow',
    },
    {
      step: 'Conversion Process',
      description: 'Material converted into protective cushioning format',
      details: 'Air inflation, paper expansion, or foam deployment',
    },
    {
      step: 'Size Control',
      description: 'Operator controls length or quantity of protective material',
      details: 'Custom sizing for each product or box dimension',
    },
    {
      step: 'Material Dispensing',
      description: 'Ready-to-use protective packaging dispensed for immediate use',
      details: 'Quick deployment for efficient packing operations',
    },
    {
      step: 'Product Protection',
      description: 'Cushioning material placed around product in shipping container',
      details: 'Prevents movement, absorbs shock, protects surfaces',
    },
  ];

  const systemTypes = [
    {
      system: 'Air Pillow Machine',
      description: 'Inflates pre-formed air chambers from continuous film roll',
      speed: 'Up to 50 linear feet per minute',
      benefits: 'Fastest production, lowest material cost, compact storage, lightweight',
      bestFor: 'High-volume operations, void fill, general cushioning, cost-conscious applications',
      considerations: 'Requires electricity and compressed air, film rolls need inventory management',
    },
    {
      system: 'Paper Cushioning Machine',
      description: 'Converts kraft paper into accordion-folded or crumpled cushioning',
      speed: '20-60 linear feet per minute',
      benefits: 'Eco-friendly, recyclable, premium appearance, no plastic, sustainable',
      bestFor: 'Sustainability-focused brands, retail packaging, gift items, eco-conscious customers',
      considerations: 'Higher material cost, less water resistant, heavier than air pillows',
    },
    {
      system: 'Manual Dispensers',
      description: 'Hand-operated dispensers for bubble wrap, foam, and film materials',
      speed: 'Manual operation (operator dependent)',
      benefits: 'No power required, low investment, portable, simple operation',
      bestFor: 'Low-volume operations, multiple packing stations, portable applications',
      considerations: 'Manual effort, slower than automatic, requires pre-made materials',
    },
    {
      system: 'Integrated Void Fill',
      description: 'Automated systems integrated with packing stations',
      speed: 'Synchronized with packing line',
      benefits: 'Fully automated, consistent application, no operator training, high throughput',
      bestFor: 'Automated fulfillment, high-volume distribution, minimal labor applications',
      considerations: 'Higher initial cost, fixed installation, integration complexity',
    },
  ];

  const materialComparison = [
    {
      material: 'Air Pillows',
      protection: 'Medium',
      cost: 'Very Low ($0.02-0.05/unit)',
      ecoFriendly: 'Low (plastic film)',
      storage: 'Excellent (compact rolls)',
      speed: 'Very Fast',
      bestUse: 'Void fill, general cushioning, high-volume',
    },
    {
      material: 'Paper Cushioning',
      protection: 'Medium-High',
      cost: 'Medium ($0.10-0.20/unit)',
      ecoFriendly: 'Excellent (100% recyclable)',
      storage: 'Good (paper rolls)',
      speed: 'Fast',
      bestUse: 'Sustainable packaging, wrapping, void fill',
    },
    {
      material: 'Bubble Wrap',
      protection: 'High',
      cost: 'Medium ($0.08-0.15/sq ft)',
      ecoFriendly: 'Low (plastic film)',
      storage: 'Poor (bulky rolls)',
      speed: 'Medium',
      bestUse: 'Fragile items, surface protection, wrapping',
    },
    {
      material: 'Foam Sheets',
      protection: 'Very High',
      cost: 'High ($0.20-0.50/sq ft)',
      ecoFriendly: 'Low (plastic foam)',
      storage: 'Poor (bulky sheets)',
      speed: 'Slow (cutting required)',
      bestUse: 'Electronics, heavy items, precision protection',
    },
  ];

  const industryApplications = [
    {
      industry: 'E-Commerce & Fulfillment',
      uses: ['Package void fill', 'Product wrapping', 'Fragile item protection', 'Branded unboxing experience'],
      requirements: 'Fast packing speeds, cost efficiency, various product sizes, professional appearance',
    },
    {
      industry: 'Electronics & Technology',
      uses: ['Screen protection', 'Component cushioning', 'Anti-static protection', 'Transit protection'],
      requirements: 'Anti-static materials, precision fit, superior protection, clean materials',
    },
    {
      industry: 'Food & Beverage',
      uses: ['Glass bottle protection', 'Can cushioning', 'Temperature insulation', 'Fragile product wrapping'],
      requirements: 'Food-safe materials, moisture resistance, clean operation, fast application',
    },
    {
      industry: 'Medical & Pharmaceutical',
      uses: ['Medical device protection', 'Pharmaceutical cushioning', 'Sterile packaging', 'Temperature control'],
      requirements: 'Clean materials, validation capability, consistent protection, traceability',
    },
  ];

  const packingBestPractices = [
    {
      practice: 'Use Sufficient Cushioning',
      description: 'Provide 2-3 inches of cushioning on all sides of fragile products',
      tip: 'Heavy or fragile items need more protection than lightweight durable products',
    },
    {
      practice: 'Fill All Voids',
      description: 'Eliminate empty space that allows products to shift during transit',
      tip: 'Box should be full with minimal movement when closed and shaken',
    },
    {
      practice: 'Layer Protection',
      description: 'Wrap individual items before cushioning entire box contents',
      tip: 'Multiple layers prevent items from contacting each other and the box walls',
    },
    {
      practice: 'Choose Right Material',
      description: 'Match cushioning material to product weight, fragility, and value',
      tip: 'Expensive electronics need foam; general items work with air pillows',
    },
    {
      practice: 'Test Drop Performance',
      description: 'Periodically test packaged boxes with drop tests to verify protection',
      tip: 'Drop from 3-4 feet onto corner, edge, and flat surfaces to simulate transit',
    },
    {
      practice: 'Consider Temperature',
      description: 'Air pillows can deflate in temperature extremes; foam is more stable',
      tip: 'Use pressure-stable materials for products exposed to temperature variation',
    },
  ];

  const maintenanceGuide = [
    'Daily inspection of material levels and roll condition',
    'Weekly cleaning of dispensing mechanisms and feed rollers',
    'Monthly lubrication of moving parts per manufacturer specs',
    'Check air pressure and compressor function (air systems)',
    'Inspect and clean cutting blades or perforation systems',
    'Monitor film or paper tracking and tension',
    'Replace worn rollers, blades, or heat sealing components',
    'Clean sensors and control panels',
    'Verify material specifications match equipment requirements',
    'Maintain spare parts inventory for critical components',
  ];

  const troubleshooting = [
    {
      issue: 'Air Pillows Deflating',
      causes: ['Poor seals', 'Film defects', 'Weak heat sealing', 'Punctures during use'],
      solutions: ['Adjust sealing temperature', 'Check film quality', 'Replace sealing element', 'Handle more carefully'],
    },
    {
      issue: 'Paper Jamming',
      causes: ['Incorrect tension', 'Moisture in paper', 'Feed roller wear', 'Material misalignment'],
      solutions: ['Adjust paper tension', 'Store paper properly', 'Replace worn rollers', 'Realign material path'],
    },
    {
      issue: 'Inconsistent Material Length',
      causes: ['Sensor misalignment', 'Feed roller slippage', 'Control calibration', 'Material tension variation'],
      solutions: ['Clean/align sensors', 'Check roller grip', 'Recalibrate controls', 'Verify material specs'],
    },
    {
      issue: 'Slow Production Speed',
      causes: ['Low air pressure', 'Mechanical wear', 'Material resistance', 'Control settings'],
      solutions: ['Check compressor', 'Service equipment', 'Verify material specs', 'Adjust speed settings'],
    },
  ];

  const selectionGuide = [
    {
      consideration: 'Production Volume',
      factors: 'Daily shipments, peak seasons, growth projections, packing speed requirements',
      recommendation: 'Low (<100/day): Manual dispensers | Medium (100-500/day): Air pillow system | High (500+/day): Automated integrated system',
    },
    {
      consideration: 'Product Types',
      factors: 'Fragility, weight, value, variety of sizes, special requirements (anti-static, etc.)',
      recommendation: 'Fragile: Foam or bubble | General: Air pillows | Eco-focus: Paper | Electronics: Anti-static foam',
    },
    {
      consideration: 'Sustainability Goals',
      factors: 'Environmental commitments, customer expectations, recyclability, plastic reduction',
      recommendation: 'Plastic-free: Paper cushioning | Recyclable: Paper or recyclable bubble | Cost-focused: Air pillows',
    },
    {
      consideration: 'Budget & Space',
      factors: 'Capital available, storage space, warehouse layout, ROI requirements',
      recommendation: 'Limited budget: Manual dispensers | Space-constrained: On-demand systems | High-volume: Integrated automation',
    },
  ];

  const sustainabilityOptions = [
    {
      option: 'Recycled Paper Cushioning',
      description: '100% recyclable kraft paper made from recycled content',
      benefits: 'Plastic-free, curbside recyclable, biodegradable, sustainable forestry',
      certifications: 'FSC certified, recycled content verified',
    },
    {
      option: 'Biodegradable Air Pillows',
      description: 'Plant-based or biodegradable film alternatives to traditional plastic',
      benefits: 'Compostable options, reduced plastic waste, similar performance',
      certifications: 'ASTM D6400 compostable, bio-based content',
    },
    {
      option: 'Recycled Bubble Wrap',
      description: 'Bubble wrap made from post-consumer recycled plastic',
      benefits: 'Reduced virgin plastic, same protection, recyclable in some areas',
      certifications: 'Recycled content percentage verified',
    },
    {
      option: 'Mushroom & Plant Packaging',
      description: 'Emerging bio-based protective packaging from agricultural waste',
      benefits: 'Fully compostable, home compostable, sustainable materials',
      certifications: 'Compostable certifications, bio-based content',
    },
  ];

  const roiCalculation = [
    {
      factor: 'Damage Reduction',
      calculation: '5% reduction in damaged shipments x 10,000 shipments x $25 avg value = $12,500 savings',
      savings: '$10,000 - $50,000 per year',
    },
    {
      factor: 'Storage Space Savings',
      calculation: 'Eliminate 200 sq ft of bulky material storage @ $10/sq ft = $2,000 annually',
      savings: '$2,000 - $10,000 per year',
    },
    {
      factor: 'Labor Efficiency',
      calculation: '30 seconds saved per package x 100 packages/day x $15/hr = $1,875 annually',
      savings: '$2,000 - $15,000 per year',
    },
    {
      factor: 'Reduced Returns & Service',
      calculation: 'Fewer damaged goods reduce return shipping, replacements, and customer service',
      savings: '$5,000 - $25,000 per year',
    },
  ];

  const safetyFeatures = [
    'Emergency stop buttons on automatic systems',
    'Safety guards prevent contact with moving parts',
    'Low-noise operation for warehouse environment',
    'Automatic shutdown on jam or malfunction',
    'Ergonomic dispensing height reduces strain',
    'No sharp edges or pinch points',
    'Clear safety labeling and warning indicators',
    'Minimal dust or particle generation',
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate?.('products')}
            className="flex items-center space-x-2 text-white hover:text-amber-200 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protective Packaging Systems
            </h1>
            <p className="text-xl text-amber-100 leading-relaxed">
              Professional protective packaging solutions that safeguard products during shipping,
              handling, and storage. Our comprehensive range of air pillows, paper cushioning, bubble
              wrap, and foam systems provides optimal protection for any product type. From compact
              on-demand systems to traditional materials, we help reduce damage, lower costs, and
              enhance customer satisfaction with proper product protection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture13.jpg"
                  alt="Paper Cushioning Machine"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture11879.png"
                  alt="Air Pillow Dispensing System"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture12.jpg"
                  alt="Bubble Wrap Dispenser"
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Protection for Every Product
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Protective packaging prevents costly damage during shipping and handling while
                creating positive unboxing experiences. Modern on-demand systems convert compact
                material rolls into custom-sized cushioning instantly, reducing storage space and
                ensuring perfect protection for every shipment.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full mb-4">
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
              Protective Packaging Types
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Choose from air pillows, paper cushioning, bubble wrap, or foam systems to match your
              protection requirements, sustainability goals, and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {packagingTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-amber-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{type.type}</h3>
                  <p className="text-amber-100 text-sm">{type.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Materials Used</p>
                      <p className="font-semibold text-gray-900">{type.materials}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Best Suited For</p>
                      <p className="font-semibold text-gray-900">{type.suitable}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 mb-3">Advantages:</p>
                    <ul className="space-y-2">
                      {type.advantages.map((advantage, aIndex) => (
                        <li key={aIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Considerations:</p>
                    <p className="text-sm text-gray-700">{type.considerations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Material Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="p-3 text-left font-semibold text-gray-900">Material</th>
                    <th className="p-3 text-left font-semibold text-gray-900">Protection</th>
                    <th className="p-3 text-left font-semibold text-gray-900">Cost</th>
                    <th className="p-3 text-left font-semibold text-gray-900">Eco-Friendly</th>
                    <th className="p-3 text-left font-semibold text-gray-900">Storage</th>
                    <th className="p-3 text-left font-semibold text-gray-900">Speed</th>
                    <th className="p-3 text-left font-semibold text-gray-900">Best Use</th>
                  </tr>
                </thead>
                <tbody>
                  {materialComparison.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-gray-900">{item.material}</td>
                      <td className="p-3 text-gray-700 text-sm">{item.protection}</td>
                      <td className="p-3 text-gray-700 text-sm">{item.cost}</td>
                      <td className="p-3 text-gray-700 text-sm">{item.ecoFriendly}</td>
                      <td className="p-3 text-gray-700 text-sm">{item.storage}</td>
                      <td className="p-3 text-gray-700 text-sm">{item.speed}</td>
                      <td className="p-3 text-gray-700 text-sm">{item.bestUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                Protective packaging is essential across industries where product damage during
                transit creates costly returns, replacements, and customer dissatisfaction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-amber-600 text-white rounded-full p-1 flex-shrink-0">
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
                Professional protective packaging delivers significant cost savings, improved customer
                satisfaction, and operational efficiency improvements.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-amber-600 text-white rounded-full p-1 flex-shrink-0">
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
              How Protective Packaging Systems Work
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              On-demand protective packaging systems convert compact material rolls into
              ready-to-use cushioning instantly at point of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12">
            {operatingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-600 text-white rounded-full font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{principle.step}</h3>
                <p className="text-gray-700 text-xs mb-2">{principle.description}</p>
                <p className="text-gray-600 text-xs italic">{principle.details}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              System Types & Configurations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {systemTypes.map((system, index) => (
                <div key={index} className="border-2 border-amber-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{system.system}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-amber-600 mb-1">Description:</p>
                      <p className="text-gray-700 text-sm">{system.description}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-amber-600 mb-1">Production Speed:</p>
                      <p className="text-gray-700 text-sm">{system.speed}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-amber-600 mb-1">Benefits:</p>
                      <p className="text-gray-700 text-sm">{system.benefits}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-amber-600 mb-1">Best For:</p>
                      <p className="text-gray-700 text-sm">{system.bestFor}</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Considerations:</p>
                      <p className="text-sm text-gray-700">{system.considerations}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Packing Best Practices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packingBestPractices.map((practice, index) => (
                <div key={index} className="border-l-4 border-amber-600 pl-4">
                  <h4 className="text-base font-bold text-gray-900 mb-2">{practice.practice}</h4>
                  <p className="text-sm text-gray-700 mb-2">{practice.description}</p>
                  <div className="bg-amber-50 p-3 rounded">
                    <p className="text-xs text-gray-700 italic">{practice.tip}</p>
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
              Modern protective packaging systems offer superior performance and value for operations
              requiring reliable product protection and operational efficiency.
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
                        <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                        <span className="text-gray-700">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Key Requirements:</p>
                  <p className="text-sm text-gray-700">{industry.requirements}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Selection Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectionGuide.map((guide, index) => (
                <div key={index} className="border-l-4 border-amber-600 pl-6 py-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{guide.consideration}</h4>
                  <p className="text-gray-700 mb-3 text-sm">
                    <span className="font-semibold">Consider:</span> {guide.factors}
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Recommendation:</p>
                    <p className="text-sm text-gray-700">{guide.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Sustainable Packaging Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sustainabilityOptions.map((option, index) => (
                <div key={index} className="border-2 border-amber-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{option.option}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-amber-600 mb-1">Description:</p>
                      <p className="text-gray-700 text-sm">{option.description}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-amber-600 mb-1">Benefits:</p>
                      <p className="text-gray-700 text-sm">{option.benefits}</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Certifications:</p>
                      <p className="text-sm text-gray-700">{option.certifications}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ROI Calculation Guide
            </h3>
            <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
              Protective packaging systems typically pay for themselves in 6-18 months through damage
              reduction, space savings, and labor efficiency improvements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roiCalculation.map((item, index) => (
                <div key={index} className="border-2 border-amber-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.factor}</h4>
                  <p className="text-sm text-gray-700 mb-3">{item.calculation}</p>
                  <div className="bg-amber-50 p-3 rounded">
                    <p className="text-sm font-semibold text-amber-900">
                      Annual Savings: {item.savings}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-6 bg-amber-600 text-white rounded-xl text-center">
              <p className="text-2xl font-bold mb-2">Total Estimated Annual Savings</p>
              <p className="text-4xl font-bold mb-2">$19,000 - $100,000+</p>
              <p className="text-amber-100 text-sm">
                Based on typical fulfillment operation with moderate shipping volumes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-amber-600 to-amber-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Protective Packaging Solutions?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Material Range</p>
                      <p className="text-amber-100 text-sm">
                        Air pillows, paper cushioning, bubble wrap, foam - we provide every
                        protective packaging material type for any application
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">On-Demand Efficiency</p>
                      <p className="text-amber-100 text-sm">
                        Space-saving systems create custom-sized protection instantly, eliminating
                        bulky pre-made material inventory
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Sustainable Options</p>
                      <p className="text-amber-100 text-sm">
                        100% recyclable paper cushioning and biodegradable materials meet
                        environmental goals without sacrificing protection
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Expert Guidance</p>
                      <p className="text-amber-100 text-sm">
                        Material selection, system setup, training, and ongoing support ensure
                        optimal protection and efficiency
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Maintenance Checklist</h3>
              <div className="space-y-3">
                {maintenanceGuide.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Issues & Solutions</h3>
              <div className="space-y-6">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="border-l-4 border-amber-600 pl-4">
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
              Protect Your Products & Enhance Customer Satisfaction
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              From air pillow systems to sustainable paper cushioning, our protective packaging
              solutions reduce damage, lower costs, and create positive unboxing experiences. Let our
              experts help you select the ideal protective packaging for your products and operational
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors text-lg"
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

export default ProtectivePackaging;
