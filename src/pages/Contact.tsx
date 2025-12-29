import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        productInterest: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      content: '102-6-9, Nava Bharat Nagar, Bommuru, Andhra Pradesh   533 101, India',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 XXX XXX XXXX',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@smartassociates.com',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[350px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=1260)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-green-50">
            Get in Touch for Quality Dehydrated Products
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-green-600">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            ))}
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl shadow-lg text-white text-center flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">Export Enquiries Welcome</h3>
              <p className="text-green-50">
                We specialize in bulk orders and international shipments
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wide bg-green-50 px-4 py-2 rounded-full inline-block mb-4">
                  Get in Touch
                </span>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form and our team will get back to you within 24 hours. For urgent inquiries, please call us directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Interest
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="vegetable-powders">Vegetable Powders</option>
                    <option value="fruit-powders">Fruit Powders</option>
                    <option value="dried-petals">Dried Petals</option>
                    <option value="herbal-powders">Herbal Powders</option>
                    <option value="custom">Custom Requirements</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {submitSuccess && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
                    Thank you for your message! We will get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h3>
                <div className="bg-gray-200 rounded-lg overflow-hidden h-80 mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.1321880440855!2d81.79638164661442!3d16.973437221500255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3725b35dedd%3A0x1d831f066b16dc0!2s102-6-254%2C%20Navabharat%20Nagar%2C%20Kotta%20Bommuru%2C%20Andhra%20Pradesh%20533124!5e1!3m2!1sen!2sin!4v1767019330751!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Smart Associates Location"
                  />
                </div>
                <p className="text-gray-600">
                  Located in Vijayawada, we are strategically positioned to source premium raw materials and serve both domestic and international markets efficiently.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    <span className="text-gray-600">
                      Competitive pricing for bulk orders
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    <span className="text-gray-600">
                      Custom formulations available
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    <span className="text-gray-600">
                      Export documentation assistance
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    <span className="text-gray-600">
                      Sample availability for quality testing
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    <span className="text-gray-600">
                      Flexible packaging options
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
