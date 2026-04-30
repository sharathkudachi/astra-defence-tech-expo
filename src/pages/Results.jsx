import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiMedal, GiTrophy, GiLaurelCrown } from 'react-icons/gi';
import { HiShieldCheck, HiSearch, HiStar } from 'react-icons/hi';

/* ─── Round 1 → Round 2 Qualified Teams (alphabetical) ─── */
const qualifiedTeams = [
  { team: 'ADGM',                 leader: 'Riya Pereira' },
  { team: 'Anonymous_xyz',        leader: 'Revanth Vishnu Reddy C B' },
  { team: 'Athena Forge',         leader: 'Prathiksha Gajula' },
  { team: 'Digital Defence Force',leader: 'Aniket Bindal' },
  { team: 'drishti',              leader: 'Bhardwaj B R' },
  { team: 'Elite',                leader: 'Spandana' },
  { team: 'era',                  leader: 'eeshan agarwal' },
  { team: 'GENESIS',              leader: 'Hemanth S' },
  { team: 'GuardRail',            leader: 'Vignesh Vellore Venkatesh' },
  { team: 'GunSaviours',          leader: 'Om Basant Singh' },
  { team: 'Hashira Elite',        leader: 'Monika S S' },
  { team: 'Hawks',                leader: 'Raghavendra Joshi' },
  { team: 'Helix Division',       leader: 'Aaron Shibu Mammen' },
  { team: 'Holoscout',            leader: 'Yash Parkhi' },
  { team: 'IntruderX',            leader: 'Inchara G Kundur' },
  { team: 'Minus Zero',           leader: 'Kishan M N' },
  { team: 'Modulyn',              leader: 'Gaurav I K' },
  { team: 'Prime Coders',         leader: 'Tharun Thej' },
  { team: 'Smart Saver',          leader: 'Ashish Pandey' },
  { team: 'SNYPTER',              leader: 'Prarthana V' },
  { team: 'SonicVault',           leader: 'Kamal Reddy' },
  { team: 'Stalwarts',            leader: 'Ashil Jermine George' },
  { team: 'STAR Rocketry',        leader: 'Dhruv Kakade' },
  { team: 'SysNova',              leader: 'Mohd Ariz' },
  { team: 'team elite',           leader: 'tejaswi raja' },
  { team: 'Team N0VA',            leader: 'Nishaant K' },
  { team: 'Tekron',               leader: 'Rajesh S' },
  { team: 'Tenet',                leader: 'Satvika Prashanth Hiremath' },
  { team: 'The End Effectors',    leader: 'Swapnil Biswas' },
  { team: 'The Primes',           leader: 'Laya M' },
  { team: 'USSR',                 leader: 'Rudrarajsinh Atodariya' },
  { team: 'VAJRA',                leader: 'AMAN KUMAR Dhar' },
  { team: 'VANTAGE',              leader: 'Skanda Prasad' },
  { team: 've_os',                leader: 'Anirudh C' },
  { team: 'veer rakshak',         leader: 'Prajwal N R' },
  { team: 'YAL',                  leader: 'MOHAMED IDREES A S' },
];

/* ─── Round 2 Final Results (in order as given) ─── */
const round2Results = [
  { team: 'Holoscout',    leader: 'Yash Parkhi',          rank: 1, label: 'Winner' },
  { team: 'Team Elite',   leader: 'Tejaswi Raja',          rank: 2, label: '1st Runner-Up' },
  { team: 'Stalwarts',    leader: 'Ashil Jermine George',  rank: 3, label: '2nd Runner-Up' },
  { team: 'Veer Rakshak', leader: 'Prajwal N R',           rank: 4 },
  { team: 'ADGM',         leader: 'Riya Pereira',          rank: 5 },
  { team: 'SNYPTER',      leader: 'Prarthana V',           rank: 6 },
  { team: 'Modulyn',      leader: 'Gaurav I K',            rank: 7 },
  { team: 'Eagle',        leader: 'Abhiram Adiga',         rank: 8 },
  { team: 'STAR Rocketry',leader: 'Dhruv Kakade',          rank: 9 },
  { team: 'SonicVault',   leader: 'Kamal Reddy',           rank: 10 },
];

const podiumConfig = {
  1: { color: 'text-yellow-400', border: 'border-yellow-400/60', bg: 'bg-yellow-400/10', glow: 'shadow-[0_0_30px_rgba(250,204,21,0.2)]', icon: '🥇' },
  2: { color: 'text-slate-300',  border: 'border-slate-300/60',  bg: 'bg-slate-300/10',  glow: 'shadow-[0_0_20px_rgba(203,213,225,0.15)]', icon: '🥈' },
  3: { color: 'text-amber-600',  border: 'border-amber-600/60',  bg: 'bg-amber-600/10',  glow: 'shadow-[0_0_20px_rgba(217,119,6,0.15)]', icon: '🥉' },
};

const Results = () => {
  const [query, setQuery] = useState('');

  const filtered = query.trim() === ''
    ? qualifiedTeams
    : qualifiedTeams.filter(
        (e) =>
          e.team.toLowerCase().includes(query.toLowerCase()) ||
          e.leader.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="container mx-auto px-6 py-32 relative" id="results">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="font-rajdhani text-accent-orange/60 tracking-[0.4em] uppercase text-xs mb-4 block font-black">
          ASTRA Defence Tech Expo 2026 · BMSIT&amp;M
        </span>
        <h1 className="text-4xl md:text-7xl font-orbitron font-black mb-4 tracking-tighter italic">
          RESULTS
        </h1>
        <div className="w-24 h-1 bg-accent-orange mx-auto" />
      </motion.div>

      {/* ══════════════════════════════════════════
          SECTION 1 — ROUND 1 SELECTION (Qualified)
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mb-6"
      >
        <div className="flex items-center gap-4 max-w-4xl mx-auto mb-8">
          <div className="h-px flex-1 bg-custom-border" />
          <h2 className="font-orbitron font-black text-xl md:text-2xl tracking-widest uppercase text-text-primary">
            Round 1 <span className="text-accent-orange">Selection</span>
          </h2>
          <div className="h-px flex-1 bg-custom-border" />
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-6 mb-10"
      >
        <div className="flex items-center gap-3 px-6 py-3 border border-accent-orange/30 bg-bg-surface">
          <GiTrophy className="text-accent-orange text-2xl" />
          <div>
            <p className="font-orbitron font-black text-2xl text-accent-orange leading-none">{qualifiedTeams.length}</p>
            <p className="font-rajdhani text-[10px] text-text-muted uppercase tracking-widest">Teams Qualified</p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 border border-accent-orange/30 bg-bg-surface">
          <HiShieldCheck className="text-accent-orange text-2xl" />
          <div>
            <p className="font-orbitron font-black text-2xl text-accent-orange leading-none">Round 2</p>
            <p className="font-rajdhani text-[10px] text-text-muted uppercase tracking-widest">30 Apr 2026 · BMSIT&amp;M</p>
          </div>
        </div>
      </motion.div>

      {/* Important Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-4xl mx-auto mb-8 bg-bg-surface border border-accent-orange/30 p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-accent-orange" />
        <div className="relative z-10 pl-4">
          <span className="font-orbitron text-[10px] font-black tracking-[0.3em] text-accent-orange uppercase block mb-3">
            ⚠ Important Notice
          </span>
          <p className="text-text-muted font-rajdhani text-sm md:text-base leading-relaxed mb-4">
            If you have received the shortlisting email and your team name is{' '}
            <span className="text-text-primary font-semibold">not present here</span>, kindly contact:
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-accent-orange font-orbitron font-black text-base">Reyyi Shreyas</span>
            <a
              href="tel:+916366807796"
              className="flex items-center gap-2 px-4 py-2 border border-accent-orange/40 text-accent-orange font-orbitron text-xs font-bold tracking-widest hover:bg-accent-orange/10 transition-all"
            >
              📞 +91 63668 07796
            </a>
          </div>
        </div>
      </motion.div>

      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-4"
      >
        <div className="relative">
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-lg pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search team name or leader..."
            className="w-full bg-bg-surface border border-custom-border focus:border-accent-orange/60 outline-none pl-11 pr-4 py-3.5 font-rajdhani text-text-primary text-base placeholder:text-text-muted/50 tracking-wide transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors text-sm font-rajdhani uppercase tracking-widest"
            >
              Clear
            </button>
          )}
        </div>
        {query && (
          <p className="mt-2 text-[11px] font-rajdhani text-text-muted uppercase tracking-widest">
            {filtered.length === 0
              ? 'No teams found'
              : `${filtered.length} team${filtered.length !== 1 ? 's' : ''} found`}
          </p>
        )}
      </motion.div>

      {/* Round 1 Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-32"
      >
        <div className="grid grid-cols-[3rem_1fr_1fr] gap-4 px-4 md:px-6 py-3 border-b-2 border-accent-orange/50 mb-1 bg-bg-surface">
          <span className="font-orbitron text-[10px] text-accent-orange uppercase tracking-widest">#</span>
          <span className="font-orbitron text-[10px] text-accent-orange uppercase tracking-widest">Team Name</span>
          <span className="font-orbitron text-[10px] text-accent-orange uppercase tracking-widest">Team Leader</span>
        </div>
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-orbitron text-text-muted text-sm uppercase tracking-widest">No teams match "{query}"</p>
            <p className="font-rajdhani text-text-muted/60 text-xs mt-2 uppercase tracking-widest">Try a different name</p>
          </div>
        ) : (
          filtered.map((entry) => (
            <div
              key={entry.team}
              className="grid grid-cols-[3rem_1fr_1fr] gap-4 px-4 md:px-6 py-4 border-b border-custom-border hover:bg-accent-orange/[0.05] transition-colors group"
            >
              <span className="font-orbitron text-xs text-text-muted group-hover:text-accent-orange/70 transition-colors">
                {String(qualifiedTeams.indexOf(entry) + 1).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2 min-w-0">
                <GiMedal className="text-accent-orange/50 text-sm shrink-0 group-hover:text-accent-orange transition-colors" />
                <span className={`font-orbitron text-xs md:text-sm uppercase tracking-wide leading-snug truncate ${
                  query && entry.team.toLowerCase().includes(query.toLowerCase())
                    ? 'text-accent-orange' : 'text-text-primary'
                }`}>
                  {entry.team}
                </span>
              </div>
              <span className={`font-rajdhani text-sm font-semibold tracking-wide group-hover:text-text-primary transition-colors ${
                query && entry.leader.toLowerCase().includes(query.toLowerCase())
                  ? 'text-accent-orange' : 'text-text-muted'
              }`}>
                {entry.leader}
              </span>
            </div>
          ))
        )}
      </motion.div>

      {/* ══════════════════════════════════════════
          SECTION 2 — ROUND 2 FINAL RESULTS
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-4 max-w-4xl mx-auto mb-4">
          <div className="h-px flex-1 bg-custom-border" />
          <h2 className="font-orbitron font-black text-xl md:text-2xl tracking-widest uppercase text-text-primary">
            Round 2 <span className="text-accent-orange">Results</span>
          </h2>
          <div className="h-px flex-1 bg-custom-border" />
        </div>
        <p className="text-center font-rajdhani text-text-muted text-sm uppercase tracking-widest mb-12">
          Final Rankings · 30 April 2026 · BMSIT&amp;M, Bengaluru
        </p>
      </motion.div>

      {/* Top 10 callout banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="max-w-4xl mx-auto mb-10 text-center"
      >
        <div className="inline-flex flex-col items-center gap-3 px-8 py-6 border border-accent-orange/30 bg-bg-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="flex items-center gap-3 relative z-10">
            <GiLaurelCrown className="text-accent-orange text-3xl" />
            <span className="font-orbitron font-black text-xl md:text-2xl tracking-widest uppercase text-text-primary">
              Top <span className="text-accent-orange">10</span> Teams of the Expo
            </span>
            <GiLaurelCrown className="text-accent-orange text-3xl scale-x-[-1]" />
          </div>
          <p className="font-rajdhani text-text-muted text-sm md:text-base tracking-wide relative z-10">
            Congratulations to the finest innovators at ASTRA Defence Tech Expo 2026
          </p>
        </div>
      </motion.div>

      {/* Podium — Top 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
      >
        {round2Results.slice(0, 3).map((entry) => {
          const cfg = podiumConfig[entry.rank];
          return (
            <motion.div
              key={entry.rank}
              whileHover={{ y: -6 }}
              className={`relative border ${cfg.border} ${cfg.bg} ${cfg.glow} p-8 flex flex-col items-center text-center ${entry.rank === 1 ? 'md:order-2' : entry.rank === 2 ? 'md:order-1' : 'md:order-3'}`}
            >
              {/* Corner accents */}
              <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${cfg.border}`} />
              <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 ${cfg.border}`} />
              <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 ${cfg.border}`} />
              <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${cfg.border}`} />

              <span className="text-5xl mb-4">{cfg.icon}</span>
              <span className={`font-orbitron text-[10px] font-black tracking-[0.3em] uppercase mb-3 ${cfg.color}`}>
                {entry.label}
              </span>
              <h3 className={`font-orbitron font-black text-lg md:text-xl uppercase tracking-wide mb-2 ${cfg.color}`}>
                {entry.team}
              </h3>
              <p className="font-rajdhani text-text-muted text-sm font-semibold tracking-wide">
                {entry.leader}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Remaining ranked teams (4–10) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-[3rem_1fr_1fr] gap-4 px-4 md:px-6 py-3 border-b-2 border-accent-orange/30 mb-1 bg-bg-surface">
          <span className="font-orbitron text-[10px] text-accent-orange uppercase tracking-widest">Rank</span>
          <span className="font-orbitron text-[10px] text-accent-orange uppercase tracking-widest">Team Name</span>
          <span className="font-orbitron text-[10px] text-accent-orange uppercase tracking-widest">Team Leader</span>
        </div>
        {round2Results.slice(3).map((entry) => (
          <div
            key={entry.team}
            className="grid grid-cols-[3rem_1fr_1fr] gap-4 px-4 md:px-6 py-4 border-b border-custom-border hover:bg-accent-orange/[0.04] transition-colors group"
          >
            <span className="font-orbitron text-xs text-text-muted group-hover:text-accent-orange/70 transition-colors">
              #{entry.rank}
            </span>
            <div className="flex items-center gap-2 min-w-0">
              <HiStar className="text-accent-orange/40 text-sm shrink-0 group-hover:text-accent-orange/70 transition-colors" />
              <span className="font-orbitron text-xs md:text-sm text-text-primary uppercase tracking-wide leading-snug truncate">
                {entry.team}
              </span>
            </div>
            <span className="font-rajdhani text-sm text-text-muted font-semibold tracking-wide group-hover:text-text-primary transition-colors">
              {entry.leader}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Decorative accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-px h-64 bg-gradient-to-b from-transparent via-accent-orange/20 to-transparent" />
        <div className="absolute bottom-20 right-10 w-px h-64 bg-gradient-to-t from-transparent via-accent-orange/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-orange/[0.03] rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default Results;
