import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Trophy,
    Target,
    User,
    MessageSquare,
    Settings,
    ShieldCheck,
    LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
        { icon: <Trophy size={20} />, label: 'Leaderboard', path: '/leaderboard' },
        { icon: <Target size={20} />, label: 'Opportunities', path: '/opportunities' },
        { icon: <User size={20} />, label: 'Profile', path: '/profile' },
        { icon: <MessageSquare size={20} />, label: 'Messages', path: '/messages' },
        { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
    ];

    return (
        <aside className="w-[240px] h-full bg-[#0F111A] border-r border-white/5 flex flex-col z-20">
            <div className="p-8 mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#6366F1] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                        <ShieldCheck size={22} className="text-white" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white">TopUp</span>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `
              flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group
              ${isActive
                                ? 'bg-[#6366F1]/15 text-[#6366F1] shadow-[inset_0_0_0_1px_rgba(99,102,241,0.2)]'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'}
            `}
                    >
                        <span className={`transition-transform duration-300 group-hover:scale-110 ${item.label === 'Messages' ? 'relative' : ''}`}>
                            {item.icon}
                            {item.label === 'Messages' && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F43F5E] rounded-full text-[10px] font-black text-white flex items-center justify-center border-2 border-[#0F111A]">3</span>
                            )}
                        </span>
                        <span className="text-[15px] font-bold">
                            {item.label}
                        </span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-6 mt-auto border-t border-white/5">
                <button
                    onClick={() => {
                        logout();
                        navigate('/');
                    }}
                    className="flex items-center gap-4 px-4 py-4 text-[#94A3B8] hover:text-white transition-colors group w-full"
                >
                    <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[15px] font-bold">Disconnect</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
