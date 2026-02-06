import React from 'react';


const PrimaryCareTeam: React.FC = () => {
  const doctors = [
    {
      name: "Dr. Nazish Aamer",
      title: "Family Physician",
      credentials: "MBBS, CCFP",
      specialties: ["Women's Health", "Chronic Disease Management", "Preventive Care", "Hospital Medicine"],
      bio: "Dr. Nazish Aamer has been with Alberta Health Services since November 2018, serving as facility medical director of Daysland and currently working as a hospitalist in Ponoka. She is passionate about providing comprehensive, patient-centered care for women with chronic conditions, combining her extensive hospital medicine experience with primary care expertise.",
      languages: ["English", "Urdu", "Hindi"],
      interests: ["Hospital medicine leadership", "Healthcare innovation", "Community health initiatives", "Medical education"]
    },
    {
      name: "Dr. Hania Aamer",
      title: "Family Physician",
      credentials: "MD, CCFP",
      specialties: ["Women's Health", "Chronic Disease Management", "Preventive Care", "Mental Health"],
      bio: "Dr. Hania Aamer completed her family medicine residency at University of Calgary after finishing her undergraduate degree in biological sciences at University of Alberta and medical school at University of Calgary. She is dedicated to providing comprehensive primary care with a focus on women's health and chronic disease management, building long-term relationships with patients through a holistic approach to healthcare.",
      languages: ["English", "Urdu", "Hindi"],
      interests: ["Women's health advocacy", "Preventive care", "Patient education", "Community health"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Primary Care Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alberta-qualified family physicians dedicated to providing exceptional ongoing care 
            for women's chronic conditions through our telehealth platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-rose-200 hover:shadow-xl transition-shadow h-full">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="w-32 h-32 mx-auto md:mx-0 mb-4 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full flex items-center justify-center">
                    {doctor.name === "Dr. Nazish Aamer" ? (
                      <img 
                        src="/images/dr-nazish-aamer.jpg"
                        alt={doctor.name}
                        className="w-full h-full rounded-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : doctor.name === "Dr. Hania Aamer" ? (
                      <img 
                        src="/images/dr-hania-aamer.jpg"
                        alt={doctor.name}
                        className="w-full h-full rounded-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : (
                      <div className="text-4xl text-rose-600">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-rose-600 font-semibold mb-1">{doctor.title}</p>
                  <p className="text-gray-600 text-sm">{doctor.credentials}</p>
                </div>

                <div className="flex-1 space-y-4 flex flex-col">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Clinical Focus</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{doctor.bio}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((language, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Interests</h4>
                    <p className="text-sm text-gray-600">
                      {doctor.interests.join(" • ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our Alberta Primary Care Team?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">👩‍⚕️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Alberta-Qualified</h3>
              <p className="text-gray-600 text-sm">
                All physicians are licensed by the College of Physicians & Surgeons of Alberta 
                and have extensive experience in Alberta's healthcare system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="font-semibold text-gray-900 mb-2">Specialized Expertise</h3>
              <p className="text-gray-600 text-sm">
                Our team has specialized training and experience in managing women's chronic 
                conditions through ongoing primary care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-4">💝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Patient-Centered Care</h3>
              <p className="text-gray-600 text-sm">
                We take the time to understand your unique health needs and develop personalized 
                treatment plans that work for your lifestyle.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-rose-50 rounded-2xl p-8 border border-rose-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Meet Your Primary Care Team?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book a consultation with one of our Alberta-qualified family physicians and start 
              your journey to better health management.
            </p>
            <a 
              href="/booking" 
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-rose-700 transition-colors"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCareTeam;
