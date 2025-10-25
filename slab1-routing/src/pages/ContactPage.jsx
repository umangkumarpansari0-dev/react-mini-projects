import React from  'react'

const ContactPage = () => {
  return (
    <div className="py-16 bg-white min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get in Touch with CodeX</h2>
          <p className="mt-4 text-xl text-gray-600">
            We're here to answer your questions and help you with your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-gray-50 p-8 rounded-xl shadow-lg">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-5">Contact Details</h3>

            <div className="flex items-start space-x-4">
              <span className="text-indigo-600 text-2xl">📞</span>
              <div>
                <p className="font-semibold text-lg text-gray-900">Phone</p>
                <p className="text-gray-600">+91 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-indigo-600 text-2xl">📧</span>
              <div>
                <p className="font-semibold text-lg text-gray-900">Email</p>
                <p className="text-gray-600">support@codexsolutions.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-indigo-600 text-2xl">📍</span>
              <div>
                <p className="font-semibold text-lg text-gray-900">Office</p>
                <p className="text-gray-600">Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <button type="submit"
                className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;