import { ArrowLeft, CheckCircle, Zap, Package, Shield, Gauge } from 'lucide-react';

interface CartonErectorsProps {
  onNavigate?: (page: string) => void;
}

const CartonErectors = ({ onNavigate }: CartonErectorsProps) => {
  const features = [
    {
      icon: Zap,
      title: 'High-Speed Automation',
      description: 'Erect up to 30+ cartons per minute with consistent quality and precision',
    },
    {
      icon: Package,
      title: 'Versatile Carton Handling',
      description: 'Handles multiple carton sizes with quick changeover capabilities',
    },
    {
      icon: Shield,
      title: 'Reliable Performance',
      description: 'Industrial-grade construction ensures continuous operation in demanding environments',
    },
    {
      icon: Gauge,
      title: 'Precise Control',
      description: 'Advanced sensors and controls ensure perfect carton formation every cycle',
    },
  ];

  const applications = [
    'Food & Beverage Packaging',
    'Pharmaceutical Product Boxing',
    'E-Commerce Fulfillment Centers',
    'Consumer Goods Packaging',
    'Cosmetics & Personal Care',
    'Electronics & Hardware',
    'Automotive Parts Packaging',
    'Retail Distribution Centers',
    'Manufacturing End-of-Line',
    'Third-Party Logistics (3PL)',
    'Fresh Produce Packaging',
    'Frozen Food Distribution',
  ];

  const benefits = [
    'Eliminates manual carton setup labor',
    'Consistent carton quality reduces product damage',
    'High-speed operation increases productivity by 300%+',
    'Quick size changeover minimizes downtime',
    'Reduces repetitive strain injuries',
    'Integrates seamlessly with packing lines',
    'Lower labor costs with automated operation',
    'Precise carton formation improves sealing',
    'Reduces carton waste from improper setup',
    'Space-efficient footprint',
  ];

  const machineTypes = [
    {
      type: 'Automatic Case Erector',
      description: 'Fully automatic system that picks, opens, forms, and bottom-seals flat cartons continuously',
      speed: '15-30 cartons per minute',
      suitable: 'High-volume operations, continuous production lines, minimal operator intervention',
      cartonSizes: 'L: 200-600mm, W: 150-500mm, H: 150-500mm',
      features: ['Automatic blank feeding', 'Hot melt or tape sealing', 'PLC controls', 'Quick size change'],
    },
    {
      type: 'Semi-Automatic Case Erector',
      description: 'Operator-assisted system where cartons are manually loaded and machine completes forming and sealing',
      speed: '8-15 cartons per minute',
      suitable: 'Medium-volume operations, varied carton sizes, flexible production',
      cartonSizes: 'L: 150-800mm, W: 100-600mm, H: 100-600mm',
      features: ['Manual blank loading', 'Automatic forming', 'Tape or glue sealing', 'Compact design'],
    },
    {
      type: 'High-Speed Random Case Erector',
      description: 'Advanced system handles random carton sizes on-the-fly with automatic adjustment',
      speed: '20-40 cartons per minute',
      suitable: 'E-commerce, distribution centers, multiple SKU operations',
      cartonSizes: 'Wide range with servo-driven adjustment',
      features: ['Automatic size detection', 'Servo-driven adjustments', 'Recipe memory', 'No-tool changeover'],
    },
    {
      type: 'Vertical Case Erector',
      description: 'Space-saving vertical design for facilities with limited floor space',
      speed: '10-20 cartons per minute',
      suitable: 'Compact facilities, end-of-line packaging, limited floor space',
      cartonSizes: 'L: 200-500mm, W: 150-400mm, H: 150-400mm',
      features: ['Vertical magazine', 'Small footprint', 'Side or bottom seal', 'Easy access'],
    },
  ];

  const sealingMethods = [
    {
      method: 'Hot Melt Glue',
      description: 'Thermoplastic adhesive applied to carton flaps for secure bonding',
      advantages: 'Strong bond, tamper-evident, clean appearance, no tape waste',
      disadvantages: 'Requires glue system maintenance, heat-up time, ongoing glue costs',
      bestFor: 'High-volume production, retail-ready packaging, premium appearance',
      costPer: 'Low ($0.02-0.05 per carton)',
    },
    {
      method: 'Pressure-Sensitive Tape',
      description: 'Adhesive tape applied to carton bottom flaps',
      advantages: 'No warm-up required, simple maintenance, instant adhesion',
      disadvantages: 'Tape roll changes, higher material cost, less tamper-evident',
      bestFor: 'Medium volumes, flexible operations, quick changeover',
      costPer: 'Medium ($0.05-0.10 per carton)',
    },
    {
      method: 'Water-Based Glue',
      description: 'Cold glue system using water-based adhesive',
      advantages: 'Environmentally friendly, low operating cost, recyclable',
      disadvantages: 'Slower setting time, sensitive to humidity, requires clean system',
      bestFor: 'Corrugated cartons, recyclable packaging, environmental focus',
      costPer: 'Very Low ($0.01-0.03 per carton)',
    },
    {
      method: 'Combination Systems',
      description: 'Dual system capable of both tape and glue application',
      advantages: 'Maximum flexibility, switch between methods, backup capability',
      disadvantages: 'Higher initial cost, more complex maintenance',
      bestFor: 'Multi-product facilities, varying carton requirements',
      costPer: 'Variable depending on method used',
    },
  ];

  const specifications = [
    {
      label: 'Carton Speed',
      value: '8-40 cartons/minute (model dependent)',
    },
    {
      label: 'Carton Size Range',
      value: 'L: 150-800mm, W: 100-600mm, H: 100-600mm',
    },
    {
      label: 'Carton Board Thickness',
      value: '3-layer to 7-layer corrugated',
    },
    {
      label: 'Magazine Capacity',
      value: '50-200 flat cartons',
    },
    {
      label: 'Changeover Time',
      value: '5-15 minutes (manual) / 30 seconds (automatic)',
    },
    {
      label: 'Power Requirements',
      value: '220V/380V, Single/3-Phase, 50/60Hz',
    },
  ];

  const advantages = [
    {
      title: 'Labor Reduction',
      description: 'Eliminate 1-2 full-time workers dedicated to manual carton setup. Automatic case erectors handle what would require continuous manual effort, reducing labor costs by 60-80% for carton preparation operations.',
    },
    {
      title: 'Productivity Gains',
      description: 'Increase throughput by 300-500% compared to manual carton setup. High-speed erectors maintain consistent pace without fatigue, enabling higher production volumes and faster order fulfillment.',
    },
    {
      title: 'Quality Consistency',
      description: 'Every carton is formed with identical precision, ensuring proper dimensions for downstream equipment. Consistent setup improves case sealer performance and prevents jams or misfeeds in automated lines.',
    },
    {
      title: 'Ergonomic Benefits',
      description: 'Eliminate repetitive bending, lifting, and manual carton manipulation that causes worker fatigue and injury. Reduce workplace injury claims and improve employee satisfaction and retention.',
    },
    {
      title: 'Line Integration',
      description: 'Seamless integration with case packers, sealers, and palletizers creates fully automated packaging lines. Synchronized operation with upstream and downstream equipment maximizes overall line efficiency.',
    },
    {
      title: 'Reduced Waste',
      description: 'Precise carton handling eliminates damage from improper setup. Proper formation ensures cartons are not discarded due to wrinkles, tears, or incorrect folding, reducing material waste by 15-25%.',
    },
  ];

  const operatingPrinciples = [
    {
      step: 'Carton Blank Storage',
      description: 'Flat carton blanks loaded into vertical or horizontal magazine',
      details: 'Magazine holds 50-200 blanks for extended unmanned operation',
    },
    {
      step: 'Blank Selection',
      description: 'Suction cups or mechanical fingers pick one blank from magazine',
      details: 'Sensors verify single blank pickup and proper orientation',
    },
    {
      step: 'Carton Opening',
      description: 'Vacuum or mechanical arms open flat blank into square profile',
      details: 'Precise timing ensures smooth opening without damage',
    },
    {
      step: 'Bottom Flap Folding',
      description: 'Guide rails and plows fold minor and major bottom flaps',
      details: 'Sequential folding creates proper overlap for sealing',
    },
    {
      step: 'Bottom Sealing',
      description: 'Hot melt glue or tape applied to secure bottom flaps',
      details: 'Pressure rollers ensure firm adhesion and seal integrity',
    },
    {
      step: 'Carton Discharge',
      description: 'Erected carton conveyed to packing station or filling equipment',
      details: 'Automatic spacing for synchronized operation with downstream',
    },
  ];

  const optionalFeatures = [
    {
      feature: 'Automatic Size Adjustment',
      description: 'Servo-driven guide rails automatically adjust to carton dimensions',
      benefits: 'Tool-less changeover, reduced downtime, operator-friendly, multiple size memory',
    },
    {
      feature: 'Barcode Reader Integration',
      description: 'Reads carton barcode and selects appropriate erection parameters',
      benefits: 'Automatic size selection, error prevention, production tracking, quality assurance',
    },
    {
      feature: 'Dual Magazine System',
      description: 'Two independent magazines for extended runtime or size flexibility',
      benefits: 'Continuous operation, quick size switching, higher capacity, reduced reload frequency',
    },
    {
      feature: 'Carton Squaring Device',
      description: 'Mechanical system ensures perfect 90-degree corners',
      benefits: 'Improved stability, better sealing, prevents downstream jams, premium appearance',
    },
    {
      feature: 'Flap Folding Verification',
      description: 'Sensors confirm proper flap position before sealing',
      benefits: 'Prevents seal failures, quality assurance, reduces waste, automatic reject',
    },
    {
      feature: 'Remote Monitoring',
      description: 'IoT connectivity for real-time production monitoring and diagnostics',
      benefits: 'Predictive maintenance, production analytics, remote troubleshooting, OEE tracking',
    },
  ];

  const industryApplications = [
    {
      industry: 'Food & Beverage',
      uses: ['Cereal and snack food boxing', 'Beverage multi-pack cases', 'Frozen food cartons', 'Bakery product packaging'],
      requirements: 'Food-safe materials, washdown capability, high-speed operation, minimal contamination',
    },
    {
      industry: 'E-Commerce & Fulfillment',
      uses: ['Shipping carton preparation', 'Random size handling', 'High-mix operations', 'Order fulfillment packaging'],
      requirements: 'Quick size changeover, wide size range, reliable operation, integration with WMS',
    },
    {
      industry: 'Pharmaceuticals',
      uses: ['Medicine bottle case packing', 'Blister pack cartons', 'Healthcare product boxing', 'Medical device packaging'],
      requirements: 'Clean operation, validation capability, GMP compliance, precision handling',
    },
    {
      industry: 'Consumer Goods',
      uses: ['Retail display cartons', 'Product bundling', 'Promotional packaging', 'Club store multipacks'],
      requirements: 'Print quality preservation, retail-ready appearance, varied sizes, high volume',
    },
  ];

  const maintenanceGuide = [
    'Daily inspection of suction cups and vacuum system',
    'Weekly cleaning of sensors and photo eyes',
    'Monthly lubrication of moving parts and bearings',
    'Regular inspection of guide rail alignment',
    'Check and replace worn folding plows',
    'Inspect glue system nozzles and filters (if equipped)',
    'Monitor tape head condition and alignment',
    'Verify carton magazine spring tension',
    'Clean and adjust carton blank separators',
    'Maintain spare parts inventory for critical components',
  ];

  const troubleshooting = [
    {
      issue: 'Multiple Blanks Picked',
      causes: ['Excessive vacuum pressure', 'Worn suction cups', 'Static buildup', 'Magazine tension too loose'],
      solutions: ['Adjust vacuum level', 'Replace suction cups', 'Use anti-static spray', 'Increase magazine tension'],
    },
    {
      issue: 'Carton Not Opening Properly',
      causes: ['Incorrect blank score lines', 'Weak vacuum', 'Guide rail misalignment', 'Carton board too stiff'],
      solutions: ['Verify blank specifications', 'Check vacuum system', 'Realign guides', 'Adjust opening timing'],
    },
    {
      issue: 'Bottom Seal Failure',
      causes: ['Low glue temperature', 'Insufficient pressure', 'Contaminated flaps', 'Worn pressure rollers'],
      solutions: ['Increase glue temp', 'Adjust roller pressure', 'Clean carton area', 'Replace rollers'],
    },
    {
      issue: 'Carton Jamming',
      causes: ['Improper carton size', 'Guide misalignment', 'Worn components', 'Timing issues'],
      solutions: ['Verify carton specs', 'Adjust guide rails', 'Replace worn parts', 'Check timing settings'],
    },
  ];

  const selectionGuide = [
    {
      consideration: 'Production Volume',
      factors: 'Daily carton requirements, peak periods, shift patterns, growth projections',
      recommendation: 'Low (<500/day): Semi-auto | Medium (500-5000/day): Standard auto | High (>5000/day): High-speed system',
    },
    {
      consideration: 'Carton Size Variety',
      factors: 'Number of different sizes, changeover frequency, size range extremes',
      recommendation: 'Single size: Manual adjust | 2-5 sizes: Quick-change | 5+ sizes: Automatic adjustment | Random: Servo-driven',
    },
    {
      consideration: 'Facility Constraints',
      factors: 'Available floor space, ceiling height, integration requirements, utilities',
      recommendation: 'Limited space: Vertical erector | Standard: Horizontal | Inline: Fully integrated | Portable: Mobile units',
    },
    {
      consideration: 'Budget & ROI',
      factors: 'Capital available, labor costs, production volume, payback requirements',
      recommendation: 'Quick ROI: Semi-auto | High volume: Full auto | Maximum flexibility: Random size | Entry level: Manual assist',
    },
  ];

  const cartonDesignTips = [
    {
      tip: 'Proper Score Lines',
      importance: 'Critical for reliable erection',
      recommendation: 'Ensure crisp, consistent score lines on all fold points. Test carton samples on erector before production runs.',
    },
    {
      tip: 'Flap Length & Overlap',
      importance: 'Affects seal quality and strength',
      recommendation: 'Minor flaps should be 40-50% of carton width. Major flaps should overlap by 50-75mm minimum.',
    },
    {
      tip: 'Board Caliper Selection',
      importance: 'Impacts machine performance',
      recommendation: 'Match board strength to product weight. Too thin causes collapse; too thick resists folding.',
    },
    {
      tip: 'Print Area Considerations',
      importance: 'Prevents damage to graphics',
      recommendation: 'Avoid printing in fold and seal areas. Keep graphics away from suction cup contact points.',
    },
  ];

  const roiCalculation = [
    {
      factor: 'Labor Savings',
      calculation: '1-2 workers @ $15-20/hr x 8 hours x 260 days = $31,200-83,200 annually',
      savings: '$31,200 - $83,200 per year',
    },
    {
      factor: 'Productivity Increase',
      calculation: '200% increase in carton output enables higher sales volume',
      savings: 'Variable based on sales growth',
    },
    {
      factor: 'Reduced Waste',
      calculation: '15-25% reduction in damaged cartons @ $0.50-2.00 per carton',
      savings: '$2,000 - $10,000 per year',
    },
    {
      factor: 'Injury Reduction',
      calculation: 'Eliminated repetitive strain injuries and workers comp claims',
      savings: '$5,000 - $25,000 per year',
    },
  ];

  const integrationOptions = [
    'Case packer integration for automatic filling',
    'Case sealer synchronization for continuous operation',
    'Conveyor systems for material transport',
    'Palletizer interface for end-of-line automation',
    'Print and apply labeling systems',
    'Weighing and checkweighing stations',
    'Metal detection and quality inspection',
    'WMS and ERP system connectivity',
  ];

  const safetyFeatures = [
    'Safety guards with interlocked access doors',
    'Emergency stop buttons at all access points',
    'Light curtains prevent hand entry during operation',
    'Automatic shutdown on jam or malfunction',
    'Pinch point protection on all moving components',
    'Low-noise operation below 75dB',
    'Guarded drive systems and rotating parts',
    'CE and OSHA compliant safety standards',
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
              Carton Erectors / Case Erectors
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Professional automatic case erecting systems that transform flat carton blanks into
              ready-to-fill boxes at high speed. Our carton erectors eliminate manual setup labor,
              increase packaging line efficiency, and ensure consistent carton quality. From
              semi-automatic entry-level systems to high-speed fully automatic random case erectors,
              we provide complete solutions for every production requirement and budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
              <div className="aspect-video bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture9563.jpg"
                  alt="Automatic Carton Erector Machine"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Automate Your Carton Setup Process
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Carton erectors are essential automation for modern packaging operations, replacing
                slow, labor-intensive manual carton setup with fast, consistent automatic forming and
                sealing. By automatically picking, opening, forming, and sealing flat carton blanks,
                case erectors dramatically increase productivity while reducing labor costs and
                ensuring every carton is perfectly formed for optimal filling and sealing performance.
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
              Carton Erector Types & Configurations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Choose from semi-automatic to fully automatic case erectors designed to match your
              production volume, carton sizes, and automation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {machineTypes.map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{machine.type}</h3>
                  <p className="text-blue-100 text-sm">{machine.description}</p>
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
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Carton Size Range</p>
                      <p className="font-semibold text-gray-900">{machine.cartonSizes}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {machine.features.map((feature, fIndex) => (
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
              Bottom Sealing Methods
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sealingMethods.map((method, index) => (
                <div key={index} className="border-2 border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{method.method}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Description:</p>
                      <p className="text-gray-700 text-sm">{method.description}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Advantages:</p>
                      <p className="text-gray-700 text-sm">{method.advantages}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Disadvantages:</p>
                      <p className="text-gray-700 text-sm">{method.disadvantages}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Best For:</p>
                      <p className="text-gray-700 text-sm">{method.bestFor}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Cost Per Carton:</p>
                      <p className="text-sm text-gray-700">{method.costPer}</p>
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
                Carton erectors are essential across industries requiring efficient, automated boxing
                for products ranging from food to pharmaceuticals to consumer goods.
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
                Automated case erectors deliver significant operational advantages, improved
                efficiency, and strong return on investment for packaging operations.
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
              How Carton Erectors Work
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Understanding the case erection process helps optimize settings and achieve consistent,
              high-quality carton formation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12">
            {operatingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{principle.step}</h3>
                <p className="text-gray-700 text-xs mb-2">{principle.description}</p>
                <p className="text-gray-600 text-xs italic">{principle.details}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Optional Features</h3>
              <div className="space-y-4">
                {optionalFeatures.map((option, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
                    <h4 className="text-base font-bold text-gray-900 mb-1">{option.feature}</h4>
                    <p className="text-gray-700 mb-2 text-sm">{option.description}</p>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-xs text-gray-700">{option.benefits}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Carton Design Tips</h3>
              <div className="space-y-4">
                {cartonDesignTips.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="text-base font-bold text-gray-900 mb-1">{item.tip}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Importance:</span> {item.importance}
                    </p>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm text-gray-700">{item.recommendation}</p>
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
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Competitive Advantages
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Modern automatic case erectors offer superior performance and value for operations
              requiring efficient, reliable carton preparation.
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

          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
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

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ROI Calculation Guide
            </h3>
            <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
              Automatic case erectors typically pay for themselves in 12-24 months through labor
              savings, productivity gains, and waste reduction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roiCalculation.map((item, index) => (
                <div key={index} className="border-2 border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.factor}</h4>
                  <p className="text-sm text-gray-700 mb-3">{item.calculation}</p>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm font-semibold text-blue-900">
                      Annual Savings: {item.savings}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-6 bg-blue-600 text-white rounded-xl text-center">
              <p className="text-2xl font-bold mb-2">Total Estimated Annual Savings</p>
              <p className="text-4xl font-bold mb-2">$38,200 - $118,200+</p>
              <p className="text-blue-100 text-sm">
                Based on typical packaging operation with moderate production volumes
              </p>
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
                  Why Choose Our Case Erectors?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Reliability</p>
                      <p className="text-blue-100 text-sm">
                        Industrial-grade construction and proven components ensure years of
                        dependable operation with minimal downtime
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Flexible Configuration</p>
                      <p className="text-blue-100 text-sm">
                        From entry-level semi-automatic to high-speed random case erectors, we offer
                        solutions for every budget and requirement
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Integration</p>
                      <p className="text-blue-100 text-sm">
                        Seamless integration with case packers, sealers, and end-of-line equipment
                        for fully automated packaging lines
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Expert Support</p>
                      <p className="text-blue-100 text-sm">
                        Installation, training, maintenance programs, and responsive technical
                        support ensure maximum uptime and productivity
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
                  <p className="text-sm font-semibold text-gray-900 mb-2">Integration Options:</p>
                  <ul className="space-y-1">
                    {integrationOptions.slice(0, 4).map((option, index) => (
                      <li key={index} className="text-xs text-gray-700 flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-blue-600 flex-shrink-0" />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
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
              Transform Your Packaging Operation with Automation
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              From entry-level semi-automatic systems to high-speed random case erectors, our carton
              erecting solutions deliver the reliability, efficiency, and ROI you need. Let our
              experts help you select the ideal case erector for your carton sizes, volumes, and
              operational goals.
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

export default CartonErectors;
