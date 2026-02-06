import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "1",
      title: "Book Your Consultation",
      description: "Schedule a virtual appointment with our women's health specialists. No referral needed for most conditions."
    },
    {
      step: "2", 
      title: "Alberta Healthcare Coverage",
      description: "Your consultation is covered under Alberta Healthcare. Simply provide your personal health card information."
    },
    {
      step: "3",
      title: "Virtual Consultation",
      description: "Meet with your specialist via secure video call. Discuss symptoms, treatment options, and create a personalized care plan."
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "Regular follow-ups, prescription management, and continuous support for your chronic condition management."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent, and designed for Alberta women. Get the care you need from the comfort of your home.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">24-48hr</div>
              <p className="text-gray-600">Average wait time for first consultation</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">$0</div>
              <p className="text-gray-600">Cost with Alberta Health Care coverage</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
              <p className="text-gray-600">Patient satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
