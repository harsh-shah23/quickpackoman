import { ArrowLeft, CheckCircle, Zap, Package, Shield, Gauge } from 'lucide-react';

interface ClingWrappingProps {
  onNavigate?: (page: string) => void;
}

const ClingWrapping = ({ onNavigate }: ClingWrappingProps) => {
  const features = [
    {
      icon: Zap,
      title: 'Automated Operation',
      description: 'Fully automated wrapping reduces labor costs and increases throughput',
    },
    {
      icon: Package,
      title: 'Versatile Application',
      description: 'Handles various tray sizes, shapes, and food products seamlessly',
    },
    {
      icon: Shield,
      title: 'Food Safety',
      description: 'Hygienic design with food-grade materials ensures product safety',
    },
    {
      icon: Gauge,
      title: 'Precision Control',
      description: 'Adjustable tension and cutting for perfect wrap presentation',
    },
  ];

  const applications = [
    'Fresh Meat & Poultry (Chicken, Beef, Pork)',
    'Seafood & Fish Products',
    'Fresh Produce (Fruits, Vegetables)',
    'Bakery Items (Bread, Pastries, Cakes)',
    'Cheese & Dairy Products',
    'Ready-to-Eat Meals',
    'Deli Products & Cold Cuts',
    'Prepared Foods & Salads',
    'Fruit & Vegetable Trays',
    'Restaurant & Catering Portions',
    'Retail Food Packaging',
    'Supermarket Fresh Departments',
  ];

  const benefits = [
    'Extended shelf life through optimal film coverage',
    'Professional appearance enhances product appeal',
    'Reduced film waste compared to manual wrapping',
    'Consistent wrapping quality every time',
    'Labor cost reduction through automation',
    'Increased productivity and throughput',
    'Improved food safety and hygiene',
    'Reduced product contamination risk',
    'Easy to operate with minimal training',
    'Compact design fits existing workflows',
  ];

  const machineTypes = [
    {
      type: 'Manual Feed Cling Wrappers',
      description: 'Operator loads trays manually, machine wraps automatically. Ideal for small to medium operations with varied products',
      speed: '10-30 trays per minute',
      suitable: 'Butcher shops, delis, small supermarkets, specialty food stores',
      features: ['Simple operation', 'Quick tray loading', 'Adjustable tension', 'Compact footprint'],
    },
    {
      type: 'Semi-Automatic Wrappers',
      description: 'Combination of manual loading with automated wrapping and film application. Balance of control and efficiency',
      speed: '20-50 trays per minute',
      suitable: 'Medium-size supermarkets, food processors, catering operations',
      features: ['Automatic film cutting', 'Tension control', 'Multiple tray sizes', 'Easy film loading'],
    },
    {
      type: 'Fully Automatic Systems',
      description: 'Complete automation from tray feeding through wrapping and discharge. High-volume production capability',
      speed: '40-100+ trays per minute',
      suitable: 'Large supermarkets, food processing plants, distribution centers',
      features: ['Automatic feeding', 'Inline integration', 'PLC controls', 'Production monitoring'],
    },
  ];

  const filmTypes = [
    {
      material: 'PVC Cling Film',
      properties: 'Excellent cling, high clarity, good stretch, economical',
      applications: 'General food wrapping, produce, bakery items',
      thickness: '8-15 microns',
    },
    {
      material: 'PE Cling Film',
      properties: 'Food-safe, no plasticizers, good stretch, recyclable',
      applications: 'Direct food contact, organic products, eco-friendly packaging',
      thickness: '10-20 microns',
    },
    {
      material: 'PVC/PE Composite',
      properties: 'Superior cling and barrier, extended shelf life, premium quality',
      applications: 'Fresh meat, seafood, high-value products',
      thickness: '12-18 microns',
    },
    {
      material: 'Breathable Film',
      properties: 'Allows gas exchange, prevents condensation, maintains freshness',
      applications: 'Fresh produce, fruits, vegetables requiring respiration',
      thickness: '10-15 microns',
    },
  ];

  const specifications = [
    {
      label: 'Wrapping Speed',
      value: '10-100 trays/minute (model dependent)',
    },
    {
      label: 'Tray Size Range',
      value: '100mm x 100mm to 400mm x 600mm',
    },
    {
      label: 'Maximum Tray Height',
      value: 'Up to 150mm',
    },
    {
      label: 'Film Width',
      value: '300-600mm (adjustable)',
    },
    {
      label: 'Film Roll Diameter',
      value: 'Up to 300mm',
    },
    {
      label: 'Power Requirements',
      value: '220V/380V, Single/3-Phase, 50/60Hz',
    },
  ];

  const advantages = [
    {
      title: 'Superior Food Preservation',
      description: 'Cling film creates an airtight seal that reduces oxygen exposure, preventing oxidation and bacterial growth. This extends shelf life significantly compared to loose or manual wrapping methods.',
    },
    {
      title: 'Enhanced Product Presentation',
      description: 'Tight, wrinkle-free wrapping with crystal-clear film showcases product quality and freshness. Professional appearance increases consumer confidence and purchasing decisions at retail.',
    },
    {
      title: 'Operational Efficiency',
      description: 'Automated wrapping eliminates inconsistency of manual methods, reduces training time, and allows staff to focus on value-added tasks. Consistent output improves overall productivity.',
    },
    {
      title: 'Reduced Material Waste',
      description: 'Precise film cutting and tension control minimize excess film usage. Optimized wrapping patterns reduce film consumption by up to 30% compared to manual wrapping.',
    },
    {
      title: 'Food Safety Compliance',
      description: 'Hygienic stainless steel construction and minimal product contact reduce contamination risks. Meets HACCP, FDA, and food safety regulations for retail and food processing.',
    },
    {
      title: 'Flexible Integration',
      description: 'Easily integrates with existing production lines including weighing, labeling, and case packing equipment. Modular design adapts to changing operational needs.',
    },
  ];

  const optionalFeatures = [
    {
      feature: 'Automatic Label Application',
      description: 'Integrated labeling system applies price, weight, and product information',
      benefits: 'Regulatory compliance, traceability, pricing automation',
    },
    {
      feature: 'Gas Flushing/MAP',
      description: 'Modified atmosphere packaging extends shelf life further',
      benefits: 'Extended freshness, reduced spoilage, premium product positioning',
    },
    {
      feature: 'Automatic Tray Feeder',
      description: 'Robotic or conveyor feeding eliminates manual loading',
      benefits: 'Higher throughput, reduced labor, consistent positioning',
    },
    {
      feature: 'Product Detection System',
      description: 'Sensors verify tray presence and position before wrapping',
      benefits: 'Reduced film waste, prevents machine jams, quality assurance',
    },
    {
      feature: 'Multiple Film Stations',
      description: 'Quick-change film holders for different products',
      benefits: 'Fast changeover, multi-product flexibility, reduced downtime',
    },
    {
      feature: 'Touch Screen Controls',
      description: 'Intuitive HMI with recipe storage and diagnostics',
      benefits: 'Easy operation, parameter storage, troubleshooting support',
    },
  ];

  const industryApplications = [
    {
      industry: 'Retail & Supermarkets',
      uses: ['Fresh meat department', 'Seafood counter', 'Deli products', 'Produce section'],
      requirements: 'High throughput, multiple tray sizes, quick changeover, food-safe construction',
    },
    {
      industry: 'Food Processing',
      uses: ['Portion control', 'Pre-packaged meals', 'Protein processing', 'Ready-to-eat foods'],
      requirements: 'Washdown capability, HACCP compliance, inline integration, production tracking',
    },
    {
      industry: 'Wholesale & Distribution',
      uses: ['Bulk meat portioning', 'Food service packs', 'Catering supplies', 'Restaurant delivery'],
      requirements: 'High-volume capacity, consistent quality, automated labeling, case packing ready',
    },
    {
      industry: 'Specialty Food',
      uses: ['Organic products', 'Artisan foods', 'Gourmet items', 'Specialty cheese'],
      requirements: 'Gentle handling, premium presentation, flexible sizing, eco-friendly films',
    },
  ];

  const operatingPrinciples = [
    {
      step: 'Tray Loading',
      description: 'Food tray is placed on the feed conveyor manually or automatically',
      details: 'Position sensors verify tray placement and dimensions',
    },
    {
      step: 'Film Dispensing',
      description: 'Cling film is drawn from roll and positioned over the tray',
      details: 'Tension control maintains optimal film stretch and cling',
    },
    {
      step: 'Wrapping Process',
      description: 'Film is pressed and wrapped around tray edges creating tight seal',
      details: 'Heated or mechanical tucking ensures secure edge sealing',
    },
    {
      step: 'Film Cutting',
      description: 'Precision cutting mechanism separates individual wrapped tray',
      details: 'Clean cuts prevent film tearing and maintain appearance',
    },
    {
      step: 'Tray Discharge',
      description: 'Wrapped tray exits to collection area or downstream processing',
      details: 'Gentle handling prevents package disruption or damage',
    },
  ];

  const maintenanceGuide = [
    'Daily cleaning of all product contact surfaces',
    'Weekly inspection of film cutting blades',
    'Monthly lubrication of moving parts and bearings',
    'Regular cleaning of film path and rollers',
    'Check film tension settings weekly',
    'Inspect and clean sensors monthly',
    'Replace worn cutting blades as needed',
    'Verify safety mechanisms monthly',
    'Clean and sanitize per food safety protocols',
    'Maintain spare parts inventory for quick repairs',
  ];

  const troubleshooting = [
    {
      issue: 'Poor Film Adhesion',
      causes: ['Film tension too low', 'Tray surface contaminated', 'Wrong film type', 'Temperature too cold'],
      solutions: ['Increase tension setting', 'Ensure clean dry trays', 'Verify film specifications', 'Check ambient temperature'],
    },
    {
      issue: 'Wrinkled or Loose Wrapping',
      causes: ['Excessive film tension', 'Incorrect tray size setting', 'Film roll misaligned', 'Worn rollers'],
      solutions: ['Reduce tension', 'Adjust tray parameters', 'Realign film path', 'Replace worn components'],
    },
    {
      issue: 'Film Tearing During Wrapping',
      causes: ['Dull cutting blade', 'Film too thin', 'Sharp edges on tray', 'Excessive speed'],
      solutions: ['Replace cutting blade', 'Use appropriate film gauge', 'Inspect tray quality', 'Reduce machine speed'],
    },
  ];

  const selectionGuide = [
    {
      consideration: 'Production Volume',
      factors: 'Daily/hourly tray count, peak periods, growth projections',
      recommendation: 'Low (<500/day): Manual feed | Medium (500-2000/day): Semi-auto | High (>2000/day): Fully automatic',
    },
    {
      consideration: 'Product Variety',
      factors: 'Number of different tray sizes, product types, changeover frequency',
      recommendation: 'High variety: Quick-change film stations | Standard products: Fixed configuration',
    },
    {
      consideration: 'Space & Integration',
      factors: 'Available floor space, existing equipment, workflow layout',
      recommendation: 'Limited space: Compact manual | Large operation: Inline automated system',
    },
    {
      consideration: 'Food Safety Requirements',
      factors: 'Regulatory compliance, washdown needs, sanitation protocols',
      recommendation: 'High standards: Stainless construction with washdown capability and HACCP certification',
    },
  ];

  const hygienicDesign = [
    'Stainless steel construction for food contact areas',
    'Smooth surfaces prevent bacterial growth',
    'Easy-to-clean design with minimal crevices',
    'Washdown capability for sanitation',
    'Food-grade films and materials',
    'Sealed electrical components',
    'Quick-release parts for cleaning access',
    'Compliant with food safety regulations',
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
              Cling Wrapping Machines
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Advanced automated tray wrapping solutions for fresh food packaging. Our cling
              wrapping machines deliver hygienic, professional packaging for meat, seafood, produce,
              bakery items, and prepared foods. With precise film control and food-safe design,
              these systems ensure optimal product preservation, attractive presentation, and
              compliance with food safety standards.
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
                  src="/Picture473.jpg"
                  alt="Cling Wrapping Machine - Front View"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture3213.jpg"
                  alt="Cling Wrapping Machine - Side View"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Fresh Food Packaging
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cling wrapping technology is the industry standard for retail fresh food packaging,
                providing airtight protection that extends shelf life while maintaining product
                visibility. From small butcher shops to large supermarket chains, our wrapping
                systems deliver consistent quality, improved food safety, and professional
                presentation that drives sales.
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
              Cling Wrapper Types & Configurations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Choose from manual feed, semi-automatic, or fully automated cling wrapping systems
              designed to match your production volume, product variety, and operational workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {machineTypes.map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{machine.type}</h3>
                  <p className="text-green-100 text-sm">{machine.description}</p>
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
              Compatible Cling Film Types
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filmTypes.map((film, index) => (
                <div key={index} className="border-2 border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{film.material}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Properties:</p>
                      <p className="text-gray-700 text-sm">{film.properties}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Applications:</p>
                      <p className="text-gray-700 text-sm">{film.applications}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Film Thickness:</p>
                      <p className="text-gray-700 text-sm">{film.thickness}</p>
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
                Cling wrapping is essential across food retail and processing for maintaining
                freshness, preventing contamination, and providing attractive product presentation
                that drives consumer purchases.
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
                Automated cling wrapping delivers significant operational advantages, improved food
                safety, and return on investment for fresh food operations.
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
              How Cling Wrappers Work
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Understanding the wrapping process helps optimize settings and maintain consistent,
              high-quality package presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {operatingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{principle.step}</h3>
                <p className="text-gray-700 text-sm mb-3">{principle.description}</p>
                <p className="text-gray-600 text-xs italic">{principle.details}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Optional Features & Enhancements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {optionalFeatures.map((option, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{option.feature}</h4>
                  <p className="text-gray-700 mb-3 text-sm">{option.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-900 mb-1">Benefits:</p>
                    <p className="text-sm text-green-800">{option.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Hygienic Design Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {hygienicDesign.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-900 text-sm font-medium">{feature}</span>
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
              Cling wrapping automation offers superior performance and value for operations
              requiring consistent quality, food safety compliance, and professional presentation.
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

          <div className="bg-white p-8 rounded-xl shadow-md">
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
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Cling Wrappers?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Food-Safe Construction</p>
                      <p className="text-green-100 text-sm">
                        Stainless steel design and food-grade materials ensure compliance with
                        health and safety regulations for direct food contact
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Reliability</p>
                      <p className="text-green-100 text-sm">
                        Industrial-grade components and robust construction ensure years of
                        dependable operation in demanding retail and processing environments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Easy Maintenance</p>
                      <p className="text-green-100 text-sm">
                        Quick-release parts and accessible design simplify cleaning and
                        maintenance, minimizing downtime
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Support</p>
                      <p className="text-green-100 text-sm">
                        Installation, training, maintenance programs, and technical support ensure
                        optimal performance and maximum uptime
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
                  <p className="text-sm text-gray-700">
                    Custom configurations available for unique tray sizes, special film requirements,
                    and integration with weighing, labeling, and case packing systems.
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
              Wrap Your Fresh Foods with Confidence
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Cling wrapping automation provides the quality, consistency, and food safety required
              for professional fresh food operations. Let our experts help you select the ideal
              cling wrapper for your products, volumes, and operational requirements.
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

export default ClingWrapping;
