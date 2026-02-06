import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Finally, a service that understands women's health in Alberta. No more waiting months for specialists.",
      author: "Sarah K., Calgary",
      condition: "PCOS"
    },
    {
      text: "The telehealth approach saved me so much time. I could manage my IC while working full-time in Edmonton.",
      author: "Maria L., Edmonton", 
      condition: "Interstitial Cystitis"
    },
    {
      text: "Having my IBS taken seriously was life-changing. The Alberta healthcare coverage made it stress-free.",
      author: "Jennifer M., Red Deer",
      condition: "IBS"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🌸 Alberta Women's Health Excellence</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-normal">
              Chronic Condition Care, 
              <span className="block text-yellow-200">Made Simple</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-normal">
              Alberta-qualified family doctors providing ongoing primary care management for women's chronic conditions through telehealth. 
              <span className="block font-semibold text-pink-100 mt-2">
                Specialist referrals available when needed - comprehensive Alberta healthcare coordination.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-rose-100 text-rose-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-rose-200 transition-all transform hover:scale-105 shadow-xl">
                Start Your Healing Journey
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/30 transition-all border-2 border-white/50">
                <a href="/primary-care-team" className="block w-full h-full">Meet Our Primary Care Team</a>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-pink-100">24-48hr</div>
                <div className="text-sm text-white/80">Wait Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-100">$0</div>
                <div className="text-sm text-white/80">With AHC</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-100">1,200+</div>
                <div className="text-sm text-white/80">Women Empowered</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Testimonial */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center text-rose-900 font-bold">
                  {testimonials[currentTestimonial].author.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="text-white font-semibold">{testimonials[currentTestimonial].author}</div>
                  <div className="text-white/70 text-sm">{testimonials[currentTestimonial].condition}</div>
                </div>
              </div>
              
              <blockquote className="text-white text-base mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentTestimonial === index ? 'bg-rose-200 w-8' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-rose-100 text-rose-900 rounded-xl p-4 shadow-xl transform rotate-3">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs">Would Recommend</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-purple-100 text-purple-900 rounded-xl p-4 shadow-xl transform -rotate-2">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-xs">Patient Reviews</div>
            </div>
          </div>
        </div>

        {/* CPSA Standards Section */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-white font-semibold text-xl mb-2">CPSA-Compliant Virtual Care</h3>
            <p className="text-white/80 text-sm">Our family physicians provide virtual care in accordance with CPSA standards, ensuring:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { text: "The same standard of care as in-person visits", icon: "⚕️" },
              { text: "Safe assessment and management of chronic conditions via telehealth", icon: "🔒" },
              { text: "Continuity of care with access to in-person care when needed", icon: "🔄" },
              { text: "Care delivered by Alberta-licensed physicians", icon: "🏥" }
            ].map((standard, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                <div className="text-2xl mb-2">{standard.icon}</div>
                <div className="text-white text-sm leading-relaxed">{standard.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Conditions Bar */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="text-center mb-4">
            <h3 className="text-white font-semibold text-lg">We Specialize In:</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🦠", name: "IBS", desc: "Digestive Health" },
              { icon: "🏥", name: "Interstitial Cystitis", desc: "Bladder Health" },
              { icon: "⚖️", name: "PCOS", desc: "Hormonal Balance" },
              { icon: "🧠", name: "Migraines", desc: "Neurological Care" }
            ].map((condition, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">{condition.icon}</div>
                <div className="text-white font-semibold text-sm">{condition.name}</div>
                <div className="text-white/70 text-xs">{condition.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
