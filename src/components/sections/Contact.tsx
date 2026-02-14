import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<{ type: 'error'; message: string } | null>(null);

  const inputClasses = (field: string) => `
    w-full px-4 py-3 rounded-xl bg-muted/50 border border-border
    text-foreground placeholder:text-muted-foreground
    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
    transition-all duration-200
    ${focusedField === field ? 'ring-2 ring-primary/50 border-primary/50' : ''}
  `;

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'iamanikethpeddi@gmail.com', href: 'mailto:iamanikethpeddi@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana', href: '#' },
  ];

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    const subject = `Portfolio Contact from ${formData.name.trim()}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:iamanikethpeddi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            If you have project or collaboration opportunities, feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          animate={formVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-5 gap-12"
        >
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={formVisible ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <form className="lg:col-span-3 space-y-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={formVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  className={inputClasses('name')}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={formVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  className={inputClasses('email')}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={formVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="What&apos;s this about?"
                value={formData.subject}
                className={inputClasses('subject')}
                onChange={(e) => handleChange('subject', e.target.value)}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={formVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your opportunity..."
                value={formData.message}
                className={inputClasses('message') + ' resize-none'}
                onChange={(e) => handleChange('message', e.target.value)}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />
            </motion.div>

            {submitStatus && (
              <p className="text-sm text-red-400">
                {submitStatus.message}
              </p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={formVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton type="submit" variant="primary" className="w-full md:w-auto">
                <Send className="w-4 h-4" />
                Send Message
              </MagneticButton>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};