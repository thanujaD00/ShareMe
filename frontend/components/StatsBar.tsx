const StatsBar = () => (
  <div className="bg-gradient-to-r from-[#16213e] via-[#1a2b4a] to-[#16213e] py-12 relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-20 h-20 bg-red-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-blue-500/5 rounded-full blur-lg"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="group text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 group-hover:border-red-500/50 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-red-400 transition-colors duration-300">
                10K+
              </span>
              <div className="mt-2">
                <span className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                  Active Users
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="group text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 group-hover:border-blue-500/50 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-blue-400 transition-colors duration-300">
                25K+
              </span>
              <div className="mt-2">
                <span className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                  Cards Delivered
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="group text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 group-hover:border-green-500/50 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-green-400 transition-colors duration-300">
                99%
              </span>
              <div className="mt-2">
                <span className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                  Satisfaction Rate
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="group text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 group-hover:border-purple-500/50 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300">
                24/7
              </span>
              <div className="mt-2">
                <span className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                  Customer Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StatsBar; 