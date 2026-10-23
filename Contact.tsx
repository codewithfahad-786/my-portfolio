import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Send, 
  Github, 
  ExternalLink, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Clock, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from "./portfolioData";

const EMAILJS_SERVICE_ID = 'service_flt2zvk';
const EMAILJS_TEMPLATE_ID = 'template_jbka4pb';
const EMAILJS_PUBLIC_KEY = '3M2xrnmGtDaa4ahRY';
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validate()) return;

  setIsSubmitting(true);

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      },
      {
        publicKey: EMAILJS_PUBLIC_KEY,
      }
    );

    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setErrors({});
  } catch (error) {
    console.error('EmailJS error:', error);
    alert('Email send nahi hui. Please dobara try karein.');
  } finally {
    setIsSubmitting(false);
  }
};

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#040e1a] relative border-t border-[#102338]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1e30] border border-[#1b3857] text-[#4cd7f6] text-xs font-mono mb-3">
            <span>05 // CONTACT & CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Collaborate on Machine Learning & Engineering
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in discussing machine learning models, computer vision development, Python backend services, or engineering opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="p-6 rounded-2xl bg-[#081525] border border-[#172d47] space-y-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles size={18} className="text-[#4cd7f6]" />
                Direct Communication Channels
              </h3>

              {/* Email item */}
              <div className="p-4 rounded-xl bg-[#0b1b2d] border border-[#18314e] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Mail size={14} className="text-[#4cd7f6]" />
                    <span>Email Address</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-300 hover:text-[#4cd7f6] px-2 py-0.5 rounded bg-[#10243b] transition"
                  >
                    {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="text-sm font-mono font-medium text-white hover:text-[#4cd7f6] transition block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* GitHub Item */}
              <div className="p-4 rounded-xl bg-[#0b1b2d] border border-[#18314e] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Github size={14} className="text-[#8083ff]" />
                    <span>GitHub Profile</span>
                  </div>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-mono text-[#4cd7f6] hover:underline"
                  >
                    <span>Visit</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
                <div className="text-sm font-mono text-white">
                  github.com/{PERSONAL_INFO.githubUsername}
                </div>
              </div>

              {/* Portfolio Link Item */}
              <div className="p-4 rounded-xl bg-[#0b1b2d] border border-[#18314e] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ExternalLink size={14} className="text-[#4fdbc8]" />
                    <span>Live Portfolio Hub</span>
                  </div>
                  <a
                    href={PERSONAL_INFO.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-mono text-[#4fdbc8] hover:underline"
                  >
                    <span>Open</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
                <div className="text-sm font-mono text-white">
                  codewithfahad-786.github.io
                </div>
              </div>

              {/* Location & Response Indicator */}
              <div className="pt-2 border-t border-[#14263b] space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#4cd7f6]" />
                  <span>The Islamia University of Bahawalpur, Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-emerald-400" />
                  <span>Active & responsive to engineering opportunities</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#071321] border border-[#162d47] shadow-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#14263b] mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <MessageSquare size={18} className="text-[#4cd7f6]" />
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fill out the form below to initiate communication.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Client Validation Active
                </span>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-[#0b1e32] border border-[#4cd7f6]/40 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 text-[#4cd7f6] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Your communication has been received and Muhammad Fahad will reply promptly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 rounded-lg bg-[#4cd7f6] text-[#051424] font-bold text-xs hover:bg-[#38c9ec] transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Name <span className="text-[#4cd7f6]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#0a1829] border text-xs text-white placeholder-slate-400 focus:outline-none transition ${
                          errors.name 
                            ? 'border-rose-500/80 focus:border-rose-500' 
                            : 'border-[#1a3452] focus:border-[#4cd7f6]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Email Address <span className="text-[#4cd7f6]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. john@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#0a1829] border text-xs text-white placeholder-slate-400 focus:outline-none transition ${
                          errors.email 
                            ? 'border-rose-500/80 focus:border-rose-500' 
                            : 'border-[#1a3452] focus:border-[#4cd7f6]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Subject <span className="text-[#4cd7f6]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ML Project Collaboration / Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#0a1829] border text-xs text-white placeholder-slate-400 focus:outline-none transition ${
                        errors.subject 
                          ? 'border-rose-500/80 focus:border-rose-500' 
                          : 'border-[#1a3452] focus:border-[#4cd7f6]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-medium text-slate-300">
                        Message Content <span className="text-[#4cd7f6]">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-slate-400">
                        {formData.message.length} chars (min 10)
                      </span>
                    </div>
                    <textarea
                      rows={5}
                      placeholder="Describe your inquiry, project scope, or opportunity..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#0a1829] border text-xs text-white placeholder-slate-400 focus:outline-none transition resize-none ${
                        errors.message 
                          ? 'border-rose-500/80 focus:border-rose-500' 
                          : 'border-[#1a3452] focus:border-[#4cd7f6]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-slate-400">
                      Validated locally with instant dispatch feedback.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4cd7f6] to-[#03b5d3] hover:opacity-95 text-[#051424] font-bold text-xs transition shadow-lg shadow-[#4cd7f6]/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-[#051424] border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
