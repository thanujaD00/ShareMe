const StatsBar = () => (
  <div className="bg-[#16213e] py-8">
    <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-8 px-8">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">10K+</span>
        <span className="text-gray-400 text-sm mt-1">Active Users</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">25K+</span>
        <span className="text-gray-400 text-sm mt-1">Cards Delivered</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">99%</span>
        <span className="text-gray-400 text-sm mt-1">Satisfaction Rate</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">24/7</span>
        <span className="text-gray-400 text-sm mt-1">Customer Support</span>
      </div>
    </div>
  </div>
);

export default StatsBar; 