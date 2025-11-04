import { ArrowLeft, CheckCircle, Zap, Package, Shield, Gauge } from 'lucide-react';

interface CheckWeigherProps {
  onNavigate?: (page: string) => void;
}

const CheckWeigher = ({ onNavigate }: CheckWeigherProps) => {
  const features = [
    {
      icon: Zap,
      title: 'High-Speed Inspection',
      description: 'Weigh up to 300+ products per minute with exceptional accuracy',
    },
    {
      icon: Package,
      title: 'Precision Accuracy',
      description: 'Advanced load cells deliver ±0.1g to ±5g accuracy depending on product weight',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Automatically reject underweight or overweight products ensuring compliance',
    },
    {
      icon: Gauge,
      title: 'Data Tracking',
      description: 'Real-time statistics, reporting, and traceability for quality control',
    },
  ];

  const applications = [
    'Food & Beverage Quality Control',
    'Pharmaceutical Compliance',
    'Packaged Goods Verification',
    'Meat & Poultry Processing',
    'Bakery & Snack Foods',
    'Frozen Food Products',
    'Confectionery & Candy',
    'Dairy Products',
    'Canned & Bottled Goods',
    'Pre-Packaged Meals',
    'Pet Food Packaging',
    'Cosmetics & Personal Care',
  ];

  const benefits = [
    'Ensures compliance with weights and measures regulations',
    'Prevents product giveaway by detecting overweight items',
    'Protects brand reputation by eliminating underweight packages',
    'Real-time quality monitoring and statistical analysis',
    'Automatic rejection eliminates manual inspection labor',
    'Integrates with production lines for seamless operation',
    'Reduces waste by identifying filling machine issues early',
    'Provides detailed production reports and traceability',
    'Improves fill accuracy and reduces raw material costs',
    'FDA, USDA, and legal-for-trade compliant options available',
  ];

  const weigherTypes = [
    {
      type: 'In-Motion Checkweigher',
      description: 'High-speed dynamic weighing system that weighs products as they move on conveyor belt',
      speed: 'Up to 300 items per minute',
      suitable: 'High-volume production lines, packaged goods, continuous flow operations',
      accuracy: '±0.1g to ±2g (product dependent)',
      features: ['Dynamic weighing', 'Automatic rejection', 'Statistical analysis', 'Multi-lane capability'],
    },
    {
      type: 'Combination Checkweigher & Metal Detector',
      description: 'Integrated system that performs both weight verification and metal contamination detection',
      speed: 'Up to 200 items per minute',
      suitable: 'Food safety critical applications, HACCP compliance, dual inspection needs',
      accuracy: '±0.5g to ±3g weight / 1.0mm-3.0mm metal',
      features: ['Weight + metal detection', 'Space-saving design', 'Single rejection point', 'FDA compliant'],
    },
    {
      type: 'Legal-for-Trade Checkweigher',
      description: 'Certified weighing system meeting legal metrology requirements for weight verification',
      speed: 'Up to 150 items per minute',
      suitable: 'Pre-packed goods, regulatory compliance, certified weight declarations',
      accuracy: 'OIML R51, NIST Handbook 44 compliant',
      features: ['Certified accuracy', 'Sealed calibration', 'Traceable weights', 'Audit trail logging'],
    },
    {
      type: 'Multi-Lane Checkweigher',
      description: 'Parallel weighing system with 2-6 independent lanes for extremely high throughput',
      speed: 'Up to 600+ items per minute (combined)',
      suitable: 'Ultra-high volume, multiple SKU production, distribution centers',
      accuracy: '±0.5g to ±5g per lane',
      features: ['Independent lanes', 'Centralized control', 'Shared rejection', 'Production balancing'],
    },
  ];

  const specifications = [
    {
      label: 'Weighing Speed',
      value: '60-300+ items per minute (model dependent)',
    },
    {
      label: 'Weighing Accuracy',
      value: '±0.1g to ±5g (based on product weight and speed)',
    },
    {
      label: 'Product Weight Range',
      value: '5g to 50kg (customizable)',
    },
    {
      label: 'Conveyor Width',
      value: '200mm to 800mm (standard sizes)',
    },
    {
      label: 'Rejection Systems',
      value: 'Pusher, blow-off, drop-flap, swing arm',
    },
    {
      label: 'Display & Controls',
      value: '7" to 15" color touchscreen HMI',
    },
  ];

  const advantages = [
    {
      title: 'Regulatory Compliance',
      description: 'Meet FDA, USDA, NIST Handbook 44, and OIML R51 requirements for package weight verification. Legal-for-trade models provide certified accuracy for pre-packed goods, ensuring compliance with weights and measures regulations and avoiding costly fines.',
    },
    {
      title: 'Prevent Product Giveaway',
      description: 'Identify and eliminate overweight packages that waste expensive ingredients and reduce profitability. Even small reductions in average overfill (0.5-1%) can save thousands of dollars annually in raw material costs.',
    },
    {
      title: 'Brand Protection',
      description: 'Automatically reject underweight packages before they reach customers, protecting brand reputation and preventing consumer complaints. Ensure every package meets stated weight, building customer trust and loyalty.',
    },
    {
      title: 'Process Optimization',
      description: 'Real-time weight data identifies filling machine drift, portion control issues, or equipment problems immediately. Statistical analysis helps optimize fill weights, improve process capability, and reduce variation.',
    },
    {
      title: 'Labor Reduction',
      description: 'Eliminate manual weight verification and inspection labor. Automatic operation and rejection allow one operator to monitor multiple lines, reducing labor costs by 60-80% compared to manual sampling.',
    },
    {
      title: 'Complete Traceability',
      description: 'Comprehensive data logging provides lot traceability, production statistics, and quality documentation. Track every product weighed with timestamp, weight, acceptance/rejection status, and operator information for complete accountability.',
    },
  ];

  const operatingPrinciples = [
    {
      step: 'Product Infeed',
      description: 'Products enter checkweigher on synchronized conveyor belt',
      details: 'Product spacing and orientation controlled for consistent weighing',
    },
    {
      step: 'Weight Acquisition',
      description: 'High-speed load cell measures product weight dynamically',
      details: 'Advanced filtering eliminates vibration and environmental interference',
    },
    {
      step: 'Weight Evaluation',
      description: 'System compares measured weight against preset limits',
      details: 'Accept if within tolerance range, reject if under or overweight',
    },
    {
      step: 'Product Marking',
      description: 'Accepted products continue; rejected products marked for removal',
      details: 'Tracking system coordinates rejection timing with product position',
    },
    {
      step: 'Automatic Rejection',
      description: 'Reject mechanism removes non-conforming products from line',
      details: 'Pusher, air blast, or diverter sends rejects to collection bin',
    },
    {
      step: 'Data Recording',
      description: 'Weight data logged for quality analysis and reporting',
      details: 'Statistical process control charts and production summaries generated',
    },
  ];

  const optionalFeatures = [
    {
      feature: 'Automatic Product Setup',
      description: 'Barcode or RFID triggers automatic selection of weight limits and settings',
      benefits: 'Eliminates manual changeover, prevents operator error, faster SKU changes, production tracking',
    },
    {
      feature: 'Statistical Process Control',
      description: 'Real-time SPC charts show weight distribution, trends, and process capability',
      benefits: 'Early problem detection, process optimization, Cp/Cpk analysis, regulatory documentation',
    },
    {
      feature: 'Multi-Sorting Capability',
      description: 'Classify products into multiple weight zones beyond simple accept/reject',
      benefits: 'Grade-based sorting, price-by-weight applications, multi-destination routing',
    },
    {
      feature: 'Checkweigher + Metal Detector',
      description: 'Combined weight verification and metal contamination detection in single unit',
      benefits: 'Space savings, single reject point, simplified validation, HACCP compliance',
    },
    {
      feature: 'Network Connectivity',
      description: 'Ethernet, OPC-UA, or cloud connectivity for production monitoring',
      benefits: 'Remote monitoring, ERP integration, centralized reporting, predictive maintenance',
    },
    {
      feature: 'Washdown Construction',
      description: 'IP65/IP69K rated stainless steel for wet cleaning environments',
      benefits: 'Sanitary design, easy cleaning, corrosion resistance, food safety compliance',
    },
  ];

  const industryApplications = [
    {
      industry: 'Food & Beverage',
      uses: ['Packaged food weight verification', 'Meat & poultry portioning', 'Bakery goods quality', 'Bottled beverages filling'],
      requirements: 'FDA compliance, washdown capability, high accuracy, fast changeover, sanitary design',
    },
    {
      industry: 'Pharmaceuticals',
      uses: ['Tablet bottle filling', 'Medicine packaging', 'Medical device verification', 'Sample collection'],
      requirements: 'GMP compliance, validation capability, high precision, 21 CFR Part 11, clean room rated',
    },
    {
      industry: 'Consumer Goods',
      uses: ['Retail package verification', 'Household products', 'Personal care items', 'Hardware packaging'],
      requirements: 'High speed, multiple product handling, legal-for-trade option, production reporting',
    },
    {
      industry: 'Industrial Products',
      uses: ['Automotive parts', 'Hardware components', 'Electronic assemblies', 'Chemical packaging'],
      requirements: 'Heavy-duty construction, wide weight range, integration capability, harsh environment rating',
    },
  ];

  const rejectionMethods = [
    {
      method: 'Air Blast (Blow-Off)',
      description: 'High-pressure air jet pushes lightweight products off conveyor',
      advantages: 'No contact with product, very fast operation, simple mechanism, low maintenance',
      disadvantages: 'Limited to lightweight products, compressed air required, noise generation',
      bestFor: 'Lightweight packages (<500g), high-speed lines, sanitary applications',
      typical: '50-200 items/min rejection capacity',
    },
    {
      method: 'Pusher Arm',
      description: 'Pneumatic or servo-driven arm pushes product perpendicular to conveyor',
      advantages: 'Works with all weights, positive rejection, reliable operation, proven technology',
      disadvantages: 'Physical contact, slower speed, mechanical wear, higher maintenance',
      bestFor: 'Medium to heavy products, standard speeds, most common method',
      typical: '40-150 items/min rejection capacity',
    },
    {
      method: 'Drop-Flap Diverter',
      description: 'Conveyor section drops away allowing product to fall through to reject bin',
      advantages: 'No lateral force on product, works with unstable packages, gentle handling',
      disadvantages: 'Requires space below, slower cycling, product can tip or shift',
      bestFor: 'Tall or unstable products, gentle handling required, medium speeds',
      typical: '30-100 items/min rejection capacity',
    },
    {
      method: 'Swing Arm Diverter',
      description: 'Rotating arm sweeps product off conveyor to reject chute',
      advantages: 'Fast operation, minimal wear, adjustable force, compact design',
      disadvantages: 'Limited to certain product shapes, requires side clearance',
      bestFor: 'High-speed applications, consistent product geometry, space constraints',
      typical: '80-200 items/min rejection capacity',
    },
  ];

  const accuracyFactors = [
    {
      factor: 'Product Weight',
      impact: 'Heavier products allow better accuracy. Light products more affected by vibration.',
      optimization: 'Match checkweigher capacity to product weight range. Use high-resolution load cells for light products.',
    },
    {
      factor: 'Line Speed',
      impact: 'Higher speeds reduce weighing time and accuracy. Dynamic forces increase measurement error.',
      optimization: 'Balance speed vs accuracy requirements. Use high-speed load cells and digital filtering.',
    },
    {
      factor: 'Product Stability',
      impact: 'Shifting contents or unstable packaging causes weight variations during weighing.',
      optimization: 'Improve product stability, use longer weighing platforms, reduce speed for unstable products.',
    },
    {
      factor: 'Environmental Conditions',
      impact: 'Vibration, airflow, temperature changes affect measurement accuracy.',
      optimization: 'Isolate checkweigher from vibration sources, control environment, use temperature compensation.',
    },
  ];

  const maintenanceGuide = [
    'Daily cleaning of conveyor belts and weighing platform',
    'Weekly calibration verification with test weights',
    'Monthly inspection of rejection mechanisms and sensors',
    'Regular cleaning of photo eyes and product sensors',
    'Check conveyor belt tension and tracking alignment',
    'Inspect and clean load cell area for debris',
    'Verify rejection system accuracy and timing',
    'Review and archive weight data and statistics',
    'Lubricate moving parts per manufacturer schedule',
    'Maintain spare parts inventory for critical components',
  ];

  const troubleshooting = [
    {
      issue: 'Inconsistent Weight Readings',
      causes: ['Vibration from nearby equipment', 'Airflow across weighing platform', 'Temperature fluctuations', 'Load cell drift'],
      solutions: ['Isolate checkweigher, check mounting', 'Install draft shields', 'Allow warm-up time, control environment', 'Recalibrate load cell'],
    },
    {
      issue: 'False Rejects',
      causes: ['Limits set too tight', 'Product instability on belt', 'Sensor contamination', 'Conveyor speed variation'],
      solutions: ['Adjust weight tolerances', 'Improve product handling', 'Clean sensors and photo eyes', 'Check belt drive and controls'],
    },
    {
      issue: 'Missed Rejects',
      causes: ['Rejection timing incorrect', 'Weak air pressure or pusher', 'Sensor misalignment', 'Control system delay'],
      solutions: ['Adjust rejection delay timing', 'Check pneumatics or pusher force', 'Realign product sensors', 'Verify control system settings'],
    },
    {
      issue: 'Calibration Drift',
      causes: ['Temperature changes', 'Load cell damage', 'Mechanical wear', 'Electronic component aging'],
      solutions: ['Temperature stabilization', 'Inspect and replace load cell', 'Check mechanical components', 'Service electronics, recalibrate'],
    },
  ];

  const selectionGuide = [
    {
      consideration: 'Product Weight & Size',
      factors: 'Minimum/maximum weight, package dimensions, product stability, weight consistency',
      recommendation: 'Light (<100g): High-res load cell | Medium (100g-5kg): Standard | Heavy (>5kg): Heavy-duty model | Wide range: Multi-range system',
    },
    {
      consideration: 'Production Speed',
      factors: 'Products per minute, uptime requirements, line synchronization, peak volumes',
      recommendation: 'Low (<60/min): Entry-level | Medium (60-150/min): Standard speed | High (150-300/min): High-speed | Ultra-high: Multi-lane',
    },
    {
      consideration: 'Accuracy Requirements',
      factors: 'Regulatory compliance, tolerance limits, process capability needed, legal metrology',
      recommendation: 'Standard: ±1-5g | High precision: ±0.1-1g | Legal-for-trade: Certified model | Pharmaceutical: Validated system',
    },
    {
      consideration: 'Environment & Integration',
      factors: 'Wash-down needs, temperature range, space available, line integration requirements',
      recommendation: 'Dry environment: IP54 | Wet/washdown: IP65/IP69K | Harsh: Stainless steel | Integrated line: Custom interface',
    },
  ];

  const regulatoryCompliance = [
    {
      regulation: 'NIST Handbook 44',
      description: 'US standard for legal-for-trade weighing devices',
      requirements: 'Certified accuracy, sealed calibration, periodic testing, traceable standards',
      applies: 'Pre-packed goods sold by weight in commerce',
    },
    {
      regulation: 'OIML R51',
      description: 'International standard for automatic catchweighing instruments',
      requirements: 'Accuracy classes, environmental testing, certification procedures',
      applies: 'International markets, legal metrology applications',
    },
    {
      regulation: 'FDA 21 CFR Part 110',
      description: 'Current Good Manufacturing Practice (cGMP) for food processing',
      requirements: 'Sanitary design, validation, calibration records, preventive maintenance',
      applies: 'Food and beverage manufacturing facilities',
    },
    {
      regulation: 'FDA 21 CFR Part 11',
      description: 'Electronic records and signatures for pharmaceutical applications',
      requirements: 'Audit trails, access controls, data integrity, validation documentation',
      applies: 'Pharmaceutical and medical device manufacturing',
    },
  ];

  const roiCalculation = [
    {
      factor: 'Overfill Reduction',
      calculation: '0.5% reduction x 1M units/year x $2 product cost = $10,000 savings',
      savings: '$10,000 - $50,000 per year',
    },
    {
      factor: 'Labor Elimination',
      calculation: '1 inspector @ $15/hr x 8 hours x 260 days = $31,200 annually',
      savings: '$30,000 - $80,000 per year',
    },
    {
      factor: 'Reject Reduction',
      calculation: 'Identify filler issues early, reduce waste by 1-2% of production',
      savings: '$5,000 - $25,000 per year',
    },
    {
      factor: 'Compliance & Brand Protection',
      calculation: 'Avoid regulatory fines ($1,000-100,000), prevent customer complaints and recalls',
      savings: 'Risk mitigation + brand value',
    },
  ];

  const dataManagement = [
    'Real-time weight display and statistics',
    'Production totals by shift, day, week, month',
    'Statistical process control (SPC) charts',
    'X-bar and R-charts for process monitoring',
    'Histogram and distribution analysis',
    'Cp and Cpk process capability indices',
    'Trend analysis and alarm notifications',
    'Lot and batch traceability records',
    'Reject logs with timestamp and reason',
    'Export to Excel, CSV, PDF formats',
    'Network connectivity and remote monitoring',
    'Integration with MES and ERP systems',
  ];

  const safetyFeatures = [
    'Emergency stop buttons at access points',
    'Safety guards prevent operator contact with moving parts',
    'Automatic shutdown on conveyor jam or overload',
    'Access doors with interlocked safety switches',
    'Low-voltage control systems (24VDC typical)',
    'Lockout/tagout capability for maintenance',
    'Non-slip access platforms and walkways',
    'Warning lights indicate operation status',
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 px-4">
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
              Checkweigher Systems / Dynamic Weighing
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Professional automatic checkweighing systems for high-speed weight verification and
              quality control. Our checkweighers ensure regulatory compliance, eliminate product
              giveaway, and protect brand reputation by verifying every package meets specified
              weight requirements. From food and beverage to pharmaceuticals, we provide accurate,
              reliable checkweighing solutions that integrate seamlessly with production lines and
              deliver comprehensive quality data for continuous improvement.
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
                  src="/Picture10321.jpg"
                  alt="Automatic Checkweigher System"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precision Weight Verification at Production Speed
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Checkweighers are essential quality control equipment that automatically weigh every
                product in-motion on high-speed production lines. Using advanced load cell technology
                and sophisticated software, checkweighers verify package weights, reject
                non-conforming products, and provide real-time statistical data to optimize filling
                processes, reduce waste, ensure regulatory compliance, and protect brand reputation.
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
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
              Checkweigher Types & Configurations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Choose from high-speed in-motion weighers to legal-for-trade certified systems designed
              to match your accuracy requirements, production speeds, and regulatory compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {weigherTypes.map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{machine.type}</h3>
                  <p className="text-green-100 text-sm">{machine.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Weighing Speed</p>
                      <p className="font-bold text-gray-900">{machine.speed}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Best Suited For</p>
                      <p className="font-semibold text-gray-900">{machine.suitable}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Accuracy Range</p>
                      <p className="font-semibold text-gray-900">{machine.accuracy}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {machine.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
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
              Rejection Methods
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rejectionMethods.map((method, index) => (
                <div key={index} className="border-2 border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{method.method}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Description:</p>
                      <p className="text-gray-700 text-sm">{method.description}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Advantages:</p>
                      <p className="text-gray-700 text-sm">{method.advantages}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Disadvantages:</p>
                      <p className="text-gray-700 text-sm">{method.disadvantages}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Best For:</p>
                      <p className="text-gray-700 text-sm">{method.bestFor}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Capacity:</p>
                      <p className="text-sm text-gray-700">{method.typical}</p>
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
                Checkweighers are essential quality control equipment across industries requiring
                weight verification for regulatory compliance, quality assurance, and process control.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-green-600 text-white rounded-full p-1 flex-shrink-0">
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
                Automatic checkweighers deliver significant cost savings, quality improvements, and
                regulatory compliance while providing actionable data for continuous improvement.
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
              How Checkweighers Work
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Understanding the checkweighing process helps optimize settings and achieve maximum
              accuracy and throughput for your quality control requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12">
            {operatingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full font-bold text-xl mb-4">
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
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-xs text-gray-700">{option.benefits}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Factors Affecting Accuracy</h3>
              <div className="space-y-4">
                {accuracyFactors.map((item, index) => (
                  <div key={index} className="border-l-4 border-green-600 pl-4">
                    <h4 className="text-base font-bold text-gray-900 mb-1">{item.factor}</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="font-semibold">Impact:</span> {item.impact}
                    </p>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-gray-700">{item.optimization}</p>
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
              Modern checkweigher systems offer superior performance and value for operations
              requiring precise weight verification and comprehensive quality control.
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
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
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
                <div key={index} className="border-l-4 border-green-600 pl-6 py-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{guide.consideration}</h4>
                  <p className="text-gray-700 mb-3 text-sm">
                    <span className="font-semibold">Consider:</span> {guide.factors}
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Recommendation:</p>
                    <p className="text-sm text-gray-700">{guide.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Regulatory Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regulatoryCompliance.map((reg, index) => (
                <div key={index} className="border-2 border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{reg.regulation}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Description:</p>
                      <p className="text-gray-700 text-sm">{reg.description}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Requirements:</p>
                      <p className="text-gray-700 text-sm">{reg.requirements}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Applies To:</p>
                      <p className="text-sm text-gray-700">{reg.applies}</p>
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
              Checkweighers typically pay for themselves in 6-18 months through overfill reduction,
              labor savings, and quality improvements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roiCalculation.map((item, index) => (
                <div key={index} className="border-2 border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.factor}</h4>
                  <p className="text-sm text-gray-700 mb-3">{item.calculation}</p>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm font-semibold text-green-900">
                      Annual Savings: {item.savings}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-6 bg-green-600 text-white rounded-xl text-center">
              <p className="text-2xl font-bold mb-2">Total Estimated Annual Savings</p>
              <p className="text-4xl font-bold mb-2">$45,000 - $155,000+</p>
              <p className="text-green-100 text-sm">
                Based on typical production operation with moderate volumes and material costs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Checkweigher Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Accuracy & Reliability</p>
                      <p className="text-green-100 text-sm">
                        High-resolution load cells and advanced filtering deliver consistent accuracy
                        even at maximum production speeds
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Regulatory Compliance</p>
                      <p className="text-green-100 text-sm">
                        Legal-for-trade options meet NIST, OIML, FDA requirements with certified
                        accuracy and validation documentation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Integration</p>
                      <p className="text-green-100 text-sm">
                        Seamless integration with production lines, data systems, and quality
                        management platforms
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Expert Support</p>
                      <p className="text-green-100 text-sm">
                        Installation, calibration, validation, training, and responsive technical
                        support ensure maximum uptime
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
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Data Management:</p>
                  <ul className="space-y-1">
                    {dataManagement.slice(0, 4).map((feature, index) => (
                      <li key={index} className="text-xs text-gray-700 flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
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
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Issues & Solutions</h3>
              <div className="space-y-6">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="border-l-4 border-green-600 pl-4">
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
              Ensure Quality & Compliance with Automated Checkweighing
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              From entry-level systems to high-speed legal-for-trade checkweighers, our solutions
              deliver the accuracy, reliability, and data you need for complete quality control. Let
              our experts help you select the ideal checkweigher for your products, speeds, and
              compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-lg"
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

export default CheckWeigher;
