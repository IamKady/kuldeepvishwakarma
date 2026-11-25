'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  Calendar, 
  Clock, 
  Check, 
  Send, 
  CalendarCheck,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [formSending, setFormSending] = useState(false);

  // Meeting Scheduler State
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [schedulerName, setSchedulerName] = useState('');
  const [schedulerEmail, setSchedulerEmail] = useState('');
  const [meetingBooked, setMeetingBooked] = useState(false);

  const days = useMemo(() => {
    const result: { label: string; value: string }[] = [];
    const cursor = new Date();
    while (result.length < 4) {
      cursor.setDate(cursor.getDate() + 1);
      const dayOfWeek = cursor.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) continue;
      result.push({
        label: cursor.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        value: cursor.toISOString().slice(0, 10),
      });
    }
    return result;
  }, []);

  const timeSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'message',
          ...formData,
        }),
      });

      if (response.ok) {
        setFormSending(false);
        setFormSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        triggerConfetti();
        setTimeout(() => setFormSent(false), 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        console.warn('API error, falling back to mailto client:', data.message || response.statusText);
        triggerMailtoFallback();
      }
    } catch (err) {
      console.error('Failed to submit contact form through API:', err);
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoUrl = `mailto:kuldeepvishwakarma3803@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.assign(mailtoUrl);

    setTimeout(() => {
      setFormSending(false);
      setFormSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      triggerConfetti();
      setTimeout(() => setFormSent(false), 5000);
    }, 1000);
  };

  const handleBookMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDay || !selectedTime || !schedulerName || !schedulerEmail) return;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'booking',
          name: schedulerName,
          email: schedulerEmail,
          date: selectedDay,
          time: selectedTime,
        }),
      });

      if (response.ok) {
        setMeetingBooked(true);
        triggerConfetti();
      } else {
        const data = await response.json().catch(() => ({}));
        console.warn('API booking error, falling back to mailto client:', data.message || response.statusText);
        triggerBookingFallback();
      }
    } catch (err) {
      console.error('Failed to submit booking form through API:', err);
      triggerBookingFallback();
    }
  };

  const triggerBookingFallback = () => {
    const mailtoUrl = `mailto:kuldeepvishwakarma3803@gmail.com?subject=${encodeURIComponent(
      `Zoom Meeting Booking: ${schedulerName}`
    )}&body=${encodeURIComponent(
      `Hello Kuldeep,\n\nI would like to schedule a Zoom consultation with you.\n\nDate: ${selectedDay}\nTime: ${selectedTime} (IST)\n\nMy Details:\nName: ${schedulerName}\nEmail: ${schedulerEmail}\n\nBest regards,\n${schedulerName}`
    )}`;
    window.location.assign(mailtoUrl);
    setMeetingBooked(true);
    triggerConfetti();
  };

  const resetMeeting = () => {
    setMeetingBooked(false);
    setSelectedDay(null);
    setSelectedTime(null);
    setSchedulerName('');
    setSchedulerEmail('');
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#818cf8', '#34d399', '#fbbf24', '#fb7185']
    });
  };

  const socialChannels = [
    { name: 'Email', value: 'kuldeepvishwakarma3803@gmail.com', url: 'mailto:kuldeepvishwakarma3803@gmail.com', icon: <Mail className="w-4 h-4 text-rose-600 dark:text-rose-400" /> },
    { name: 'LinkedIn', value: 'linkedin.com/in/iamkady', url: 'https://www.linkedin.com/in/iamkady/', icon: <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { name: 'GitHub', value: 'github.com/IamKady', url: 'https://github.com/IamKady', icon: <Github className="w-4 h-4 text-zinc-900 dark:text-white" /> },
    { name: 'X / Twitter', value: 'x.com/Kuldeep81824338', url: 'https://x.com/Kuldeep81824338', icon: <Twitter className="w-4 h-4 text-sky-600 dark:text-sky-400" /> },
    { name: 'Phone', value: '+91 8303929309', url: 'tel:+918303929309', icon: <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 py-6 sm:py-8">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Let&apos;s Connect &amp; Build Together
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-sans max-w-xl leading-relaxed">
          Have a project in mind, an opportunity to discuss, or just want to say hi? Send me a message below or schedule a chat—I&apos;d love to connect!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Links & Traditional Message Form */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Social Card Grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialChannels.map((ch) => (
              <a 
                key={ch.name} 
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/40 hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center space-x-3.5 group shadow-md"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 group-hover:border-slate-300 dark:group-hover:border-white/15 transition-all">
                  {ch.icon}
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono block uppercase">{ch.name}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate block">
                    {ch.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Message Form */}
          <div className="p-6 rounded-xl border border-card-border shadow-sm space-y-4 bg-card-bg">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider font-mono border-b border-card-border pb-2">
              Send a Message
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-background border border-card-border rounded-lg outline-none text-zinc-900 dark:text-white focus:border-blue-600 transition-colors text-xs sm:text-sm"
                    placeholder="Alex Morgan"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-medium">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-background border border-card-border rounded-lg outline-none text-zinc-900 dark:text-white focus:border-blue-600 transition-colors text-xs sm:text-sm"
                    placeholder="alex@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-medium">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-background border border-card-border rounded-lg outline-none text-zinc-900 dark:text-white focus:border-blue-600 transition-colors text-xs sm:text-sm"
                  placeholder="Engineering Role / Product Collaboration"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-medium">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-background border border-card-border rounded-lg outline-none text-zinc-900 dark:text-white focus:border-blue-600 transition-colors resize-none text-xs sm:text-sm"
                  placeholder="Share a bit about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={formSending}
                className="w-full py-2.5 bg-zinc-900 dark:bg-zinc-100 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white disabled:opacity-50 text-white dark:text-zinc-900 rounded-lg font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center space-x-1.5"
              >
                {formSending ? (
                  <span>Sending...</span>
                ) : formSent ? (
                  <span className="flex items-center text-emerald-400 font-bold">
                    <Check className="w-3.5 h-3.5 mr-1" /> Message Sent!
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Right Column: Calendly-Style Meeting Scheduler */}
        <div className="lg:col-span-6">
          <div className="p-6 rounded-xl border border-card-border shadow-sm space-y-5 bg-card-bg">
            <div className="flex items-center justify-between border-b border-card-border pb-2.5">
              <h2 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider font-mono flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                Schedule a Call
              </h2>
              <span className="text-[10px] bg-card-inner px-2 py-0.5 border border-card-border rounded-full font-mono text-emerald-700 dark:text-emerald-400">
                IST (UTC +5:30)
              </span>
            </div>

            <AnimatePresence mode="wait">
              {!meetingBooked ? (
                <motion.form 
                  key="scheduler-form"
                  onSubmit={handleBookMeeting}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 font-sans text-xs"
                >
                  
                  {/* Step 1: Select Day */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                      Step 1: Select Date
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {days.map((day) => (
                        <button
                          key={day.value}
                          type="button"
                          onClick={() => { setSelectedDay(day.value); setSelectedTime(null); }}
                          className={`py-2 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                            selectedDay === day.value 
                              ? 'bg-blue-600 border-blue-600 text-white font-semibold' 
                              : 'bg-background border-card-border text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600'
                          }`}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Select Time Slot */}
                  {selectedDay && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <label className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                        Step 2: Choose Time Slot (IST)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2 rounded-lg border text-center transition-all cursor-pointer flex items-center justify-center space-x-1.5 ${
                              selectedTime === slot 
                                ? 'bg-blue-600 border-blue-600 text-white font-semibold' 
                                : 'bg-background border-card-border text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600'
                            }`}
                          >
                            <Clock className="w-3 h-3 opacity-60" />
                            <span>{slot}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Input Details */}
                  {selectedTime && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="border-t border-card-border pt-3 space-y-3">
                        <label className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                          Step 3: Your Details
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <input
                              type="text"
                              required
                              placeholder="Your Name"
                              value={schedulerName}
                              onChange={e => setSchedulerName(e.target.value)}
                              className="w-full px-3 py-2 bg-background border border-card-border rounded-lg outline-none text-zinc-900 dark:text-white focus:border-blue-600 transition-colors"
                            />
                          </div>
                          <div className="space-y-1">
                            <input
                              type="email"
                              required
                              placeholder="Your Email"
                              value={schedulerEmail}
                              onChange={e => setSchedulerEmail(e.target.value)}
                              className="w-full px-3 py-2 bg-background border border-card-border rounded-lg outline-none text-zinc-900 dark:text-white focus:border-blue-600 transition-colors"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                      >
                        <CalendarCheck className="w-3.5 h-3.5 mr-1" />
                        <span>Confirm Call Request</span>
                      </button>
                    </motion.div>
                  )}

                </motion.form>
              ) : (
                <motion.div
                  key="scheduler-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-4 font-sans text-xs text-zinc-600 dark:text-zinc-400"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400 stroke-[3]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider font-mono">
                      Meeting Requested!
                    </h4>
                    <p className="max-w-xs mx-auto leading-relaxed">
                      A calendar request has been logged for <strong>{schedulerName}</strong> on <strong>{selectedDay}</strong> at <strong>{selectedTime}</strong> (IST).
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={resetMeeting}
                      className="px-4 py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-lg font-semibold cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

    </div>
  );
}
