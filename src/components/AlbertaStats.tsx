import React, { useState, useEffect } from 'react';

const AlbertaStats: React.FC = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    {
      number: "6 months",
      label: "Average wait time for women's health specialists in Alberta",
      subtext: "We reduce this to 24-48 hours",
      color: "text-rose-400"
    },
    {
      number: "1 in 5",
      label: "Alberta women suffer from chronic conditions",
      subtext: "You're not alone in this journey",
      color: "text-pink-400"
    },
    {
      number: "80%",
      label: "Of women's chronic conditions can be managed via telehealth",
      subtext: "Evidence shows virtual care is effective",
      color: "text-purple-400"
    },
    {
      number: "100%",
      label: "Covered by Alberta Healthcare",
      subtext: "No out-of-pocket expenses",
      color: "text-fuchsia-400"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="py-16 bg-gradient-to-r from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Women's Healthcare in Alberta: The Reality We're Changing
          </h2>
          <p className="text-xl text-gray-600">
            We understand the unique challenges women face in our healthcare system
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl border transition-all cursor-pointer ${
                  currentStat === index 
                    ? 'bg-rose-100 border-rose-300 scale-105' 
                    : 'bg-white border-gray-200 hover:bg-rose-50'
                }`}
                onClick={() => setCurrentStat(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`text-3xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl p-8 text-center text-white">
              <div className="text-6xl font-bold mb-4">
                {stats[currentStat].number}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stats[currentStat].label}
              </div>
              <div className="text-rose-100">
                {stats[currentStat].subtext}
              </div>
              
              <div className="mt-6 flex justify-center space-x-2">
                {stats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStat(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentStat === index ? 'bg-white w-8' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Alberta Map Accent */}
            <div className="absolute -bottom-4 -right-4 bg-purple-100 text-purple-900 rounded-xl p-4 shadow-xl transform rotate-3">
              <div className="text-sm font-bold">📍</div>
              <div className="text-xs">Serving All Alberta</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-rose-100 rounded-full px-6 py-3">
            <span className="text-rose-600 mr-2">🌸</span>
            <span className="font-medium text-gray-900">
              From Calgary to Edmonton - Supporting women's health across Alberta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbertaStats;
