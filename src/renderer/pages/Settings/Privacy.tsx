import * as React from 'react';
import {
    Shield,
    Eye,
    Lock,
    Key,
    Fingerprint,
    ChevronRight,
    ShieldCheck
} from 'lucide-react';

const Privacy: React.FC = () => {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-black text-white tracking-tight mb-4">Privacy & Security</h1>
                <p className="text-slate-400 text-lg max-w-2xl">Protect your data and control who can see your reputation metrics and activity.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest">
                        <Lock size={16} /> Security Settings
                    </div>
                    <div className="space-y-4">
                        <div className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 flex items-center justify-between group hover:border-primary/20 transition-all cursor-pointer">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:shadow-glow transition-all">
                                    <Fingerprint size={32} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-lg font-black text-white">Biometric Login</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Enhanced security using Windows Hello.</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-12 h-6 bg-white/10 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-slate-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:after:bg-white shadow-inner"></div>
                            </label>
                        </div>

                        <div className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 flex items-center justify-between group hover:border-warning/20 transition-all cursor-pointer">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-warning/10 rounded-2xl flex items-center justify-center text-warning group-hover:shadow-glow-warning transition-all">
                                    <Key size={32} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-lg font-black text-white">Two-Factor Auth</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Currently enabled via Authenticator App.</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Manage</button>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest">
                        <Eye size={16} /> Visibility Preferences
                    </div>
                    <div className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 space-y-8 shadow-xl">
                        {[
                            { title: 'Show Score on Leaderboard', active: true },
                            { title: 'Share Skills Externally', active: true },
                            { title: 'Allow Direct Messages', active: false }
                        ].map((pref, i) => (
                            <div key={i} className="flex items-center justify-between pb-6 border-b border-white/5 last:border-0 last:pb-0">
                                <span className="text-sm font-black text-white">{pref.title}</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked={pref.active} />
                                    <div className="w-12 h-6 bg-white/10 rounded-full peer peer-checked:bg-success after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-slate-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:after:bg-white shadow-inner"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-[32px] p-8 flex items-center justify-between gap-8 mt-12">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-glow">
                        <ShieldCheck size={32} />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-black text-white uppercase tracking-tight">Security Audit</h3>
                        <p className="text-slate-400 text-sm max-w-md font-medium">Your account was last audited 12 days ago. No vulnerabilities were detected on your connected wallets.</p>
                    </div>
                </div>
                <button className="bg-primary text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-glow hover:scale-[1.02] transition-all flex items-center gap-3">
                    Run Audit Now <ChevronRight size={14} />
                </button>
            </div>
        </div>
    );
};

export default Privacy;
