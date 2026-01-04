
import React, { useState } from 'react';
import Button from './Button';
import { ShieldCheck, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    help: '',
    email: '',
    method: 'call' // Default to call
  });

  const [errors, setErrors] = useState<{ phone?: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validatePhone = (phone: string) => {
    // Simple check for 10 digits
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear errors on change
    if (name === 'phone' && errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate Phone
    if (!validatePhone(formData.phone)) {
      setErrors({ phone: 'Please enter a valid 10-digit Indian number' });
      return;
    }

    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          help: '',
          email: '',
          method: 'call'
        });
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      {/* Required Fields */}
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1">
            Your full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Rajesh Kumar"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nayaysetu focus:border-nayaysetu transition-shadow placeholder-gray-400"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-1">
            Your phone number (India) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-3.5 text-gray-500 font-medium">+91</span>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="98765 43210"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full pl-14 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-nayaysetu transition-shadow placeholder-gray-400 ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-nayaysetu'}`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="help" className="block text-sm font-semibold text-gray-900 mb-1">
            How can we help? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="help"
            name="help"
            rows={3}
            placeholder="Briefly describe your property or inheritance issue..."
            value={formData.help}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nayaysetu focus:border-nayaysetu transition-shadow placeholder-gray-400"
          />
        </div>
      </div>

      {/* Optional Fields Divider */}
      <div className="pt-2 border-t border-gray-100">
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-4">Optional Details</p>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="rajesh@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nayaysetu focus:border-nayaysetu transition-shadow placeholder-gray-400 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred contact method
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  value="call"
                  checked={formData.method === 'call'}
                  onChange={handleChange}
                  className="w-4 h-4 text-nayaysetu focus:ring-nayaysetu"
                />
                <span className="text-gray-900">Phone Call</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  value="whatsapp"
                  checked={formData.method === 'whatsapp'}
                  onChange={handleChange}
                  className="w-4 h-4 text-green-600 focus:ring-green-600"
                />
                <span className="text-gray-900">WhatsApp</span>
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-2">We will try this first.</p>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full text-lg py-3 font-bold shadow-md hover:shadow-lg transition-all"
        >
          {status === 'submitting' ? 'Sending Request...' : 'Request Free Legal Consultation'}
        </Button>
        <p className="text-center text-xs text-gray-500 mt-2">
          We usually respond within 24 hours on working days.
        </p>

        {status === 'success' && (
          <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg flex items-start border border-green-200">
            <ShieldCheck className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Request Received!</p>
              <p className="text-sm">We will review your case and call you shortly.</p>
            </div>
          </div>
        )}

        <div className="mt-4 flex items-center justify-center text-xs text-gray-400">
          <ShieldCheck className="w-3 h-3 mr-1" />
          <span>Your information is kept private and shared only with our legal team.</span>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;