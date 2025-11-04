import { ArrowLeft, CheckCircle, Zap, Package, Shield, Gauge } from 'lucide-react';

interface LiquidFillingCappingProps {
  onNavigate?: (page: string) => void;
}

const LiquidFillingCapping = ({ onNavigate }: LiquidFillingCappingProps) => {
  const features = [
    {
      icon: Zap,
      title: 'High-Speed Production',
      description: 'Fill and cap up to 300+ bottles per minute with precision accuracy',
    },
    {
      icon: Package,
      title: 'Versatile Container Handling',
      description: 'Handles multiple bottle sizes, shapes, and closure types seamlessly',
    },
    {
      icon: Shield,
      title: 'Hygienic Design',
      description: 'Food-grade stainless steel construction meets GMP and FDA standards',
    },
    {
      icon: Gauge,
      title: 'Precision Filling',
      description: 'Advanced fill technology ensures accurate volume control within ±1%',
    },
  ];

  const applications = [
    'Bottled Water & Beverages',
    'Fruit Juices & Nectars',
    'Carbonated Soft Drinks',
    'Dairy Products (Milk, Yogurt Drinks)',
    'Edible Oils & Cooking Oils',
    'Sauces & Condiments (Ketchup, Mayonnaise)',
    'Syrups & Liquid Sweeteners',
    'Liquid Soaps & Detergents',
    'Shampoos & Personal Care Products',
    'Pharmaceutical Liquids & Syrups',
    'Chemical Solutions & Reagents',
    'Automotive Fluids & Lubricants',
  ];

  const benefits = [
    'Automated operation reduces labor costs significantly',
    'Consistent fill accuracy minimizes product waste',
    'High-speed throughput increases production capacity',
    'Reduced contamination risk with sealed systems',
    'Quick changeover between different products',
    'Minimal operator training required',
    'Integration with upstream and downstream equipment',
    'Energy-efficient operation reduces costs',
    'Reliable performance with minimal downtime',
    'Scalable solutions for growing operations',
  ];

  const machineTypes = [
    {
      type: 'Gravity Filling Systems',
      description: 'Uses gravity to fill thin, free-flowing liquids. Simple, economical solution for water, juices, and beverages',
      speed: '20-150 bottles per minute',
      suitable: 'Water, juices, beverages, wine, oils',
      viscosity: 'Low viscosity liquids (water-like consistency)',
      features: ['Simple operation', 'Low maintenance', 'No foaming', 'Cost-effective'],
    },
    {
      type: 'Pressure Filling Systems',
      description: 'Uses pressure differential to fill liquids quickly. Ideal for carbonated beverages and foaming products',
      speed: '50-300 bottles per minute',
      suitable: 'Carbonated drinks, beer, sparkling beverages',
      viscosity: 'Low to medium viscosity with gas content',
      features: ['CO2 preservation', 'High-speed filling', 'Minimal foaming', 'Pressure control'],
    },
    {
      type: 'Piston Filling Systems',
      description: 'Volumetric filling with piston pump for thick, viscous products. Precise dosing for creams, sauces, and pastes',
      speed: '30-100 bottles per minute',
      suitable: 'Sauces, creams, honey, paste products, lotions',
      viscosity: 'Medium to high viscosity (up to 50,000 cP)',
      features: ['Precise volume', 'Handles thick products', 'Particle suspension', 'Easy cleaning'],
    },
    {
      type: 'Peristaltic Filling Systems',
      description: 'Gentle pump action ideal for sensitive products. No product contact with pump parts ensures purity',
      speed: '20-80 bottles per minute',
      suitable: 'Pharmaceuticals, cosmetics, sterile products',
      viscosity: 'Low to medium viscosity',
      features: ['Sterile filling', 'No contamination', 'Gentle handling', 'Easy sanitation'],
    },
  ];

  const cappingTypes = [
    {
      type: 'Screw Capping',
      description: 'Automated screw-on cap application with torque control',
      suitable: 'Threaded caps, continuous thread closures',
      features: ['Adjustable torque', 'Multiple head options', 'Anti-cross threading', 'Cap presence detection'],
    },
    {
      type: 'Snap Capping',
      description: 'Press-fit cap application for snap-on closures',
      suitable: 'Snap-on caps, press-fit lids, flip-top closures',
      features: ['Quick application', 'No torque needed', 'Gentle sealing', 'High-speed operation'],
    },
    {
      type: 'ROPP Capping',
      description: 'Roll-On Pilfer Proof aluminum cap threading and sealing',
      suitable: 'Aluminum caps, pilfer-proof closures, wine bottles',
      features: ['Tamper-evident seal', 'Precise threading', 'Premium appearance', 'Hermetic sealing'],
    },
    {
      type: 'Cork/Stopper Insertion',
      description: 'Automated cork or stopper pressing for premium bottles',
      suitable: 'Wine bottles, spirits, pharmaceutical vials',
      features: ['Controlled insertion', 'No cork damage', 'Consistent depth', 'Premium presentation'],
    },
  ];

  const specifications = [
    {
      label: 'Filling Speed',
      value: '20-300 bottles/minute (model dependent)',
    },
    {
      label: 'Fill Volume Range',
      value: '50ml to 5 liters (adjustable)',
    },
    {
      label: 'Fill Accuracy',
      value: '±0.5% to ±1% (depending on volume)',
    },
    {
      label: 'Bottle Height',
      value: '80mm to 350mm',
    },
    {
      label: 'Bottle Diameter',
      value: '40mm to 120mm',
    },
    {
      label: 'Power Requirements',
      value: '220V/380V, 3-Phase, 50/60Hz',
    },
  ];

  const advantages = [
    {
      title: 'Superior Fill Accuracy',
      description: 'Advanced filling technology with servo-driven controls ensures precise volume dispensing within ±0.5-1%, eliminating overfill waste and ensuring regulatory compliance for labeled volumes.',
    },
    {
      title: 'Hygienic Operation',
      description: 'Food-grade stainless steel construction with CIP (Clean-In-Place) capability ensures product safety. Sealed filling systems prevent contamination and meet stringent food safety and pharmaceutical standards.',
    },
    {
      title: 'Versatile Container Handling',
      description: 'Quick-change parts and adjustable components accommodate various bottle sizes, shapes, and materials without extensive retooling. Reduces downtime during product changeovers.',
    },
    {
      title: 'Integrated Systems',
      description: 'Complete monoblock designs combine rinsing, filling, and capping in single compact units. Synchronized operations ensure efficient production flow and minimal floor space requirements.',
    },
    {
      title: 'Automated Quality Control',
      description: 'Built-in sensors detect missing bottles, incorrect fill levels, and capping failures. Automatic reject systems remove defective units maintaining consistent output quality.',
    },
    {
      title: 'Easy Operation & Maintenance',
      description: 'Intuitive touch screen controls with recipe storage enable quick product changes. Tool-free part access and self-diagnostic systems simplify maintenance and reduce technical skill requirements.',
    },
  ];

  const optionalFeatures = [
    {
      feature: 'Bottle Rinsing Station',
      description: 'Pre-fill bottle cleaning with air or water jets',
      benefits: 'Removes dust and particles, ensures product purity, extends shelf life',
    },
    {
      feature: 'Nitrogen Purging',
      description: 'Inert gas injection before capping to displace oxygen',
      benefits: 'Extended shelf life, prevents oxidation, maintains freshness',
    },
    {
      feature: 'Cap Sterilization',
      description: 'UV or chemical sterilization of caps before application',
      benefits: 'Pharmaceutical compliance, enhanced safety, contamination prevention',
    },
    {
      feature: 'Level Detection System',
      description: 'Optical or ultrasonic fill level verification',
      benefits: 'Quality assurance, automatic rejection, reduced waste',
    },
    {
      feature: 'CIP System',
      description: 'Clean-In-Place automated washing system',
      benefits: 'Rapid cleaning, reduced downtime, labor savings, sanitation compliance',
    },
    {
      feature: 'Touch Screen HMI',
      description: 'Advanced human-machine interface with recipe management',
      benefits: 'Easy operation, parameter storage, production monitoring, diagnostics',
    },
  ];

  const industryApplications = [
    {
      industry: 'Food & Beverage',
      uses: ['Bottled water plants', 'Juice production', 'Dairy processing', 'Edible oil bottling'],
      requirements: 'Food-grade materials, CIP capability, FDA compliance, high-speed operation',
    },
    {
      industry: 'Pharmaceuticals',
      uses: ['Liquid medicines', 'Syrups', 'Oral solutions', 'Injectable solutions'],
      requirements: 'GMP compliance, sterile filling, validation capability, tamper-evident sealing',
    },
    {
      industry: 'Cosmetics & Personal Care',
      uses: ['Shampoos', 'Lotions', 'Liquid soaps', 'Perfumes'],
      requirements: 'Gentle handling, no foaming, aesthetic filling, multiple container types',
    },
    {
      industry: 'Chemicals & Industrial',
      uses: ['Cleaning solutions', 'Lubricants', 'Automotive fluids', 'Agricultural chemicals'],
      requirements: 'Chemical resistance, safety features, heavy-duty construction, fume extraction',
    },
  ];

  const systemConfigurations = [
    {
      config: 'Monoblock Systems',
      description: 'Integrated rinse-fill-cap units in single compact machine',
      advantages: 'Space saving, synchronized operation, reduced conveyor length, lower cost',
      capacity: '2,000-18,000 bottles per hour',
      bestFor: 'Small to medium operations, limited floor space, consistent products',
    },
    {
      config: 'Inline Modular Systems',
      description: 'Separate machines for rinsing, filling, and capping connected by conveyors',
      advantages: 'Independent speed control, easier maintenance, flexible configuration, scalable',
      capacity: '5,000-36,000+ bottles per hour',
      bestFor: 'High-volume production, multiple products, maximum flexibility',
    },
    {
      config: 'Rotary Systems',
      description: 'High-speed rotary filling and capping with continuous motion',
      advantages: 'Ultra-high speed, gentle handling, premium for beverages, minimal bottle handling',
      capacity: '12,000-72,000+ bottles per hour',
      bestFor: 'Very high volumes, beverage plants, water bottling, continuous production',
    },
  ];

  const operatingPrinciples = [
    {
      step: 'Bottle Infeed',
      description: 'Empty bottles are fed onto conveyor via air conveyor or bottle unscrambler',
      details: 'Automatic orientation and spacing for precise positioning',
    },
    {
      step: 'Bottle Rinsing (Optional)',
      description: 'Bottles inverted and cleaned with air jets, water, or sterile solution',
      details: 'Removes dust, particles, and contaminants before filling',
    },
    {
      step: 'Filling Operation',
      description: 'Bottles positioned under fill nozzles and precise volume dispensed',
      details: 'Technology varies: gravity, pressure, piston, or peristaltic filling',
    },
    {
      step: 'Cap Feeding & Placement',
      description: 'Caps automatically fed from hopper and placed onto filled bottles',
      details: 'Vibratory bowl or elevator systems ensure consistent cap orientation',
    },
    {
      step: 'Capping Operation',
      description: 'Caps secured using appropriate method: screw, snap, or ROPP',
      details: 'Torque control ensures proper seal without damage',
    },
    {
      step: 'Quality Inspection',
      description: 'Vision systems and sensors verify fill level, cap presence, and seal quality',
      details: 'Automatic rejection of defective bottles',
    },
    {
      step: 'Bottle Discharge',
      description: 'Completed bottles exit for labeling, date coding, or case packing',
      details: 'Accumulation tables buffer for downstream equipment',
    },
  ];

  const maintenanceGuide = [
    'Daily cleaning of product contact parts',
    'Weekly inspection of fill nozzles and seals',
    'Monthly lubrication of drive systems and bearings',
    'Regular calibration of fill volumes',
    'Inspect and clean filters and strainers',
    'Check cap torque settings weekly',
    'Clean or replace O-rings and gaskets as needed',
    'Verify sensor alignment and functionality',
    'Run CIP cycles per schedule',
    'Maintain spare parts inventory for critical components',
  ];

  const troubleshooting = [
    {
      issue: 'Inconsistent Fill Volumes',
      causes: ['Air in fill lines', 'Worn nozzle seals', 'Product temperature variation', 'Incorrect calibration'],
      solutions: ['Bleed air from system', 'Replace seals and gaskets', 'Control product temperature', 'Recalibrate fill volumes'],
    },
    {
      issue: 'Bottle Jams or Misalignment',
      causes: ['Incorrect guide rail settings', 'Damaged bottles', 'Speed mismatch', 'Worn star wheel'],
      solutions: ['Adjust guide rails to bottle size', 'Inspect bottle quality', 'Synchronize conveyor speeds', 'Replace worn components'],
    },
    {
      issue: 'Cap Application Failures',
      causes: ['Empty cap feeder', 'Incorrect torque setting', 'Misaligned cap chute', 'Damaged threads'],
      solutions: ['Refill cap hopper', 'Adjust torque control', 'Realign cap delivery', 'Check bottle neck quality'],
    },
    {
      issue: 'Product Foaming During Fill',
      causes: ['Fill speed too high', 'Excessive drop height', 'Product agitation', 'Air entrainment'],
      solutions: ['Reduce fill speed', 'Lower nozzle position', 'Minimize turbulence', 'Use bottom-up filling'],
    },
  ];

  const selectionGuide = [
    {
      consideration: 'Production Capacity',
      factors: 'Required bottles per hour, shift patterns, seasonal peaks, growth projections',
      recommendation: 'Small (<5,000/hr): Monoblock | Medium (5,000-20,000/hr): Inline | High (>20,000/hr): Rotary',
    },
    {
      consideration: 'Product Characteristics',
      factors: 'Viscosity, foaming tendency, temperature sensitivity, particle content',
      recommendation: 'Thin liquids: Gravity/Pressure | Thick products: Piston | Sensitive: Peristaltic',
    },
    {
      consideration: 'Container Variety',
      factors: 'Number of bottle sizes, shape variations, cap types, material types',
      recommendation: 'High variety: Quick-change systems | Standard sizes: Fixed format machines',
    },
    {
      consideration: 'Regulatory Requirements',
      factors: 'Industry standards (FDA, GMP), sterility needs, validation requirements, documentation',
      recommendation: 'Food/Bev: Sanitary design with CIP | Pharma: GMP-compliant with validation packages',
    },
  ];

  const liquidTypes = [
    {
      category: 'Thin/Free-Flowing',
      examples: 'Water, juices, wine, milk, liquid soaps',
      recommended: 'Gravity or pressure filling systems',
      considerations: 'May require anti-foam or anti-drip nozzles',
    },
    {
      category: 'Medium Viscosity',
      examples: 'Sauces, syrups, shampoos, cooking oils',
      recommended: 'Piston or time-pressure filling systems',
      considerations: 'Temperature control may be needed for consistent flow',
    },
    {
      category: 'Thick/Viscous',
      examples: 'Honey, creams, pastes, gels, thick sauces',
      recommended: 'Piston filling systems with heated tanks',
      considerations: 'Wide-bore nozzles, product heating, no-drip cutoff',
    },
    {
      category: 'Carbonated',
      examples: 'Soft drinks, beer, sparkling water',
      recommended: 'Counter-pressure isobaric filling systems',
      considerations: 'CO2 recovery, pressure control, minimal foaming',
    },
    {
      category: 'Sensitive/Sterile',
      examples: 'Pharmaceuticals, injectable solutions, nutraceuticals',
      recommended: 'Peristaltic or time-pressure with sterile design',
      considerations: 'Clean room compatible, validation capability, minimal contact',
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
              Liquid Filling & Capping Machines
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Advanced automated liquid filling and capping solutions for high-speed beverage,
              pharmaceutical, cosmetic, and chemical production. Our integrated systems deliver
              precise volumetric filling, reliable cap application, and hygienic operation for
              bottles, containers, and vials. From small-batch specialty products to high-volume
              water bottling, we provide complete turnkey solutions with proven reliability.
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
                  src="/Picture5213 copy.jpg"
                  alt="Liquid Filling and Capping Machine"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Bottling Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Liquid filling and capping machines are the cornerstone of modern bottling
                operations, combining precision, speed, and hygiene to deliver consistent product
                quality. Our systems integrate seamlessly into production lines, offering
                monoblock or modular configurations to match your specific throughput, container
                types, and liquid characteristics.
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
              Filling System Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Different liquid characteristics require specific filling technologies. Choose the
              right system based on product viscosity, foaming tendency, and accuracy requirements.
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
                      <p className="text-sm text-gray-600 mb-1">Viscosity Range</p>
                      <p className="font-semibold text-gray-900">{machine.viscosity}</p>
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
              Capping Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cappingTypes.map((cap, index) => (
                <div key={index} className="border-2 border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cap.type}</h4>
                  <p className="text-gray-700 mb-3 text-sm">{cap.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-blue-600 mb-1">Suitable For:</p>
                    <p className="text-gray-700 text-sm">{cap.suitable}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-600 mb-2">Features:</p>
                    <ul className="space-y-1">
                      {cap.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                Liquid filling and capping technology serves diverse industries requiring precise,
                hygienic, and reliable container filling for liquids of all viscosities.
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
                Automated filling and capping systems deliver significant operational advantages,
                improved product quality, and strong return on investment.
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
              System Configurations
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Choose the right configuration based on production volume, floor space, and
              operational flexibility requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {systemConfigurations.map((config, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{config.config}</h3>
                <p className="text-gray-700 mb-4 text-sm">{config.description}</p>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Advantages:</p>
                    <p className="text-sm text-gray-700">{config.advantages}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Capacity:</p>
                    <p className="text-sm text-gray-700">{config.capacity}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Best For:</p>
                    <p className="text-sm text-gray-700">{config.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Liquid Type Recommendations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liquidTypes.map((liquid, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{liquid.category}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Examples:</p>
                      <p className="text-gray-700 text-sm">{liquid.examples}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Recommended:</p>
                      <p className="text-gray-700 text-sm">{liquid.recommended}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Considerations:</p>
                      <p className="text-gray-700 text-sm">{liquid.considerations}</p>
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
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              How Filling & Capping Systems Work
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Understanding the complete process from empty bottle to sealed, filled container
              ready for labeling and packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-12">
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

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Competitive Advantages
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Modern filling and capping systems offer superior performance and value for operations
              requiring precision, hygiene, and reliable high-speed production.
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

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Filling & Capping Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Technology</p>
                      <p className="text-blue-100 text-sm">
                        Industrial-grade components and battle-tested designs ensure reliable
                        operation in demanding production environments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Hygienic Construction</p>
                      <p className="text-blue-100 text-sm">
                        Food-grade stainless steel with CIP capability meets FDA, GMP, and
                        international food safety standards
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Turnkey Solutions</p>
                      <p className="text-blue-100 text-sm">
                        Complete systems including installation, training, validation, and
                        ongoing support for worry-free operation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Local Support</p>
                      <p className="text-blue-100 text-sm">
                        Responsive technical support, spare parts availability, and maintenance
                        services ensure maximum uptime
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
                    Custom configurations available for unique bottle sizes, special fill
                    requirements, and integration with complete packaging lines including labeling,
                    inspection, and case packing systems.
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

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fill Your Production Needs with Precision
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              From startup operations to high-volume production lines, our liquid filling and
              capping systems deliver the precision, speed, and reliability you need. Let our
              experts help you design the perfect solution for your products, containers, and
              production goals.
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
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiquidFillingCapping;
