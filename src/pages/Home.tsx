import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, Shield, Package, TrendingUp, Factory, Pill, FlaskConical, Palette } from 'lucide-react';
import { categoryPreviews } from '../data/products';

const Home = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: '100% Natural Products',
      description: 'Pure and chemical-free dehydrated products',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Hygienic Processing',
      description: 'State-of-the-art processing facility',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Export Quality Standards',
      description: 'Meeting international quality benchmarks',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Custom Packaging',
      description: 'Flexible packaging solutions for your needs',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Competitive Pricing',
      description: 'Best value for premium quality products',
    },
  ];

  const industries = [
    {
      icon: <Factory className="w-10 h-10" />,
      name: 'Food & Beverages',
      description: 'Natural ingredients for food processing',
    },
    {
      icon: <Pill className="w-10 h-10" />,
      name: 'Nutraceuticals',
      description: 'Health supplements and nutrition',
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      name: 'Pharmaceuticals',
      description: 'Medicinal and therapeutic applications',
    },
    {
      icon: <Palette className="w-10 h-10" />,
      name: 'Cosmetics',
      description: 'Natural beauty and skincare products',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[600px] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-green-900/90" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Premium Dehydrated Fruits & Vegetable Powders
            </h1>
            <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl font-light">
              <span>Natural</span>
              <span className="w-2 h-2 bg-white rounded-full" />
              <span>Pure</span>
              <span className="w-2 h-2 bg-white rounded-full" />
              <span>Export Quality</span>
            </div>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Leading manufacturer and exporter of high-quality dehydrated products from Vijayawada, India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/products"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-all hover:scale-105 shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-green-50 px-4 py-2 rounded-full">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Your Trusted Partner in Dehydrated Products
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Smart Associates is a premier manufacturer and exporter of high-quality dehydrated fruits, vegetables, herbal powders, and dried flower petals. Based in Vijayawada, Andhra Pradesh, we combine traditional wisdom with modern technology to deliver products that meet international standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to quality, hygiene, and customer satisfaction has made us a preferred supplier for businesses across food processing, nutraceuticals, pharmaceuticals, and cosmetics industries worldwide.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors group"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50" />
              <img
                src="https://images.pexels.com/photos/5945829/pexels-photo-5945829.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About Smart Associates"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-white px-4 py-2 rounded-full inline-block mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Product Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our wide range of premium dehydrated products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryPreviews.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center text-green-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    <span>Explore Category</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-green-50 px-4 py-2 rounded-full inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Excellence in Every Product
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:bg-green-50 p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-full text-green-600 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-white px-4 py-2 rounded-full inline-block mb-4">
              Industries We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our premium products serve diverse sectors worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-green-600"
              >
                <div className="text-green-600 mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Looking for Bulk Dehydrated Powders?
            </h2>
            <p className="text-xl text-green-50">
              Get in touch with us for competitive pricing and custom packaging solutions
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <span>Send Enquiry</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
