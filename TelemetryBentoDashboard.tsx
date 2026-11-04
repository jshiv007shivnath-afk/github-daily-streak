import React, { useState } from 'react';

interface MetricProps {
  label: string;
  value: string;
  unit?: string;
  change?: string;
  positive?: boolean;
}

const TelemetryChip: React.FC<MetricProps> = ({ label, value, unit, change, positive }) => (
  <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-lg p-3">
    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">{label}</div>
    <div className="text-lg font-mono font-semibold text-zinc-100 tabular-nums mt-0.5">
      {value}
      {unit && <span className="text-xs text-zinc-500 font-normal ml-0.5">{unit}</span>}
    </div>
    {change && (
      <div
        className={`text-[11px] font-mono mt-1 flex items-center gap-1 ${
          positive ? 'text-emerald-400' : 'text-zinc-500'
        }`}
      >
        {change}
      </div>
    )}
  </div>
);

export const TelemetryBentoDashboard: React.FC = () => {
  const [activeRange, setActiveRange] = useState<'24h' | '7d' | '30d'>('24h');

  const recentCommits = [
    { hash: 'fde07a3', msg: 'chore: schedule automation for 9 AM IST with 50-200 daily commits', time: 'just now' },
    { hash: 'b50a6ea', msg: 'chore: automated daily graph streak update 11/11 [skip ci]', time: '12m ago' },
    { hash: 'cfb94b7', msg: 'chore: automated daily graph streak update 10/11 [skip ci]', time: '12m ago' },
    { hash: '15ac05e', msg: 'chore: automated daily graph streak update 9/11 [skip ci]', time: '12m ago' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-10 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Top Command & Breadcrumb Bar */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-bold text-emerald-400 text-sm shadow-inner">
              P
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-500">core-infra</span>
                <span className="text-xs text-zinc-600">/</span>
                <span className="text-xs font-mono text-zinc-300 font-medium">telemetry-prod-01</span>
              </div>
              <h1 className="text-base font-semibold tracking-tight text-white flex items-center gap-2">
                Cluster Pulse & Streak Engine
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Raycast style search chip */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 shadow-sm hover:border-zinc-700 transition-colors cursor-pointer">
              <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline">Search runners, deployments...</span>
              <kbd className="font-mono text-zinc-500 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800 text-[10px]">
                ⌘K
              </kbd>
            </div>

            <button className="h-8 px-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
              Trigger Job
            </button>
          </div>
        </header>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* BANNER CARD: Spans 3 columns (Hero Card) */}
          <div className="md:col-span-3 rounded-xl bg-zinc-900/90 border border-zinc-800/80 p-6 relative overflow-hidden backdrop-blur-sm hover:border-zinc-700/80 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Throughput & Global Latency</span>
                  <div className="inline-flex rounded-md border border-zinc-800 bg-zinc-950 p-0.5 text-[11px] font-mono">
                    {(['24h', '7d', '30d'] as const).map((range) => (
                      <button
                        key={range}
                        onClick={() => setActiveRange(range)}
                        className={`px-2 py-0.5 rounded ${
                          activeRange === range
                            ? 'bg-zinc-800 text-zinc-100 font-medium'
                            : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-mono font-bold tracking-tight text-white tabular-nums">1,489,204</span>
                  <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                    +14.8% vs avg
                  </span>
                </div>
                <p className="text-xs text-zinc-400 max-w-md">
                  Zero dropped packets across 18 edge locations. Automated streak commits synced successfully with upstream.
                </p>
              </div>

              {/* Quick Telemetry Chips */}
              <div className="grid grid-cols-3 gap-3">
                <TelemetryChip label="P99 Latency" value="14.2" unit="ms" change="-2.1ms" positive />
                <TelemetryChip label="Success Rate" value="99.992" unit="%" change="2 err / 1M" />
                <TelemetryChip label="Active Fleet" value="48" unit="/48" change="100% healthy" positive />
              </div>
            </div>

            {/* Sparkline Curve */}
            <div className="mt-6 pt-4 border-t border-zinc-800/60">
              <svg className="w-full h-16 text-emerald-500 overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 50">
                <defs>
                  <linearGradient id="gradient-emerald" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path d="M0,35 Q30,42 60,30 T120,24 T180,32 T240,16 T300,22 T360,10 T420,18 T480,8 L500,12 L500,50 L0,50 Z" fill="url(#gradient-emerald)" />
                <path d="M0,35 Q30,42 60,30 T120,24 T180,32 T240,16 T300,22 T360,10 T420,18 T480,8 L500,12" fill="none" stroke="#10b981" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* CARD 1: Automated Streak Engine Tile (col-span-1) */}
          <div className="rounded-xl bg-zinc-900/90 border border-zinc-800/80 p-5 flex flex-col justify-between hover:border-zinc-700/80 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Streak Engine</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                  RUNNING
                </span>
              </div>

              <div>
                <div className="text-2xl font-mono font-bold text-white tabular-nums">365 Days</div>
                <div className="text-xs text-zinc-400 mt-0.5">Consecutive green contribution record</div>
              </div>

              <div className="space-y-2 pt-2 border-t border-zinc-800/60 font-mono text-xs">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Next Schedule:</span>
                  <span className="text-zinc-200">09:00 AM IST</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Batch Variance:</span>
                  <span className="text-emerald-400">50 – 200 commits/day</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Target User:</span>
                  <span className="text-zinc-300">jshiv007shivnath-afk</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Cron: <code className="text-zinc-400">30 3 * * *</code></span>
              <span className="text-emerald-400">Auto-push verified</span>
            </div>
          </div>

          {/* CARD 2: Real-time Commit Log Stream (col-span-2) */}
          <div className="md:col-span-2 rounded-xl bg-zinc-900/90 border border-zinc-800/80 p-5 flex flex-col justify-between hover:border-zinc-700/80 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Live Commit Stream</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <span className="text-xs font-mono text-zinc-500">branch: main</span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                {recentCommits.map((c) => (
                  <div key={c.hash} className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/50 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <span className="text-emerald-400 font-semibold">{c.hash}</span>
                      <span className="text-zinc-300 truncate">{c.msg}</span>
                    </div>
                    <span className="text-zinc-500 text-[11px] shrink-0 pl-2">{c.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Target repo: <span className="text-zinc-300">github-daily-streak</span></span>
              <span className="text-emerald-400 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Clean Working Tree
              </span>
            </div>
          </div>

        </div>

        {/* Global Edge Latency Footer */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 text-xs font-mono text-zinc-500 border-t border-zinc-800/80">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              bom-01 (Mumbai): 11ms
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              iad-01 (US-East): 72ms
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              fra-01 (Frankfurt): 98ms
            </span>
          </div>
          <div>
            <span>Linear Dark Mode • Zero AI Slop</span>
          </div>
        </footer>

      </div>
    </div>
  );
};
export default TelemetryBentoDashboard;
