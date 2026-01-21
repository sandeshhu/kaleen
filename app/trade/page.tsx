'use client';
import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Ruler, 
  Percent, 
  Gem, 
  CheckCircle, 
  Loader2,
  Building2 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

// --- Types ---
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  website: string;
  businessType: string;
  message: string;
}

const businessTypes = [
  "Interior Designer",
  "Architect",
  "Retailer / Showroom",
  "Wholesaler",
  "Hospitality / Hotelier",
  "Other"
];

export default function TradePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    website: '',
    businessType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('success');
    // Reset form logic could go here if needed
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Header */}
      <div className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img 
            src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80&w=2000&fm=webp" 
            alt="Designer working with fabrics" 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-4xl md:text-6xl font-light mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Kaleen Baba <span className="font-serif italic text-gray-400">Trade</span>
          </h1>
          <p className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Exclusive pricing, custom capabilities, and dedicated support for interior designers, architects, and retailers.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Benefits */}
          <div className="lg:w-5/12">
            <RevealOnScroll>
              <h2 className="text-3xl font-light mb-8">Why Join?</h2>
              <div className="space-y-10">
                
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-900">
                    <Percent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Trade-Only Pricing</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Enjoy exclusive discounts starting at 20% off retail prices, with tiered volume pricing available for large projects.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-900">
                    <Ruler className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Custom Dimensions</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Need a 14x20 for a hotel lobby? We offer bespoke sizing and color matching on our entire wool collection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-900">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Dedicated Concierge</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Direct access to a dedicated account manager to assist with quotes, swatches, and logistics tracking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-900">
                    <Gem className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Priority Stock Access</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Reserve incoming inventory before it hits the site. We hold stock for project timelines up to 30 days.
                    </p>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:w-7/12">
            <RevealOnScroll delay={200}>
              <div className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100 shadow-sm relative overflow-hidden">
                
                {status === 'success' ? (
                  <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-12 z-20 animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4">Application Received</h3>
                    <p className="text-gray-500 max-w-sm">
                      Thank you for applying to the Kaleen Baba Trade Program. Our team will review your details and contact you within 24-48 hours.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-sm font-medium text-gray-900 underline hover:text-gray-600"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : null}

                <div className="mb-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">Apply for an Account</h3>
                  <p className="text-sm text-gray-500">Please fill out the details below to request access.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-wider text-gray-500">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 p-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all rounded-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 p-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Work Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 p-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all rounded-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="companyName" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Company Name *</label>
                      <input 
                        type="text" 
                        id="companyName" 
                        name="companyName" 
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 p-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all rounded-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="businessType" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Business Type *</label>
                      <div className="relative">
                        <select 
                          id="businessType" 
                          name="businessType" 
                          required
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full bg-white border border-gray-200 p-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all rounded-sm appearance-none"
                        >
                          <option value="" disabled>Select Type</option>
                          {businessTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <Building2 className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Website / Portfolio URL</label>
                    <input 
                      type="url" 
                      id="website" 
                      name="website" 
                      placeholder="https://"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 p-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all rounded-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Project Details (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4}
                      placeholder="Tell us about your upcoming projects or specific needs..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 p-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all rounded-sm resize-none"
                    ></textarea>
                  </div>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-full mt-4" 
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center">
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}