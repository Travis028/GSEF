import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const steps = ['Ticket', 'Details', 'Review', 'Payment'];

const Registration = () => {
  const { id } = useParams();
  const [step, setStep] = useState(1);

  const nextStep = (event) => {
    event.preventDefault();
    setStep((current) => Math.min(current + 1, steps.length));
  };

  const prevStep = () => setStep((current) => Math.max(current - 1, 1));

  return (
    <div className="min-h-screen bg-offwhite py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-[2rem] bg-white shadow-2xl border border-slate-200 overflow-hidden">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative px-8 py-10 sm:px-12 sm:py-14 bg-gradient-to-br from-gsef-navy to-gsef-purple text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_40%)]" />
              <div className="relative space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] font-semibold text-gsef-teal">
                  Registration flow
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Secure your place at GSEF 2026</h1>
                <p className="max-w-xl text-slate-200/90 leading-8">
                  Fast, modern registration with clear progress, brand-led colors, and a polished step-by-step experience.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-200/80">Event</p>
                    <p className="mt-2 font-semibold text-white">GSEF 2026 Summit</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-200/80">Reference</p>
                    <p className="mt-2 font-semibold text-white">{id || 'REG-2026-01'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 py-10 sm:px-12 sm:py-14">
              <div className="mb-10">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-gsef-teal">
                  <span className="h-2 w-2 rounded-full bg-gsef-teal" /> Step {step} of {steps.length}
                </div>
                <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2">
                  {steps.map((label, index) => {
                    const stepIndex = index + 1;
                    const active = stepIndex === step;
                    const done = stepIndex < step;
                    return (
                      <div key={label} className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${done ? 'bg-gsef-teal text-white' : active ? 'bg-gsef-green text-white shadow-lg' : 'bg-slate-100 text-slate-500'}`}>
                          {stepIndex}
                        </div>
                        <div className="min-w-[90px]">
                          <p className={`text-xs uppercase tracking-[0.2em] ${active ? 'text-gsef-navy' : 'text-slate-400'}`}>{label}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Choose the right ticket</h2>
                    <div className="space-y-4">
                      <label className="relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-lg">
                        <input type="radio" name="ticket" defaultChecked className="peer sr-only" />
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-lg font-semibold text-slate-900">Standard Pass</p>
                            <p className="text-sm text-slate-500 mt-2">Full access to sessions, networking lounge, and digital materials.</p>
                          </div>
                          <span className="text-xl font-bold text-gsef-navy">KES 3,000</span>
                        </div>
                        <div className="mt-4 text-sm text-slate-600">Best for new founders and growth stage startups.</div>
                      </label>
                      <label className="relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 transition hover:shadow-lg">
                        <input type="radio" name="ticket" className="peer sr-only" />
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-lg font-semibold text-slate-900">VIP Pass</p>
                            <p className="text-sm text-slate-500 mt-2">Priority seating, speaker lounge access, and VIP networking dinner.</p>
                          </div>
                          <span className="text-xl font-bold text-gsef-gold">KES 10,000</span>
                        </div>
                        <div className="mt-4 text-sm text-slate-600">Perfect for partners and corporate guests.</div>
                      </label>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <form onSubmit={nextStep} className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">Attendee details</h2>
                      <p className="text-sm text-slate-500">Use the same email that will receive your ticket and updates.</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {['First Name', 'Last Name', 'Email Address', 'Organization'].map((label) => (
                        <label key={label} className="block text-sm font-medium text-slate-700">
                          <span>{label}</span>
                          <input type={label.includes('Email') ? 'email' : 'text'} required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-gsef-green focus:ring-2 focus:ring-gsef-green/20" />
                        </label>
                      ))}
                    </div>
                    <div className="flex justify-between gap-4 pt-2">
                      <button type="button" onClick={prevStep} className="rounded-3xl border border-slate-200 px-6 py-3 text-slate-700 transition hover:bg-slate-100">Back</button>
                      <button type="submit" className="rounded-3xl bg-gsef-green px-6 py-3 font-semibold text-white shadow-lg shadow-gsef-green/20 transition hover:bg-gsef-green-dark">Continue</button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Review your registration</h2>
                    <div className="space-y-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Ticket</p>
                          <p className="mt-2 font-semibold text-slate-900">Standard Pass</p>
                        </div>
                        <span className="rounded-full bg-gsef-green/10 px-4 py-2 text-sm font-semibold text-gsef-green">Confirmed</span>
                      </div>
                      <div className="flex flex-col gap-3 text-sm text-slate-600">
                        <p>Full access to all sessions, workshops, peer networking and summit materials.</p>
                        <p>Preferred email: example@domain.com</p>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                        <span className="font-medium text-slate-700">Total</span>
                        <span className="text-2xl font-bold text-gsef-navy">KES 3,000</span>
                      </div>
                    </div>
                    <div className="mt-8 flex justify-between gap-4">
                      <button type="button" onClick={prevStep} className="rounded-3xl border border-slate-200 px-6 py-3 text-slate-700 transition hover:bg-slate-100">Back</button>
                      <button onClick={nextStep} className="rounded-3xl bg-gsef-gold px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-gsef-gold/30 transition hover:bg-gsef-gold-dark">Proceed to Payment</button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="text-center py-10">
                    <FiCheckCircle className="mx-auto mb-6 text-gsef-green" size={68} />
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">Registration complete</h2>
                    <p className="max-w-xl mx-auto text-slate-600 leading-7 mb-8">Your ticket has been successfully issued. Check your inbox for confirmation and next-step details.</p>
                    <Link to="/dashboard" className="inline-flex items-center justify-center rounded-full bg-gsef-green px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-gsef-green/25 transition hover:bg-gsef-green-dark">
                      Go to Dashboard
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
