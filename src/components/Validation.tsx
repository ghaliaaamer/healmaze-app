import React from 'react';

const Validation: React.FC = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You Are Not Alone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the challenges of living with chronic conditions. Your symptoms are valid, 
            your experiences matter, and we're here to support you every step of the way.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="text-teal-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
            <p className="text-gray-600">
              Our specialists listen to your concerns and validate your experiences. 
              We believe you and are committed to finding solutions together.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="text-teal-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based Treatment</h3>
            <p className="text-gray-600">
              Following Alberta healthcare pathways, we provide treatments proven to work 
              for your specific condition and lifestyle.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="text-teal-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
            <p className="text-gray-600">
              Connect with other Alberta women facing similar challenges. 
              Share experiences and find strength in community.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors">
            Join Our Support Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Validation;
