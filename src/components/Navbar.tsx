import { ArrowRight, ChevronDown, Cpu, Hexagon, Layers, Menu, Play, ShieldCheck, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const navItems = ['Products', 'Solutions', 'Technology', 'Resources', 'About'];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between rounded-full border border-gray-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all duration-300 lg:mt-5 lg:border-0 lg:bg-transparent lg:shadow-none lg:backdrop-blur-none">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-500/10">
              <Hexagon className="h-5 w-5 text-[#2563EB]" fill="rgba(37,99,235,0.12)" />
            </div>
            <span className="text-sm font-black tracking-[0.18em] text-[#0A101D]">AGENTIFY</span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#4A5568] lg:flex">
            {navItems.map((item, index) => (
              <button
                key={item}
                type="button"
                className="group inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-[#0A101D]"
              >
                <span>{item}</span>
                {index === 0 && <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] transition-all duration-300 hover:bg-blue-700"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-[#0A101D] transition-colors duration-300 hover:bg-white lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-full rounded-full bg-[#0A101D] transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-full rounded-full bg-[#0A101D] transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full rounded-full bg-[#0A101D] transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex min-h-full flex-col items-center justify-center gap-8 px-6 text-center"
            >
              {['Products', 'Solutions', 'Technology', 'Resources', 'About'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="text-3xl font-semibold text-[#0A101D] transition-colors duration-300 hover:text-[#2563EB]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </button>
              ))}
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-base font-medium text-white"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
