import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    ShieldCheck,
    Info,
    ChevronDown,
    Zap,
    TrendingUp,
    Lock
} from 'lucide-react';

interface VouchModalProps {
    isOpen: boolean;
    onClose: () => void;
    user?: {
        name: string;
        username: string;
        avatar: string;
        level: number;
    };
}

const VouchModal: React.FC<VouchModalProps> = ({ isOpen, onClose, user }) => {
    const [amount, setAmount] = React.useState('500');
    const [category, setCategory] = React.useState('Development');
    const [showCategories, setShowCategories] = React.useState(false);

    const categories = ['Development', 'Design', 'Community', 'Security', 'Research'];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-xl bg-[#0F111A] border border-white/10 rounded-[48px] shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                    {/* Glossy Header Highlight */}
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent pointer-events-none" />

                    <div className="p-10 space-y-10 relative z-10">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-glow">
                                    <ShieldCheck size={28} />
                                </div>
                                <h2 className="text-3xl font-black text-white tracking-tight">Staking Reputation</h2>
                            </div>
                            <button onClick={onClose} className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-slate-400 hover:text-white transition-all">
                                <X size={20} />
                            </button>
                        </div>

                        {/* User Targeting */}
                        <div className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-6 flex items-center gap-6 shadow-inner">
                            <div className="w-20 h-20 rounded-3xl bg-surface-03 border-2 border-primary/30 overflow-hidden shadow-glow">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.avatar || 'Alex'}`} alt="Avatar" />
                            </div>
                            <div className="flex-1">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-light">Vouching for</span>
                                <h3 className="text-2xl font-black text-white mt-1">{user?.name || 'Robert J. (BlockDev)'}</h3>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="text-xs font-bold text-slate-400">@{user?.username || 'robert_stake'}</span>
                                    <div className="px-2 py-0.5 bg-warning/10 text-warning text-[9px] font-black uppercase tracking-widest rounded-md border border-warning/20">Level {user?.level || 42}</div>
                                </div>
                            </div>
                        </div>

                        {/* Amount Input */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between px-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Amount to Stake</label>
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">
                                    Available: <span className="text-white">8,492 PTS</span>
                                </div>
                            </div>
                            <div className="relative group">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full bg-[#1A1D2E] border-2 border-white/5 rounded-[32px] py-8 px-10 text-5xl font-black text-white outline-none focus:border-primary/50 transition-all text-center tracking-tighter"
                                />
                                <div className="absolute left-10 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-700 pointer-events-none">REP</div>
                                <div className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-2">
                                    {['25%', '50%', 'MAX'].map((p) => (
                                        <button key={p} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all border border-white/5">{p}</button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Settings Row */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Category Selection */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Area of Expertise</label>
                                <div className="relative">
                                    <button
                                        onClick={() => setShowCategories(!showCategories)}
                                        className="w-full bg-[#1A1D2E] border border-white/5 rounded-2xl p-4 flex items-center justify-between text-sm font-bold text-white hover:border-white/20 transition-all"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Zap size={16} className="text-warning" />
                                            {category}
                                        </div>
                                        <ChevronDown size={16} className={`text-slate-500 transition-transform ${showCategories ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {showCategories && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute bottom-full left-0 right-0 mb-2 bg-[#1A1D2E] border border-white/10 rounded-2xl p-2 shadow-2xl z-20"
                                            >
                                                {categories.map((cat) => (
                                                    <button
                                                        key={cat}
                                                        onClick={() => { setCategory(cat); setShowCategories(false); }}
                                                        className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:bg-white/5 hover:text-white transition-all"
                                                    >
                                                        {cat}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Estimated APR */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2">Estimated APR</label>
                                <div className="w-full bg-[#1A1D2E] border border-white/5 rounded-2xl p-4 flex items-center justify-between shadow-inner">
                                    <div className="flex items-center gap-3">
                                        <TrendingUp size={16} className="text-success" />
                                        <span className="text-sm font-black text-white">+12.5%</span>
                                    </div>
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Yearly</div>
                                </div>
                            </div>
                        </div>

                        {/* Note Section */}
                        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 flex gap-4">
                            <Lock size={18} className="text-primary-light flex-shrink-0 mt-1" />
                            <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wide font-black">
                                <span className="text-primary-light">Note:</span> Staking requires a 12.5% lock-up period if the reputation score of Robert J. drops below 80%. You can un-stake at any time with a 2-day cooldown.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={onClose}
                                className="flex-1 py-5 bg-white/5 hover:bg-white/10 rounded-[28px] text-xs font-black uppercase tracking-[0.2em] text-slate-400 transition-all"
                            >
                                Cancel
                            </button>
                            <button className="flex-2 w-[60%] py-5 bg-primary text-white rounded-[28px] text-xs font-black uppercase tracking-[0.2em] shadow-glow hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                                Confirm Stake & Vouch <TrendingUp size={16} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default VouchModal;
