import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-rose-400 mb-4">HealMaze</h3>
            <p className="text-gray-300">
              Women's health telehealth services for Alberta residents, 
              covered by Alberta Healthcare.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/ibs-management" className="hover:text-rose-400 transition-colors">IBS Management</a></li>
              <li><a href="/interstitial-cystitis" className="hover:text-rose-400 transition-colors">Interstitial Cystitis</a></li>
              <li><a href="/pcos-care" className="hover:text-rose-400 transition-colors">PCOS Care</a></li>
              <li><a href="/migraine-treatment" className="hover:text-rose-400 transition-colors">Migraine Treatment</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/terms-of-service" className="hover:text-rose-400 transition-colors">Terms of Service</a></li>
              <li><a href="/privacy-policy" className="hover:text-rose-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/health-information-act" className="hover:text-rose-400 transition-colors">Health Information Act</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/resources#alberta-healthcare" className="hover:text-rose-400 transition-colors">Alberta Healthcare Info</a></li>
              <li><a href="/resources#patient-guides" className="hover:text-rose-400 transition-colors">Patient Guides</a></li>
              <li><a href="/community" className="hover:text-rose-400 transition-colors">Support Community</a></li>
              <li><a href="/resources#faq" className="hover:text-rose-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Phone: 1-800-HEAL-MAZE</li>
              <li>Email: care@healmaze.ca</li>
              <li>Hours: Mon-Fri 8am-8pm MT</li>
              <li>Emergency: Call 911</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h4 className="text-white font-semibold mb-3">Medical Disclaimer</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              The information provided on this website is for educational purposes only and should not be considered medical advice. 
              Always consult with qualified healthcare professionals for personalized medical guidance, diagnosis, and treatment. 
              In case of medical emergencies, please call 911 or visit your nearest emergency department.
            </p>
          </div>
          
          <div className="text-center text-gray-400">
            <p>&copy; 2026 HealMaze. All rights reserved.</p>
            <p className="mt-2">
              Serving women across Alberta with compassionate, evidence-based healthcare.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
