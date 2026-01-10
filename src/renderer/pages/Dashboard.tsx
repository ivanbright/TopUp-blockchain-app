import * as React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import {
    TrendingUp,
    ShieldCheck,
    Trophy,
    UserCheck,
    Code,
    DollarSign
} from 'lucide-react';

const Dashboard: React.FC = () => {
    const { user } = useAuth();

    const stats = [
        { label: 'Reputation Score', value: '8,492', change: '+12%', icon: <ShieldCheck size={24} className="text-[#6366F1]" />, glow: 'shadow-[0_0_30px_rgba(99,102,241,0.2)]' },
        { label: 'Global Rank', value: '#42', change: '+2', icon: <Trophy size={24} className="text-warning" />, glow: 'shadow-[0_0_30px_rgba(245,158,11,0.2)]' },
        { label: 'Vouches Received', value: '12', change: '+3', icon: <UserCheck size={24} className="text-success" />, glow: 'shadow-[0_0_30px_rgba(34,197,94,0.2)]' },
    ];

    const activities = [
        { type: 'Vouch Received', user: 'CryptoQueen', amount: '+150 REP', time: '2h ago', avatar: 'Queen', trend: <TrendingUp size={14} className="text-success" /> },
        { type: 'Skill Verified', user: 'Solidity', amount: 'Lvl 4 -> 5', time: '5h ago', icon: <Code size={18} className="text-primary-light" /> },
        { type: 'Bounty Paid', user: 'YieldFlow', amount: '+500 USDC', time: '1d ago', icon: <DollarSign size={18} className="text-warning" /> },
        { type: 'New Endorsement', user: 'PolygonPrince', amount: '+50 REP', time: '2d ago', avatar: 'Prince', trend: <TrendingUp size={14} className="text-success" /> },
    ];

    return (
        <div className="flex gap-8 h-full">
            {/* Main Content */}
            <div className="flex-1 space-y-10 pb-10 pr-4">
                <header className="space-y-4">
                    <h1 className="text-[40px] font-black text-white tracking-tight leading-tight">Welcome back, {user?.name || 'Marcus'}!</h1>
                    <p className="text-slate-400 text-lg font-medium">Your reputation has grown by <span className="text-success font-black tracking-tight">+124 points</span> this week.</p>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#1A1D2E] border border-white/5 rounded-[40px] p-8 space-y-4 hover:border-white/10 transition-all shadow-2xl group flex flex-col justify-between"
                        >
                            <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center ${stat.glow} group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.label}</span>
                                <div className="flex items-end justify-between">
                                    <span className="text-4xl font-black text-white tracking-tighter">{stat.value}</span>
                                    <span className="text-xs font-black text-success flex items-center gap-1 mb-1 bg-success/10 px-2 py-0.5 rounded-full">
                                        <TrendingUp size={14} /> {stat.change}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Activity & Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Activity Table */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Recent Reputation Activity</h2>
                            <button className="text-[10px] font-black uppercase tracking-widest text-[#6366F1] hover:text-white transition-colors">View History</button>
                        </div>
                        <div className="bg-[#0F111A]/50 border border-white/5 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
                            <div className="divide-y divide-white/5">
                                {activities.map((act, i) => (
                                    <div key={i} className="p-7 flex items-center gap-6 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                                        <div className="w-12 h-12 rounded-2xl bg-surface-03 border border-white/5 overflow-hidden shadow-inner flex-shrink-0">
                                            {act.avatar ? (
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${act.avatar}`} alt={act.user} />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-400 bg-white/5">{act.icon}</div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-white group-hover:text-primary transition-colors truncate">{act.type}</span>
                                                <span className="text-slate-500 text-xs font-bold">•</span>
                                                <span className="text-xs text-slate-400 font-bold truncate lowercase">by {act.user}</span>
                                            </div>
                                            <div className="flex items-center gap-3 mt-1.5">
                                                <span className="text-[11px] font-black text-success uppercase tracking-[0.1em]">{act.amount}</span>
                                                {act.trend}
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.15em] flex-shrink-0">{act.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Skills Progress */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Verified Skills</h2>
                            <button className="text-[10px] font-black uppercase tracking-widest text-[#6366F1] hover:text-white transition-colors">Manage All</button>
                        </div>
                        <div className="bg-[#1A1D2E] border border-white/5 rounded-[40px] p-10 space-y-10 shadow-2xl">
                            {[
                                { name: 'Frontend Architecture', level: 78, color: 'bg-[#6366F1]' },
                                { name: 'Smart Contract Security', level: 45, color: 'bg-warning' },
                                { name: 'Community Management', level: 92, color: 'bg-success' },
                                { name: 'Strategic Planning', level: 65, color: 'bg-primary-light' },
                            ].map((skill, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="flex justify-between items-end px-1">
                                        <div className="space-y-1">
                                            <span className="text-xs font-black text-white uppercase tracking-wider">{skill.name}</span>
                                            <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">Endorsed by 42 people</div>
                                        </div>
                                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Lvl {Math.floor(skill.level / 10)}</span>
                                    </div>
                                    <div className="h-2.5 bg-black/40 rounded-full overflow-hidden shadow-inner border border-white/5 p-0.5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                            className={`h-full ${skill.color} rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)]`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Notifications Sidebar */}
        </div>
    );
};

export default Dashboard;
