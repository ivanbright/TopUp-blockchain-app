import * as React from 'react';
import {
    Search,
    ChevronRight,
    LifeBuoy,
    BookOpen,
    MessageCircle,
    ShieldCheck,
    Zap,
    Hammer,
    CreditCard,
    UserCheck
} from 'lucide-react';

const HelpSupport: React.FC = () => {
    const categories = [
        {
            title: 'Troubleshooting',
            desc: 'Fix common issues with connections, crashes, or data sync errors.',
            icon: <Hammer size={24} className="text-error" />,
            links: ['Connection failed', 'App not updating']
        },
        {
            title: 'Account & Identity',
            desc: 'Manage your profile, verification status, and reputation settings.',
            icon: <UserCheck size={24} className="text-primary-light" />,
            links: ['Verification steps', 'Restore wallet access']
        },
        {
            title: 'Privacy & Security',
            desc: 'Learn about encryption, data privacy, and securing your account.',
            icon: <ShieldCheck size={24} className="text-success" />,
            links: ['2FA Setup', 'Privacy Policy']
        },
        {
            title: 'Payments & Billing',
            desc: 'Understand reputation staking, transaction fees, and premium plans.',
            icon: <CreditCard size={24} className="text-warning" />,
            links: ['Staking rules', 'Payment methods']
        }
    ];

    return (
        <div className="space-y-12">
            <div>
                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
                    <span>Support</span>
                    <ChevronRight size={12} />
                    <span className="text-slate-300">Help Center</span>
                </nav>
                <h1 className="text-4xl font-black text-white tracking-tight mb-8">How can we help you?</h1>

                <div className="max-w-2xl relative group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search articles, guides, or troubleshooting..."
                        className="w-full bg-[#1A1D2E] border border-white/5 rounded-[2rem] py-5 pl-14 pr-6 text-base text-white outline-none focus:border-primary/50 transition-all shadow-2xl shadow-black/50"
                    />
                </div>
            </div>

            <div className="flex items-center gap-3 bg-success/5 border border-success/20 px-6 py-3 rounded-2xl w-fit">
                <div className="w-2.5 h-2.5 bg-success rounded-full shadow-glow-success animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-success">All systems operational</span>
            </div>

            {/* Help Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((cat, i) => (
                    <div key={i} className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 space-y-6 hover:border-white/10 transition-all group shadow-xl">
                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shadow-inner">
                            {cat.icon}
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-white">{cat.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
                        </div>
                        <div className="space-y-3 pt-2">
                            {cat.links.map((link, j) => (
                                <button key={j} className="flex items-center gap-2 text-xs font-black text-primary-light hover:text-white transition-colors group/link">
                                    <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" /> {link}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Contact Options */}
            <div className="flex flex-col md:flex-row gap-6 pt-8">
                <button className="flex-1 bg-primary/10 border border-primary/20 p-8 rounded-[32px] flex items-center gap-6 hover:bg-primary transition-all group">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary shadow-glow transition-all">
                        <LifeBuoy size={32} />
                    </div>
                    <div className="text-left">
                        <h4 className="text-lg font-black text-white">Contact Support</h4>
                        <p className="text-slate-400 text-sm group-hover:text-white/80 transition-colors">Start a ticket with our team.</p>
                    </div>
                </button>
                <button className="flex-1 bg-white/5 border border-white/5 p-8 rounded-[32px] flex items-center gap-6 hover:bg-white/10 transition-all group">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-white transition-all">
                        <BookOpen size={32} />
                    </div>
                    <div className="text-left">
                        <h4 className="text-lg font-black text-white">Knowledge Base</h4>
                        <p className="text-slate-400 text-sm">Read in-depth documentation.</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default HelpSupport;
