import React from 'react';

const MigraineTreatment: React.FC = () => {
  const symptoms = [
    "Severe throbbing or pulsating headaches",
    "Head pain on one side of the head",
    "Sensitivity to light (photophobia)",
    "Sensitivity to sound (phonophobia)",
    "Nausea and vomiting",
    "Visual disturbances (aura)",
    "Dizziness or vertigo"
  ];

  const treatments = [
    {
      category: "Preventive Medications",
      items: [
        "Beta blockers for migraine prevention",
        "Antidepressants for chronic migraines",
        "Anti-seizure medications",
        "Botox injections for chronic migraines",
        "CGRP inhibitors for prevention"
      ]
    },
    {
      category: "Acute Treatment",
      items: [
        "Triptans for migraine attacks",
        "NSAIDs for mild to moderate pain",
        "Anti-nausea medications",
        "Combination therapies",
        "Emergency rescue medications"
      ]
    },
    {
      category: "Lifestyle & Prevention",
      items: [
        "Trigger identification and avoidance",
        "Stress management techniques",
        "Sleep hygiene optimization",
        "Exercise and nutrition guidance",
        "Biofeedback and relaxation training"
      ]
    }
  ];

  const whatToExpect = [
    "Comprehensive headache assessment and diagnosis",
    "Personalized preventive and acute treatment plan",
    "Headache diary and symptom tracking tools",
    "Regular follow-ups to optimize treatment effectiveness",
    "Lifestyle modification guidance for trigger management",
    "Coordination with specialists when needed for complex cases"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Migraine Treatment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive primary care management for chronic migraines including 
            preventive treatments, acute management, and trigger identification strategies.
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-rose-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Chronic Migraines</h2>
          <p className="text-gray-600 mb-4">
            Chronic migraines are defined as having 15 or more headache days per month, 
            with at least 8 days having migraine features. Our primary care approach 
            focuses on reducing headache frequency, severity, and improving quality of life 
            through evidence-based treatments and ongoing telehealth support.
          </p>
          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
            <p className="text-rose-800">
              <strong>Good news:</strong> While migraines are chronic, many patients achieve 
              significant improvement with proper management. We're here to help you find relief.
            </p>
          </div>
        </div>

        {/* Symptoms Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-rose-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Migraine Symptoms</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alberta Healthcare Pathway for Migraines</h2>
          <p className="mb-6">
            Alberta Health Services follows a stepwise approach to migraine management through primary care:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Primary Care Management</h3>
              <ul className="space-y-2 text-rose-100">
                <li>• Headache assessment and diagnosis</li>
                <li>• Preventive medication management</li>
                <li>• Acute treatment optimization</li>
                <li>• Lifestyle modification guidance</li>
                <li>• Ongoing care and monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">When Specialist Input is Needed</h3>
              <ul className="space-y-2 text-rose-100">
                <li>• Neurologist referral for complex cases</li>
                <li>• Diagnostic clarification</li>
                <li>• Advanced treatment options</li>
                <li>• Botox therapy coordination</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-rose-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect from Our Migraine Care</h2>
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
              <div className="text-3xl font-bold text-rose-600 mb-2">70-80%</div>
              <p className="text-gray-600">Patients achieve 50% reduction in headache days</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">4-6 weeks</div>
              <p className="text-gray-600">Average time to see preventive treatment effects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">3 months</div>
              <p className="text-gray-600">Typical duration for comprehensive management</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">88%</div>
              <p className="text-gray-600">Report improved quality of life</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Migraine Management Journey?</h2>
            <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
              Get personalized migraine care through our telehealth services, covered by Alberta Healthcare.
            </p>
            <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
              Book Migraine Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigraineTreatment;
