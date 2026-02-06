import React, { useState } from 'react';

interface Condition {
  id: string;
  name: string;
  overview: string;
  symptoms: string[];
  albertaPathway: string;
  telehealthBenefits: string[];
  whatToExpect: string[];
}

const ConditionGuide: React.FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<string>('ibs');

  const conditions: Record<string, Condition> = {
    ibs: {
      id: 'ibs',
      name: 'Irritable Bowel Syndrome (IBS)',
      overview: 'IBS is a common disorder affecting the large intestine, causing cramping, abdominal pain, bloating, gas, and diarrhea or constipation. It\'s a chronic condition that needs long-term management.',
      symptoms: [
        'Abdominal pain or cramping',
        'Bloating and gas',
        'Diarrhea or constipation (sometimes alternating)',
        'Mucus in the stool',
        'Feeling of incomplete bowel movement'
      ],
      albertaPathway: 'Alberta Health Services follows a stepwise approach starting with lifestyle modifications, dietary changes (low FODMAP diet), and progressing to medications based on symptom severity. Regular follow-ups with your family doctor are essential.',
      telehealthBenefits: [
        'Discuss dietary changes and food diaries',
        'Medication management and adjustments',
        'Symptom tracking and progress monitoring',
        'Stress management techniques',
        'Referral coordination for specialists when needed'
      ],
      whatToExpect: [
        'Initial comprehensive assessment of symptoms and medical history',
        'Personalized treatment plan development',
        'Regular follow-ups every 4-6 weeks initially',
        'Coordination with dietitians and gastroenterologists',
        'Support for mental health aspects of IBS'
      ]
    },
    ic: {
      id: 'ic',
      name: 'Interstitial Cystitis',
      overview: 'Interstitial cystitis (IC) is a chronic condition causing bladder pressure, bladder pain, and sometimes pelvic pain. The pain ranges from mild discomfort to severe pain.',
      symptoms: [
        'Chronic pelvic pain',
        'Urgent and frequent urination',
        'Pain during sexual intercourse',
        'Bladder pressure or discomfort',
        'Pain that worsens with bladder filling'
      ],
      albertaPathway: 'AHS recommends a multidisciplinary approach including dietary modifications, physical therapy, medications, and bladder training. Diagnosis often requires ruling out other conditions through various tests.',
      telehealthBenefits: [
        'Symptom assessment and tracking',
        'Medication management',
        'Dietary guidance and trigger identification',
        'Bladder training techniques',
        'Coordination with urologists and physical therapists'
      ],
      whatToExpect: [
        'Detailed symptom evaluation and medical history review',
        'Bladder diary and symptom tracking setup',
        'Individualized treatment plan creation',
        'Regular monitoring and treatment adjustments',
        'Support for lifestyle modifications'
      ]
    },
    pcos: {
      id: 'pcos',
      name: 'Polycystic Ovary Syndrome (PCOS)',
      overview: 'PCOS is a hormonal disorder common among women of reproductive age. Women with PCOS may have infrequent or prolonged menstrual periods or excess male hormone levels.',
      symptoms: [
        'Irregular menstrual cycles',
        'Excess hair growth (hirsutism)',
        'Acne and oily skin',
        'Weight gain or difficulty losing weight',
        'Thinning hair or male-pattern baldness'
      ],
      albertaPathway: 'AHS focuses on lifestyle modifications, hormonal management, and metabolic health monitoring. Regular screening for diabetes, cardiovascular risk factors, and mental health support are key components.',
      telehealthBenefits: [
        'Hormonal management and medication adjustments',
        'Lifestyle counseling and weight management',
        'Metabolic health monitoring',
        'Fertility planning and support',
        'Mental health and emotional support'
      ],
      whatToExpect: [
        'Comprehensive hormonal and metabolic assessment',
        'Personalized treatment plan based on symptoms and goals',
        'Regular monitoring of metabolic parameters',
        'Coordination with endocrinologists and dietitians',
        'Support for reproductive health planning'
      ]
    },
    migraines: {
      id: 'migraines',
      name: 'Chronic Migraines',
      overview: 'Chronic migraines are defined as having 15 or more headache days per month, with at least 8 of those having migraine features. They can significantly impact quality of life.',
      symptoms: [
        'Severe throbbing pain, often on one side of the head',
        'Sensitivity to light, sound, and smells',
        'Nausea and vomiting',
        'Visual disturbances (aura)',
        'Dizziness and fatigue'
      ],
      albertaPathway: 'AHS follows a stepped care approach starting with lifestyle modifications, acute treatments, and progressing to preventive medications. Botox treatments and nerve blocks are available for refractory cases.',
      telehealthBenefits: [
        'Headache diary and trigger identification',
        'Preventive medication management',
        'Acute treatment optimization',
        'Lifestyle modification counseling',
        'Coordination with neurologists and pain specialists'
      ],
      whatToExpect: [
        'Comprehensive headache assessment and medical history',
        'Headache diary setup and analysis',
        'Individualized treatment plan development',
        'Regular medication reviews and adjustments',
        'Support for disability and workplace accommodations'
      ]
    }
  };

  const currentCondition = conditions[selectedCondition];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Condition Guides</h1>
          <p className="text-lg text-gray-600">
            Evidence-based information following Alberta healthcare pathways
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Select Condition</h3>
              <div className="space-y-2">
                {Object.values(conditions).map((condition) => (
                  <button
                    key={condition.id}
                    onClick={() => setSelectedCondition(condition.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCondition === condition.id
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {condition.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {currentCondition.name}
              </h2>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{currentCondition.overview}</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Symptoms</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {currentCondition.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Alberta Healthcare Pathway</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">{currentCondition.albertaPathway}</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Telehealth Benefits</h3>
                  <ul className="space-y-2">
                    {currentCondition.telehealthBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Expect</h3>
                  <ul className="space-y-2">
                    {currentCondition.whatToExpect.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-teal-900 mb-3">Ready to Start Your Journey?</h4>
                  <p className="text-teal-800 mb-4">
                    Get personalized care for your condition through our telehealth services, 
                    covered by Alberta Healthcare.
                  </p>
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionGuide;
