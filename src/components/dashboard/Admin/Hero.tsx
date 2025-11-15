import React from "react";

export default function HospitalRegistration() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">

      {/* HEADER */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 xl:px-12 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-gray-800">
                HealthConnect Partner Portal
              </span>
            </div>

            <button className="px-5 sm:px-7 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-all border border-blue-200 hover:border-blue-300">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex items-center justify-center py-10 sm:py-12 xl:py-16">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 xl:px-12">

          {/* Responsive Grid (1 column mobile → 2 columns desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 xl:gap-20 items-center">

            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center text-center lg:text-left">

              {/* Hero Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-6 sm:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop"
                  alt="Modern hospital environment"
                  className="w-full h-[300px] sm:h-[420px] md:h-[500px] xl:h-[600px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 xl:p-12">
                  <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4 sm:mb-5 leading-tight">
                    Partner with HealthConnect:
                    <span className="block text-teal-300 mt-1 sm:mt-2">
                      Streamline Patient Bookings
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg xl:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Join thousands of healthcare providers who trust HealthConnect to manage appointments, reduce no-shows, and optimize staff scheduling—all in one platform.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-chart-line text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Increase Visibility</h3>
                  <p className="text-sm text-gray-600">Reach 300% more patients</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-bell text-teal-600 text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Reduce No-Shows</h3>
                  <p className="text-sm text-gray-600">Automated reminders</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-users text-green-600 text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Manage Staff</h3>
                  <p className="text-sm text-gray-600">Efficient scheduling</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 xl:p-12 border border-gray-100">

                {/* Header */}
                <div className="mb-6 sm:mb-8 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-800 mb-3">
                    Hospital Registration
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 font-medium">
                    Step 1 of 3
                  </p>
                </div>

                {/* FORM */}
                <form className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hospital Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your hospital name"
                      className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-gray-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Administrator Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="admin@hospital.com"
                      className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-gray-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hospital Registration Number{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter registration number"
                      className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-gray-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold text-base sm:text-lg py-4 sm:py-5 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mt-4"
                  >
                    Next: Contact & Location
                    <i className="fas fa-arrow-right ml-3"></i>
                  </button>
                </form>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Already registered?
                    <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">
                      Sign in here
                    </a>
                  </p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-sm text-gray-600">
                <div className="flex items-center gap-2.5">
                  <i className="fas fa-shield-alt text-teal-500 text-lg"></i>
                  <span className="font-medium">HIPAA Compliant</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <i className="fas fa-lock text-teal-500 text-lg"></i>
                  <span className="font-medium">256-bit Encryption</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <i className="fas fa-check-circle text-teal-500 text-lg"></i>
                  <span className="font-medium">ISO Certified</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              © 2024 HealthConnect. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 font-medium">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 font-medium">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 font-medium">Support</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
