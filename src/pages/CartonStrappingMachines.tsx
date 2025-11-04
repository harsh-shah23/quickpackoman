import { ArrowLeft, CheckCircle, Package, Zap, Settings, Shield, Lock } from 'lucide-react';

interface CartonStrappingMachinesProps {
  onNavigate?: (page: string) => void;
}

const CartonStrappingMachines = ({ onNavigate }: CartonStrappingMachinesProps) => {
  const features = [
    {
      icon: Lock,
      title: 'Secure Bundling',
      description: 'Reliable strapping ensures safe transport and storage of products',
    },
    {
      icon: Zap,
      title: 'High-Speed Operation',
      description: 'Automatic strapping completes bundles in seconds for maximum throughput',
    },
    {
      icon: Settings,
      title: 'Adjustable Tension',
      description: 'Precise tension control prevents damage while ensuring secure hold',
    },
    {
      icon: Shield,
      title: 'Durable Construction',
      description: 'Heavy-duty design for reliable performance in demanding environments',
    },
  ];

  const applications = [
    'Carton & Box Bundling',
    'Pallet Stabilization',
    'Newspaper & Magazine Bundles',
    'Corrugated Board Packages',
    'Shipping Containers',
    'Industrial Products',
    'Food & Beverage Cases',
    'Pharmaceutical Cartons',
    'E-commerce Packaging',
    'Retail Display Units',
    'Building Materials',
    'Textile & Fabric Bundles',
  ];

  const benefits = [
    'Significantly reduces labor costs',
    'Increases packaging throughput',
    'Ensures consistent strap tension',
    'Reduces material waste',
    'Improves package security',
    'Minimizes product damage in transit',
    'Quick return on investment',
    'Simple operation and maintenance',
    'Handles various package sizes',
    'Enhances workplace safety',
  ];

  const machineTypes = [
    {
      type: 'Automatic Strapping Machines',
      description: 'Fully automated strapping with integrated conveyors and feeding systems for high-volume continuous operation',
      speeds: '30-60 straps per minute',
      suitable: 'Large-scale production, distribution centers, continuous packaging lines',
      features: ['Automatic feeding', 'Integrated conveyors', 'PLC controls', 'Multiple strap heads'],
    },
    {
      type: 'Semi-Automatic Strapping Machines',
      description: 'Operator-assisted strapping requiring manual package positioning with automatic strap application',
      speeds: '20-40 straps per minute',
      suitable: 'Medium-volume operations, varied package sizes, flexible production',
      features: ['Manual positioning', 'Automatic strapping', 'Adjustable table height', 'Foot pedal activation'],
    },
    {
      type: 'Handheld Strapping Tools',
      description: 'Portable battery-powered or pneumatic tools for on-site and mobile strapping applications',
      speeds: 'Variable by operator',
      suitable: 'Field operations, irregular packages, warehouse consolidation, repair work',
      features: ['Portable operation', 'Battery or pneumatic power', 'Lightweight design', 'Multiple strap sizes'],
    },
  ];

  const strappingMaterials = [
    {
      material: 'Polypropylene (PP) Strapping',
      properties: 'Lightweight, economical, good elongation and recovery',
      applications: 'Light to medium-duty bundling, cartons, corrugated boxes',
      strengths: 'Cost-effective, recyclable, variety of widths and thicknesses',
    },
    {
      material: 'Polyester (PET) Strapping',
      properties: 'High tensile strength, excellent tension retention, minimal elongation',
      applications: 'Heavy-duty bundling, pallets, rigid loads, export shipments',
      strengths: 'Superior holding force, weather resistant, maintains tension over time',
    },
    {
      material: 'Steel Strapping',
      properties: 'Maximum tensile strength, no stretch, extremely durable',
      applications: 'Heavy industrial loads, metal products, construction materials, machinery',
      strengths: 'Highest strength, cut-resistant, suitable for sharp-edged products',
    },
    {
      material: 'Corded Polyester Strapping',
      properties: 'Woven polyester fibers, high strength with cushioning properties',
      applications: 'Fragile loads, finished surfaces, irregularly shaped products',
      strengths: 'Protects surfaces, absorbs shock, conformable to odd shapes',
    },
  ];

  const specifications = [
    {
      label: 'Strapping Speed',
      value: 'Up to 60 straps per minute',
    },
    {
      label: 'Strap Width',
      value: '5mm to 32mm',
    },
    {
      label: 'Strap Thickness',
      value: '0.5mm to 1.3mm',
    },
    {
      label: 'Tension Range',
      value: '10-300 kg adjustable',
    },
    {
      label: 'Package Size Range',
      value: '50mm to 1200mm (customizable)',
    },
    {
      label: 'Sealing Method',
      value: 'Heat seal or friction weld',
    },
  ];

  const strappingPatterns = [
    {
      pattern: 'Single Horizontal Strap',
      description: 'One strap around package width or length',
      uses: 'Basic bundling, light packages, minimal movement expected',
    },
    {
      pattern: 'Cross-Pattern Strapping',
      description: 'Two perpendicular straps forming an X or + pattern',
      uses: 'Medium-duty bundling, improved load stability, standard shipping',
    },
    {
      pattern: 'Multi-Strap Bundling',
      description: 'Multiple parallel straps for maximum security',
      uses: 'Heavy loads, long packages, high-value products, export shipments',
    },
    {
      pattern: 'Banding',
      description: 'Continuous strapping around entire bundle perimeter',
      uses: 'Newspaper bundles, magazines, flexible packages, cylindrical items',
    },
  ];

  const advantages = [
    {
      title: 'Cost Efficiency',
      description: 'Automated strapping reduces labor costs by 60-80% compared to manual methods while using less material through optimized tension control.',
    },
    {
      title: 'Package Security',
      description: 'Consistent tension and reliable sealing ensure packages remain secure during handling, storage, and transportation, reducing damage claims.',
    },
    {
      title: 'Production Speed',
      description: 'High-speed automatic strapping keeps pace with packaging lines, eliminating bottlenecks and maximizing throughput.',
    },
    {
      title: 'Versatility',
      description: 'Handle diverse package sizes, shapes, and weights with quick adjustments for format changes and multiple strap patterns.',
    },
    {
      title: 'Material Optimization',
      description: 'Precise strap feeding and cutting minimize waste while maintaining security, reducing consumable costs significantly.',
    },
    {
      title: 'Safety Enhancement',
      description: 'Automated operation eliminates repetitive motion injuries and reduces physical strain on operators during high-volume strapping.',
    },
  ];

  const industryApplications = [
    {
      industry: 'E-commerce & Distribution',
      uses: ['Shipping carton bundling', 'Pallet stabilization', 'Return item consolidation', 'Bulk order packaging'],
      requirements: 'High speed, reliability, multiple package sizes, integration with sortation',
    },
    {
      industry: 'Food & Beverage',
      uses: ['Case bundling', 'Tray wrapping', 'Display unit assembly', 'Pallet securing'],
      requirements: 'Food-safe materials, washdown capability, rapid changeover, sanitary design',
    },
    {
      industry: 'Publishing & Print',
      uses: ['Newspaper bundles', 'Magazine banding', 'Book carton strapping', 'Direct mail bundling'],
      requirements: 'Gentle handling, adjustable pressure, high speed, minimal marking',
    },
    {
      industry: 'Manufacturing & Industrial',
      uses: ['Component bundling', 'Pallet loads', 'Export crating', 'Heavy-duty packaging'],
      requirements: 'High tension capability, steel strap option, rugged construction, heavy loads',
    },
  ];

  const sealingMethods = [
    {
      method: 'Heat Sealing',
      description: 'Strap ends heated and pressed together to form molecular bond',
      advantages: 'Strong seal, clean appearance, suitable for PP and PET straps',
      typical: 'Automatic and semi-automatic machines, high-speed operations',
    },
    {
      method: 'Friction Welding',
      description: 'Strap ends vibrated at high speed to generate heat and weld',
      advantages: 'Fast cycle time, no warm-up needed, consistent strength',
      typical: 'High-speed automatic systems, PP strapping, production lines',
    },
    {
      method: 'Metal Seal Crimping',
      description: 'Metal clip crimped around overlapped strap ends',
      advantages: 'Works with all strap types, simple mechanism, field repairable',
      typical: 'Semi-automatic machines, PET and steel strapping, portable tools',
    },
  ];

  const maintenanceBenefits = [
    'Low maintenance requirements',
    'Self-diagnostic systems alert to issues',
    'Quick-change strap coil loading',
    'Accessible components for service',
    'Minimal downtime for adjustments',
    'Long service life with proper care',
    'Readily available replacement parts',
    'Simple operator training requirements',
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate?.('products')}
            className="flex items-center space-x-2 text-white hover:text-cyan-200 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Carton Strapping Machines
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Professional strapping equipment for secure bundling of cartons, boxes, pallets, and
              packages. Our strapping machines deliver reliable performance, adjustable tension
              control, and efficient operation for businesses requiring fast, consistent package
              securing for shipping, storage, and distribution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture654.jpg"
                  alt="Semi-Automatic Strapping Machine"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture789.jpg"
                  alt="Automatic Strapping Machine"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Reliable Package Securing Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From compact semi-automatic table-top units for small-scale operations to fully
                automated inline strapping systems for high-volume distribution centers, our
                machines provide secure, consistent strapping that protects products throughout
                the supply chain.
              </p>
            </div>
          </div>

          <div className="bg-cyan-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 text-white rounded-full mb-4">
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
              Choose from manual, semi-automatic, and fully automatic strapping systems designed
              to match your production volume, package variety, and automation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {machineTypes.map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-cyan-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{machine.type}</h3>
                  <p className="text-cyan-100 text-sm">{machine.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Strapping Speed</p>
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
                          <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0" />
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
              Strapping Materials & Selection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strappingMaterials.map((material, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{material.material}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-cyan-600 mb-1">Properties:</p>
                      <p className="text-gray-700 text-sm">{material.properties}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-cyan-600 mb-1">Applications:</p>
                      <p className="text-gray-700 text-sm">{material.applications}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-cyan-600 mb-1">Strengths:</p>
                      <p className="text-gray-700 text-sm">{material.strengths}</p>
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
                Strapping machines are essential across industries for securing packages, pallets,
                and bundles during storage, handling, and transportation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="bg-cyan-600 text-white rounded-full p-1 flex-shrink-0">
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
                Automated strapping delivers significant cost savings, improved efficiency, and
                enhanced package security compared to manual bundling methods.
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
              Strapping Patterns & Methods
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Different strapping patterns provide varying levels of security and stability
              depending on package characteristics and shipping requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {strappingPatterns.map((pattern, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pattern.pattern}</h3>
                <p className="text-gray-700 mb-3 text-sm">{pattern.description}</p>
                <div className="bg-cyan-50 p-3 rounded-lg">
                  <p className="text-cyan-900 text-sm font-medium">{pattern.uses}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Sealing Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sealingMethods.map((method, index) => (
                <div key={index} className="border-2 border-cyan-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{method.method}</h4>
                  <p className="text-gray-700 mb-4 text-sm">{method.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-cyan-600 mb-1">Advantages:</p>
                      <p className="text-gray-600 text-sm">{method.advantages}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-cyan-600 mb-1">Typical Use:</p>
                      <p className="text-gray-600 text-sm">{method.typical}</p>
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
              Modern strapping equipment delivers measurable improvements in efficiency, cost
              savings, and package security compared to manual or outdated methods.
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                <div className="mb-4">
                  <p className="font-semibold text-gray-900 mb-3">Common Applications:</p>
                  <ul className="space-y-2">
                    {industry.uses.map((use, useIndex) => (
                      <li key={useIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span className="text-gray-700">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Key Requirements:</p>
                  <p className="text-sm text-gray-700">{industry.requirements}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Maintenance & Reliability Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {maintenanceBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                  <span className="text-gray-900 text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Strapping Systems?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Proven Durability</p>
                      <p className="text-cyan-100 text-sm">
                        Heavy-duty construction and quality components ensure years of reliable
                        operation in demanding production environments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Format Flexibility</p>
                      <p className="text-cyan-100 text-sm">
                        Quick adjustments accommodate diverse package sizes and strapping patterns
                        for maximum production versatility
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Precision Control</p>
                      <p className="text-cyan-100 text-sm">
                        Adjustable tension settings and programmable controls ensure optimal strap
                        tightness for every application
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Complete Support</p>
                      <p className="text-cyan-100 text-sm">
                        Installation, operator training, preventive maintenance programs, and
                        responsive technical support
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
                <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Custom configurations available for specialized applications including heavy-duty
                    loads, unique package dimensions, and integration with existing production lines.
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
              Secure Your Packages Efficiently
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Automated strapping equipment reduces labor costs, increases throughput, and ensures
              consistent package security. Let our experts help you select the ideal strapping
              solution for your products, volumes, and operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-white text-cyan-600 border-2 border-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors text-lg"
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

export default CartonStrappingMachines;
