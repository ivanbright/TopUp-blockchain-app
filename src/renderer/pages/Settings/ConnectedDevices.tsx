import * as React from 'react';
import {
    Monitor,
    Smartphone,
    LogOut,
    ShieldCheck,
    MapPin,
    Clock
} from 'lucide-react';

const ConnectedDevices: React.FC = () => {
    const sessions = [
        { device: 'iPhone 14 Pro', location: 'Los Angeles, US', time: 'Active 30 mins ago', icon: <Smartphone size={24} /> },
        { device: 'MacBook Air M2', location: 'San Francisco, US', time: 'Active 3 days ago', icon: <Monitor size={24} /> },
        { device: 'Chrome on Windows', location: 'New York, US', time: 'Active 1 week ago', icon: <Globe size={24} /> },
    ];

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-black text-white tracking-tight mb-4">Connected Devices</h1>
                <p className="text-slate-400 text-lg max-w-2xl">Manage and secure the devices currently logged into your TopUp account.</p>
            </div>

            {/* Current Device */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 text-primary-light font-black text-xs uppercase tracking-widest">
                    <Monitor size={16} /> Current Device
                </div>
                <div className="bg-[#1A1D2E] border-2 border-primary/30 rounded-[32px] p-8 flex items-center gap-6 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-glow">
                        <Monitor size={32} />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-black text-white">Windows Desktop App</h3>
                            <span className="px-3 py-1 bg-success/10 text-success text-[10px] font-black uppercase tracking-widest rounded-full border border-success/20">Active Now</span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                            <span className="flex items-center gap-2"><MapPin size={14} /> San Francisco, CA, US - 192.168.1.1</span>
                            <span className="flex items-center gap-2"><Clock size={14} /> Session started 2 hours ago</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Sessions */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest">
                    <Monitor size={16} /> Other Active Sessions
                </div>
                <div className="space-y-3">
                    {sessions.map((session, i) => (
                        <div key={i} className="bg-[#1A1D2E]/50 border border-white/5 rounded-3xl p-6 flex items-center gap-6 hover:bg-[#1A1D2E] transition-all group">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                {session.icon}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-base font-bold text-white mb-1">{session.device}</h4>
                                <p className="text-xs text-slate-500 font-medium flex items-center gap-4">
                                    <span>{session.location}</span>
                                    <span>•</span>
                                    <span>{session.time}</span>
                                </p>
                            </div>
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-error transition-all p-2">
                                <LogOut size={16} /> Log Out
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dangerous Zone */}
            <div className="bg-error/5 border border-error/20 rounded-[32px] p-8 flex items-center justify-between gap-8 mt-12">
                <div className="space-y-2">
                    <h3 className="text-xl font-black text-error">Log out of all devices</h3>
                    <p className="text-slate-400 text-sm max-w-md">This will log you out of all active sessions across all devices, including this one. You will need to log back in to access your account.</p>
                </div>
                <button className="bg-error text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-glow-error hover:opacity-90 transition-all flex items-center gap-3">
                    <ShieldCheck size={18} /> Log Out All Devices
                </button>
            </div>
        </div>
    );
};

// Internal Globe icon for the session list
const Globe = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

export default ConnectedDevices;
