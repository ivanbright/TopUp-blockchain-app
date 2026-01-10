import * as React from 'react';
import {
    Globe,
    ChevronDown,
    Check,
    Languages,
    MessageSquare
} from 'lucide-react';

const LanguageSettings: React.FC = () => {
    const languages = [
        { code: 'en-US', name: 'English (US)', flag: '🇺🇸', sub: 'System Default', active: true },
        { code: 'es', name: 'Español', flag: '🇪🇸', sub: 'Spanish' },
        { code: 'fr', name: 'Français', flag: '🇫🇷', sub: 'French' },
        { code: 'ja', name: '日本語', flag: '🇯🇵', sub: 'Japanese' },
    ];

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-black text-white tracking-tight mb-4">Language & Region</h1>
                <p className="text-slate-400 text-lg max-w-2xl">Customize your language preferences, regional formats, and translation settings.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Language Selection */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest">
                        <Languages size={16} /> Language Selection
                    </div>
                    <div className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-6 space-y-4 shadow-xl">
                        <h4 className="px-2 text-xs font-black uppercase tracking-widest text-slate-500">Display Language</h4>
                        <div className="space-y-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    className={`w-full p-4 rounded-2xl border transition-all flex items-center gap-4 group ${lang.active
                                            ? 'bg-primary/5 border-primary/30 text-primary-light shadow-[inset_0_0_20px_rgba(99,102,241,0.05)]'
                                            : 'bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/10 hover:bg-white/[0.04]'
                                        }`}
                                >
                                    <span className="text-2xl">{lang.flag}</span>
                                    <div className="flex-1 text-left">
                                        <div className="text-sm font-bold">{lang.name}</div>
                                        <div className="text-[10px] uppercase font-black tracking-widest opacity-60">{lang.sub}</div>
                                    </div>
                                    {lang.active && <Check size={18} className="text-primary" />}
                                </button>
                            ))}
                        </div>
                        <button className="w-full py-4 border-2 border-dashed border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white hover:border-white/20 transition-all">
                            + Add Language
                        </button>
                    </div>
                </section>

                {/* Region & Formatting */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest">
                        <Globe size={16} /> Region & Formatting
                    </div>
                    <div className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 space-y-8 shadow-xl">
                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Region</label>
                                <button className="w-full bg-white/[0.03] border border-white/5 rounded-xl p-4 flex items-center justify-between text-sm font-bold text-white hover:bg-white/[0.05] transition-all">
                                    United States <ChevronDown size={16} />
                                </button>
                                <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest ml-1">Determines your date and time formats.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">First day of week</label>
                                <button className="w-full bg-white/[0.03] border border-white/5 rounded-xl p-4 flex items-center justify-between text-sm font-bold text-white hover:bg-white/[0.05] transition-all">
                                    Sunday <ChevronDown size={16} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Date format</label>
                                <button className="w-full bg-white/[0.03] border border-white/5 rounded-xl p-4 flex items-center justify-between text-sm font-bold text-white hover:bg-white/[0.05] transition-all">
                                    MM/DD/YYYY <ChevronDown size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Translation Toggle */}
                    <div className="bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 space-y-6 shadow-xl relative overflow-hidden group">
                        <div className="flex items-center gap-3 text-primary-light font-black text-xs uppercase tracking-widest">
                            <MessageSquare size={16} /> Message Translation
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <h4 className="text-sm font-black text-white">Auto-Translate</h4>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight max-w-[200px]">Automatically translate incoming messages to English.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-12 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-slate-400 after:border-slate-400 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary peer-checked:after:bg-white peer-checked:after:border-primary shadow-inner"></div>
                            </label>
                        </div>
                    </div>
                </section>
            </div>

            {/* Spell Check */}
            <div className="max-w-md bg-[#1A1D2E] border border-white/5 rounded-[32px] p-8 flex items-center justify-between shadow-xl">
                <div className="space-y-1">
                    <h4 className="text-sm font-black text-white">Spell Check</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Check for spelling errors in messages and bio.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-12 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-slate-400 after:border-slate-400 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success peer-checked:after:bg-white peer-checked:after:border-success shadow-inner"></div>
                </label>
            </div>
        </div>
    );
};

export default LanguageSettings;
