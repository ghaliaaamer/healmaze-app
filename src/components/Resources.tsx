import React from 'react';

const Resources: React.FC = () => {
  const albertaHealthcareInfo = [
    {
      title: "Alberta Healthcare Coverage",
      description: "Complete guide to what's covered under Alberta Health Services for chronic conditions",
      type: "PDF Guide",
      size: "2.4 MB",
      downloadUrl: "#"
    },
    {
      title: "Telehealth Eligibility",
      description: "Find out if you're eligible for telehealth services under AHS",
      type: "Interactive Tool",
      size: "Online",
      downloadUrl: "#"
    },
    {
      title: "Specialist Referral Process",
      description: "Step-by-step guide to getting specialist referrals in Alberta",
      type: "Checklist",
      size: "156 KB",
      downloadUrl: "#"
    },
    {
      title: "Emergency Care Guidelines",
      description: "When to seek emergency care vs. telehealth for your condition",
      type: "Quick Reference",
      size: "89 KB",
      downloadUrl: "#"
    }
  ];

  const patientGuides = [
    {
      title: "IBS Management Guide",
      description: "Comprehensive guide to managing IBS through diet, medication, and lifestyle",
      type: "Complete Guide",
      pages: 24,
      downloadUrl: "#",
      condition: "IBS"
    },
    {
      title: "Interstitial Cystitis Handbook",
      description: "Everything you need to know about managing IC symptoms and treatments",
      type: "Handbook",
      pages: 32,
      downloadUrl: "#",
      condition: "Interstitial Cystitis"
    },
    {
      title: "PCOS Wellness Toolkit",
      description: "Tools and strategies for managing PCOS, including diet and exercise plans",
      type: "Toolkit",
      pages: 18,
      downloadUrl: "#",
      condition: "PCOS"
    },
    {
      title: "Migraine Management Journal",
      description: "Track your migraines, identify triggers, and monitor treatment effectiveness",
      type: "Journal Template",
      pages: 12,
      downloadUrl: "#",
      condition: "Migraines"
    }
  ];

  const faqs = [
    {
      question: "Is telehealth covered by Alberta Healthcare?",
      answer: "Yes, most telehealth services for chronic conditions are covered under Alberta Health Services. You'll need a valid Alberta Health Care card for verification."
    },
    {
      question: "How quickly can I see a specialist?",
      answer: "Through our telehealth service, you can typically see a specialist within 24-48 hours, compared to the traditional wait time of 6+ months."
    },
    {
      question: "What conditions do you treat?",
      answer: "We specialize in IBS, Interstitial Cystitis, PCOS, and chronic migraines. We're continuously expanding our services to cover more women's health conditions."
    },
    {
      question: "Do I need a referral from my family doctor?",
      answer: "For most conditions, you don't need a referral. However, having a family doctor who can coordinate your overall care is always recommended."
    },
    {
      question: "What technology do I need for telehealth?",
      answer: "You'll need a smartphone or computer with internet access, a webcam, and a quiet private space for your consultation."
    },
    {
      question: "Can I get prescriptions through telehealth?",
      answer: "Yes, our healthcare providers can prescribe medications when appropriate and send them directly to your preferred pharmacy."
    },
    {
      question: "How do I prepare for my first appointment?",
      answer: "Have your Alberta Health Care card ready, prepare a list of current medications, and write down your symptoms and questions."
    },
    {
      question: "Is my information secure and private?",
      answer: "Yes, we use encrypted, secure platforms that comply with Alberta Health Services privacy standards and HIPAA regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resources & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, Alberta healthcare information, and answers to your questions.
          </p>
        </div>

        {/* Alberta Healthcare Info Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Alberta Healthcare Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {albertaHealthcareInfo.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-rose-200 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                  <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{resource.size}</span>
                  <button className="text-rose-600 font-semibold hover:text-rose-700 transition-colors">
                    Download →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Patient Guides Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Patient Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {patientGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-rose-200 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mt-2">
                      {guide.condition}
                    </span>
                  </div>
                  <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
                    {guide.pages} pages
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{guide.type}</span>
                  <button className="text-rose-600 font-semibold hover:text-rose-700 transition-colors">
                    View Guide →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-xl shadow-lg border border-rose-200">
            {faqs.map((faq, index) => (
              <div key={index} className={`p-6 ${index !== faqs.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Help Section */}
        <div className="mt-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
            Our care team is here to answer your questions and help you navigate your healthcare journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors">
              Contact Support Team
            </button>
            <button className="bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-800 transition-colors border-2 border-rose-400">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
