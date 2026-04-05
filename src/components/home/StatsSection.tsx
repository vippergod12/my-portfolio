import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatItem: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Chỉ kích hoạt 1 lần
    threshold: 0.1,    // Kích hoạt khi 10% của component hiện ra
  });

  return (
    <div ref={ref} className="text-center z-[70]">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-600 dark:text-sky-400">
        {inView ? (
          <>
            <CountUp end={value} duration={3} separator="," />
            +
          </>
        ) : (
          <span className="tabular-nums">0+</span>
        )}
      </p>
      <p className="text-zinc-600 dark:text-gray-400 mt-2">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <StatItem value={5} label="Projects Completed" />
          <StatItem value={1} label="Years of Experience" />
          <StatItem value={1000} label="Code Commits" />
          <StatItem value={10} label="Technologies Used" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;