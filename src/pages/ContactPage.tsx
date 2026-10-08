import React, { useState } from 'react';
import { PageId, QuoteFormData } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { PROJECT_MODERN_FINISHED } from '../data/images';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Upload, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  X, 
  AlertCircle,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    projectType: 'New Home',
    projectLocation: 'Mukono',
    estimatedBudget: 'UGX 50M - 150M',
    expectedStartDate: '',
    projectDescription: '',
    files: [],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      }));
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please briefly describe your project';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-neutral-950 text-neutral-100 pt-20">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-28 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src={PROJECT_MODERN_FINISHED}
            alt="Mwanaweika finished modern residence"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/60 via-neutral-950/45 to-neutral-950/75" />
          <div className="absolute inset-0 bg-grid-blueprint opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-xs font-semibold text-neutral-300 mb-6 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Mukono Headquarters · Client Consultation & Estimating</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            “LET'S BUILD YOUR NEXT PROJECT.”
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Tell us what you are planning and our team will get in touch to discuss your project.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Contact Info & Opening Hours & Mukono Map */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
                <span className="w-6 h-0.5 bg-amber-500" />
                <span>DIRECT REACH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                CONTACT INFORMATION
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                Visit our Mukono office or contact our project engineers directly.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase text-xs">OFFICE LOCATION</h3>
                  <p className="text-neutral-300 mt-0.5 font-medium">{COMPANY_INFO.name}</p>
                  <p className="text-neutral-400 mt-0.5">{COMPANY_INFO.address}</p>
                  <span className="text-[11px] font-mono text-amber-400 block mt-1">Mukono, Uganda</span>
                </div>
              </div>

              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-500 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase text-xs">TELEPHONE & SITE LINE</h3>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-neutral-200 hover:text-white font-mono mt-0.5 block">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Available for site bookings & technical inquiries</p>
                </div>
              </div>

              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-500 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase text-xs">EMAIL ESTIMATING</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-neutral-200 hover:text-white mt-0.5 block">
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Send architectural drawings & PDF plans</p>
                </div>
              </div>

              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-emerald-400 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase text-xs">WHATSAPP DIRECT</h3>
                  <a 
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-mono mt-0.5 block font-bold"
                  >
                    +256 700 000 000
                  </a>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Instant messaging & progress photo transmission</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>OFFICE & SITE SUPERVISION HOURS</span>
              </h3>
              <div className="space-y-3 text-xs">
                {COMPANY_INFO.officeHours.map((schedule, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-neutral-800/80 pb-2">
                    <span className="text-neutral-300 font-medium">{schedule.days}</span>
                    <span className="font-mono text-amber-400">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps Area Simulation for Mukono */}
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
              <div className="p-3 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-bold text-white">Mukono Location Map</span>
                </div>
                <span className="font-mono text-[11px] text-neutral-400">0.3544° N, 32.7553° E</span>
              </div>
              
              {/* Map Canvas Visualizer */}
              <div className="relative h-56 bg-neutral-950 overflow-hidden flex items-center justify-center">
                {/* Blueprint grid map styling */}
                <div className="absolute inset-0 bg-grid-blueprint opacity-40" />
                
                {/* Road arterial vectors */}
                <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                  <line x1="0" y1="120" x2="400" y2="120" stroke="#f59e0b" strokeWidth="4" />
                  <line x1="180" y1="0" x2="220" y2="240" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="80" y1="40" x2="320" y2="200" stroke="#64748b" strokeWidth="1.5" />
                </svg>

                {/* Central Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center font-bold shadow-xl animate-pulse">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <div className="mt-2 bg-neutral-900/90 backdrop-blur-md px-3 py-1 rounded border border-neutral-700 text-center shadow-lg">
                    <span className="text-xs font-extrabold text-white block">MWANAWEIKA CONSTRUCTION</span>
                    <span className="text-[10px] text-amber-400">Jinja Road, Mukono Town</span>
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 text-[10px] text-neutral-400 bg-neutral-950/80 px-2 py-0.5 rounded">
                  Mukono District · Central Region
                </div>
              </div>
            </div>

          </div>

          {/* Right: REQUEST A QUOTE FORM */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl relative">
              
              <div className="mb-8 border-b border-neutral-800 pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-1">
                  <span className="w-6 h-0.5 bg-amber-500" />
                  <span>PROJECT INTAKE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  REQUEST A QUOTE
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Fill in your project requirements below. Our estimating engineers will review and respond promptly.
                </p>
              </div>

              {/* Success Message Banner */}
              {isSubmitted ? (
                <div className="p-8 bg-neutral-950 border border-emerald-500/50 rounded-xl text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white">
                    Request Received Successfully
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                    “Thank you. Your project request has been received. Our team will contact you to discuss the next steps.”
                  </p>
                  <p className="text-xs text-neutral-400">
                    A project coordinator will reach out to <span className="text-amber-400 font-semibold">{formData.phoneNumber}</span> or via email.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phoneNumber: '',
                          email: '',
                          projectType: 'New Home',
                          projectLocation: 'Mukono',
                          estimatedBudget: 'UGX 50M - 150M',
                          expectedStartDate: '',
                          projectDescription: '',
                          files: [],
                        });
                      }}
                      className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. John Mukasa"
                        className={`w-full px-4 py-3 bg-neutral-950 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:border-amber-500 focus:ring-amber-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Phone Number <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="e.g. +256 700 000 000"
                        className={`w-full px-4 py-3 bg-neutral-950 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:border-amber-500 focus:ring-amber-500'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Email Address <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. client@example.com"
                        className={`w-full px-4 py-3 bg-neutral-950 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:border-amber-500 focus:ring-amber-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Project Type <span className="text-amber-500">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="New Home">New Home</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Commercial Building">Commercial Building</option>
                        <option value="Office">Office</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Extension">Extension</option>
                        <option value="Warehouse">Warehouse</option>
                        <option value="Institutional Building">Institutional Building</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Location & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Project Location (Town / District)
                      </label>
                      <input
                        type="text"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleInputChange}
                        placeholder="e.g. Mukono Central / Seeta / Kyetume"
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Below UGX 50M">Below UGX 50M</option>
                        <option value="UGX 50M - 150M">UGX 50M - 150M</option>
                        <option value="UGX 150M - 350M">UGX 150M - 350M</option>
                        <option value="UGX 350M - 700M">UGX 350M - 700M</option>
                        <option value="UGX 700M+ / Commercial">UGX 700M+ (Major Project)</option>
                        <option value="Need Assistance Estimating">Need Assistance Estimating</option>
                      </select>
                    </div>
                  </div>

                  {/* Expected Start Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Expected Start Date
                    </label>
                    <input
                      type="date"
                      name="expectedStartDate"
                      value={formData.expectedStartDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Project Description <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      name="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      placeholder="Describe your site details, number of rooms/floors, current ground condition (empty land, foundation already dug, or renovation), and your specific goals..."
                      className={`w-full px-4 py-3 bg-neutral-950 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.projectDescription ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:border-amber-500 focus:ring-amber-500'
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.projectDescription}
                      </p>
                    )}
                  </div>

                  {/* Upload Project Plans / Documents */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Upload Project Plans / Documents (Optional)
                    </label>
                    <div className="relative border-2 border-dashed border-neutral-800 hover:border-amber-500/60 rounded-xl p-5 text-center transition-colors bg-neutral-950/60 group">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.dwg,.jpg,.jpeg,.png,.doc,.docx"
                      />
                      <Upload className="w-7 h-7 text-neutral-400 group-hover:text-amber-500 mx-auto mb-2 transition-colors" />
                      <p className="text-xs text-neutral-200 font-medium">
                        Click or drag architectural plans, survey sketches, or photos
                      </p>
                      <p className="text-[11px] text-neutral-400 mt-1">
                        Supports PDF, CAD sketches, JPG, PNG up to 25MB
                      </p>
                    </div>

                    {/* Uploaded File List */}
                    {formData.files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {formData.files.map((file, i) => (
                          <div key={i} className="flex items-center justify-between p-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-xs">
                            <div className="flex items-center gap-2 truncate">
                              <FileText className="w-4 h-4 text-amber-500 shrink-0" />
                              <span className="text-white truncate font-medium">{file.name}</span>
                              <span className="text-neutral-500 font-mono text-[10px]">({file.size})</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              className="text-neutral-400 hover:text-red-400 p-1"
                              aria-label="Remove uploaded file"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-all shadow-xl hover:shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING INTAKE...</span>
                      ) : (
                        <>
                          <span>REQUEST A QUOTE</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-neutral-400 text-center mt-3">
                      We respect your privacy. Project documents are kept strictly confidential between our estimating team and client.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
