import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Package } from 'lucide-react';
import { getProductById } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="pt-20">
      <section className="py-12 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded-lg overflow-hidden border-4 transition-all ${
                        selectedImage === index
                          ? 'border-green-600 scale-105'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-32 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  {product.categoryName}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {product.detailedDescription}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <Package className="w-6 h-6 text-green-600" />
                  <span>Product Specifications</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Color</p>
                    <p className="font-semibold text-gray-800">{product.specifications.color}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Moisture Content</p>
                    <p className="font-semibold text-gray-800">
                      {product.specifications.moistureContent}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Shelf Life</p>
                    <p className="font-semibold text-gray-800">{product.specifications.shelfLife}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Packaging Type</p>
                    <p className="font-semibold text-gray-800">
                      {product.specifications.packagingType}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/products"
                  className="flex-1 bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all text-center"
                >
                  View More Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Why Choose Our {product.name}?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl text-center">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">100% Natural</h3>
                <p className="text-gray-600 text-sm">
                  No artificial additives or preservatives
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl text-center">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Export Quality</h3>
                <p className="text-gray-600 text-sm">
                  Meets international quality standards
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl text-center">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Bulk Available</h3>
                <p className="text-gray-600 text-sm">
                  Competitive pricing for bulk orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
