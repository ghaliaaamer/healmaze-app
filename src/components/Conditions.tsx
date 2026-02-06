import React, { useState, useRef, useEffect } from 'react';

const Conditions: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const conditions = [
    // Hormonal & Reproductive Health
    {
      name: "Polycystic Ovary Syndrome (PCOS)",
      description: "Lab review, cycle tracking, medications (metformin, hormonal therapy), lifestyle counseling.",
      icon: "⚖️",
      category: "Hormonal & Reproductive Health"
    },
    {
      name: "Menstrual Irregularities",
      description: "History, symptom monitoring, lab review, referrals if needed for chronic conditions.",
      icon: "🦋",
      category: "Hormonal & Reproductive Health"
    },
    {
      name: "Secondary Amenorrhea",
      description: "Assessment, lab review, management plan for absent menstrual periods.",
      icon: "🦋",
      category: "Hormonal & Reproductive Health"
    },
    {
      name: "Dysmenorrhea (Chronic)",
      description: "Pain management, medication adjustment, lifestyle advice for painful periods.",
      icon: "🦋",
      category: "Hormonal & Reproductive Health"
    },
    {
      name: "Menorrhagia (Stable)",
      description: "Long-term monitoring, lab follow-up, referrals if needed for heavy bleeding.",
      icon: "🦋",
      category: "Hormonal & Reproductive Health"
    },
    {
      name: "Premenstrual Syndrome (PMS)",
      description: "Symptom tracking, medication, lifestyle interventions for monthly symptoms.",
      icon: "🦋",
      category: "Hormonal & Reproductive Health"
    },
    {
      name: "Premenstrual Dysphoric Disorder (PMDD)",
      description: "Mental health + hormonal management for severe PMS symptoms.",
      icon: "🦋",
      category: "Hormonal & Reproductive Health"
    },
    {
      name: "Perimenopause",
      description: "Hormone therapy discussions, symptom management, lifestyle advice.",
      icon: "🦋",
      category: "Hormonal & Reproductive Health"
    },
    {
      name: "Menopause",
      description: "HRT management, chronic symptom follow-up for post-menopausal care.",
      icon: "�",
      category: "Hormonal & Reproductive Health"
    },
    {
      name: "Hormone Therapy Management",
      description: "Monitoring therapy, lab review, side-effect management for hormonal treatments.",
      icon: "🦋",
      category: "Hormonal & Reproductive Health"
    },
    
    // Women's Sexual & Pelvic Health
    {
      name: "Chronic Pelvic Pain Syndromes",
      description: "Symptom tracking, medications, lifestyle advice, referral coordination.",
      icon: "💝",
      category: "Women's Sexual & Pelvic Health"
    },
    {
      name: "Vulvodynia",
      description: "Pain management, education, topical or systemic therapy guidance.",
      icon: "💝",
      category: "Women's Sexual & Pelvic Health"
    },
    {
      name: "Dyspareunia",
      description: "History, counseling, therapy review, referrals for painful intercourse.",
      icon: "💝",
      category: "Women's Sexual & Pelvic Health"
    },
    {
      name: "Vaginal Atrophy / GSM",
      description: "Hormonal or non-hormonal therapy management for vaginal dryness.",
      icon: "💝",
      category: "Women's Sexual & Pelvic Health"
    },
    {
      name: "Low Libido / Hormonal Sexual Dysfunction",
      description: "Assessment, counseling, therapy management for decreased sexual desire.",
      icon: "💝",
      category: "Women's Sexual & Pelvic Health"
    },
    
    // Autoimmune / Inflammatory Conditions
    {
      name: "Hashimoto's Thyroiditis",
      description: "Lab review, medication adjustment, symptom follow-up for autoimmune thyroid.",
      icon: "🦋",
      category: "Autoimmune / Inflammatory Conditions"
    },
    {
      name: "Lupus (Stable)",
      description: "Monitoring flares, labs, care coordination with rheumatology.",
      icon: "🦋",
      category: "Autoimmune / Inflammatory Conditions"
    },
    {
      name: "Rheumatoid Arthritis",
      description: "Symptom review, med management, referrals for joint inflammation.",
      icon: "🦋",
      category: "Autoimmune / Inflammatory Conditions"
    },
    {
      name: "Psoriatic Arthritis",
      description: "Flare management, lab review, referral coordination for skin/joint issues.",
      icon: "🦋",
      category: "Autoimmune / Inflammatory Conditions"
    },
    {
      name: "Sjögren's Syndrome",
      description: "Symptom tracking, coordination with specialists for dry eyes/mouth.",
      icon: "🦋",
      category: "Autoimmune / Inflammatory Conditions"
    },
    {
      name: "Fibromyalgia",
      description: "Pain and fatigue management, lifestyle counseling for widespread pain.",
      icon: "🦋",
      category: "Autoimmune / Inflammatory Conditions"
    },
    
    // Chronic Pain & Neurologic Conditions
    {
      name: "Migraines",
      description: "Symptom tracking, preventive therapy, acute therapy guidance, lifestyle counseling.",
      icon: "🧠",
      category: "Chronic Pain & Neurologic Conditions"
    },
    {
      name: "Chronic Tension Headaches",
      description: "Management plan, lifestyle modification, medications for tension headaches.",
      icon: "🧠",
      category: "Chronic Pain & Neurologic Conditions"
    },
    {
      name: "Chronic Fatigue",
      description: "Symptom management, lab follow-up, counseling for fatigue related to autoimmune/hormonal conditions.",
      icon: "🧠",
      category: "Chronic Pain & Neurologic Conditions"
    },
    
    // Gastrointestinal / Urologic
    {
      name: "Irritable Bowel Syndrome (IBS)",
      description: "Symptom monitoring, dietary guidance, medication management for digestive health.",
      icon: "🦠",
      category: "Gastrointestinal / Urologic"
    },
    {
      name: "Interstitial Cystitis",
      description: "Symptom tracking, medication review, behavioral therapy guidance for bladder pain.",
      icon: "🏥",
      category: "Gastrointestinal / Urologic"
    },
    
    // Women's Mental Health
    {
      name: "Postpartum Depression & Anxiety",
      description: "Screening, counseling, medication management for postpartum mental health.",
      icon: "🧠",
      category: "Women's Mental Health"
    },
    {
      name: "PMDD-Related Mood Disorders",
      description: "Therapy and medication follow-up for severe PMS-related mood issues.",
      icon: "🧠",
      category: "Women's Mental Health"
    },
    {
      name: "Chronic Anxiety / Depression",
      description: "Long-term counseling, medication review for female-predominant mood disorders.",
      icon: "🧠",
      category: "Women's Mental Health"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const updateScrollPosition = () => {
        setScrollPosition(container.scrollLeft);
        setMaxScroll(container.scrollWidth - container.clientWidth);
      };

      // Initial setup
      updateScrollPosition();

      // Add scroll listener
      container.addEventListener('scroll', updateScrollPosition);

      // Handle resize
      window.addEventListener('resize', updateScrollPosition);

      return () => {
        container.removeEventListener('scroll', updateScrollPosition);
        window.removeEventListener('resize', updateScrollPosition);
      };
    }
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Hormonal & Reproductive Health": "bg-pink-100 text-pink-700",
      "Women's Sexual & Pelvic Health": "bg-rose-100 text-rose-700",
      "Autoimmune / Inflammatory Conditions": "bg-purple-100 text-purple-700",
      "Chronic Pain & Neurologic Conditions": "bg-blue-100 text-blue-700",
      "Gastrointestinal / Urologic": "bg-green-100 text-green-700",
      "Women's Mental Health": "bg-indigo-100 text-indigo-700"
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="conditions" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conditions We Treat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized telehealth care for chronic conditions that affect women's health, 
            following Alberta healthcare pathways. Scroll through all conditions below.
          </p>
        </div>
        
        {/* Carousel Controls */}
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-rose-200 hover:border-rose-300"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-rose-200 hover:border-rose-300"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
              {conditions.map((condition, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-rose-200 rounded-xl p-6 hover:shadow-lg transition-shadow hover:border-rose-300 min-w-[280px]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{condition.icon}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(condition.category)}`}>
                      {condition.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{condition.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{condition.description}</p>
                  <button className="text-rose-600 font-semibold hover:text-rose-700 transition-colors text-sm">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-6 flex justify-center space-x-2">
          {conditions.map((_, index) => {
            const isActive = scrollPosition >= (index * 300) && scrollPosition < ((index + 1) * 300);
            return (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'w-8 bg-rose-600' : 'w-2 bg-rose-300'
                }`}
              />
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your condition? We're continuously expanding our services.
          </p>
          <button className="text-rose-600 font-semibold hover:text-rose-700 transition-colors">
            Contact us to inquire about other conditions
          </button>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/guides" 
            className="inline-block bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all"
          >
            View Detailed Condition Guides
          </a>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
