import { PackageCheck, Shrink, Wrench, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: PackageCheck,
      title: 'Co-Packing Services',
      description: 'Comprehensive co-packing solutions to handle your packaging needs from start to finish.',
      features: [
        'Product assembly and bundling',
        'Quality control and inspection',
        'Custom packaging design',
        'Labeling and branding',
        'Inventory management',
        'Flexible volume handling',
      ],
    },
    {
      icon: PackageCheck,
      title: 'Promotional Packing',
      description: 'Eye-catching promotional packaging solutions to enhance your marketing campaigns.',
      features: [
        'Shrink Job work',
        'Gift sets and hampers',
        'Limited edition packaging',
        'Multi-product bundles',
        'Custom inserts and displays',
        'Brand-aligned presentation',
      ],
    },
    {
      icon: Wrench,
      title: 'Machine Installation & Setup',
      description: 'Expert installation and commissioning of all packaging machinery we supply.',
      features: [
        'Professional installation',
        'System integration',
        'Operator training',
        'Performance testing',
        'Documentation',
        'Optimization guidance',
      ],
    },
  ];

  const afterSalesServices = [
    {
      title: 'Preventive Maintenance',
      description: 'Regular maintenance schedules to keep your equipment running at peak performance and prevent unexpected downtime.',
    },
    {
      title: 'Breakdown Support',
      description: 'Rapid response to equipment failures with skilled technicians available to diagnose and resolve issues quickly.',
    },
    {
      title: 'Spare Parts Supply',
      description: 'Genuine spare parts inventory for all machines we supply, ensuring quick replacement and minimal downtime.',
    },
    {
      title: 'Technical Training',
      description: 'Comprehensive training programs for your operators and maintenance staff to maximize equipment efficiency.',
    },
    {
      title: 'Remote Diagnostics',
      description: 'Advanced remote monitoring and diagnostics capabilities to identify and resolve issues before they impact production.',
    },
    {
      title: 'Equipment Upgrades',
      description: 'Upgrade services to enhance machine capabilities and keep your equipment current with latest technology.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              From co-packing and promotional packaging to comprehensive after-sales support,
              we provide end-to-end packaging services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Packaging Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional packaging services to complement our machinery and materials offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl mr-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="ml-20">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1 flex-shrink-0">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Headphones className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              After-Sales Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to your success extends far beyond the sale. Our team of skilled
              technicians provides comprehensive support to ensure your equipment operates at
              peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {afterSalesServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 md:p-8 text-center">
            <Wrench className="h-16 w-16 mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Let Us Handle Your Packaging Needs
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you need co-packing services, machine maintenance, or custom packaging
              solutions, our experienced team is ready to help. Contact us to discuss your
              requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Request a Service Quote
              </a>
             <a 
  href="/contact"
  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
  Schedule a Consultation
</a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
