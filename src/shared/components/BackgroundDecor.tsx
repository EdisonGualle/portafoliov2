import { memo } from 'react';

const gridPattern =
  "data:image/svg+xml,%3Csvg width='140' height='140' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 39.5H40V40H0z' fill='rgba(148,163,184,0.12)'/%3E%3Cpath d='M39.5 0V40H40V0z' fill='rgba(148,163,184,0.12)'/%3E%3C/svg%3E";

const BackgroundDecor = (): JSX.Element => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]" />
    <div className="absolute inset-x-0 top-[-25%] h-[720px] rotate-6 rounded-[50%] bg-gradient-to-br from-primary/25 via-transparent to-secondary/30 blur-3xl opacity-50 sm:top-[-35%]" />
    <div className="absolute left-[8%] top-[14%] h-80 w-80 rounded-full bg-primary/20 blur-3xl mix-blend-screen" />
    <div className="absolute right-[6%] top-[30%] h-72 w-72 rounded-full bg-secondary/20 blur-3xl mix-blend-screen" />
    <div className="absolute -bottom-40 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px]" />
    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(148,163,184,0.06)_45%,rgba(255,255,255,0.02)_100%)] opacity-40 mix-blend-overlay" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,116,144,0.12),transparent_60%)]" />
    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("${gridPattern}")` }} />
  </div>
);

export default memo(BackgroundDecor);
