import { ArrowRight, Cpu, Layers, Play, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { icon: Cpu, value: '250+', label: 'AI Models Deployed' },
  { icon: Layers, value: '98%', label: 'Client Satisfaction' },
  { icon: ShieldCheck, value: 'Enterprise-Grade', label: 'Security & Compliance' },
];

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 flex min-h-screen w-full items-center"
    >
      <div className="flex w-full max-w-[650px] flex-col px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-0 lg:pt-0">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-500 shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
          AI-POWERED. HUMAN-FOCUSED.
        </div>

        <h1
          className="mt-8 max-w-[620px] text-[44px] font-black leading-[0.98] tracking-[-0.04em] text-[#0A101D] sm:text-[52px] lg:text-[72px]"
          style={{ fontFamily: '"Orbitron", sans-serif' }}
        >
          INTELLIGENCE
          <br />
          <span className="text-[#60A5FA]">THAT BUILDS</span>
          <br />
          THE FUTURE<span className="text-[#2563EB]">.</span>
        </h1>

        <p className="mt-6 max-w-[560px] text-base leading-relaxed text-[#4A5568] sm:text-lg">
          Agentify blends cutting-edge AI with human ingenuity to deliver solutions that drive progress and impact.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_16px_35px_rgba(37,99,235,0.32)] transition-all duration-300 hover:bg-blue-700"
          >
            Explore Solutions
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3.5 text-[15px] font-medium text-[#0A101D] shadow-sm transition-colors duration-300 hover:bg-gray-50"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563EB] text-white">
              <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
            </span>
            Watch Video
          </button>
        </div>

        <div className="mt-10 w-full max-w-[620px] border-t border-gray-200 pt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={[
                  'flex items-start gap-3',
                  index !== stats.length - 1 ? 'md:border-r md:border-gray-200 md:pr-4' : '',
                ].join(' ')}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-[#2563EB]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[26px] font-extrabold leading-none text-[#0A101D]">{value}</div>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
