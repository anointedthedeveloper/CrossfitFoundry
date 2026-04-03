import { useState, useRef, useEffect } from 'react';
import * as Icons from 'lucide-react';

export default function FreeTrialForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Full name is required.';
    if (!formData.email.trim()) {
      next.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      next.phone = 'Phone number is required.';
    } else if (!/^[\d\s\-\+\(\)]{7,15}$/.test(formData.phone)) {
      next.phone = 'Please enter a valid phone number.';
    }
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 900));
    setLoading(false);
    setSubmitted(true);
    if (typeof onSubmit === 'function') {
      onSubmit(formData);
    }
  };

  const inputBase =
    'w-full bg-white/5 border border-white/20 text-white placeholder-white/30 font-inter text-base px-5 py-4 rounded-none focus:outline-none focus:border-[#ffe600] focus:ring-1 focus:ring-[#ffe600] transition-all duration-200 tracking-wide';

  const labelBase = 'block font-inter text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-2';

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div
        className="relative px-12 py-9 bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_6px_32px_-8px_black] rounded-[20px] overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none rounded-[20px] ring-1 ring-inset ring-white/10" />

        {!submitted ? (
          <>
            <div className="mb-8">
              <p className="font-inter text-xs font-bold uppercase tracking-[0.22em] text-[#ffe600]/70 mb-3">
                Foundry Factory
              </p>
              <h2 className="font-playfair text-3xl font-bold leading-tight text-[#ffe600]">
                Claim Your Free Week Trial
              </h2>
              <p className="font-inter text-sm text-white/50 mt-2 leading-relaxed">
                No commitment. No contract. Just one week to find out what you're made of.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-6">
                <div>
                  <label htmlFor="trial-name" className={labelBase}>
                    Full Name
                  </label>
                  <input
                    ref={nameRef}
                    id="trial-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputBase}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="error-name" className="mt-2 font-inter text-xs text-red-400 flex items-center gap-1.5">
                      <Icons.AlertCircle size={13} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="trial-email" className={labelBase}>
                    Email Address
                  </label>
                  <input
                    id="trial-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputBase}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="error-email" className="mt-2 font-inter text-xs text-red-400 flex items-center gap-1.5">
                      <Icons.AlertCircle size={13} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="trial-phone" className={labelBase}>
                    Phone Number
                  </label>
                  <input
                    id="trial-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputBase}
                    aria-describedby={errors.phone ? 'error-phone' : undefined}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p id="error-phone" className="mt-2 font-inter text-xs text-red-400 flex items-center gap-1.5">
                      <Icons.AlertCircle size={13} />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-[#ffe600] text-[#111212] font-inter font-bold text-sm uppercase tracking-[0.18em] py-4 px-8 rounded-full transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_4px_24px_-4px_#ffe60066]"
                >
                  {loading ? (
                    <>
                      <Icons.Loader2 size={16} className="animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Icons.Zap size={15} />
                      Start My Free Week
                    </>
                  )}
                </button>
              </div>

              <p className="mt-5 font-inter text-[11px] text-white/30 text-center leading-relaxed">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-6 gap-5">
            <div className="w-16 h-16 rounded-full bg-[#ffe600]/15 border border-[#ffe600]/40 flex items-center justify-center shadow-[0_0_32px_-4px_#ffe60066]">
              <Icons.CheckCircle size={32} className="text-[#ffe600]" />
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#ffe600] mb-2">
                You're In.
              </h3>
              <p className="font-inter text-sm text-white/60 leading-relaxed max-w-xs">
                Welcome to Foundry Factory. We'll reach out within 24 hours to schedule your first session.
              </p>
            </div>
            <div className="mt-2 w-full border-t border-white/10 pt-5">
              <p className="font-inter text-xs uppercase tracking-[0.2em] text-[#ffe600]/60 font-semibold">
                Prepare to be forged.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
