import * as React from 'react';
import { Search, ChevronDown, Bell } from 'lucide-react';

const TopBar: React.FC = () => {
    return (
        <header className="h-[64px] border-bottom border-border-light flex items-center justify-between px-8 bg-bg-primary/50 backdrop-blur-md z-10">
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search users, skills, or opportunities..."
                        className="w-full bg-surface-02/50 border border-border-light rounded-2xl py-2.5 pl-12 pr-4 text-sm text-text-primary outline-none focus:border-primary/50 focus:bg-surface-02 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative text-text-secondary hover:text-text-primary transition-all hover:scale-110">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full border-2 border-bg-primary" />
                </button>

                <div className="h-8 w-px bg-border-light" />

                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="text-right flex flex-col">
                        <span className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">Alex Chen</span>
                        <span className="text-[10px] text-primary-light font-bold uppercase tracking-widest">Level 42</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-surface-03 border border-border-light flex items-center justify-center shadow-glow overflow-hidden relative">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <ChevronDown size={14} className="text-text-tertiary group-hover:text-text-primary transition-all" />
                </div>
            </div>
        </header>
    );
};

export default TopBar;
