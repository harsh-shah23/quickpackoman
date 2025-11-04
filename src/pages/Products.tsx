import { Box, Layers, Cog } from 'lucide-react';

interface ProductsProps {
  onNavigate?: (page: string) => void;
}

const Products = ({ onNavigate }: ProductsProps) => {
  const machines = [
    {
      name: 'Shrink Wrapping Machines',
      description: 'Wraps items in shrink film for tight, tamper-proof seals.'
    },
    {
      name: 'Sleeve Wrapping',
      description: 'Bundles products with a sleeve of shrink film.'
    },
    {
      name: 'Vacuum Packing Machines',
      description: 'Removes air and seals products in vacuum pouches.'
    },
    {
      name: 'Pallet Wrapping & Stretch Wrapping Machines',
      description: 'Secures pallet loads using stretch film wrapping.'
    },
    {
      name: 'Metal Detectors',
      description: 'Detects metal contaminants in packaged goods.'
    },
    {
      name: 'Induction Sealing Machines',
      description: 'Seals containers using electromagnetic induction.'
    },
    {
      name: 'Form Fill Seal Machines',
      description: 'Forms, fills, and seals pouches in a single process.'
    },
    {
      name: 'Pouch Packing Machines',
      description: 'Packs products into pre-formed or form-fill pouches.'
    },
    {
      name: 'Tray Packing Machines',
      description: 'Packs products into pre-formed trays for sealing.'
    },
    {
      name: 'Thermoforming Machines',
      description: 'Forms plastic packages by heating and molding sheets.'
    },
    {
      name: 'Labeling Machines',
      description: 'Applies labels to bottles, jars, or boxes efficiently.'
    },
    {
      name: 'Carton Strapping Machines',
      description: 'Applies straps to secure cartons for shipment.'
    },
    {
      name: 'Carton Sealing Machines',
      description: 'Seals filled cartons with tape or adhesive.'
    },
    {
      name: 'Brand Sealer',
      description: 'Seals branded packaging for professional presentation.'
    },
    {
      name: 'Flow Wrapping',
      description: 'Wraps products in continuous film for high-speed packaging.'
    },
    {
      name: 'Cling wrapping',
      description: 'Wraps products tightly with cling film for protection.'
    },
    {
      name: 'Liquid Filing & Capping',
      description: 'Fills containers with liquid and applies caps automatically.'
    },
    {
      name: 'Corrugated Box Strapping',
      description: 'Straps corrugated boxes for stability and transport.'
    },
    {
      name: 'Orbit Wrapping',
      description: 'Wraps products horizontally using stretch film.'
    },
    {
      name: 'Carton Erectors',
      description: 'Automatically forms and prepares cartons for filling.'
    },
    {
      name: 'Check Weigher',
      description: 'Verifies product weight for quality control.'
    },
    {
      name: 'Protective Packaging',
      description: 'Provides cushioning and protection for shipments.'
    }
  ];

  const materials = [
    'POF Shrink Film',
    'Vacuum Bags',
    'Thermofarming',
    'Barcode Labels & Ribbons',
    'Stretch Fill & Pallet Wrap',
    'Tray & Cup Sealer',
    'Adhesive Tapes',
    'Strapping Rolls',
    'Orbit Wrapping',
    'Protective Packaging',
    'Printed Labels',
    'Plain Labels',
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A comprehensive range of packaging machines and materials sourced from leading manufacturers
              worldwide to meet all your packaging needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Cog className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Packaging Machines
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art packaging machinery from Europe, Japan, India, and Taiwan.
              Each machine is carefully selected for quality, reliability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {machines.map((machine, index) => {
              const isClickable = machine.name === 'Shrink Wrapping Machines' ||
                                 machine.name === 'Sleeve Wrapping' ||
                                 machine.name === 'Vacuum Packing Machines' ||
                                 machine.name === 'Pallet Wrapping & Stretch Wrapping Machines' ||
                                 machine.name === 'Metal Detectors' ||
                                 machine.name === 'Induction Sealing Machines' ||
                                 machine.name === 'Form Fill Seal Machines' ||
                                 machine.name === 'Pouch Packing Machines' ||
                                 machine.name === 'Tray Packing Machines' ||
                                 machine.name === 'Thermoforming Machines' ||
                                 machine.name === 'Labeling Machines' ||
                                 machine.name === 'Carton Strapping Machines' ||
                                 machine.name === 'Carton Sealing Machines' ||
                                 machine.name === 'Brand Sealer' ||
                                 machine.name === 'Flow Wrapping' ||
                                 machine.name === 'Cling wrapping' ||
                                 machine.name === 'Liquid Filing & Capping' ||
                                 machine.name === 'Corrugated Box Strapping' ||
                                 machine.name === 'Orbit Wrapping' ||
                                 machine.name === 'Carton Erectors' ||
                                 machine.name === 'Check Weigher' ||
                                 machine.name === 'Protective Packaging';
              const handleClick = () => {
                if (machine.name === 'Shrink Wrapping Machines') {
                  onNavigate?.('shrink-wrapping-machines');
                } else if (machine.name === 'Sleeve Wrapping') {
                  onNavigate?.('sleeve-wrapping');
                } else if (machine.name === 'Vacuum Packing Machines') {
                  onNavigate?.('vacuum-packing-machines');
                } else if (machine.name === 'Pallet Wrapping & Stretch Wrapping Machines') {
                  onNavigate?.('pallet-wrapping-machines');
                } else if (machine.name === 'Metal Detectors') {
                  onNavigate?.('metal-detectors');
                } else if (machine.name === 'Induction Sealing Machines') {
                  onNavigate?.('induction-sealing-machines');
                } else if (machine.name === 'Form Fill Seal Machines') {
                  onNavigate?.('form-fill-seal-machines');
                } else if (machine.name === 'Pouch Packing Machines') {
                  onNavigate?.('pouch-packing-machines');
                } else if (machine.name === 'Tray Packing Machines') {
                  onNavigate?.('tray-packing-machines');
                } else if (machine.name === 'Thermoforming Machines') {
                  onNavigate?.('thermoforming-machines');
                } else if (machine.name === 'Labeling Machines') {
                  onNavigate?.('labeling-machines');
                } else if (machine.name === 'Carton Strapping Machines') {
                  onNavigate?.('carton-strapping-machines');
                } else if (machine.name === 'Carton Sealing Machines') {
                  onNavigate?.('carton-sealing-machines');
                } else if (machine.name === 'Brand Sealer') {
                  onNavigate?.('brand-sealer');
                } else if (machine.name === 'Flow Wrapping') {
                  onNavigate?.('flow-wrapping');
                } else if (machine.name === 'Cling wrapping') {
                  onNavigate?.('cling-wrapping');
                } else if (machine.name === 'Liquid Filing & Capping') {
                  onNavigate?.('liquid-filling-capping');
                } else if (machine.name === 'Corrugated Box Strapping') {
                  onNavigate?.('corrugated-box-strapping');
                } else if (machine.name === 'Orbit Wrapping') {
                  onNavigate?.('orbit-wrapping');
                } else if (machine.name === 'Carton Erectors') {
                  onNavigate?.('carton-erectors');
                } else if (machine.name === 'Check Weigher') {
                  onNavigate?.('check-weigher');
                } else if (machine.name === 'Protective Packaging') {
                  onNavigate?.('protective-packaging');
                }
              };

              return (
                <div
                  key={index}
                  onClick={handleClick}
                  className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all group ${
                    isClickable ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <Cog className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{machine.name}</h3>
                      <p className="text-sm text-gray-600">
                        {machine.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Custom Machinery?</h3>
                <p className="text-gray-600">
                  We can source and configure specialized packaging equipment tailored to your specific requirements.
                </p>
              </div>
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Layers className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Packaging Materials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A complete selection of high-quality packaging materials to complement your machinery
              and ensure optimal packaging results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {materials.map((material, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white p-2 rounded">
                    <Box className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{material}</h3>
                </div>
              </div>
            ))}
          </div>
       
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Quality You Can Trust
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  All our products are sourced from certified manufacturers and meet international
                  quality standards. We stand behind every machine and material we supply with
                  comprehensive warranties and support.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-600 text-white rounded-full p-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Certified & tested products</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-600 text-white rounded-full p-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Comprehensive warranties</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-600 text-white rounded-full p-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Expert technical support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-600 text-white rounded-full p-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Spare parts availability</span>
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block bg-white text-gray-900 p-8 rounded-xl shadow-xl">
                  <p className="text-sm font-semibold text-blue-600 mb-2">GET IN TOUCH</p>
                  <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
                  <p className="text-gray-600 mb-6">
                    Contact us for detailed product information, pricing, and availability.
                  </p>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
                  >
                    Contact Sales Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
