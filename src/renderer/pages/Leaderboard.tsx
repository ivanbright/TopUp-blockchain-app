import * as React from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    ChevronDown,
    TrendingUp,
    TrendingDown,
    Minus,
    Trophy,
    CheckCircle2,
    Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Leaderboard: React.FC = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [timeFilter, setTimeFilter] = React.useState('All Time');

    const leaderboardData = [
        { rank: 1, user: 'CryptoQueen', address: '0x64...9x21', score: 988, skills: 'Dev 98, Solidity 96', change: 124, activity: '45 day streak', avatar: 'Queen', glow: 'bg-gradient-to-r from-warning/10 via-transparent to-transparent border-l-4 border-warning shadow-[0_0_40px_rgba(245,158,11,0.05)]' },
        { rank: 2, user: 'SatoshiNakamoto', address: 'satoshi.eth', score: 952, skills: 'Defi 92, Research 89', change: 89, activity: '2h ago', avatar: 'Satoshi' },
        { rank: 3, user: 'PolygonPrince', address: 'matic.eth', score: 920, skills: 'L2 94, Scaling 90', change: -12, activity: '12 day streak', avatar: 'Prince' },
        { rank: 4, user: 'DeFi_Wizard', address: '0x71...b2c4', score: 895, skills: 'Yield 88, Audit 85', change: 45, activity: '5m ago', avatar: 'Wizard', star: true },
        { rank: 5, user: 'NFT_Artist_X', address: 'art.eth', score: 880, skills: 'Art 95, Community 82', change: 210, activity: '60 day streak', avatar: 'Artist', star: true },
        { rank: 42, user: 'Marcus V. (You)', address: 'marcus.eth', score: 645, skills: 'Frontend 78, Design 65', change: 15, activity: 'Active now', isMe: true, avatar: 'Alex' },
        { rank: 43, user: 'Sarah_Sol', address: '0x89...e1d2', score: 642, skills: 'Rust 70, ZK 68', change: -4, activity: '1d ago', avatar: 'Sarah' },
    ];

    return (
        <div className="space-y-10 max-w-7xl mx-auto pb-10">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h1 className="text-3xl font-black text-white tracking-tight">Global Rankings</h1>

                <div className="flex-1 max-w-md mx-8">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
                        <input
                            type="text"
                            placeholder="Search users or categories..."
                            className="w-full bg-[#1A1D2E] border border-white/5 rounded-2xl py-2.5 pl-12 pr-4 text-sm text-text-primary outline-none focus:border-primary/50 transition-all shadow-2xl"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-[#1A1D2E] border border-white/5 px-4 py-2 rounded-2xl">
                    <span className="text-xs text-text-tertiary font-bold uppercase tracking-widest">Your Rank:</span>
                    <span className="text-sm font-black text-primary-light">#42</span>
                    <div className="w-8 h-8 rounded-lg bg-surface-03 border border-border-light overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Me" />
                    </div>
                </div>
            </div>

            {/* Filter Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex bg-[#1A1D2E] border border-white/5 p-1 rounded-2xl shadow-inner">
                    {['All Time', 'This Month', 'This Week'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setTimeFilter(f)}
                            className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${timeFilter === f ? 'bg-primary text-white shadow-glow' : 'text-slate-500 hover:text-white'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 bg-[#1A1D2E] border border-white/5 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-[#94A3B8] hover:text-white transition-all">
                        Category: All <ChevronDown size={14} />
                    </button>
                    <button className="flex items-center gap-2 bg-[#1A1D2E] border border-white/5 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-[#94A3B8] hover:text-white transition-all">
                        Sort by: Score <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#0F111A]/50 border border-white/5 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 border-b border-white/5">
                            <th className="px-10 py-6 text-center">Rank</th>
                            <th className="px-10 py-6">User</th>
                            <th className="px-10 py-6 text-center">Total Score</th>
                            <th className="px-10 py-6">Top Skills</th>
                            <th className="px-10 py-6 text-center">Weekly Change</th>
                            <th className="px-10 py-6 text-right">Activity</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {leaderboardData.map((row, i) => (
                            <tr
                                key={i}
                                className={`transition-all group relative ${row.glow || ''} ${row.isMe ? 'bg-primary/5 border-y border-primary/20 shadow-[inset_0_0_20px_rgba(99,102,241,0.05)]' : 'hover:bg-white/[0.02]'
                                    }`}
                            >
                                <td className="px-10 py-6 text-center relative z-10">
                                    <div className="flex items-center justify-center gap-2">
                                        {row.star && <Trophy size={14} className="text-warning" />}
                                        <span className={`text-sm font-black ${row.rank <= 3 ? (row.rank === 1 ? 'text-warning' : 'text-slate-200') : 'text-slate-400'
                                            }`}>
                                            {row.rank}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-10 py-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-surface-03 border border-white/10 overflow-hidden shadow-inner flex-shrink-0">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.avatar}`} alt={row.user} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className={`text-sm font-bold ${row.isMe ? 'text-primary' : 'text-white group-hover:text-primary transition-colors'}`}>
                                                {row.user}
                                                {row.isMe && <CheckCircle2 size={14} className="inline ml-2 text-primary shadow-glow" />}
                                            </span>
                                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{row.address}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-10 py-6 text-center relative z-10">
                                    <span className="text-lg font-black text-white">{row.score}</span>
                                </td>
                                <td className="px-10 py-6 relative z-10">
                                    <div className="flex flex-wrap gap-2">
                                        {row.skills.split(', ').map((skill, j) => (
                                            <span key={j} className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-10 py-6 text-center relative z-10">
                                    <div className={`flex items-center justify-center gap-1.5 font-black text-xs ${row.change > 0 ? 'text-success' : row.change < 0 ? 'text-error' : 'text-slate-500'
                                        }`}>
                                        {row.change > 0 ? (
                                            <TrendingUp size={14} className="animate-pulse" />
                                        ) : row.change < 0 ? (
                                            <TrendingDown size={14} />
                                        ) : (
                                            <Minus size={14} />
                                        )}
                                        {row.change > 0 ? `+${row.change}` : row.change}
                                    </div>
                                </td>
                                <td className="px-10 py-6 text-right relative z-10">
                                    <span className="text-[11px] font-black text-slate-500 uppercase flex items-center justify-end gap-2">
                                        {row.isMe ? <Zap size={14} className="text-warning fill-warning" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />}
                                        {row.activity}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="px-10 py-6 flex items-center justify-center gap-2 bg-[#141724]">
                    <button className="p-2 text-slate-500 hover:text-white transition-colors">
                        <ChevronDown className="rotate-90" size={20} />
                    </button>
                    {[1, 2, 3, '...', 12].map((p, i) => (
                        <button key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all ${p === 2 ? 'bg-[#6366F1] text-white shadow-glow' : 'text-slate-500 hover:bg-white/5 hover:text-white'
                            }`}>
                            {p}
                        </button>
                    ))}
                    <button className="p-2 text-slate-500 hover:text-white transition-colors">
                        <ChevronDown className="-rotate-90" size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
