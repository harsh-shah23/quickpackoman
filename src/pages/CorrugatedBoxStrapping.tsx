import { ArrowLeft, CheckCircle, Zap, Package, Shield, Gauge } from 'lucide-react';

interface CorrugatedBoxStrappingProps {
  onNavigate?: (page: string) => void;
}

const CorrugatedBoxStrapping = ({ onNavigate }: CorrugatedBoxStrappingProps) => {
  const features = [
    {
      icon: Zap,
      title: 'High-Speed Operation',
      description: 'Strap up to 60+ boxes per minute with automated feeding and tensioning',
    },
    {
      icon: Package,
      title: 'Versatile Box Handling',
      description: 'Handles various corrugated box sizes with quick adjustments',
    },
    {
      icon: Shield,
      title: 'Secure Bundling',
      description: 'Consistent tension and seal strength ensures load stability during transit',
    },
    {
      icon: Gauge,
      title: 'Precision Control',
      description: 'Adjustable tension settings for different box weights and contents',
    },
  ];

  const applications = [
    'Corrugated Box Bundling & Stacking',
    'Carton Bundle Consolidation',
    'Export Package Reinforcement',
    'Heavy-Duty Box Securing',
    'Multi-Pack Product Bundling',
    'Retail Display Unit Strapping',
    'E-Commerce Package Preparation',
    'Warehouse Distribution Bundling',
    'Manufacturing Output Packaging',
    'Food & Beverage Case Strapping',
    'Pharmaceutical Carton Bundles',
    'Appliance & Electronics Packaging',
  ];

  const benefits = [
    'Automated strapping reduces labor costs significantly',
    'Consistent strap tension prevents product damage',
    'High-speed throughput increases productivity',
    'Reduced material waste with precise strap feeding',
    'Enhanced load stability during shipping',
    'Minimal operator training required',
    'Integration with packaging lines',
    'Durable construction for continuous operation',
    'Adjustable for multiple box sizes',
    'Lower cost per bundle compared to alternatives',
  ];

  const machineTypes = [
    {
      type: 'Fully Automatic Arch Strapping',
      description: 'Complete automation with box conveyor and arch configuration. Boxes pass through arch for side or top strapping',
      speed: '30-60+ boxes per minute',
      suitable: 'High-volume operations, uniform box sizes, continuous production',
      configuration: 'Vertical arch or horizontal arch',
      features: ['Automatic box detection', 'Conveyor integration', 'PLC controls', 'Multiple strap positions'],
    },
    {
      type: 'Semi-Automatic Table Strapping',
      description: 'Operator places box on table, machine automatically applies strap when activated',
      speed: '20-40 bundles per minute',
      suitable: 'Medium volumes, varied box sizes, manual operations',
      configuration: 'Side seal or top seal table',
      features: ['Foot pedal activation', 'Manual positioning', 'Quick size adjustment', 'Compact footprint'],
    },
    {
      type: 'Horizontal Orbital Strapping',
      description: 'Strap head rotates around stationary bundle for horizontal strapping of large or irregular loads',
      speed: '15-30 bundles per minute',
      suitable: 'Large bundles, irregular shapes, heavy loads',
      configuration: 'Rotating arm orbital wrapper',
      features: ['Large bundle capacity', 'Irregular shape handling', 'Multiple strap patterns', 'Heavy-duty construction'],
    },
    {
      type: 'Portable/Mobile Strapping',
      description: 'Battery-operated handheld strapping tools for on-site bundling and securing',
      speed: 'Manual operation: 2-5 straps per minute',
      suitable: 'Low volumes, field operations, maintenance use',
      configuration: 'Handheld battery unit',
      features: ['Cordless operation', 'Lightweight design', 'Variable tension', 'Quick strap feeding'],
    },
  ];

  const strappingMaterials = [
    {
      material: 'Polypropylene (PP) Strap',
      properties: 'Economical, good elongation, break strength 200-1000 lbs',
      applications: 'Light to medium loads, corrugated boxes, bundling',
      widths: '6mm, 9mm, 12mm, 15mm, 19mm',
      advantages: 'Cost-effective, rust-proof, recyclable',
    },
    {
      material: 'Polyester (PET) Strap',
      properties: 'High tensile strength, minimal elongation, break strength 400-1500 lbs',
      applications: 'Heavy loads, export shipping, rigid bundling',
      widths: '12mm, 15mm, 19mm, 25mm, 32mm',
      advantages: 'Superior strength, maintains tension, weather resistant',
    },
    {
      material: 'Composite/Corded Strap',
      properties: 'High strength-to-weight ratio, extreme tensile strength',
      applications: 'Heavy machinery, lumber, metal products',
      widths: '13mm, 16mm, 19mm, 25mm, 32mm',
      advantages: 'Highest strength, shock absorption, safe handling',
    },
    {
      material: 'Steel Strap',
      properties: 'Maximum strength and minimal stretch, break strength 1000-3000+ lbs',
      applications: 'Heavy industrial loads, metal products, construction materials',
      widths: '12mm, 16mm, 19mm, 25mm, 32mm',
      advantages: 'Highest tensile strength, minimal elongation, rigid securing',
    },
  ];

  const specifications = [
    {
      label: 'Strapping Speed',
      value: '20-60+ bundles/minute (model dependent)',
    },
    {
      label: 'Box Size Range',
      value: '100mm x 100mm to 1200mm x 1000mm',
    },
    {
      label: 'Maximum Bundle Height',
      value: 'Up to 600mm (table), up to 1200mm (arch)',
    },
    {
      label: 'Strap Width',
      value: '6mm to 32mm (adjustable by model)',
    },
    {
      label: 'Strap Tension',
      value: '10-80 kg (adjustable)',
    },
    {
      label: 'Power Requirements',
      value: '220V/380V, Single/3-Phase, 50/60Hz',
    },
  ];

  const advantages = [
    {
      title: 'Superior Load Stability',
      description: 'Automated tensioning ensures consistent strap tightness, preventing load shifting during transport. Proper strapping reduces product damage and returns from shipping issues.',
    },
    {
      title: 'Labor Cost Reduction',
      description: 'Automatic strapping eliminates manual tying and taping, reducing labor requirements by up to 70%. Operators can focus on higher-value tasks while machines handle repetitive strapping.',
    },
    {
      title: 'Material Cost Savings',
      description: 'Precise strap feeding and cutting eliminate waste from over-strapping. Strapping typically costs less than equivalent tape or shrink wrap for bundle securing.',
    },
    {
      title: 'Enhanced Shipping Safety',
      description: 'Professional strapping ensures boxes remain intact during handling, stacking, and transit. Reduces liability from collapsed loads and damaged products.',
    },
    {
      title: 'Versatile Configuration',
      description: 'Single or multiple strap patterns available. Cross-strapping provides maximum stability for heavy or fragile loads. Top, side, or horizontal strapping options.',
    },
    {
      title: 'Integration Ready',
      description: 'Easily integrates with conveyor systems, case erectors, and palletizers for complete automated packaging lines. Synchronizes with upstream and downstream equipment.',
    },
  ];

  const optionalFeatures = [
    {
      feature: 'Automatic Box Detection',
      description: 'Photoelectric sensors detect box presence and dimensions',
      benefits: 'No-box no-strap saves material, automatic cycle triggering, prevents jams',
    },
    {
      feature: 'Multiple Strap Positions',
      description: 'Programmable strap head positioning for cross-strapping',
      benefits: 'Enhanced load stability, custom strap patterns, versatile bundling',
    },
    {
      feature: 'Auto Size Adjustment',
      description: 'Servo-driven guide rails adapt to box dimensions',
      benefits: 'Quick changeover, reduced setup time, handles varied sizes',
    },
    {
      feature: 'Strap Tension Control',
      description: 'Digital adjustment of strap tightness with memory presets',
      benefits: 'Prevents crushing, maintains quality, product-specific settings',
    },
    {
      feature: 'Seal Temperature Control',
      description: 'Adjustable heat sealing for different strap materials',
      benefits: 'Optimal seal strength, prevents strap failure, material flexibility',
    },
    {
      feature: 'Touch Screen HMI',
      description: 'Intuitive control interface with production monitoring',
      benefits: 'Easy operation, diagnostics, parameter storage, production tracking',
    },
  ];

  const industryApplications = [
    {
      industry: 'E-Commerce & Distribution',
      uses: ['Parcel bundling', 'Mixed SKU consolidation', 'Returns processing', 'Fulfillment center packaging'],
      requirements: 'High speed, varied box sizes, quick changeover, minimal downtime',
    },
    {
      industry: 'Manufacturing',
      uses: ['Production output bundling', 'Work-in-process securing', 'Component packaging', 'Finished goods prep'],
      requirements: 'Inline integration, heavy-duty operation, customizable patterns, automation ready',
    },
    {
      industry: 'Food & Beverage',
      uses: ['Case strapping', 'Retail display bundles', 'Multi-pack securing', 'Export carton reinforcement'],
      requirements: 'Food-safe materials, washdown capability, high throughput, reliable operation',
    },
    {
      industry: 'Printing & Paper',
      uses: ['Ream bundling', 'Carton consolidation', 'Publication bundling', 'Finished product securing'],
      requirements: 'Gentle handling, precise tension, high volume, minimal marking',
    },
  ];

  const operatingPrinciples = [
    {
      step: 'Box Positioning',
      description: 'Box is placed on table or conveyed through strapping arch',
      details: 'Sensors detect box presence and verify proper positioning',
    },
    {
      step: 'Strap Feeding',
      description: 'Strap is fed around box perimeter from supply coil',
      details: 'Precise strap path guides ensure proper positioning',
    },
    {
      step: 'Strap Tensioning',
      description: 'Tension mechanism pulls strap tight to preset force',
      details: 'Adjustable tension prevents box crushing or loose straps',
    },
    {
      step: 'Strap Sealing',
      description: 'Heat or friction sealing joins strap ends together',
      details: 'Creates strong bond exceeding strap tensile strength',
    },
    {
      step: 'Strap Cutting',
      description: 'Cutter blade separates completed strap from supply',
      details: 'Clean cut prevents fraying and prepares for next cycle',
    },
    {
      step: 'Box Discharge',
      description: 'Completed bundle exits for further processing or shipping',
      details: 'Accumulation area buffers for downstream operations',
    },
  ];

  const maintenanceGuide = [
    'Daily inspection of strap path and guides',
    'Weekly cleaning of strap head components',
    'Monthly lubrication of moving parts',
    'Regular inspection of sealing jaw condition',
    'Check and adjust strap tension settings',
    'Replace worn cutters and blades',
    'Inspect tension wheels for wear',
    'Clean sensors and photo eyes weekly',
    'Verify proper strap coil loading',
    'Maintain spare parts inventory for quick repairs',
  ];

  const troubleshooting = [
    {
      issue: 'Weak or Failed Strap Seals',
      causes: ['Incorrect seal temperature', 'Worn sealing jaws', 'Contaminated seal surface', 'Wrong strap material'],
      solutions: ['Adjust seal temperature', 'Replace sealing components', 'Clean seal area', 'Verify strap specifications'],
    },
    {
      issue: 'Strap Jamming or Misfeeding',
      causes: ['Strap path obstruction', 'Damaged guides', 'Incorrect strap size', 'Low strap supply'],
      solutions: ['Clear strap path', 'Replace damaged guides', 'Use correct strap width', 'Reload strap coil'],
    },
    {
      issue: 'Inconsistent Tension',
      causes: ['Worn tension wheels', 'Incorrect settings', 'Slipping drive belt', 'Air pressure low (pneumatic)'],
      solutions: ['Replace tension wheels', 'Recalibrate tension', 'Adjust or replace belt', 'Check air supply pressure'],
    },
    {
      issue: 'Box Not Detected',
      causes: ['Dirty sensors', 'Misaligned photo eyes', 'Box outside size range', 'Sensor failure'],
      solutions: ['Clean sensor lenses', 'Realign sensors', 'Adjust box guides', 'Replace faulty sensors'],
    },
  ];

  const selectionGuide = [
    {
      consideration: 'Production Volume',
      factors: 'Daily bundle count, peak periods, shift patterns, growth projections',
      recommendation: 'Low (<1000/day): Semi-auto table | Medium (1000-5000/day): Automatic arch | High (>5000/day): High-speed inline',
    },
    {
      consideration: 'Box Size Variation',
      factors: 'Number of different sizes, changeover frequency, size range extremes',
      recommendation: 'High variety: Auto-adjust systems | Standard sizes: Manual adjust acceptable | Large bundles: Orbital systems',
    },
    {
      consideration: 'Load Weight & Stability',
      factors: 'Box weight, contents fragility, shipping distance, stacking height',
      recommendation: 'Light (<20kg): PP strap | Medium (20-50kg): Heavy PP or light PET | Heavy (>50kg): PET or composite strap',
    },
    {
      consideration: 'Integration Requirements',
      factors: 'Existing conveyors, upstream equipment, available space, automation level',
      recommendation: 'Standalone: Table models | Inline: Arch systems with conveyors | Full automation: Integrated packaging line',
    },
  ];

  const strappingPatterns = [
    {
      pattern: 'Single Horizontal Strap',
      description: 'One strap around box perimeter horizontally',
      bestFor: 'Light boxes, stable contents, short shipping distances',
      stability: 'Basic - suitable for minimal handling',
    },
    {
      pattern: 'Double Horizontal Strap',
      description: 'Two parallel straps around box perimeter',
      bestFor: 'Medium weight boxes, longer transit, stacking required',
      stability: 'Good - prevents box distortion',
    },
    {
      pattern: 'Cross Strapping',
      description: 'Two perpendicular straps forming a cross pattern',
      bestFor: 'Heavy boxes, fragile contents, export shipping',
      stability: 'Excellent - maximum load security',
    },
    {
      pattern: 'Corner Board Strapping',
      description: 'Strapping with corner protectors for edge protection',
      bestFor: 'Heavy loads, stacked pallets, sharp-edge products',
      stability: 'Superior - distributes load pressure',
    },
  ];

  const systemConfigurations = [
    {
      config: 'Entry-Level Table Models',
      description: 'Manual box placement with automatic strap application',
      advantages: 'Low investment, simple operation, minimal space, easy maintenance',
      capacity: '500-2,000 bundles per day',
      investment: 'Lowest capital cost, quick ROI',
    },
    {
      config: 'Mid-Range Arch Systems',
      description: 'Conveyor-fed automatic strapping with arch configuration',
      advantages: 'Higher throughput, reduced labor, consistent quality, line integration',
      capacity: '2,000-10,000 bundles per day',
      investment: 'Moderate cost, strong productivity gains',
    },
    {
      config: 'High-Speed Inline Systems',
      description: 'Fully automated with multiple heads and cross-strapping capability',
      advantages: 'Maximum speed, complex patterns, full automation, production monitoring',
      capacity: '10,000-30,000+ bundles per day',
      investment: 'Higher capital, excellent for high-volume operations',
    },
  ];

  const safetyFeatures = [
    'Emergency stop buttons at all operator stations',
    'Safety guards prevent access during operation',
    'Automatic shutdown on jam or malfunction',
    'Low noise operation below 75dB',
    'Overload protection prevents equipment damage',
    'Optical barriers prevent hand entry',
    'Lockout/tagout capability for maintenance',
    'CE compliant safety standards',
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate?.('products')}
            className="flex items-center space-x-2 text-white hover:text-red-200 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Corrugated Box Strapping Machines
            </h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Professional automated strapping solutions for securing corrugated boxes, cartons,
              and bundles. Our strapping machines deliver consistent tension, reliable seals, and
              high-speed operation for distribution centers, manufacturing facilities, and packaging
              operations. From entry-level table models to high-speed inline systems, we provide
              complete solutions for every production requirement.
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
                  src="/Picture6 copy.jpg"
                  alt="Corrugated Box Strapping Machine"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Secure Your Shipments with Confidence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Corrugated box strapping is essential for modern logistics and distribution,
                providing secure bundling that withstands the rigors of shipping, handling, and
                storage. Our automated strapping machines eliminate manual tying, reduce labor
                costs, and ensure consistent bundle quality that protects your products throughout
                the supply chain.
              </p>
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
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
              Strapping Machine Types & Configurations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Choose from table, arch, or orbital strapping systems designed to match your
              production volume, box sizes, and automation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {machineTypes.map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-red-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{machine.type}</h3>
                  <p className="text-red-100 text-sm">{machine.description}</p>
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
                      <p className="text-sm text-gray-600 mb-1">Configuration</p>
                      <p className="font-semibold text-gray-900">{machine.configuration}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {machine.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
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
              Strapping Material Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strappingMaterials.map((material, index) => (
                <div key={index} className="border-2 border-red-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{material.material}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-red-600 mb-1">Properties:</p>
                      <p className="text-gray-700 text-sm">{material.properties}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-red-600 mb-1">Applications:</p>
                      <p className="text-gray-700 text-sm">{material.applications}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-red-600 mb-1">Available Widths:</p>
                      <p className="text-gray-700 text-sm">{material.widths}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-red-600 mb-1">Advantages:</p>
                      <p className="text-gray-700 text-sm">{material.advantages}</p>
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
                Corrugated box strapping is essential across industries requiring secure bundling
                for shipping, storage, and distribution of boxed products.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-red-600 text-white rounded-full p-1 flex-shrink-0">
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
                Automated strapping systems deliver significant operational advantages, improved
                shipping reliability, and strong return on investment.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-red-600 text-white rounded-full p-1 flex-shrink-0">
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
              How Strapping Systems Work
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Understanding the strapping process helps optimize settings and maintain consistent,
              secure bundle quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12">
            {operatingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{principle.step}</h3>
                <p className="text-gray-700 text-xs mb-2">{principle.description}</p>
                <p className="text-gray-600 text-xs italic">{principle.details}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Strapping Patterns</h3>
              <div className="space-y-6">
                {strappingPatterns.map((pattern, index) => (
                  <div key={index} className="border-l-4 border-red-600 pl-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{pattern.pattern}</h4>
                    <p className="text-gray-700 mb-2 text-sm">{pattern.description}</p>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-semibold text-gray-900">Best For:</span>{' '}
                        <span className="text-gray-700">{pattern.bestFor}</span>
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold text-gray-900">Stability:</span>{' '}
                        <span className="text-gray-700">{pattern.stability}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Optional Features</h3>
              <div className="space-y-4">
                {optionalFeatures.map((option, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
                    <h4 className="text-base font-bold text-gray-900 mb-1">{option.feature}</h4>
                    <p className="text-gray-700 mb-2 text-sm">{option.description}</p>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-xs text-gray-700">{option.benefits}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              System Configuration Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {systemConfigurations.map((config, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{config.config}</h4>
                  <p className="text-gray-700 mb-3 text-sm">{config.description}</p>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Advantages:</p>
                      <p className="text-sm text-gray-700">{config.advantages}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Capacity:</p>
                      <p className="text-sm text-gray-700">{config.capacity}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Investment:</p>
                      <p className="text-sm text-gray-700">{config.investment}</p>
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
              Competitive Advantages
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Modern strapping automation offers superior performance and value for operations
              requiring reliable, efficient bundle securing.
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
                        <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
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
                <div key={index} className="border-l-4 border-red-600 pl-6 py-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{guide.consideration}</h4>
                  <p className="text-gray-700 mb-3 text-sm">
                    <span className="font-semibold">Consider:</span> {guide.factors}
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
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
          <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Strapping Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Industrial Reliability</p>
                      <p className="text-red-100 text-sm">
                        Heavy-duty construction and proven components ensure years of dependable
                        operation in demanding production environments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Versatile Configuration</p>
                      <p className="text-red-100 text-sm">
                        From tabletop to high-speed inline systems, we offer solutions for every
                        production scale and automation level
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Support</p>
                      <p className="text-red-100 text-sm">
                        Installation, training, maintenance programs, and responsive technical
                        support ensure maximum productivity
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Safety First</p>
                      <p className="text-red-100 text-sm">
                        Comprehensive safety features protect operators while maintaining high
                        productivity and ease of use
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
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Safety Features:</p>
                  <ul className="space-y-1">
                    {safetyFeatures.slice(0, 4).map((feature, index) => (
                      <li key={index} className="text-xs text-gray-700 flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-red-600 flex-shrink-0" />
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
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Issues & Solutions</h3>
              <div className="space-y-6">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="border-l-4 border-red-600 pl-4">
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
              Secure Your Packages with Professional Strapping
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              From entry-level operations to high-volume distribution centers, our strapping
              systems deliver the reliability, speed, and quality you need. Let our experts help
              you select the ideal strapping solution for your box sizes, volumes, and operational
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors text-lg"
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

export default CorrugatedBoxStrapping;
