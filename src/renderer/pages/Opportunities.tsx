import * as React from 'react';
import {
    Search,
    Layers,
    ShieldCheck,
    ChevronRight,
    ExternalLink,
    TrendingUp,
    Zap
} from 'lucide-react';

const Opportunities: React.FC = () => {
    const featured = [
        {
            title: 'Reputation-Weighted DAO Governance',
            reward: '2,500 USDC',
            tags: ['Governance', 'Research'],
            color: 'from-[#4F46E5] to-[#7C3AED]',
            applicants: 12,
            stats: '+450 REP'
        },
        {
            title: 'Cross-Chain Reputation Protocol Audit',
            reward: '8,000 USDC',
            tags: ['Security', 'Solidity'],
            color: 'from-[#EC4899] to-[#8B5CF6]',
            applicants: 8,
            stats: '+1,200 REP'
        },
    ];

    const lists = [
        { title: 'DeFi Liquidity Mechanism Designer', category: 'Finance', reward: '4,500 USDC', time: '2d ago', applicants: 24, score: '800+ REP' },
        { title: 'ZK-Rollup Scalability Researcher', category: 'L2 Scaling', reward: '12,000 USDC', time: '5h ago', applicants: 5, score: '1200+ REP' },
        { title: 'Community Growth Strategist', category: 'Marketing', reward: '3,000 USDC', time: '12h ago', applicants: 42, score: '400+ REP' },
        { title: 'Frontend Lead (React/Next.js)', category: 'Development', reward: '6,000 USDC', time: '1d ago', applicants: 18, score: '600+ REP' },
    ];

    return (
        <div className="space-y-12 pb-10 pr-4  h-full">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-[40px] font-black text-white tracking-tight leading-tight">Opportunities</h1>
                    <p className="text-slate-400 text-lg font-medium">Earn reputation and rewards by contributing to top-tier projects.</p>
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search opportunities..."
                            className="bg-[#1A1D2E] border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-sm text-white outline-none focus:border-primary/50 transition-all w-80 shadow-2xl"
                        />
                    </div>
                </div>
            </header>

            {/* Featured Opportunities */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <TrendingUp size={20} className="text-primary-light" />
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Featured Challenges</h2>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {featured.map((item, i) => (
                        <div key={i} className={`relative p-10 rounded-[48px] overflow-hidden group hover:scale-[1.01] transition-all cursor-pointer shadow-2xl`}>
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`} />

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-all group-hover:scale-110">
                                <Zap size={140} className="text-white" />
                            </div>

                            <div className="relative z-10 space-y-8">
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-black/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-black text-white leading-tight max-w-[80%]">{item.title}</h3>
                                <div className="flex items-center justify-between pt-4">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Reward Pool</p>
                                        <p className="text-2xl font-black text-white tracking-tight">{item.reward}</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white/10 group-hover:bg-white/20 transition-all">
                                        <div className="text-right">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-white/60">Reputation</p>
                                            <p className="text-base font-black text-white">{item.stats}</p>
                                        </div>
                                        <ChevronRight size={24} className="text-white opacity-60" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* All Opportunities with Tabs */}
            <section className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-2">
                    <div className="flex gap-10">
                        {['All Projects', 'Development', 'Design', 'Research', 'Marketing'].map((tab, i) => (
                            <button key={tab} className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${i === 0 ? 'text-primary' : 'text-slate-500 hover:text-white'}`}>
                                {tab}
                                {i === 0 && <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full shadow-glow" />}
                            </button>
                        ))}
                    </div>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all mb-4">
                        <Layers size={16} /> Filters
                    </button>
                </div>

                <div className="space-y-4">
                    {lists.map((opp, i) => (
                        <div key={i} className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 flex flex-col md:flex-row md:items-center gap-8 hover:bg-[#1A1D2E]/80 hover:border-white/10 transition-all group cursor-pointer shadow-xl">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary-light transition-colors shadow-inner">
                                <ShieldCheck size={32} />
                            </div>
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-3">
                                    <h4 className="text-lg font-black text-white group-hover:text-primary-light transition-colors tracking-tight">{opp.title}</h4>
                                    <span className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-500 border border-white/5">{opp.category}</span>
                                </div>
                                <div className="flex items-center gap-6 text-xs text-slate-500 font-bold uppercase tracking-widest">
                                    <span>{opp.time}</span>
                                    <span>•</span>
                                    <span>{opp.applicants} applicants</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="text-right">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-1">Min. reputation</p>
                                    <div className="flex items-center gap-2 justify-end">
                                        <TrendingUp size={14} className="text-[#6366F1]" />
                                        <span className="text-base font-black text-white">{opp.score}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-1">Est. Reward</p>
                                    <span className="text-xl font-black text-success tracking-tight">{opp.reward}</span>
                                </div>
                                <button className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all shadow-inner group-hover:shadow-glow">
                                    <ExternalLink size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Opportunities;
