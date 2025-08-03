export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      <div className="container mx-auto px-4 py-20">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight mb-6 font-sans">
            HOME PAGE
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Welcome to{" "}
            <span className="text-blue-600 font-bold">Easy Work</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Connect with contractors to assign and outsource jobs, quote
            customers, complete them, and invoice—all in one place.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
          <button className="relative bg-gradient-to-r from-green-500 to-green-600 text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out">
            Login
          </button>

          <button className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out">
            Sign Up
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Easy Assignment
            </h3>
            <p className="text-sm text-gray-600">
              Submit competitive bids quickly and efficiently.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Smart Quoting
            </h3>
            <p className="text-sm text-gray-600">
              Generate professional quotes for your customers.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded-sm"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Simple Invoicing
            </h3>
            <p className="text-sm text-gray-600">
              Handle payments and invoicing seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
