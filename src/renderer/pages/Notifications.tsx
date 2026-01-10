import {Bell, ChevronRight} from "lucide-react";

export function Notifications() {
    return (
        <div className="w-80 bg-[#1A1D2E]/40 border border-white/5 rounded-[48px] flex flex-col overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-3xl invisible md:visible">
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <h2 className="text-xl font-black text-white tracking-tight">Activity</h2>
                <div className="relative">
                    <Bell size={20} className="text-slate-500" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#F43F5E] rounded-full border-2 border-[#1A1D2E]" />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                {[
                    { title: 'New Vouch', desc: 'SatoshiNakamoto vouched for your Research skills.', time: '2m ago', active: true, tag: 'REPUTATION' },
                    { title: 'Leaderboard', desc: 'You climbed 2 spots in the Global Rankings.', time: '1h ago', active: false, tag: 'RANK' },
                    { title: 'Security', desc: 'New login detected from MacBook Air M2.', time: '5h ago', active: false, tag: 'SYSTEM' },
                    { title: 'Goal Met', desc: 'Strategic Planning level up confirmed!', time: '1d ago', active: true, tag: 'SKILL' },
                    { title: 'Payment', desc: 'YieldFlow DAO paid 500 USDC bounty.', time: '2d ago', active: false, tag: 'FINANCE' },
                ].map((note, i) => (
                    <div key={i} className={`p-6 rounded-[32px] border transition-all cursor-pointer group ${note.active ? 'bg-[#6366F1]/5 border-[#6366F1]/20 shadow-[0_10px_30px_rgba(99,102,241,0.05)]' : 'bg-white/[0.03] border-white/5 hover:border-white/10'}`}>
                        <div className="flex justify-between items-start mb-3">
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border ${note.active ? 'border-[#6366F1]/30 text-[#6366F1]' : 'border-slate-700 text-slate-500'}`}>{note.tag}</span>
                            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{note.time}</span>
                        </div>
                        <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">{note.title}</h4>
                        <p className="text-[11px] text-slate-500 font-bold leading-relaxed group-hover:text-slate-300 transition-colors line-clamp-2">{note.desc}</p>
                        {note.active && <div className="mt-4 flex justify-end items-center gap-1.5 text-[9px] font-black text-[#6366F1] uppercase tracking-widest group-hover:translate-x-1 transition-transform">View <ChevronRight size={10} /></div>}
                    </div>
                ))}
            </div>
            <button className="m-6 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all">Clear All History</button>
        </div>

    )
}