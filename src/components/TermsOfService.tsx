import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          
          <div className="text-sm text-gray-600 mb-8">
            <p>Last updated: January 2026</p>
            <p>Effective date: January 26, 2026</p>
          </div>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using HealMaze telehealth services ("Services"), you agree to be bound by these Terms of Service ("Terms"). 
                These Terms govern your relationship with HealMaze Medical Inc., an Alberta-registered healthcare provider operating 
                under Alberta Health Services guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Healthcare Services</h2>
              <div className="space-y-3">
                <p>
                  <strong>2.1 Service Scope:</strong> HealMaze provides primary care management for women's chronic conditions 
                  through telehealth consultations with Alberta-qualified family physicians.
                </p>
                <p>
                  <strong>2.2 Alberta Healthcare Coverage:</strong> Services are covered under Alberta Healthcare for eligible 
                  residents with valid Alberta Personal Health Cards.
                </p>
                <p>
                  <strong>2.3 Service Limitations:</strong> We do not provide emergency medical care. For medical emergencies, 
                  call 911 or visit your nearest emergency department.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Patient Responsibilities</h2>
              <div className="space-y-3">
                <p>
                  <strong>3.1 Accurate Information:</strong> You must provide complete and accurate health information. 
                  Inaccurate information may affect your care quality.
                </p>
                <p>
                  <strong>3.2 Alberta Residency:</strong> Services are available to Alberta residents only. You must have 
                  a valid Alberta Personal Health Card.
                </p>
                <p>
                  <strong>3.3 Technology Requirements:</strong> You are responsible for maintaining appropriate technology 
                  (internet connection, device) for telehealth consultations.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Privacy and Health Information</h2>
              <div className="space-y-3">
                <p>
                  <strong>4.1 Health Information Act Compliance:</strong> We comply with Alberta's Health Information Act 
                  (HIA) and all applicable privacy legislation.
                </p>
                <p>
                  <strong>4.2 Information Collection:</strong> We collect only necessary health information to provide 
                  appropriate medical care.
                </p>
                <p>
                  <strong>4.3 Information Use:</strong> Your health information is used solely for healthcare delivery, 
                  billing, and quality improvement purposes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Specialist Referrals</h2>
              <p className="leading-relaxed">
                Our Alberta-qualified family physicians may refer you to specialists when medically necessary. 
                Referrals follow Alberta Health Services protocols and are subject to specialist availability 
                and Alberta Healthcare coverage guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <div className="space-y-3">
                <p>
                  <strong>6.1 Medical Care:</strong> Our physicians provide care according to Alberta medical standards. 
                  Healthcare outcomes cannot be guaranteed.
                </p>
                <p>
                  <strong>6.2 Technology:</strong> We are not liable for technical failures beyond our control that may 
                  affect service delivery.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Service Modifications</h2>
              <p className="leading-relaxed">
                HealMaze reserves the right to modify, suspend, or discontinue services with reasonable notice. 
                Changes to Alberta Healthcare coverage or regulations may affect service availability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Termination</h2>
              <p className="leading-relaxed">
                Either party may terminate the physician-patient relationship following Alberta medical guidelines. 
                We will provide appropriate transition of care and medical record transfer as required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Alberta Law</h2>
              <p className="leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of Alberta, Canada. 
                Any disputes will be resolved through Alberta legal processes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>HealMaze Medical Inc.</strong></p>
                <p>Email: legal@healmaze.ca</p>
                <p>Phone: 1-800-HEAL-MAZE</p>
                <p>Hours: Monday-Friday, 8am-8pm Mountain Time</p>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              By using HealMaze services, you acknowledge that you have read, understood, and agree to these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
