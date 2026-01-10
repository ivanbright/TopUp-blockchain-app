import * as React from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import {
    User,
    CreditCard,
    Monitor,
    Bell,
    Globe,
    Cpu,
    HelpCircle,
    Search, ShieldCheck
} from 'lucide-react';
import Appearance from './Settings/Appearance';
import Notifications from './Settings/Notifications';
import Privacy from './Settings/Privacy';
import ConnectedDevices from './Settings/ConnectedDevices';
import HelpSupport from './Settings/HelpSupport';
import LanguageSettings from './Settings/LanguageSettings';

const Settings: React.FC = () => {
    const navItems = [
        {
            group: 'General', items: [
                { icon: <User size={18} />, label: 'My Profile', path: 'profile' },
                { icon: <CreditCard size={18} />, label: 'Billing & Plans', path: 'billing' },
            ]
        },
        {
            group: 'App Settings', items: [
                { icon: <Monitor size={18} />, label: 'Appearance', path: 'appearance' },
                { icon: <Bell size={18} />, label: 'Notifications', path: 'notifications' },
                { icon: <ShieldCheck size={18} />, label: 'Privacy & Security', path: 'privacy' },
                { icon: <Globe size={18} />, label: 'Language', path: 'language' },
            ]
        },
        {
            group: 'System', items: [
                { icon: <Cpu size={18} />, label: 'Connected Devices', path: 'devices' },
                { icon: <HelpCircle size={18} />, label: 'Help & Support', path: 'help' },
            ]
        }
    ];

    return (
        <div className="h-full flex bg-[#0F111A] -m-8 overflow-hidden">
            {/* Settings Sidebar */}
            <div className="w-72 border-r border-white/5 bg-[#0A0C14] flex flex-col">
                <div className="p-8 space-y-6">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                        <input
                            type="text"
                            placeholder="Find a setting..."
                            className="w-full bg-[#1A1D2E] border border-white/5 rounded-xl py-2 pl-9 pr-4 text-xs text-white outline-none focus:border-primary/50 transition-all"
                        />
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 pb-8 custom-scrollbar">
                    {navItems.map((group, idx) => (
                        <div key={idx} className="mb-8">
                            <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">{group.group}</h3>
                            <div className="space-y-1">
                                {group.items.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({ isActive }) => `
                                            flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all
                                            ${isActive
                                                ? 'bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(99,102,241,0.2)]'
                                                : 'text-slate-400 hover:text-white hover:bg-white/5'}
                                        `}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Settings Content Area */}
            <div className="flex-1 overflow-y-auto hide-scrollbar bg-[#0F111A]">
                <div className="max-w-4xl p-12 mx-auto">
                    <Routes>
                        <Route path="/" element={<Navigate to="appearance" replace />} />
                        <Route path="appearance" element={<Appearance />} />
                        <Route path="notifications" element={<Notifications />} />
                        <Route path="privacy" element={<Privacy />} />
                        <Route path="language" element={<LanguageSettings />} />
                        <Route path="devices" element={<ConnectedDevices />} />
                        <Route path="help" element={<HelpSupport />} />
                        <Route path="*" element={<div className="text-white p-10">Coming Soon</div>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Settings;
