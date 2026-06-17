'use client';

import { useEffect, useState } from 'react';

const specials = [
  {
    id: 'gen-30a',
    title: '30A Generator Inlet',
    price: '$1,100',
    badge: null,
    tagline: 'Power your well, lights & internet during outages',
    includes: [
      'Generator Inlet Box & Outlet',
      'Main Breaker Interlock Kit',
      '30A 240V Breaker',
      "15' Generator Cord",
      '15 Min Training & Instruction',
    ],
    note: 'Generator not included. Permit & utility fees extra.',
    pdf: '/assets/Special_30A_240V_Inlet.pdf',
    popular: false,
  },
  {
    id: 'gen-50a',
    title: '50A Generator Inlet',
    price: '$1,300',
    badge: 'WHOLE HOME POWER',
    tagline: 'Run furnace, water heater, appliances & TVs all at once',
    includes: [
      '50A Generator Inlet Box & Outlet',
      'Main Breaker Interlock Kit',
      '50A 240V Breaker',
      "15' Generator Cord",
      '15 Min Training & Instruction',
    ],
    note: 'Requires 12,000W generator with 50A 240V plug. Permit extra.',
    pdf: '/assets/Special_50A_240V_Inlet.pdf',
    popular: false,
  },
  {
    id: 'ev',
    title: 'EV Charger Outlet',
    price: '$1,000',
    badge: 'MOST POPULAR',
    tagline: 'Dedicated 50A outlet — works with every EV brand',
    includes: [
      '50A 240V EV Outlet & Box',
      'Rated Conduit, Wire & Cable',
      '50A 240V Breaker',
    ],
    note: 'EV charger unit not included. Permit & utility fees extra.',
    pdf: '/assets/Special_50A_240V_EV_Charger_Outlet.pdf',
    popular: true,
  },
  {
    id: 'hottub',
    title: 'Hot Tub Hookup',
    price: '$1,300',
    badge: '1-YR WARRANTY',
    tagline: 'Dedicated circuit + GFCI — ready to plug in and soak',
    includes: [
      'New 50A GFCI Breaker',
      'New Disconnect',
      "Conduit & Wire up to 15'",
    ],
    note: '1 Year Parts & Labor Warranty included.',
    pdf: '/assets/Special_Hot_Tub.pdf',
    popular: false,
  },
  {
    id: 'panel',
    title: 'Panel Replacement',
    price: 'From $2,500',
    badge: '1-YR WARRANTY',
    tagline: 'Modern, code-compliant panel with surge protection',
    includes: [
      'New 100A Panel',
      'Wiring up to 18 Circuits',
      'All New Breakers',
      'Whole-Home Surge Protection',
      'All Breakers Labeled',
    ],
    note: '1 Year Parts & Labor Warranty included.',
    pdf: '/assets/Special_Panel_Replacement.pdf',
    popular: true,
  },
  {
    id: 'upgrade',
    title: '200A Service Upgrade',
    price: 'From $5,000',
    badge: 'PERMIT INCLUDED',
    tagline: 'Handle EV chargers, hot tubs, electric heat & more',
    includes: [
      'New 200A Panel & Meter',
      'Grounding Rods + Water Main Ground',
      'All New Breakers',
      'Whole-Home Surge Protection',
      'Service Mast Included',
      'Permit Included',
    ],
    note: '1 Year Parts & Labor Warranty included.',
    pdf: '/assets/Special_Service_Upgrade.pdf',
    popular: false,
  },
];

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function useCountdown() {
  const calc = () => {
    const now = new Date();
    const target = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };

  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return t;
}

export default function Specials() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section id="specials" className="bg-[#071820] pt-20 sm:pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-6 animate-pulse">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            Limited Time — Ends Soon!
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Pricing <span className="text-[#eea603]">Specials</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Fixed prices on the most popular electrical jobs — no surprises, no hidden fees.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-14">
          <div className="bg-[#082933] border border-[#eea603]/25 rounded-2xl px-6 sm:px-10 py-5 flex items-center gap-4 sm:gap-8">
            <span className="text-white/40 text-[11px] uppercase tracking-widest font-bold hidden sm:block">
              Offer ends in
            </span>
            {[
              { val: days, label: 'Days' },
              { val: hours, label: 'Hrs' },
              { val: minutes, label: 'Min' },
              { val: seconds, label: 'Sec' },
            ].map(({ val, label }, i) => (
              <div key={label} className="flex items-center gap-4 sm:gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl font-black text-[#eea603] tabular-nums leading-none">
                    {pad(val)}
                  </span>
                  <span className="text-white/35 text-[10px] uppercase tracking-widest mt-1">
                    {label}
                  </span>
                </div>
                {i < 3 && (
                  <span className="text-[#eea603]/50 text-2xl font-black leading-none -mt-2">:</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {specials.map((s) => (
            <div
              key={s.id}
              className={`relative bg-[#0a2030] rounded-2xl p-6 flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#eea603]/10 ${
                s.popular
                  ? 'border-[#eea603] shadow-lg shadow-[#eea603]/15'
                  : 'border-white/8 hover:border-[#eea603]/40'
              }`}
            >
              {/* Badge */}
              {s.badge && (
                <div className="absolute -top-3 left-5">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                      s.popular
                        ? 'bg-[#eea603] text-[#071820]'
                        : 'bg-white/10 text-white/65 border border-white/15'
                    }`}
                  >
                    {s.badge}
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mt-3 mb-2">
                <span className="text-[#eea603] text-3xl sm:text-4xl font-black leading-none">
                  {s.price}
                </span>
              </div>

              {/* Title + tagline */}
              <h3 className="text-white font-black text-xl mb-1">{s.title}</h3>
              <p className="text-white/45 text-sm mb-5 leading-relaxed">{s.tagline}</p>

              {/* Includes */}
              <ul className="space-y-2 mb-5 flex-1">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/65 text-sm">
                    <span className="text-[#eea603] flex-shrink-0 mt-0.5 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p className="text-white/25 text-xs mb-4 italic leading-relaxed">{s.note}</p>

              {/* CTA */}
              <a
                href={s.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 ${
                  s.popular
                    ? 'bg-[#eea603] hover:bg-[#d99400] text-[#071820] shadow-lg shadow-[#eea603]/30'
                    : 'bg-white/8 hover:bg-[#eea603] hover:text-[#071820] text-white border border-white/10 hover:border-transparent'
                }`}
              >
                Claim This Deal →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center border border-white/10 rounded-3xl py-10 px-6">
          <h3 className="text-white font-bold text-xl mb-2">
            Don&apos;t see your project?
          </h3>
          <p className="text-white/45 mb-6">
            We handle all electrical work — call for a free, no-pressure estimate.
          </p>
          <a
            href="tel:+17204365746"
            className="bg-[#eea603] hover:bg-[#d99400] text-[#071820] font-extrabold text-lg px-10 py-4 rounded-full inline-block transition-all duration-200 shadow-xl hover:-translate-y-0.5"
          >
            Call (720) 436-5746
          </a>
        </div>
      </div>
    </section>
  );
}
