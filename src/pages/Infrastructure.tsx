import { Factory, Thermometer, FlaskConical, Package, ShieldCheck, TrendingUp, CheckCircle } from 'lucide-react';

const Infrastructure = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Raw Material Selection',
      description: 'Careful selection and inspection of premium quality raw materials from trusted sources.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      number: '02',
      title: 'Washing & Cleaning',
      description: 'Thorough washing and cleaning to remove impurities while maintaining quality.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      number: '03',
      title: 'Cutting & Processing',
      description: 'Precise cutting and pre-processing to ensure uniform dehydration.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      number: '04',
      title: 'Dehydration',
      description: 'Advanced dehydration technology that preserves nutrients, flavor, and color.',
      icon: <Thermometer className="w-8 h-8" />,
    },
    {
      number: '05',
      title: 'Quality Testing',
      description: 'Rigorous testing for moisture content, purity, and quality parameters.',
      icon: <FlaskConical className="w-8 h-8" />,
    },
    {
      number: '06',
      title: 'Packaging & Storage',
      description: 'Moisture-proof packaging and controlled storage for maximum shelf life.',
      icon: <Package className="w-8 h-8" />,
    },
  ];

  const facilities = [
    {
      icon: <Factory className="w-10 h-10" />,
      title: 'Modern Processing Unit',
      description: 'State-of-the-art facility equipped with advanced dehydration technology',
    },
    {
      icon: <Thermometer className="w-10 h-10" />,
      title: 'Temperature Control',
      description: 'Precision temperature control systems for optimal dehydration',
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: 'Quality Lab',
      description: 'In-house laboratory for comprehensive quality testing',
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: 'Packaging Unit',
      description: 'Automated packaging systems ensuring hygiene and freshness',
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'Hygiene Standards',
      description: 'Strict sanitation protocols throughout the facility',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Scalable Production',
      description: 'Capacity to handle bulk orders with consistent quality',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5945829/pexels-photo-5945829.jpeg?auto=compress&cs=tinysrgb&w=1260)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Infrastructure & Process</h1>
          <p className="text-xl text-green-50">
            Advanced Technology Meets Traditional Quality
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-green-50 px-4 py-2 rounded-full inline-block mb-4">
              Our Facility
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              State-of-the-Art Processing Unit
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our processing facility in Vijayawada is equipped with modern dehydration technology that preserves the natural properties of raw materials while meeting international quality standards. We maintain strict hygiene protocols and quality control measures throughout our operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-green-600"
              >
                <div className="text-green-600 mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-white px-4 py-2 rounded-full inline-block mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Dehydration Process
            </h2>
            <p className="text-gray-600 text-lg">
              A carefully controlled process that ensures maximum retention of nutrients and flavor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <span className="text-5xl font-bold text-green-100">{step.number}</span>
                    </div>
                    <div className="text-green-600 mt-2">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-green-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Quality Control Measures
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-xl space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Quality control is integrated into every step of our production process. Our experienced quality assurance team conducts regular inspections and tests to ensure that every batch meets our stringent standards.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Raw Material Inspection</h4>
                    <p className="text-gray-600 text-sm">
                      Thorough examination of incoming materials for quality and freshness
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">In-Process Monitoring</h4>
                    <p className="text-gray-600 text-sm">
                      Continuous monitoring of processing parameters
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Laboratory Testing</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive testing for moisture, purity, and contamination
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Final Product Verification</h4>
                    <p className="text-gray-600 text-sm">
                      Complete quality check before packaging and dispatch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Packaging & Storage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Package className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Packaging Solutions</h3>
                <p className="text-gray-600 mb-4">
                  We offer flexible packaging options to meet diverse customer requirements:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Moisture-proof HDPE bags</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Aluminum pouches for extended freshness</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Bulk packaging for industrial use</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Custom branding and labeling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <ShieldCheck className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Storage Facility</h3>
                <p className="text-gray-600 mb-4">
                  Our storage infrastructure ensures product integrity:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Climate-controlled warehouses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Humidity and temperature monitoring</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Pest control measures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">FIFO inventory management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Export Readiness</h2>
            <p className="text-xl text-green-50 mb-8 leading-relaxed">
              Our facility is designed to meet international export standards. We have the capacity, quality systems, and logistics partnerships to serve global markets efficiently. From documentation to shipping, we handle every aspect of the export process professionally.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-green-50">Export Quality</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-green-50">Operations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">ISO</div>
                <div className="text-green-50">Standards Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
