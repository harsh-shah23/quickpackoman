import {
  ShoppingBag,
  Droplet,
  Coffee,
  Beef,
  Pill,
  Sparkles,
  Milk,
  Wine,
  Flame,
  Layers
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: ShoppingBag,
      name: 'FMCG',
      description: 'Fast-Moving Consumer Goods',
      details: 'Specialized packaging solutions for consumer goods including food items, beverages, household products, and personal care items requiring efficient, attractive, and protective packaging.',
    },
    {
      icon: Sparkles,
      name: 'Cosmetics',
      description: 'Beauty & Personal Care',
      details: 'Premium packaging for cosmetics and beauty products with focus on aesthetics, protection, and compliance with hygiene standards.',
    },
    {
      icon: Milk,
      name: 'Dairy',
      description: 'Dairy Products',
      details: 'Hygienic and temperature-appropriate packaging solutions for milk, cheese, yogurt, and other dairy products ensuring freshness and safety.',
    },
    {
      icon: Wine,
      name: 'Beverages',
      description: 'Drinks & Refreshments',
      details: 'Packaging solutions for bottled water, soft drinks, juices, and other beverages including labeling, shrink wrapping, and case packing.',
    },
    {
      icon: Coffee,
      name: 'Food & Bakery',
      description: 'Food Products & Baked Goods',
      details: 'Food-grade packaging for fresh and processed foods, bakery items, confectionery, and snacks maintaining product quality and extending shelf life.',
    },
    {
      icon: Flame,
      name: 'Oil & Lubricants',
      description: 'Petroleum Products',
      details: 'Robust packaging solutions for oils, lubricants, and petroleum-based products including proper labeling and safety compliance.',
    },
    {
      icon: Beef,
      name: 'Meat & Poultry',
      description: 'Protein Products',
      details: 'Specialized vacuum packing, modified atmosphere packaging, and cold chain solutions for meat and poultry products ensuring hygiene and freshness.',
    },
    {
      icon: Pill,
      name: 'Pharmaceuticals',
      description: 'Medical & Healthcare',
      details: 'GMP-compliant packaging for pharmaceutical products including blister packing, strip packing, and specialized labeling with regulatory compliance.',
    },
    {
      icon: Droplet,
      name: 'Chemicals',
      description: 'Chemical Products',
      details: 'Safe and compliant packaging for chemical products with appropriate labeling, hazard warnings, and protective measures.',
    },
    {
      icon: Layers,
      name: 'Manufacturing',
      description: 'Industrial Products',
      details: 'Custom packaging solutions for manufactured goods, industrial components, and B2B products requiring protection during storage and transit.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Two decades of experience serving diverse industries with specialized packaging
              solutions tailored to unique requirements and regulatory standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experience spans multiple industries, each with its own unique packaging
              requirements. We understand the challenges and provide solutions that meet
              industry-specific standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <industry.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3">{industry.description}</p>
                <p className="text-gray-600 leading-relaxed">{industry.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Industry-Specific Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We understand that different industries have different regulatory requirements.
                Our solutions ensure compliance with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Food safety standards (FDA, HACCP)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Pharmaceutical GMP requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cosmetics regulations and testing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Chemical labeling and safety (GHS)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">International shipping requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Every industry has unique challenges. Our custom solutions address:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Temperature-controlled packaging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Extended shelf life requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Tamper-evident features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Brand differentiation packaging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-blue-600 text-white rounded-full p-0.5 mt-1">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Sustainable packaging options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Industry, Our Expertise
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                With over 20 years of experience serving diverse industries, we bring deep
                understanding of sector-specific challenges and requirements. Whether you're
                in food processing, pharmaceuticals, or any other industry, we have the
                expertise and solutions to meet your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Discuss Your Requirements
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Don't See Your Industry Listed?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We serve many more industries and are always ready to develop custom solutions
            for new sectors. Contact us to discuss your specific packaging needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
