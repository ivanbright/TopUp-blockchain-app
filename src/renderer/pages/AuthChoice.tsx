import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
    ShieldCheck,
    Wallet,
    Smartphone,
} from 'lucide-react';
import WalletConnectQR from '../components/Auth/WalletConnectQR';
import Login from "@/pages/Login.tsx";
import SignUp from "@/pages/SignUp.tsx";

type AuthState = "signup"|"login";
const AuthChoice: React.FC = () => {

    const [currentCard, setCurrentCard] = React.useState<AuthState>("login");
    const [isQRModalOpen, setIsQRModalOpen] = React.useState(false);


    const handleWalletConnect = (provider: string) => {
        if (provider === 'metamask') {
            window.open('https://metamask.app.link/connect?redirect=topup://auth-success');
        } else if (provider === 'walletconnect') {
            setIsQRModalOpen(true);
        }
    };



    const benefits = [
        "Earn reputation through contributions",
        "Get vouched by peers in the community",
        "Unlock premium opportunities",
        "Portable reputation across platforms"
    ];

    return (
        <div className="min-h-full bg-bg-primary flex flex-col md:flex-row overflow-y-auto custom-scrollbar">
            {/* Left Column: Hero & Branding */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 p-12 lg:p-20 flex flex-col justify-center bg-surface-01/30 relative"
            >
                <div className="absolute inset-0 bg-brand-gradient opacity-5 pointer-events-none" />

                <div className="relative z-10 max-w-lg">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-brand-gradient rounded-2xl flex items-center justify-center shadow-glow">
                            <ShieldCheck size={32} className="text-white" />
                        </div>
                        <h1 className="text-5xl font-black tracking-tighter text-white">TOPUP</h1>
                    </div>

                    <h2 className="text-3xl font-bold text-text-primary mb-6 leading-tight">
                        Build Your Web3 Reputation
                    </h2>

                    <div className="space-y-4 mb-12">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3 text-lg text-text-secondary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {benefit}
                            </div>
                        ))}
                    </div>

                    <div className="testimonial-card p-8 border border-primary/20 bg-primary/5 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ShieldCheck size={80} />
                        </div>
                        <p className="text-lg italic text-text-primary mb-6 relative z-10 leading-relaxed">
                            "Your skills, verified on-chain. TopUp helped me showcase my verified skills to DAOs. It's like LinkedIn but actually trustworthy because it's on-chain."
                        </p>
                        <div>
                            <div className="font-bold text-white">Game R.</div>
                            <div className="text-sm text-text-tertiary font-medium">Core Contributor @ Deri Protocol</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Column: Auth Interface */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 p-12 lg:p-20 flex flex-col items-center justify-center overflow-y-scroll scrollable"
            >

                <div className="w-full max-w-md">
                    {/* Wallet Section */}

                    <div className="space-y-4 mb-10">
                        <h3 className="text-center text-sm font-bold uppercase tracking-widest text-text-tertiary mb-6">
                            Connect Your Wallet
                        </h3>

                        <button
                            onClick={() => handleWalletConnect('metamask')}
                            className="wallet-btn metamask w-full flex items-center justify-center gap-4 py-4 rounded-2xl group transition-all"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="font-bold">Connect with MetaMask</span>
                        </button>

                        <button
                            onClick={() => handleWalletConnect('walletconnect')}
                            className="wallet-btn walletconnect w-full flex items-center justify-center gap-4 py-4 rounded-2xl group transition-all"
                        >
                            <Smartphone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="font-bold">WalletConnect</span>
                        </button>

                        <button
                            onClick={() => handleWalletConnect('coinbase')}
                            className="wallet-btn coinbase w-full flex items-center justify-center gap-4 py-4 rounded-2xl group transition-all"
                        >
                            <Wallet className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="font-bold">Coinbase Wallet</span>
                        </button>

                        <p className="text-[11px] text-center text-text-tertiary leading-relaxed mt-4">
                            Secure & Non-Custodial. We never access your private keys. <br />
                            <span className="text-primary-light font-medium">Sign to verify ownership.</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-6 mb-10">
                        <div className="h-px flex-1 bg-border-light" />
                        <span className="text-[10px] font-black text-text-tertiary uppercase tracking-widest">Or Continue With Signing</span>
                        <div className="h-px flex-1 bg-border-light" />
                    </div>

                    {/* Tabs */}
                    <div className="flex p-1.5 bg-bg-secondary rounded-2xl mb-10 border border-border-light shadow-xl">
                        <button
                            onClick={() => setCurrentCard('login')}
                            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${currentCard === 'login' ? 'bg-primary text-white shadow-glow' : 'text-text-secondary hover:bg-white/5'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setCurrentCard("signup")}
                            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${currentCard === 'signup' ? 'bg-primary text-white shadow-glow' : 'text-text-secondary hover:bg-white/5'}`}
                        >
                            Sign Up
                        </button>
                    </div>


                    {/* Email Form */}
                    <div className="relative w-full h-full">
                        <AnimatePresence mode="wait">
                            {currentCard === 'login' ? (
                                <motion.div
                                    key="login"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute w-full"
                                >
                                    <Login />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="signup"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute w-full"
                                >
                                    <SignUp />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>


                </div>
            </motion.div>

            <WalletConnectQR isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
        </div>
    );
};

export default AuthChoice;
