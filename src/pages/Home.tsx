import { Shield, Leaf, Info, Lightbulb, ArrowRight, Package } from 'lucide-react';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const features = [
    {
      icon: Shield,
      title: 'Product Safety',
      description: 'Ensuring your products remain safe and protected throughout their journey from manufacturing to end consumer.',
    },
    {
      icon: Leaf,
      title: 'Hygiene Standards',
      description: 'Maintaining the highest hygiene standards with food-grade and certified packaging materials.',
    },
    {
      icon: Info,
      title: 'Information & Compliance',
      description: 'Providing clear product information and ensuring regulatory compliance across all packaging solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Bringing cutting-edge packaging technology and innovative solutions to meet evolving market demands.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-3xl font-bold mb-4 leading-tight">
              Complete Packaging Solutions for Your Business
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Since 2004, Quick Packaging LLC has been Oman's trusted partner for packaging
              machines, materials, and services across diverse industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate?.('products')}
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 opacity-10">
          <Package className="h-96 w-96" />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Importance of Quality Packaging
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Packaging is more than just a container. It's a critical component that ensures
              product integrity, safety, and brand identity in today's competitive marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Satisfied Clients</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Product Solutions</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Packaging?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experts help you find the perfect packaging solution for your business needs.
          </p>
          <button
            onClick={() => onNavigate?.('contact')}
            className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
