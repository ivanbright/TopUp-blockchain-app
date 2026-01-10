import * as React from 'react';
import {
    Palette,
    Moon,
    Sun,
    Check,
    Monitor,
    Layout,
    Type
} from 'lucide-react';

const Appearance: React.FC = () => {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-black text-white tracking-tight mb-4">Appearance</h1>
                <p className="text-slate-400 text-lg max-w-2xl">Customize how TopUp looks on your device. Choose between dark and light modes, or sync with your system.</p>
            </div>

            <section className="space-y-6">
                <div className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest">
                    <Palette size={16} /> Theme Preferences
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <button className="p-8 bg-primary/10 border-2 border-primary rounded-[32px] flex flex-col items-center gap-6 shadow-glow transition-all">
                        <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center text-primary shadow-glow">
                            <Moon size={40} />
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-black text-white">Deep Dark</h4>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Active</p>
                        </div>
                    </button>
                    <button className="p-8 bg-white/5 border border-white/5 rounded-[32px] flex flex-col items-center gap-6 hover:bg-white/10 transition-all group">
                        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-slate-500 group-hover:text-white transition-all">
                            <Sun size={40} />
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-black text-white">Classic Light</h4>
                            <p className="text-slate-500 text-xs font-black uppercase tracking-widest mt-1">Switch to</p>
                        </div>
                    </button>
                    <button className="p-8 bg-white/5 border border-white/5 rounded-[32px] flex flex-col items-center gap-6 hover:bg-white/10 transition-all group">
                        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-slate-500 group-hover:text-white transition-all">
                            <Monitor size={40} />
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-black text-white">System Sync</h4>
                            <p className="text-slate-500 text-xs font-black uppercase tracking-widest mt-1">Switch to</p>
                        </div>
                    </button>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest">
                    <Layout size={16} /> Display Density
                </div>
                <div className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 shadow-xl divide-y divide-white/5">
                    <div className="flex items-center justify-between py-6 first:pt-0">
                        <div className="space-y-1">
                            <h4 className="text-base font-black text-white">Comfortable</h4>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">More spacing between elements for a clean look.</p>
                        </div>
                        <div className="w-6 h-6 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-glow" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-6">
                        <div className="space-y-1 text-slate-500">
                            <h4 className="text-base font-black">Compact</h4>
                            <p className="text-xs font-bold uppercase tracking-tight">Show more content at once on the screen.</p>
                        </div>
                        <div className="w-6 h-6 rounded-full border-2 border-white/10 hover:border-white/20 transition-all cursor-pointer" />
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest">
                    <Type size={16} /> Typography
                </div>
                <div className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 shadow-xl">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h4 className="text-base font-black text-white">Font Size</h4>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Adjust the global font size of the application.</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/5">
                            <button className="w-10 h-10 flex items-center justify-center font-bold text-slate-500 hover:text-white transition-colors">-</button>
                            <span className="text-sm font-black text-white px-4">100%</span>
                            <button className="w-10 h-10 flex items-center justify-center font-bold text-slate-500 hover:text-white transition-colors">+</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appearance;
