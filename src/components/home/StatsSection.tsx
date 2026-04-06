import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 5, label: 'Projects Completed' },
  { value: 1, label: 'Years of Experience' },
  { value: 1000, label: 'Code Commits' },
  { value: 10, label: 'Technologies Used' },
];

const StatItem: React.FC<{ value: number; label: string; index: number }> = ({ value, label, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="z-[70]">
      <div className="glass-card rounded-2xl p-6 sm:p-8 text-center relative transition-all duration-300 hover:-translate-y-1">
        <span className="absolute top-3 right-4 text-[10px] font-mono text-zinc-300 dark:text-zinc-700 font-bold">
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text">
          {inView ? (
            <><CountUp end={value} duration={3} separator="," />+</>
          ) : (
            <span className="tabular-nums">0+</span>
          )}
        </p>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm font-medium">{label}</p>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => (
  <section className="py-16 sm:py-24">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} {...stat} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
