import React, { useState } from 'react';

interface ForumPost {
  id: number;
  author: string;
  condition: string;
  title: string;
  content: string;
  timestamp: string;
  replies: number;
  likes: number;
}

const SupportCommunity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'forums' | 'resources' | 'stories'>('forums');
  
  const forumPosts: ForumPost[] = [
    {
      id: 1,
      author: "Sarah M.",
      condition: "IBS",
      title: "Low FODMAP diet success story",
      content: "After 3 months on the low FODMAP diet, my symptoms have improved dramatically. Wanted to share what worked for me...",
      timestamp: "2 hours ago",
      replies: 12,
      likes: 45
    },
    {
      id: 2,
      author: "Jennifer L.",
      condition: "PCOS",
      title: "Managing PCOS while working full-time",
      content: "Balancing work and PCOS management has been challenging. Here are some strategies that have helped me stay consistent...",
      timestamp: "5 hours ago",
      replies: 8,
      likes: 23
    },
    {
      id: 3,
      author: "Amanda K.",
      condition: "Migraines",
      title: "New preventive medication working well",
      content: "My doctor started me on a new preventive medication and I wanted to share my experience for others considering it...",
      timestamp: "1 day ago",
      replies: 15,
      likes: 67
    }
  ];

  const resources = [
    {
      title: "Alberta Healthcare Coverage Guide",
      description: "Complete guide to what's covered for chronic conditions under Alberta Health Services",
      type: "PDF Guide",
      downloadUrl: "#"
    },
    {
      title: "Symptom Tracking Templates",
      description: "Downloadable templates to track your symptoms and share with healthcare providers",
      type: "Excel/Printable",
      downloadUrl: "#"
    },
    {
      title: "Mental Health Resources",
      description: "Coping strategies and professional support options for chronic condition management",
      type: "Resource List",
      downloadUrl: "#"
    },
    {
      title: "Nutrition Guidelines",
      description: "Evidence-based nutrition recommendations for IBS, IC, PCOS, and migraine management",
      type: "Nutrition Guide",
      downloadUrl: "#"
    }
  ];

  const patientStories = [
    {
      name: "Rachel T.",
      age: 34,
      condition: "Interstitial Cystitis",
      story: "After years of misdiagnosis, I finally found a healthcare team that understood my IC. The telehealth approach made it possible to get consistent care while managing my busy schedule as a teacher.",
      outcome: "75% reduction in symptoms, back to work full-time"
    },
    {
      name: "Maria S.",
      age: 28,
      condition: "PCOS",
      story: "Getting diagnosed with PCOS was overwhelming at first, but having access to specialists who understand the hormonal and metabolic aspects changed everything. The ongoing support has been life-changing.",
      outcome: "Regular cycles, improved energy, successful pregnancy"
    },
    {
      name: "Lisa H.",
      age: 41,
      condition: "Chronic Migraines",
      story: "I went from 20 headache days a month to less than 5. The combination of preventive medications and lifestyle modifications recommended through telehealth has given me my life back.",
      outcome: "75% fewer migraine days, improved quality of life"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Support Community</h1>
          <p className="text-lg text-gray-600">
            Connect with other Alberta women, share experiences, and find strength in community.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'forums', label: 'Community Forums', count: '234 active discussions' },
                { id: 'resources', label: 'Resources', count: '15 downloadable guides' },
                { id: 'stories', label: 'Success Stories', count: '50+ patient stories' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-teal-600 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 text-xs text-gray-400">({tab.count})</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'forums' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Discussions</h2>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    Start New Discussion
                  </button>
                </div>

                <div className="space-y-4">
                  {forumPosts.map((post) => (
                    <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full mb-2">
                            {post.condition}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{post.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{post.content}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span>By {post.author}</span>
                          <span>{post.timestamp}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 hover:text-teal-600 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-teal-600 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            <span>{post.replies} replies</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Helpful Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {resources.map((resource, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                        Download Resource →
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-teal-50 border border-teal-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-teal-900 mb-3">Need Additional Resources?</h3>
                  <p className="text-teal-800 mb-4">
                    Our healthcare team can provide personalized resources based on your specific condition and needs.
                  </p>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                    Request Custom Resources
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'stories' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Patient Success Stories</h2>
                <div className="space-y-6">
                  {patientStories.map((story, index) => (
                    <div key={index} className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6 border border-teal-200">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                          <p className="text-gray-600 text-sm">Age {story.age} • {story.condition}</p>
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Success Story
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic mb-4">
                        "{story.story}"
                      </blockquote>
                      <div className="bg-white rounded-lg p-3 border border-green-200">
                        <p className="text-green-800 font-medium text-sm">
                          ✨ {story.outcome}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">
                    Have your own success story to share? Your experience could help others on their journey.
                  </p>
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                    Share Your Story
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">1,200+</div>
            <p className="text-gray-600">Alberta Women Supported</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
            <p className="text-gray-600">Patient Satisfaction</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
            <p className="text-gray-600">Community Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCommunity;
