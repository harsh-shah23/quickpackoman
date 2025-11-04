import { Building2, Globe, Award, Users, Wrench, TrendingUp } from 'lucide-react';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const About = ({ onNavigate }: AboutProps) => {
  const milestones = [
    { year: '2004', title: 'Company Founded', description: 'Quick Packaging LLC established in Oman' },
    { year: '2008', title: 'Service Expansion', description: 'Expanded from co-packing to full-service solutions' },
    { year: '2015', title: 'International Partnerships', description: 'Partnered with manufacturers from Europe, Japan, India, and Taiwan' },
    { year: '2024', title: 'Industry Leader', description: 'Serving 10+ industries with comprehensive packaging solutions' },
  ];

  const capabilities = [
    {
      icon: Globe,
      title: 'Global Partnerships',
      description: 'We import and sell high-quality packaging machines from leading manufacturers in Europe, Japan, India, and Taiwan, ensuring access to world-class technology.',
    },
    {
      icon: Wrench,
      title: 'Expert Technical Support',
      description: 'Our team of skilled technicians provides comprehensive after-sales service, maintenance, and support to keep your operations running smoothly.',
    },
    {
      icon: Award,
      title: 'Custom Solutions',
      description: 'We design and implement tailored packaging solutions that meet the unique requirements of each client and industry sector.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'From our beginnings in co-packing job work to becoming a full-service packaging solutions provider, we continue to evolve with market needs.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Quick Packaging LLC</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Two decades of excellence in providing comprehensive packaging solutions to businesses across Oman and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Established in <span className="font-semibold text-gray-900">2004</span>, Quick Packaging LLC
                  has grown from a specialized co-packing service provider to become one of Oman's most trusted
                  comprehensive packaging solutions companies.
                </p>
                <p>
                  Our journey began with co-packing job work, where we developed deep expertise in understanding
                  the critical role packaging plays in product success. This foundation allowed us to expand our
                  services to include importing and selling state-of-the-art packaging machines and materials from
                  world-renowned manufacturers.
                </p>
                <p>
                  Today, we partner with leading manufacturers from <span className="font-semibold text-gray-900">Europe,
                  Japan, India, and Taiwan</span> to bring cutting-edge packaging technology to our clients. Our commitment
                  to quality, innovation, and customer service has made us the preferred packaging partner for businesses
                  across multiple industries.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <Building2 className="h-16 w-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full p-1 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">20+ years of industry experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full p-1 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Comprehensive product and service portfolio</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full p-1 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Skilled technical support team</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full p-1 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Global partnerships with leading manufacturers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full p-1 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Custom solutions tailored to your needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <capability.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Users className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl text-white-100 mb-8 leading-relaxed">
            Experience the difference that two decades of expertise and dedication can make to your
            packaging operations. Let's discuss how we can help your business thrive.
          </p>
          <button
            onClick={() => onNavigate?.('contact')}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
          >
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
