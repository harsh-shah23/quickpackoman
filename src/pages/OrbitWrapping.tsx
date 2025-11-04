import { ArrowLeft, CheckCircle, Zap, Package, Shield, Gauge } from 'lucide-react';

interface OrbitWrappingProps {
  onNavigate?: (page: string) => void;
}

const OrbitWrapping = ({ onNavigate }: OrbitWrappingProps) => {
  const features = [
    {
      icon: Zap,
      title: 'Automated Wrapping',
      description: 'Ring rotates around stationary load for hands-free, efficient wrapping',
    },
    {
      icon: Package,
      title: 'Versatile Load Handling',
      description: 'Wraps pipes, profiles, long materials, and irregular shapes with ease',
    },
    {
      icon: Shield,
      title: 'Superior Protection',
      description: 'Complete coverage prevents damage during storage and transportation',
    },
    {
      icon: Gauge,
      title: 'Adjustable Parameters',
      description: 'Control speed, tension, and overlap for optimal wrapping quality',
    },
  ];

  const applications = [
    'Long Metal Pipes & Tubes',
    'Aluminum & Steel Profiles',
    'PVC & Plastic Pipes',
    'Cable & Wire Bundles',
    'Wooden Beams & Lumber',
    'Carpet Rolls & Textiles',
    'Construction Materials',
    'Furniture Components',
    'Door & Window Frames',
    'Electrical Conduit',
    'Copper & Brass Tubing',
    'Industrial Rods & Bars',
  ];

  const benefits = [
    'Automated operation eliminates manual wrapping labor',
    'Consistent wrap quality with uniform tension',
    'Protects products from dust, moisture, and scratches',
    'Handles long and awkward-shaped items easily',
    'Reduces film consumption with precise overlap control',
    'High-speed operation increases productivity',
    'Stationary load prevents product damage',
    'Minimal operator intervention required',
    'Compact footprint compared to turntable wrappers',
    'Suitable for both light and heavy loads',
  ];

  const machineTypes = [
    {
      type: 'Horizontal Orbital Wrapper',
      description: 'Ring rotates around horizontal load on conveyor for wrapping long pipes, profiles, and bundles',
      speed: '15-40 rotations per minute',
      suitable: 'Metal pipes, profiles, lumber, furniture, long products',
      maxLoad: 'Up to 2000 kg per bundle',
      features: ['Conveyor transport', 'Adjustable ring speed', 'Variable film tension', 'Multiple wrap patterns'],
    },
    {
      type: 'Vertical Orbital Wrapper',
      description: 'Vertical ring rotates around tall or suspended loads for side wrapping',
      speed: '10-30 rotations per minute',
      suitable: 'Tall items, suspended loads, profiles, coils',
      maxLoad: 'Up to 1500 kg',
      features: ['Height adjustable', 'Automatic loading', 'Film pre-stretch', 'PLC control'],
    },
    {
      type: 'Mobile Orbital Wrapper',
      description: 'Portable ring unit that travels along stationary product for on-site wrapping',
      speed: '8-20 rotations per minute',
      suitable: 'Extra-long pipes, on-site applications, field wrapping',
      maxLoad: 'Up to 1000 kg',
      features: ['Self-propelled', 'Battery operated', 'Adjustable speed', 'Compact design'],
    },
    {
      type: 'Ring Wrapping System',
      description: 'Large ring system for wrapping extremely long or heavy bundles with multiple film rolls',
      speed: '10-25 rotations per minute',
      suitable: 'Heavy industrial pipes, large bundles, construction materials',
      maxLoad: 'Up to 5000 kg',
      features: ['Heavy-duty construction', 'Multiple film carriages', 'High torque drive', 'Industrial grade'],
    },
  ];

  const specifications = [
    {
      label: 'Ring Diameter',
      value: '1500mm to 3000mm (customizable)',
    },
    {
      label: 'Maximum Load Length',
      value: '6000mm to unlimited (depends on configuration)',
    },
    {
      label: 'Maximum Load Weight',
      value: 'Up to 5000 kg (model dependent)',
    },
    {
      label: 'Wrapping Speed',
      value: '8-40 rotations per minute',
    },
    {
      label: 'Film Width',
      value: '250mm to 500mm',
    },
    {
      label: 'Power Requirements',
      value: '220V/380V, 3-Phase, 50/60Hz',
    },
  ];

  const advantages = [
    {
      title: 'Ideal for Long Products',
      description: 'Orbital wrappers excel at wrapping long, awkward items that cannot be wrapped on turntable machines. The stationary load prevents bending, shifting, or damage while the rotating ring applies film uniformly along the entire length.',
    },
    {
      title: 'Labor Cost Reduction',
      description: 'Automated wrapping eliminates manual labor for applying stretch film or protective covering. One operator can manage multiple wrapping cycles, significantly reducing packaging labor costs by up to 80%.',
    },
    {
      title: 'Superior Product Protection',
      description: 'Complete film coverage protects products from dust, dirt, moisture, and handling damage. Adjustable overlap ensures no gaps in protection, maintaining product quality during storage and transit.',
    },
    {
      title: 'Consistent Wrap Quality',
      description: 'Precise control of film tension, speed, and overlap delivers uniform wrapping quality on every cycle. Eliminates variations from manual wrapping and ensures professional appearance for customer delivery.',
    },
    {
      title: 'Versatile Configuration',
      description: 'Available in horizontal, vertical, and mobile configurations to match different product types and facility layouts. Custom ring sizes accommodate unique product dimensions and production requirements.',
    },
    {
      title: 'Material Efficiency',
      description: 'Film pre-stretch capability reduces film consumption by 30-50% compared to manual wrapping. Precise overlap control prevents over-wrapping while maintaining complete protection, lowering packaging costs.',
    },
  ];

  const wrappingPatterns = [
    {
      pattern: 'Spiral Wrap',
      description: 'Film applied in spiral pattern with controlled overlap as ring rotates',
      bestFor: 'General purpose wrapping, standard protection',
      coverage: '50-70% overlap for complete coverage',
    },
    {
      pattern: 'Cross Wrap',
      description: 'Alternating wrap directions create cross-pattern for enhanced strength',
      bestFor: 'Heavy loads, extra protection, bundling multiple items',
      coverage: 'Multiple layers in opposite directions',
    },
    {
      pattern: 'Full Coverage Wrap',
      description: 'High overlap percentage ensures complete film coverage without gaps',
      bestFor: 'Weather protection, outdoor storage, long-term transit',
      coverage: '70-90% overlap for maximum protection',
    },
    {
      pattern: 'End Reinforcement',
      description: 'Extra film layers applied to load ends for added protection',
      bestFor: 'Products with vulnerable ends, stackable items',
      coverage: 'Concentrated wrapping at load extremities',
    },
  ];

  const industryApplications = [
    {
      industry: 'Metal & Steel Processing',
      uses: ['Steel pipes wrapping', 'Aluminum profile bundling', 'Metal rod protection', 'Tube bundle securing'],
      requirements: 'Heavy-duty construction, high load capacity, scratch-resistant film application',
    },
    {
      industry: 'PVC & Plastics',
      uses: ['PVC pipe wrapping', 'Plastic profile bundling', 'Conduit protection', 'Extrusion wrapping'],
      requirements: 'Gentle film tension, clean operation, UV-resistant film options',
    },
    {
      industry: 'Lumber & Wood Products',
      uses: ['Lumber bundle wrapping', 'Molding protection', 'Furniture component packaging', 'Wood beam covering'],
      requirements: 'Moisture protection, dust sealing, adjustable tension for soft materials',
    },
    {
      industry: 'Construction Materials',
      uses: ['Door frame wrapping', 'Window profile bundling', 'Building material packaging', 'Hardware protection'],
      requirements: 'Weather resistance, outdoor storage capability, rugged film application',
    },
  ];

  const optionalFeatures = [
    {
      feature: 'Film Pre-Stretch System',
      description: 'Mechanical or powered pre-stretch reduces film consumption 30-50%',
      benefits: 'Lower material costs, improved film cling, consistent tension',
    },
    {
      feature: 'Automatic Load Detection',
      description: 'Sensors detect load dimensions and adjust wrap parameters',
      benefits: 'Optimal film usage, prevents over-wrapping, automated operation',
    },
    {
      feature: 'Variable Speed Control',
      description: 'Adjustable ring rotation speed and conveyor feed rate',
      benefits: 'Match wrapping speed to production rate, gentle handling for fragile items',
    },
    {
      feature: 'PLC Touch Screen Control',
      description: 'Programmable logic controller with intuitive touch interface',
      benefits: 'Recipe storage, production monitoring, easy parameter adjustment',
    },
    {
      feature: 'Multiple Film Carriages',
      description: 'Two or more film rolls for faster wrapping or dual-layer protection',
      benefits: 'Reduced cycle time, enhanced protection, different film types',
    },
    {
      feature: 'Integrated Conveyor System',
      description: 'Powered roller or chain conveyor with load centering',
      benefits: 'Automated loading/unloading, line integration, hands-free operation',
    },
  ];

  const operatingPrinciples = [
    {
      step: 'Load Positioning',
      description: 'Product placed on conveyor or support table and centered',
      details: 'Automatic or manual positioning ensures load is within ring diameter',
    },
    {
      step: 'Cycle Initiation',
      description: 'Operator starts cycle via control panel or automatic sensor trigger',
      details: 'System verifies load presence and proper positioning',
    },
    {
      step: 'Film Application Start',
      description: 'Film carriage begins rotating around stationary load',
      details: 'Film is attached to load start point manually or automatically',
    },
    {
      step: 'Wrapping Process',
      description: 'Ring rotates continuously while conveyor advances load forward',
      details: 'Controlled overlap creates spiral wrap pattern along entire length',
    },
    {
      step: 'Film Tensioning',
      description: 'Pre-stretch and tension systems maintain consistent film tightness',
      details: 'Prevents loose wrapping while avoiding product damage',
    },
    {
      step: 'Wrap Completion',
      description: 'Ring completes final rotations and film is cut or heat sealed',
      details: 'Load exits conveyor ready for storage or shipping',
    },
  ];

  const maintenanceGuide = [
    'Daily inspection of film path and roller condition',
    'Weekly cleaning of ring guide rails and rollers',
    'Monthly lubrication of rotating components and bearings',
    'Regular inspection of drive chain or belt tension',
    'Check film carriage alignment and smooth rotation',
    'Inspect and clean photo sensors and safety devices',
    'Verify proper film tension and pre-stretch function',
    'Check conveyor belt condition and tracking',
    'Lubricate conveyor chains and drive components',
    'Maintain spare parts inventory for quick repairs',
  ];

  const troubleshooting = [
    {
      issue: 'Uneven Film Application',
      causes: ['Incorrect film tension', 'Ring speed too fast/slow', 'Load not centered', 'Damaged film rollers'],
      solutions: ['Adjust tension settings', 'Optimize rotation speed', 'Center load properly', 'Replace worn rollers'],
    },
    {
      issue: 'Film Breaking During Wrapping',
      causes: ['Excessive tension', 'Sharp edges on load', 'Poor quality film', 'Pre-stretch malfunction'],
      solutions: ['Reduce tension setting', 'Use edge protectors', 'Use higher quality film', 'Service pre-stretch unit'],
    },
    {
      issue: 'Ring Rotation Issues',
      causes: ['Drive motor failure', 'Chain/belt problems', 'Track obstruction', 'Bearing wear'],
      solutions: ['Check motor function', 'Inspect drive system', 'Clear debris from track', 'Replace worn bearings'],
    },
    {
      issue: 'Incomplete Load Coverage',
      causes: ['Insufficient overlap setting', 'Conveyor speed too fast', 'Film width too narrow', 'Short wrap cycle'],
      solutions: ['Increase overlap percentage', 'Reduce conveyor speed', 'Use wider film', 'Add wrap rotations'],
    },
  ];

  const selectionGuide = [
    {
      consideration: 'Product Dimensions',
      factors: 'Maximum length, diameter/width, weight, shape irregularity',
      recommendation: 'Small (<1m diameter): Standard ring | Medium (1-2m): Heavy-duty ring | Large (>2m): Custom ring | Extra-long: Mobile system',
    },
    {
      consideration: 'Production Volume',
      factors: 'Daily wrapping requirements, cycle time needs, automation level',
      recommendation: 'Low (<50/day): Manual feed | Medium (50-200/day): Semi-auto | High (>200/day): Fully automatic inline',
    },
    {
      consideration: 'Product Type',
      factors: 'Material fragility, surface finish, bundled or single items',
      recommendation: 'Fragile: Low tension + padding | Bundled: Cross-wrap pattern | Finished surfaces: Soft film + gentle tension',
    },
    {
      consideration: 'Facility Layout',
      factors: 'Available floor space, production line integration, load handling method',
      recommendation: 'Limited space: Vertical system | Inline production: Conveyor-fed horizontal | Field use: Mobile system',
    },
  ];

  const filmTypes = [
    {
      type: 'Cast Stretch Film',
      properties: 'Clear, quiet unwind, good cling, lower puncture resistance',
      advantages: 'Cost-effective, transparent for identification, consistent quality',
      bestFor: 'Light to medium loads, indoor storage, clean environments',
    },
    {
      type: 'Blown Stretch Film',
      properties: 'Higher puncture resistance, better memory, noisy unwind',
      advantages: 'Superior strength, weather resistant, handles rough surfaces',
      bestFor: 'Heavy loads, outdoor storage, sharp-edged products',
    },
    {
      type: 'UV-Resistant Film',
      properties: 'Special additives prevent UV degradation',
      advantages: 'Outdoor storage capability, extended protection duration',
      bestFor: 'Construction materials, outdoor storage, long-term transit',
    },
    {
      type: 'VCI Film (Corrosion Inhibitor)',
      properties: 'Embedded corrosion inhibitors protect metal surfaces',
      advantages: 'Prevents rust and oxidation, no additional treatments needed',
      bestFor: 'Metal pipes, steel products, long-term storage, export shipping',
    },
  ];

  const systemConfigurations = [
    {
      config: 'Standalone Manual Feed',
      description: 'Entry-level system with manual load placement and basic controls',
      advantages: 'Lower investment, simple operation, flexible placement, easy maintenance',
      capacity: '20-50 loads per day',
    },
    {
      config: 'Semi-Automatic Conveyor Feed',
      description: 'Conveyor-fed system with automatic wrapping cycle',
      advantages: 'Reduced labor, faster throughput, consistent quality, safer operation',
      capacity: '50-150 loads per day',
    },
    {
      config: 'Fully Automatic Inline',
      description: 'Complete integration with production line and automated loading/unloading',
      advantages: 'Maximum productivity, minimal labor, quality monitoring, production data',
      capacity: '150-500+ loads per day',
    },
  ];

  const safetyFeatures = [
    'Safety light curtains prevent entry during operation',
    'Emergency stop buttons at multiple locations',
    'Automatic shutdown on jam or malfunction',
    'Safety guards protect rotating components',
    'Overload protection prevents equipment damage',
    'Low-voltage control systems for operator safety',
    'Warning lights indicate operation status',
    'Lockout/tagout capability for maintenance',
  ];

  const comparisonWithAlternatives = [
    {
      method: 'Manual Wrapping',
      comparison: 'Orbital wrapping is 5-10x faster with consistent quality vs. manual stretch film application. Eliminates repetitive strain injuries and reduces labor costs by 80%.',
    },
    {
      method: 'Turntable Wrappers',
      comparison: 'Orbital systems handle long products that cannot fit on turntables. Load remains stationary preventing damage to long, flexible, or unbalanced items.',
    },
    {
      method: 'Shrink Wrapping',
      comparison: 'No heat required, faster cycle times, lower energy costs. Stretch film is more economical and environmentally friendly than shrink film for pipe/profile applications.',
    },
    {
      method: 'Paper/Cardboard Wrapping',
      comparison: 'Stretch film provides better moisture protection, faster application, and lower material costs. Superior product visibility and easier inspection.',
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
              Orbital Wrapping Machines
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              Professional orbital wrapping solutions for long pipes, profiles, bundles, and
              irregular-shaped products. Our orbital wrappers feature rotating ring technology that
              wraps stretch film around stationary loads, providing superior protection for items
              that cannot be wrapped on traditional turntable machines. From metal pipes to lumber
              bundles, we deliver automated wrapping systems that reduce labor, improve quality, and
              protect your products throughout the supply chain.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="aspect-video bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture7 copy.jpg"
                  alt="Orbital Wrapping Machine - Ring System"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="aspect-video bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture8.jpg"
                  alt="Orbital Wrapping Machine - Wrapping Process"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Revolutionary Ring Wrapping Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Orbital wrapping represents the ideal solution for protecting long, awkward, or
                bundled products. Unlike turntable wrappers where the load rotates, orbital systems
                feature a rotating ring that travels around the stationary product, applying stretch
                film in a controlled spiral pattern. This innovative approach prevents product damage
                and enables wrapping of items that would be impossible to secure on conventional
                equipment.
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
              Orbital Wrapper Types & Configurations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Choose from horizontal, vertical, or mobile orbital wrapping systems designed to match
              your product dimensions, production volume, and facility layout.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Maximum Load Capacity</p>
                      <p className="font-semibold text-gray-900">{machine.maxLoad}</p>
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
              Stretch Film Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filmTypes.map((film, index) => (
                <div key={index} className="border-2 border-orange-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{film.type}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Properties:</p>
                      <p className="text-gray-700 text-sm">{film.properties}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Advantages:</p>
                      <p className="text-gray-700 text-sm">{film.advantages}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Best For:</p>
                      <p className="text-gray-700 text-sm">{film.bestFor}</p>
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
                Orbital wrapping is essential for industries handling long, bundled, or
                irregular-shaped products requiring protective packaging for storage and transport.
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
                Automated orbital wrapping delivers significant operational advantages, improved
                product protection, and strong return on investment.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-orange-600 text-white rounded-full p-1 flex-shrink-0">
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
              How Orbital Wrapping Works
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Understanding the orbital wrapping process helps optimize settings and achieve
              consistent, high-quality product protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12">
            {operatingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full font-bold text-xl mb-4">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wrapping Patterns</h3>
              <div className="space-y-6">
                {wrappingPatterns.map((pattern, index) => (
                  <div key={index} className="border-l-4 border-orange-600 pl-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{pattern.pattern}</h4>
                    <p className="text-gray-700 mb-2 text-sm">{pattern.description}</p>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-semibold text-gray-900">Best For:</span>{' '}
                        <span className="text-gray-700">{pattern.bestFor}</span>
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold text-gray-900">Coverage:</span>{' '}
                        <span className="text-gray-700">{pattern.coverage}</span>
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
                    <div className="bg-orange-50 p-2 rounded">
                      <p className="text-xs text-gray-700">{option.benefits}</p>
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
              Modern orbital wrapping systems offer superior performance and value for operations
              requiring efficient, reliable protection of long or awkward products.
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

          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
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
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Advantages:</p>
                      <p className="text-sm text-gray-700">{config.advantages}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Capacity:</p>
                      <p className="text-sm text-gray-700">{config.capacity}</p>
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
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Orbital Wrapping Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Industrial Design</p>
                      <p className="text-orange-100 text-sm">
                        Heavy-duty construction and reliable components ensure years of continuous
                        operation in demanding production environments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Custom Configuration</p>
                      <p className="text-orange-100 text-sm">
                        Ring sizes, conveyor lengths, and film carriages customized to your exact
                        product dimensions and production requirements
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Integration</p>
                      <p className="text-orange-100 text-sm">
                        Seamless integration with existing production lines, conveyors, and material
                        handling systems for maximum efficiency
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Comprehensive Support</p>
                      <p className="text-orange-100 text-sm">
                        Installation, operator training, maintenance programs, and responsive
                        technical support ensure maximum uptime
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
                  <p className="text-sm font-semibold text-gray-900 mb-2">Safety Features:</p>
                  <ul className="space-y-1">
                    {safetyFeatures.slice(0, 4).map((feature, index) => (
                      <li key={index} className="text-xs text-gray-700 flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-orange-600 flex-shrink-0" />
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
              Orbital vs. Alternative Wrapping Methods
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {comparisonWithAlternatives.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">vs. {item.method}</h3>
                <p className="text-gray-700">{item.comparison}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              Protect Your Long Products with Orbital Wrapping
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              From metal pipes to lumber bundles, our orbital wrapping systems deliver the
              automation, protection, and efficiency you need. Let our experts help you select the
              ideal orbital wrapper for your product dimensions, volumes, and operational goals.
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

export default OrbitWrapping;
