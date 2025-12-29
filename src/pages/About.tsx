import { Target, Eye, Award, Users, CheckCircle, MapPin } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing at every stage of production',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Focus',
      description: 'Dedicated to meeting and exceeding client expectations',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Continuous improvement in processes and products',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Smart Associates</h1>
          <p className="text-xl text-green-50">Your Trusted Partner in Premium Dehydrated Products</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5945665/pexels-photo-5945665.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Smart Associates Facility"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Smart Associates is a leading manufacturer and exporter of premium quality dehydrated fruits, vegetables, herbal powders, and dried flower petals. Established with a vision to provide natural, pure, and export-quality products, we have built a reputation for excellence in the dehydration industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located in the Bommuru, Andhra Pradesh, India, we leverage the region's rich agricultural resources and our state-of-the-art processing facilities to deliver products that meet the highest international standards.
              </p>
              <div className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg">
                <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Our Location</h3>
                  <p className="text-gray-600">Bommuru, Andhra Pradesh, India</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Strategically located to source the finest raw materials and ensure efficient export logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-green-600">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-xl">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To manufacture and supply premium quality dehydrated products that meet international standards while maintaining environmental sustainability and contributing to the well-being of our customers and communities.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Deliver 100% natural and pure products</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Maintain highest quality and hygiene standards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Support sustainable agricultural practices</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-green-600">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-xl">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become a globally recognized leader in the dehydrated products industry, known for our commitment to quality, innovation, and customer satisfaction, while contributing to a healthier world through natural food solutions.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Expand global market presence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Innovate with new product lines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Set industry benchmarks for excellence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-green-600"
              >
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-green-600 mb-4 shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Our Commitment to Quality & Customer Satisfaction
            </h2>
            <div className="bg-white p-10 rounded-2xl shadow-xl space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                At  Smart Associates, quality is not just a goal—it's a promise. We understand that our success is built on the trust our customers place in us, and we take this responsibility seriously. Every product that leaves our facility undergoes rigorous quality checks to ensure it meets our stringent standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our state-of-the-art processing unit is equipped with modern dehydration technology that preserves the natural flavor, color, and nutritional content of raw materials. We maintain strict hygiene protocols throughout the production process, from sourcing to packaging.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Premium Raw Materials</h4>
                    <p className="text-gray-600 text-sm">Carefully selected from trusted sources</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Advanced Technology</h4>
                    <p className="text-gray-600 text-sm">Modern processing and quality control</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Skilled professionals dedicated to excellence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Timely Delivery</h4>
                    <p className="text-gray-600 text-sm">Reliable logistics and export services</p>
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

export default About;
