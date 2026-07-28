import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            AuraClean <span className="text-teal-600">India</span>
          </Link>
          <div className="flex items-center space-x-3">
            <a href="tel:8541825823" className="text-sm font-bold text-slate-900 hover:text-teal-600">
              📞 8541-825-823
            </a>
            <a href="https://wa.me/918541825823?text=Hello%20AuraClean%20India,%20I%20want%20to%20book%20a%20service." target="_blank" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded-lg text-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      <section className="bg-slate-900 text-white py-20 lg:py-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Professional Cleaning Services <br className="hidden sm:block"/> Across <span className="text-teal-400">Bihar & India</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 mb-10">
            Delivering high standards of hygiene and sanitization. Call or WhatsApp us at <span className="text-teal-400 font-bold">8541825823</span>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/918541825823?text=Hi,%20I%20want%20to%20book%20cleaning." target="_blank" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md">
              Book via WhatsApp
            </a>
            <a href="tel:8541825823" className="bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-3.5 rounded-lg">
              Call Now: 8541825823
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} AuraClean India. All rights reserved. Helpline: 8541825823.</p>
      </footer>
    </div>
  );
    }
