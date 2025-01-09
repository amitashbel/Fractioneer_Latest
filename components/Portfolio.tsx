
 
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Users, Rocket, Star, MessageCircle, Mail, Sparkles, X } from 'lucide-react';

const Portfolio = ({ domain = "thefractioneer.com" }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formType, setFormType] = useState('');
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const resetForm = () => {
    setShowContactForm(false);
    setFormType('');
    setFormData({ fullName: '', email: '', message: '' });
    setFormErrors({});
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/972545646489?text=${encodeURIComponent('Hi, I visited your portfolio and would like to discuss working together.')}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email required';
    if (!formData.message.trim()) errors.message = 'Required';

    if (Object.keys(errors).length === 0) {
      window.location.href = `mailto:aashbel@gmail.com?subject=Portfolio Contact: ${formData.fullName}&body=${encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      resetForm();
    } else {
      setFormErrors(errors);
    }
  };

  const ContactModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Sparkles className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
          </div>
          <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {formType === 'email' ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className={`w-full p-3 border ${formErrors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-xl`}
              value={formData.fullName}
              onChange={(e) => handleInputChange(e, 'fullName')}
            />
            {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}
            
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full p-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl`}
              value={formData.email}
              onChange={(e) => handleInputChange(e, 'email')}
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            
            <textarea
              placeholder="Your Message"
              rows="4"
              className={`w-full p-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl`}
              value={formData.message}
              onChange={(e) => handleInputChange(e, 'message')}
            />
            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
            
            <button type="submit" className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all">
              Send Message
            </button>
            <button type="button" onClick={() => setFormType('')} className="w-full p-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50">
              Back
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <button onClick={handleWhatsApp} className="w-full p-4 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-xl hover:from-green-600 hover:to-green-500 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
            <button onClick={() => setFormType('email')} className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Send Email
            </button>
            <button onClick={resetForm} className="w-full p-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50">
              Maybe Later
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const Section = ({ title, children, className = "" }) => (
    <section className={`px-6 py-16 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );

  const skills = ['Product Marketing', 'Content Strategy', 'B2B Tech Marketing', 'Demand Generation', 'Field Marketing', 'PR & AR', 'SEO & SEM'];

const caseStudies = [
  {
    company: "Trusteer",
    category: "Security",
    outcome: "Acquired by IBM",
    metrics: [
      { label: "ARR Growth", value: "280%" },
      { label: "Market Share", value: "65%" },
      { label: "Lead Generation", value: "3x" }
    ],
    description: "Led product marketing and demand generation initiatives that positioned Trusteer as the market leader in financial fraud prevention."
  },
  {
    company: "Checkmarx",
    category: "DevSecOps",
    outcome: "Acquired by Hellman & Friedman",
    metrics: [
      { label: "Revenue Growth", value: "200%" },
      { label: "Enterprise Deals", value: "4x" },
      { label: "Market Position", value: "#1" }
    ],
    description: "Established comprehensive GTM strategy and execution plan that helped secure market leadership position in application security testing."
  },
  {
    company: "Cognigo",
    category: "Data Security",
    outcome: "Acquired by NetApp",
    metrics: [
      { label: "Pipeline Growth", value: "350%" },
      { label: "Enterprise POCs", value: "15+" },
      { label: "Brand Growth", value: "8x" }
    ],
    description: "As VP Marketing, led comprehensive marketing strategy and execution that established Cognigo as an innovator in data security and privacy, leading to successful acquisition."
  },
  {
    company: "Qwak",
    category: "MLOps",
    outcome: "Series A Success",
    metrics: [
      { label: "Pipeline Growth", value: "400%" },
      { label: "Conversion Rate", value: "25%" },
      { label: "Brand Mentions", value: "10x" }
    ],
    description: "Developed and executed marketing strategy that established Qwak as a leading MLOps platform, contributing to successful Series A funding."
  }
];
  const packages = [
    {
      name: "Content Engine",
      price: "12K NIS/month",
      features: ["4 blog posts", "2 whitepapers/case studies", "Social media content calendar", "Monthly newsletter", "Content performance analytics"]
    },
    {
      name: "Product Story",
      price: "25K NIS/month",
      features: ["Product messaging framework", "Feature announcements (2/month)", "Competitive battlecards", "Sales enablement content", "Product webinar scripts"]
    },
    {
      name: "GTM Accelerator",
      price: "25K NIS/month",
      features: ["Campaign strategy & execution", "Landing page optimization", "Email nurture flows", "Lead scoring setup", "Campaign analytics"]
    }
  ];

  const CallToAction = ({ text = "Start Growing Today" }) => (
    <button 
      onClick={() => setShowContactForm(true)} 
      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all group shadow-lg"
    >
      {text}
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );

  const handleInputChange = (e, field) => {
    e.preventDefault();
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="px-6 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-20 animate-pulse" />
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          The Fractioneer
        </h1>
        <div className="space-y-4 max-w-3xl mx-auto mb-8">
        <p className="text-xl text-gray-600">
          Fractional B2B marketing services tailored for startups, combining tech industry expertise with proven marketing strategies to drive growth and achieve market penetration and leadership.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-gray-700">4 Successful Exits</span>
          <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-gray-700">Enterprise Experience</span>
          <span className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-gray-700">Startup Growth Expert</span>
        </div>
      </div>
        <CallToAction />
      </header>

      <Section title="All-in-One Marketing Pro" className="bg-white/80 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Hassle Free Marketing</h3>
            <p className="text-gray-600 mb-6">All-in-One Marketing Pro: AR, PR, SEO, Demand Gen, Brand, Content, and more. Startup to Corporate: Success across startups and global giants like IBM and NetApp. Proven Results: 4 startup exits (Trusteer, Checkmarx, Cognigo, Qwak). Strategic + Hands-On: Bridging technical expertise with impactful marketing.</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Seamless Marketing Support</h3>
            <p className="text-gray-600 mb-6">My passion lies in helping startups grow and succeed. As your trusted marketing partner, I integrate seamlessly into your team, dedicating my time and expertise to driving results. I don't lead teams or manage people—I focus on delivering outcomes.</p>
          </div>
        </div>
      </Section>

      <Section title="Success Stories" className="bg-gradient-to-br from-gray-50 to-white">
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map(study => (
            <div key={study.company} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{study.company}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{study.category}</span>
              </div>
              <div className="mb-4">
                <div className="text-purple-600 font-semibold mb-2">{study.outcome}</div>
                <p className="text-gray-600 text-sm">{study.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {study.metrics.map(metric => (
                  <div key={metric.label} className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Expertise" className="bg-gradient-to-br from-gray-50 to-white">
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Service Packages" className="bg-white/80 backdrop-blur-sm">
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <div key={pkg.name} className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">{pkg.price}</p>
              <ul className="space-y-2">
                {pkg.features.map(feature => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="px-6 py-24 text-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Ready to Accelerate Your Growth?</h2>
          <CallToAction text="Let's Talk" />
        </div>
      </section>

      {showContactForm && <ContactModal />}
    </div>
  );
};

export default Portfolio;

