import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check } from 'lucide-react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const WalletConnectQR: React.FC<Props> = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);
    const wcLink = "wc:a1b2c3d4e5f6g7h8i9j0... [demo]";

    const handleCopy = () => {
        navigator.clipboard.writeText(wcLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[3000] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-bg-overlay backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="qr-modal w-full max-w-[320px] rounded-3xl p-8 relative z-10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-text-tertiary hover:text-text-primary transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="text-center mb-6">
                            <h3 className="text-lg font-bold">Scan QR Code</h3>
                            <p className="text-xs text-text-secondary mt-1">Connect with WalletConnect</p>
                        </div>

                        <div className="qr-code aspect-square w-full mb-6 relative group overflow-hidden">
                            {/* Fake QR for demo */}
                            <div className="w-full h-full bg-white p-2 flex items-center justify-center">
                                <div className="grid grid-cols-8 gap-1 w-full h-full opacity-80">
                                    {Array.from({ length: 64 }).map((_, i) => (
                                        <div key={i} className={`rounded-[1px] ${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'}`} />
                                    ))}
                                </div>
                            </div>
                            <div className="qr-placeholder absolute inset-0 pointer-events-none" />
                        </div>

                        <div className="space-y-4">
                            <div className="p-3 bg-bg-primary rounded-xl border border-border-light">
                                <p className="text-[10px] text-text-tertiary uppercase tracking-widest font-bold mb-2">Or copy connection link</p>
                                <div className="flex items-center justify-between gap-2 overflow-hidden">
                                    <span className="text-[10px] font-mono text-text-accent truncate flex-1">{wcLink}</span>
                                    <button
                                        onClick={handleCopy}
                                        className="shrink-0 p-1.5 bg-surface-03 rounded-lg hover:bg-primary transition-all text-text-primary"
                                    >
                                        {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WalletConnectQR;
