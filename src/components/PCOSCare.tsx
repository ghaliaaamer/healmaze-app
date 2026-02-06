import React from 'react';

const PCOSCare: React.FC = () => {
  const symptoms = [
    "Irregular or absent menstrual periods",
    "Excess hair growth (hirsutism)",
    "Acne and oily skin",
    "Weight gain or difficulty losing weight",
    "Thinning hair or male-pattern baldness",
    "Dark patches of skin (acanthosis nigricans)",
    "Infertility or difficulty conceiving"
  ];

  const treatments = [
    {
      category: "Hormonal Management",
      items: [
        "Birth control pills for menstrual regulation",
        "Anti-androgen medications",
        "Metformin for insulin resistance",
        "Hormone therapy optimization",
        "Menstrual cycle monitoring"
      ]
    },
    {
      category: "Lifestyle & Metabolic Health",
      items: [
        "Weight management strategies",
        "Exercise and nutrition planning",
        "Blood sugar monitoring",
        "Dietary modifications",
        "Sleep hygiene optimization"
      ]
    },
    {
      category: "Fertility & Reproductive Health",
      items: [
        "Fertility planning and counseling",
        "Ovulation tracking",
        "Preconception care",
        "Pregnancy planning",
        "Reproductive health education"
      ]
    }
  ];

  const whatToExpect = [
    "Comprehensive hormonal and metabolic assessment",
    "Personalized treatment plan addressing all PCOS aspects",
    "Regular monitoring of hormonal levels and symptoms",
    "Lifestyle modification guidance with ongoing support",
    "Fertility counseling when planning pregnancy",
    "Mental health support for PCOS-related challenges"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PCOS Care
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive primary care management for Polycystic Ovary Syndrome including 
            hormonal balance, metabolic health, and fertility planning.
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-rose-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding PCOS</h2>
          <p className="text-gray-600 mb-4">
            Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age. 
            Our primary care approach addresses all aspects of PCOS including hormonal imbalances, 
            metabolic issues, and reproductive health through ongoing telehealth management.
          </p>
          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
            <p className="text-rose-800">
              <strong>Good news:</strong> While PCOS is chronic, proper management can significantly 
              improve symptoms, regulate cycles, and enhance quality of life. We're here to support your journey.
            </p>
          </div>
        </div>

        {/* Symptoms Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-rose-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common PCOS Symptoms</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-rose-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{treatment.category}</h3>
              <ul className="space-y-2">
                {treatment.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg className="w-4 h-4 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alberta Healthcare Pathway */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alberta Healthcare Pathway for PCOS</h2>
          <p className="mb-6">
            Alberta Health Services follows a comprehensive approach to PCOS management through primary care:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Primary Care Management</h3>
              <ul className="space-y-2 text-rose-100">
                <li>• Hormonal assessment and monitoring</li>
                <li>• Metabolic health screening</li>
                <li>• Lifestyle modification guidance</li>
                <li>• Medication management</li>
                <li>• Ongoing care coordination</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">When Specialist Input is Needed</h3>
              <ul className="space-y-2 text-rose-100">
                <li>• Complex hormonal disorders</li>
                <li>• Fertility specialist referral</li>
                <li>• Advanced metabolic issues</li>
                <li>• Dermatologist referral for severe symptoms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-rose-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect from Our PCOS Care</h2>
          <div className="space-y-4">
            {whatToExpect.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-rose-600 font-semibold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatment Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">75-85%</div>
              <p className="text-gray-600">Patients achieve symptom improvement</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">3-6 months</div>
              <p className="text-gray-600">Average time to see hormonal regulation</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">6 months</div>
              <p className="text-gray-600">Typical duration for comprehensive management</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">90%</div>
              <p className="text-gray-600">Report improved quality of life</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your PCOS Management Journey?</h2>
            <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
              Get personalized PCOS care through our telehealth services, covered by Alberta Healthcare.
            </p>
            <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
              Book PCOS Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCOSCare;
