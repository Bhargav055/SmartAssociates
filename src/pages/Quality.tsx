import { Shield, Award, CheckCircle, Sparkles, Users, Target } from 'lucide-react';

const Quality = () => {
  const qualityPillars = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Hygienic Manufacturing',
      description: 'Strict sanitation protocols and clean processing environment',
      points: [
        'Regular facility sanitization',
        'Personal protective equipment for all staff',
        'Pest control measures',
        'Segregated processing areas',
      ],
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Quality Testing',
      description: 'Comprehensive testing at every production stage',
      points: [
        'Moisture content analysis',
        'Microbiological testing',
        'Color and appearance evaluation',
        'Purity and contamination checks',
      ],
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Raw Material Standards',
      description: 'Premium quality inputs from certified suppliers',
      points: [
        'Supplier qualification program',
        'Incoming material inspection',
        'Traceability systems',
        'Freshness verification',
      ],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Trained Personnel',
      description: 'Skilled team committed to quality excellence',
      points: [
        'Regular training programs',
        'Quality awareness initiatives',
        'Standard operating procedures',
        'Performance monitoring',
      ],
    },
  ];

  const complianceStandards = [
    {
      title: 'Food Safety Standards',
      description: 'Adherence to national and international food safety regulations',
    },
    {
      title: 'HACCP Principles',
      description: 'Implementation of Hazard Analysis and Critical Control Points',
    },
    {
      title: 'GMP Compliance',
      description: 'Good Manufacturing Practices throughout production',
    },
    {
      title: 'Export Documentation',
      description: 'Complete compliance with export requirements and certifications',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5945665/pexels-photo-5945665.jpeg?auto=compress&cs=tinysrgb&w=1260)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Quality Policy</h1>
          <p className="text-xl text-green-50">
            Committed to Excellence in Every Product
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-green-50 px-4 py-2 rounded-full inline-block mb-4">
              Our Commitment
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Quality is Our Foundation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Smart Associates, quality is not just a department—it's a culture that permeates every aspect of our operations. We are committed to delivering products that meet the highest standards of purity, safety, and excellence. Our quality policy reflects our dedication to customer satisfaction and continuous improvement.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-xl mb-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-green-600 p-3 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Quality Commitment</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  We pledge to manufacture and supply dehydrated products that consistently meet customer expectations and regulatory requirements. Our commitment extends to:
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 ml-16">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Maintaining product purity and natural properties</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Ensuring hygienic processing conditions</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Complying with all applicable regulations</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Continuous process improvement</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Customer satisfaction as priority</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Environmental responsibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-white px-4 py-2 rounded-full inline-block mb-4">
              Quality Pillars
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Four Pillars of Quality Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-green-600 mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-6">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-green-50 px-4 py-2 rounded-full inline-block mb-4">
                Testing & Inspection
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Rigorous Testing Procedures
              </h2>
              <p className="text-gray-600 text-lg">
                Every batch undergoes comprehensive testing to ensure it meets our quality standards
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Physical Testing</h4>
                  <p className="text-gray-600">
                    Evaluation of color, texture, particle size, and appearance to ensure uniformity and quality standards.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Chemical Analysis</h4>
                  <p className="text-gray-600">
                    Testing for moisture content, pH levels, and presence of any contaminants or adulterants.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Microbiological Testing</h4>
                  <p className="text-gray-600">
                    Comprehensive microbial analysis to ensure product safety and extended shelf life.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Nutritional Verification</h4>
                  <p className="text-gray-600">
                    Analysis of nutritional content to verify that dehydration preserves essential nutrients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-white px-4 py-2 rounded-full inline-block mb-4">
                Compliance
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Regulatory Compliance & Standards
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {complianceStandards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{standard.title}</h3>
                  <p className="text-gray-600">{standard.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Certifications & Documentation
              </h3>
              <p className="text-gray-600 text-center mb-8">
                We maintain all necessary certifications and documentation required for domestic and international trade. Our export documentation is complete, accurate, and timely.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-700 font-medium">Compliant</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">ISO</div>
                  <div className="text-gray-700 font-medium">Ready</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">Export</div>
                  <div className="text-gray-700 font-medium">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-10 rounded-2xl shadow-2xl">
              <div className="flex items-start space-x-4 mb-6">
                <Users className="w-10 h-10 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold mb-4">Customer Satisfaction Focus</h2>
                  <p className="text-green-50 text-lg leading-relaxed mb-6">
                    Our ultimate measure of quality is customer satisfaction. We actively seek feedback, address concerns promptly, and continuously improve our processes to exceed expectations. Every customer interaction is an opportunity to demonstrate our commitment to quality and service excellence.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="font-semibold mb-1">Responsive Communication</div>
                      <div className="text-sm text-green-50">Quick response to inquiries and concerns</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="font-semibold mb-1">Custom Solutions</div>
                      <div className="text-sm text-green-50">Tailored products for specific needs</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="font-semibold mb-1">Reliable Delivery</div>
                      <div className="text-sm text-green-50">On-time dispatch and logistics</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="font-semibold mb-1">After-Sales Support</div>
                      <div className="text-sm text-green-50">Continued support post-delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
