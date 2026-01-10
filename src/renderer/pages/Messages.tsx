import * as React from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    Send,
    Paperclip,
    Download,
    ShieldCheck,
    Info,
    Smile,
    Plus,
    CheckCheck
} from 'lucide-react';

const Messages: React.FC = () => {
    const [selectedChat, setSelectedChat] = React.useState(0);
    const [message, setMessage] = React.useState('');

    const chats = [
        { id: 1, name: 'Satoshi Nakamoto', lastMsg: 'The audit report is ready...', time: '12m ago', avatar: 'Satoshi', unread: 2, online: true },
        { id: 2, name: 'Vitalik Buterin', lastMsg: 'Let\'s discuss the EIP-4844...', time: '2h ago', avatar: 'Vitalik', unread: 0, online: false },
        { id: 3, name: 'Elena R.', lastMsg: 'Vouch for vouch? 😉', time: '1d ago', avatar: 'Elena', unread: 0, online: true },
        { id: 4, name: 'Marcus R.', lastMsg: 'Need help with Solidity?', time: '3d ago', avatar: 'Marcus', unread: 0, online: false },
    ];

    const messages = [
        { id: 1, sender: 'Satoshi Nakamoto', text: 'Hey Marcus! I saw your recent contributions to the reputation protocol. Phenomenal work on the staking logic.', time: '10:42 AM', isMe: false },
        { id: 2, sender: 'You', text: 'Thanks Satoshi! Really appreciate the feedback. It was a challenging problem to solve efficiently.', time: '10:45 AM', isMe: true },
        { id: 3, sender: 'Satoshi Nakamoto', text: 'I\'ve attached the preliminary audit report. Let me know if you have any questions.', time: '10:47 AM', isMe: false, attachment: { name: 'Audit_Report_v1.pdf', size: '2.4 MB' } },
        { id: 4, sender: 'You', text: 'Checking it now. The GAS optimization looks solid.', time: '10:50 AM', isMe: true },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-full -m-8 bg-[#0A0C14] overflow-hidden"
        >
            {/* Sidebar: Conversations */}
            <div className="w-96 border-r border-white/5 flex flex-col bg-[#0F111A]">
                <div className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-white tracking-tight">Messages</h2>
                        <button className="p-3 bg-[#6366F1]/10 text-[#6366F1] rounded-2xl hover:bg-primary hover:text-white transition-all shadow-glow">
                            <Plus size={20} />
                        </button>
                    </div>
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            className="w-full bg-[#1A1D2E] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-xs text-white outline-none focus:border-primary/50 transition-all shadow-inner"
                        />
                    </div>
                </div>

                <div className="flex-1  px-4 pb-8 space-y-2 overflow-y-auto hide-scrollbar ">
                    {chats.map((chat, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedChat(i)}
                            className={`p-5 rounded-3xl flex items-center gap-6 cursor-pointer transition-all group ${selectedChat === i ? 'bg-[#6366F1]/10 border border-[#6366F1]/20 shadow-glow' : 'hover:bg-white/[0.03] border border-transparent'}`}
                        >
                            <div className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-surface-03 border border-white/10 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chat.avatar}`} alt={chat.name} />
                                </div>
                                {chat.online && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-[3px] border-[#0F111A] shadow-glow-success" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-sm font-black text-white truncate tracking-tight">{chat.name}</h4>
                                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{chat.time}</span>
                                </div>
                                <p className="text-xs text-slate-500 font-medium truncate leading-relaxed line-clamp-1">{chat.lastMsg}</p>
                            </div>
                            {chat.unread > 0 && (
                                <div className="w-5 h-5 bg-[#6366F1] rounded-full flex items-center justify-center text-[9px] font-black text-white shadow-glow">
                                    {chat.unread}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col relative bg-[#131624]">
                {/* Glossy Top Bar Interior Highlight */}
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#6366F1]/5 to-transparent pointer-events-none" />

                {/* Chat Header */}
                <header className="px-10 py-6 border-b border-white/5 flex items-center justify-between relative z-10 backdrop-blur-md bg-[#0F111A]/80">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-surface-03 overflow-hidden shadow-inner border border-white/10">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chats[selectedChat].avatar}`} alt="Avatar" />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-white tracking-tight">{chats[selectedChat].name}</h3>
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${chats[selectedChat].online ? 'bg-success shadow-glow-success' : 'bg-slate-600'}`} />
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{chats[selectedChat].online ? 'Active Now' : 'Last seen 2h ago'}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-[#6366F1] text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.15em] shadow-glow hover:scale-105 transition-all flex items-center gap-3">
                            <ShieldCheck size={16} /> Vouch for Reputation
                        </button>
                        <button className="p-3 bg-white/5 text-slate-400 rounded-2xl hover:text-white transition-all shadow-inner">
                            <Search size={20} />
                        </button>
                        <button className="p-3 bg-white/5 text-slate-400 rounded-2xl hover:text-white transition-all shadow-inner">
                            <Info size={20} />
                        </button>
                    </div>
                </header>

                {/* Messages List */}
                <div className="flex-1 overflow-y-auto p-10 space-y-10 hide-scrollbar">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'} group animate-in slide-in-from-bottom-2 duration-300`}>
                            <div className={`max-w-[70%] space-y-2`}>
                                <div className={`p-6 rounded-[32px] text-sm leading-relaxed shadow-xl ${msg.isMe
                                    ? 'bg-[#6366F1] text-white rounded-tr-none shadow-[#6366F1]/20'
                                    : 'bg-[#1A1D2E] text-slate-300 border border-white/5 rounded-tl-none'
                                    }`}>
                                    {msg.text}

                                    {msg.attachment && (
                                        <div className="mt-4 p-4 bg-black/20 rounded-2xl flex items-center gap-4 border border-white/5 hover:bg-black/30 transition-all cursor-pointer group/file">
                                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#6366F1] group-hover/file:bg-[#6366F1] group-hover/file:text-white transition-all">
                                                <Paperclip size={24} />
                                            </div>
                                            <div className="flex-1 truncate">
                                                <p className="text-xs font-black truncate">{msg.attachment.name}</p>
                                                <p className="text-[10px] uppercase font-black tracking-widest opacity-50">{msg.attachment.size}</p>
                                            </div>
                                            <Download size={18} className="opacity-0 group-hover/file:opacity-100 transition-opacity" />
                                        </div>
                                    )}
                                </div>
                                <div className={`flex items-center gap-3 px-2 text-[9px] font-black tracking-widest text-slate-600 uppercase ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                                    <span>{msg.time}</span>
                                    {msg.isMe && <CheckCheck size={12} className="text-[#6366F1]" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-8 bg-[#0F111A]">
                    <div className="bg-[#1A1D2E] border border-white/10 rounded-[32px] p-2 flex items-center gap-4 shadow-2xl focus-within:border-[#6366F1]/50 transition-all">
                        <button className="p-4 text-slate-500 hover:text-[#6366F1] transition-colors">
                            <Plus size={24} />
                        </button>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message or use '/' for commands..."
                            className="flex-1 bg-transparent border-none outline-none text-sm text-white py-4 font-medium"
                        />
                        <div className="flex items-center gap-2 pr-4">
                            <button className="p-3 text-slate-500 hover:text-white transition-colors">
                                <Smile size={24} />
                            </button>
                            <button className="p-4 bg-[#6366F1] text-white rounded-2xl shadow-glow hover:scale-105 transition-all">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Messages;
