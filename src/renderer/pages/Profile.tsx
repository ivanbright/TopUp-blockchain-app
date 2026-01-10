import * as React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Wallet,
    TrendingUp,
    Zap
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Profile: React.FC = () => {
    const { user } = useAuth();

    const stats = [
        { label: 'Total Vouched', value: '14.2k', sub: '+12% this month', color: 'text-primary' },
        { label: 'Trust Score', value: '98/100', sub: 'Top 0.5% globally', color: 'text-success' },
        { label: 'Active Stakes', value: '12', sub: 'Across 4 protocols', color: 'text-info' },
    ];

    const wallets = [
        { address: '0x71C...4921', balance: '4.20 ETH', name: 'Main Wallet', color: 'bg-[#6366F1]' },
        { address: '0x1de...8a2f', balance: '12,500 USDC', name: 'Treasury', color: 'bg-[#EC4899]' },
    ];

    return (
        <div className="h-full flex flex-col gap-10 pb-10 pr-4">
            {/* Upper Profile Header Section */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent rounded-[48px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#1A1D2E] border border-white/5 rounded-[48px] p-10 flex flex-col md:flex-row items-center gap-12 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />

                    {/* Hero Avatar */}
                    <div className="relative flex-shrink-0">
                        <div className="w-48 h-48 rounded-[48px] bg-surface-03 border-4 border-white/5 overflow-hidden shadow-glow group-hover:scale-105 transition-transform duration-500">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.username}`} alt="User" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-success rounded-3xl flex items-center justify-center border-4 border-[#1A1D2E] shadow-glow-success">
                            <ShieldCheck size={32} className="text-white" />
                        </div>
                    </div>

                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="space-y-1">
                            <h1 className="text-5xl font-black text-white tracking-tight uppercase">{user?.username || 'Anonymous User'}</h1>
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Principal Researcher @ DevDAO</p>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                                <p className="text-slate-500 font-bold uppercase text-xs">Joined Oct 2023</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {['Solidity', 'Architecture', 'ZKP', 'Governance'].map(tag => (
                                <span key={tag} className="px-5 py-2 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:bg-primary transition-all cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-primary text-white px-10 py-5 rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] shadow-glow hover:scale-[1.02] transition-all">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats and Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-[#1A1D2E] border border-white/5 rounded-[40px] p-8 shadow-xl group hover:border-primary/20 transition-all">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">{stat.label}</p>
                        <h3 className={`text-4xl font-black ${stat.color} tracking-tight mb-2`}>{stat.value}</h3>
                        <p className="text-xs font-bold text-slate-500">{stat.sub}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                {/* Wallet Management */}
                <section className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-3">
                            <Wallet size={20} className="text-primary-light" />
                            <h2 className="text-xs font-black uppercase tracking-widest text-slate-500">Connected Wallets</h2>
                        </div>
                        <button className="text-[10px] font-black uppercase text-primary tracking-widest hover:underline">+ Add New</button>
                    </div>
                    <div className="space-y-4">
                        {wallets.map((wallet, i) => (
                            <div key={i} className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 flex items-center justify-between group hover:border-white/20 transition-all shadow-xl">
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 ${wallet.color} rounded-2xl flex items-center justify-center text-white shadow-glow`}>
                                        <Wallet size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-white">{wallet.name}</h4>
                                        <p className="text-xs font-mono text-slate-500">{wallet.address}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-black text-white">{wallet.balance}</p>
                                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Active Stake: 2,400 REP</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reputation Distribution */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 px-2">
                        <TrendingUp size={20} className="text-success" />
                        <h2 className="text-xs font-black uppercase tracking-widest text-slate-500">Reputation Distribution</h2>
                    </div>
                    <div className="bg-[#1A1D2E] border border-white/5 rounded-[40px] p-10 h-[300px] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <Zap size={120} className="text-primary" />
                        </div>
                        <div className="space-y-8 relative z-10">
                            {[
                                { label: 'DeFi Protocols', value: 85, color: 'bg-primary' },
                                { label: 'Security Research', value: 65, color: 'bg-success' },
                                { label: 'Governance', value: 45, color: 'bg-warning' },
                                { label: 'Infrastructure', value: 30, color: 'bg-info' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                        <span className="text-slate-400">{item.label}</span>
                                        <span className="text-white">{item.value}%</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.value}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className={`h-full ${item.color} rounded-full shadow-glow`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Profile;
