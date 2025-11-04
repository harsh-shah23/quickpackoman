import { ArrowLeft, CheckCircle, Tag, Zap, Settings, Shield, Layers } from 'lucide-react';

interface LabelingMachinesProps {
  onNavigate?: (page: string) => void;
}

const LabelingMachines = ({ onNavigate }: LabelingMachinesProps) => {
  const features = [
    {
      icon: Tag,
      title: 'Multi-Label Application',
      description: 'Apply multiple labels simultaneously for maximum throughput',
    },
    {
      icon: Zap,
      title: 'High-Speed Performance',
      description: 'Label up to 400 products per minute with precision accuracy',
    },
    {
      icon: Settings,
      title: 'Quick Changeover',
      description: 'Switch between product sizes and label formats in minutes',
    },
    {
      icon: Shield,
      title: 'Precision Placement',
      description: 'Advanced sensors ensure consistent label positioning',
    },
  ];

  const applications = [
    'Bottles & Containers',
    'Cans & Jars',
    'Boxes & Cartons',
    'Pouches & Sachets',
    'Tubes & Vials',
    'Cosmetics & Personal Care',
    'Food & Beverage Products',
    'Pharmaceutical Products',
    'Chemical Containers',
    'Industrial Products',
    'Wine & Spirits Bottles',
    'Oil & Lubricant Containers',
  ];

  const benefits = [
    'Reduces labor costs significantly',
    'Eliminates manual labeling errors',
    'Consistent label quality and placement',
    'Increases production throughput',
    'Minimizes label waste',
    'Meets regulatory compliance',
    'Easy integration with existing lines',
    'Flexible label positioning options',
    'Barcode and QR code compatible',
    'Real-time quality verification',
  ];

  const labelTypes = [
    {
      type: 'Pressure-Sensitive Labels',
      description: 'Self-adhesive labels applied to flat or curved surfaces',
      applications: 'Most versatile option for bottles, boxes, and containers',
    },
    {
      type: 'Wrap-Around Labels',
      description: 'Labels that wrap completely around cylindrical containers',
      applications: 'Ideal for bottles, cans, and tubes requiring full-body graphics',
    },
    {
      type: 'Front & Back Labels',
      description: 'Simultaneous application of labels on opposite sides',
      applications: 'Perfect for bottles requiring ingredient and branding info',
    },
    {
      type: 'Top & Bottom Labels',
      description: 'Labels applied to flat top and bottom surfaces',
      applications: 'Boxes, trays, and containers with horizontal surfaces',
    },
    {
      type: 'Corner Wrap Labels',
      description: 'Labels wrapping around package corners for visibility',
      applications: 'Boxes and cartons requiring multi-surface coverage',
    },
    {
      type: 'Tamper-Evident Seals',
      description: 'Security labels that show evidence of opening',
      applications: 'Pharmaceuticals, food, and high-value products',
    },
  ];

  const machineTypes = [
    {
      type: 'Automatic Labeling Machines',
      description: 'Fully automated systems for high-volume production lines with integrated product handling',
      speeds: '100-400 products/minute',
      suitable: 'Large-scale manufacturing, continuous production',
      features: ['Automatic product feeding', 'Multiple label heads', 'Inline integration', 'PLC controls'],
    },
    {
      type: 'Semi-Automatic Labelers',
      description: 'Operator-assisted labeling with manual product positioning for flexibility',
      speeds: '30-100 products/minute',
      suitable: 'Medium-volume production, varied products',
      features: ['Manual loading', 'Foot pedal operation', 'Quick changeover', 'Compact design'],
    },
    {
      type: 'Print & Apply Systems',
      description: 'Integrated printing and labeling for variable data and on-demand information',
      speeds: '20-80 products/minute',
      suitable: 'Products requiring batch codes, dates, barcodes',
      features: ['Thermal printing', 'Variable data', 'Database integration', 'Real-time coding'],
    },
  ];

  const specifications = [
    {
      label: 'Label Speed',
      value: 'Up to 400 products per minute',
    },
    {
      label: 'Label Width',
      value: '10mm to 250mm',
    },
    {
      label: 'Label Length',
      value: '15mm to 500mm',
    },
    {
      label: 'Product Diameter',
      value: '20mm to 300mm',
    },
    {
      label: 'Accuracy',
      value: '±0.5mm placement precision',
    },
    {
      label: 'Control System',
      value: 'PLC with touchscreen HMI',
    },
  ];

  const labelingTechnologies = [
    {
      technology: 'Tamp-Blow Application',
      description: 'Label dispensed onto pad, then tamped or blown onto product',
      advantages: 'Handles uneven surfaces, high-speed operation, minimal contact',
      typical: 'Boxes, cartons, irregular shapes',
    },
    {
      technology: 'Wipe-On Application',
      description: 'Label applied with roller or brush as product moves past applicator',
      advantages: 'Smooth bubble-free application, works on curves, continuous motion',
      typical: 'Bottles, cylindrical containers, round products',
    },
    {
      technology: 'Air-Blow Application',
      description: 'Label released and blown onto product using compressed air',
      advantages: 'Non-contact application, fast speeds, delicate products',
      typical: 'Electronics, fragile items, high-speed lines',
    },
  ];

  const advantages = [
    {
      title: 'Labor Efficiency',
      description: 'Automate the labeling process to eliminate manual labor costs and free staff for value-added tasks while achieving consistent quality.',
    },
    {
      title: 'Production Speed',
      description: 'Dramatically increase throughput with high-speed automated labeling that keeps pace with your fastest production lines.',
    },
    {
      title: 'Quality Consistency',
      description: 'Eliminate human error and ensure every label is positioned perfectly with repeatable accuracy and professional appearance.',
    },
    {
      title: 'Regulatory Compliance',
      description: 'Meet industry labeling requirements with precision placement, legible information, and tamper-evident sealing capabilities.',
    },
    {
      title: 'Flexibility',
      description: 'Quick changeover between products and label formats allows efficient production of multiple SKUs on the same equipment.',
    },
    {
      title: 'Traceability',
      description: 'Print and apply variable data including batch codes, dates, and serialization for complete product tracking.',
    },
  ];

  const industryApplications = [
    {
      industry: 'Food & Beverage',
      uses: ['Bottle labeling', 'Can labeling', 'Box labeling', 'Pouch labeling', 'Date coding'],
      requirements: 'FDA compliance, moisture resistance, high speeds',
    },
    {
      industry: 'Pharmaceuticals',
      uses: ['Vial labeling', 'Bottle labeling', 'Blister packs', 'Carton labeling', 'Serialization'],
      requirements: 'GMP compliance, tamper evidence, variable data',
    },
    {
      industry: 'Cosmetics',
      uses: ['Tube labeling', 'Bottle labeling', 'Jar labeling', 'Box labeling', 'Display graphics'],
      requirements: 'High-quality finish, multiple orientations, shelf appeal',
    },
    {
      industry: 'Industrial',
      uses: ['Container labeling', 'Drum labeling', 'Pail labeling', 'Chemical warnings', 'Shipping labels'],
      requirements: 'Durability, chemical resistance, large formats',
    },
  ];

  const integrationOptions = [
    {
      option: 'Standalone Operation',
      description: 'Operate independently with manual product feeding and collection',
      suited: 'Small-scale production, varied products, flexible scheduling',
    },
    {
      option: 'Inline Integration',
      description: 'Integrate directly into existing conveyor systems for seamless flow',
      suited: 'High-volume production, continuous operation, automated lines',
    },
    {
      option: 'Packaging Line Integration',
      description: 'Coordinate with filling, capping, and case packing equipment',
      suited: 'Complete end-to-end automation, synchronized production',
    },
  ];

  const advancedFeatures = [
    'Vision inspection systems for quality verification',
    'Automatic label splice detection and notification',
    'Recipe management for multi-product operations',
    'Statistical process control and reporting',
    'Remote diagnostics and monitoring',
    'Integration with ERP and MES systems',
    'Serialization and track-and-trace capabilities',
    'Reject mechanisms for non-compliant products',
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
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
              Labeling Machines
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Professional labeling equipment for accurate, high-speed application of pressure-sensitive
              labels to bottles, containers, boxes, and products of all shapes and sizes. Our labeling
              machines deliver precision placement, exceptional reliability, and seamless integration
              with your production lines to maximize efficiency and product presentation.
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
                  src="/Picture434.jpg"
                  alt="Tabletop Labeling Machine"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/Picture5213.jpg"
                  alt="Industrial Labeling System"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precision Labeling Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From compact tabletop units for small-scale operations to fully automated inline
                systems for high-volume production, our labeling machines deliver accurate label
                placement, consistent quality, and reliable performance across diverse applications
                and industries.
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
              Machine Types & Configurations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              We offer a complete range of labeling solutions from entry-level semi-automatic
              systems to sophisticated fully automated lines with integrated inspection and
              variable data printing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {machineTypes.map((machine, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-orange-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{machine.type}</h3>
                  <p className="text-blue-100 text-sm">{machine.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Production Speed</p>
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
              Label Types & Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labelTypes.map((label, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{label.type}</h4>
                  <p className="text-gray-700 mb-3 text-sm">{label.description}</p>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">{label.applications}</p>
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
                Our labeling machines serve diverse industries with specialized requirements for
                label accuracy, durability, compliance, and aesthetic presentation.
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
                Automated labeling delivers immediate and ongoing benefits including reduced costs,
                increased throughput, consistent quality, and enhanced product presentation.
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
              Application Technologies
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              Different labeling methods optimize performance for specific product shapes,
              production speeds, and application requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {labelingTechnologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.technology}</h3>
                <p className="text-gray-700 mb-4">{tech.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 mb-2">Advantages:</p>
                  <p className="text-gray-600 text-sm">{tech.advantages}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-2">Typical Products:</p>
                  <p className="text-gray-600 text-sm">{tech.typical}</p>
                </div>
              </div>
            ))}
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
              Modern automated labeling delivers measurable improvements over manual methods and
              older technology, providing immediate ROI and long-term competitive benefits.
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
                        <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
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
              Integration Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {integrationOptions.map((option, index) => (
                <div key={index} className="border-2 border-orange-200 rounded-lg p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full mb-4 mx-auto">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">{option.option}</h4>
                  <p className="text-gray-700 mb-3 text-sm">{option.description}</p>
                  <p className="text-orange-600 font-semibold text-sm text-center">{option.suited}</p>
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
                  Advanced Features & Technology
                </h2>
                <p className="text-blue-100 mb-6">
                  Our labeling systems incorporate the latest technology for maximum reliability,
                  efficiency, and integration with your production environment.
                </p>
                <ul className="space-y-3">
                  {advancedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                      <span className="text-blue-50">{feature}</span>
                    </li>
                  ))}
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
                    Custom configurations available for unique product shapes, special labels, and
                    specialized production requirements. Contact us to discuss your labeling needs.
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
              Transform Your Labeling Operations
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Automated labeling reduces costs, increases speed, ensures consistency, and improves
              product presentation. Let our experts design the optimal labeling solution for your
              products, production volume, and integration requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
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

export default LabelingMachines;
