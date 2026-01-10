import * as React from 'react';
import {
    Bell,
    MessageSquare,
    ShieldCheck,
    Trophy,
    Mail,
    Smartphone,
    Check
} from 'lucide-react';

const Notifications: React.FC = () => {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-black text-white tracking-tight mb-4">Notifications</h1>
                <p className="text-slate-400 text-lg max-w-2xl">Control how you want to be notified about reputation updates, messages, and platform activity.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest">
                        <Smartphone size={16} /> Delivery Methods
                    </div>
                    <div className="space-y-4">
                        {[
                            { title: 'Push Notifications', desc: 'Desktop alerts for real-time updates.', icon: <Smartphone size={20} />, active: true },
                            { title: 'Email Digest', desc: 'Weekly summary of your reputation growth.', icon: <Mail size={20} />, active: true },
                            { title: 'In-App Only', desc: 'Only show notifications within the dashboard.', icon: <Layout size={20} />, active: false }
                        ].map((method, i) => (
                            <div key={i} className={`p-6 bg-[#1A1D2E] border rounded-[28px] flex items-center gap-4 transition-all ${method.active ? 'border-primary/30 shadow-glow' : 'border-white/5 opacity-50'}`}>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method.active ? 'text-primary' : 'text-slate-500'}`}>
                                    {method.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base font-bold text-white uppercase tracking-tight">{method.title}</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{method.desc}</p>
                                </div>
                                <div className={`w-10 h-6 rounded-full relative transition-all ${method.active ? 'bg-primary' : 'bg-white/10'}`}>
                                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${method.active ? 'left-5' : 'left-1'}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest">
                        <Bell size={16} /> Notification Events
                    </div>
                    <div className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 space-y-8 shadow-xl">
                        {[
                            { title: 'Reputation Vouches', icon: <ShieldCheck size={18} className="text-success" /> },
                            { title: 'Direct Messages', icon: <MessageSquare size={18} className="text-primary-light" /> },
                            { title: 'Leaderboard Changes', icon: <Trophy size={18} className="text-warning" /> }
                        ].map((event, i) => (
                            <div key={i} className="flex items-center justify-between pb-6 border-b border-white/5 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                                        {event.icon}
                                    </div>
                                    <span className="text-sm font-black text-white">{event.title}</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-12 h-6 bg-white/10 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-slate-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:after:bg-white shadow-inner"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

// Internal Layout icon
const Layout = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
);

export default Notifications;
