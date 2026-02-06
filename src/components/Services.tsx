import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "IBS Management",
      description: "Ongoing primary care management for Irritable Bowel Syndrome with dietary guidance, symptom tracking, and medication coordination.",
      icon: "🦠",
      features: [
        "Low FODMAP diet guidance and monitoring",
        "Medication management and coordination",
        "Symptom tracking and lifestyle adjustments",
        "Stress management techniques",
        "Regular follow-ups and care planning"
      ],
      waitTime: "3-5 days"
    },
    {
      title: "Interstitial Cystitis Care",
      description: "Primary care management for bladder pain syndrome with ongoing symptom monitoring and treatment coordination.",
      icon: "🏥",
      features: [
        "Bladder training program guidance",
        "Dietary trigger identification and tracking",
        "Pelvic floor therapy coordination",
        "Pain management strategies",
        "Medication optimization and monitoring"
      ],
      waitTime: "3-5 days"
    },
    {
      title: "PCOS Management",
      description: "Ongoing primary care for Polycystic Ovary Syndrome including hormonal monitoring and metabolic health management.",
      icon: "⚖️",
      features: [
        "Hormonal monitoring and medication management",
        "Metabolic health screening and monitoring",
        "Fertility planning and counseling",
        "Weight management guidance and support",
        "Mental health screening and coordination"
      ],
      waitTime: "3-5 days"
    },
    {
      title: "Migraine Treatment",
      description: "Ongoing primary care for chronic migraines with preventive treatments and acute care coordination.",
      icon: "🧠",
      features: [
        "Preventive medication management",
        "Acute treatment planning and monitoring",
        "Trigger identification and avoidance strategies",
        "Lifestyle modification guidance",
        "Specialist referral coordination when needed"
      ],
      waitTime: "3-5 days"
    },
    {
      title: "Thyroid Disorders",
      description: "Ongoing primary care management for thyroid conditions including hypothyroidism, hyperthyroidism, and autoimmune thyroid disorders.",
      icon: "🦋",
      features: [
        "Thyroid function monitoring and medication management",
        "Hormone level tracking and adjustments",
        "Autoimmune thyroid condition management",
        "Symptom monitoring and lifestyle guidance",
        "Endocrinologist referral coordination when needed"
      ],
      waitTime: "3-5 days"
    },
    {
      title: "Diabetes Management",
      description: "Ongoing primary care for Type 1 and Type 2 diabetes with blood sugar monitoring, medication management, and lifestyle coordination.",
      icon: "🩸",
      features: [
        "Blood glucose monitoring and tracking",
        "Insulin management and coordination",
        "Dietary planning and carbohydrate counting",
        "Complication prevention and screening",
        "Endocrinologist referral coordination when needed"
      ],
      waitTime: "3-5 days"
    },
    {
      title: "Obesity Management",
      description: "Ongoing primary care for weight management with personalized plans, nutritional guidance, and behavioral support.",
      icon: "⚖️",
      features: [
        "Personalized weight management plans",
        "Nutritional counseling and meal planning",
        "Exercise program development and guidance",
        "Behavioral health support and coaching",
        "Metabolic health monitoring"
      ],
      waitTime: "3-5 days"
    },
    {
      title: "Anxiety & Depression Management",
      description: "Ongoing primary care for anxiety and depression with therapy coordination, medication management, and lifestyle support.",
      icon: "🧠",
      features: [
        "Cognitive behavioral therapy coordination",
        "Medication management and monitoring",
        "Mindfulness and stress reduction techniques",
        "Sleep hygiene improvement",
        "Regular check-ins and support"
      ],
      waitTime: "3-5 days"
    },
    {
      title: "High Blood Pressure Management",
      description: "Ongoing primary care for hypertension with blood pressure monitoring, medication management, and lifestyle modification.",
      icon: "💊",
      features: [
        "Blood pressure monitoring and tracking",
        "Medication management and adjustment",
        "Dietary sodium reduction guidance",
        "Exercise program development",
        "Regular cardiovascular monitoring"
      ],
      waitTime: "3-5 days"
    },
    {
      title: "Asthma Management",
      description: "Ongoing primary care for asthma with inhaler management, trigger avoidance strategies, and action planning.",
      icon: "🫁",
      features: [
        "Inhaler technique training and monitoring",
        "Allergy trigger identification and avoidance",
        "Asthma action plan development",
        "Symptom monitoring and tracking",
        "Emergency care coordination"
      ],
      waitTime: "3-5 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alberta-qualified family doctors providing ongoing primary care management for women's chronic conditions, 
            with specialist referrals when needed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-rose-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-rose-600 font-medium">Wait time: {service.waitTime}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all">
                Learn More About {service.title}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our Primary Care Services?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Quick Appointments</h3>
              <p className="text-gray-600">See a primary care provider in 24-48 hours, not months</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Alberta Healthcare Covered</h3>
              <p className="text-gray-600">No out-of-pocket expenses for eligible services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ongoing Management</h3>
              <p className="text-gray-600">Continuous care from your dedicated primary care team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
