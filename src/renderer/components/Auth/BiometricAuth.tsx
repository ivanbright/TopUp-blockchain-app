import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Check } from 'lucide-react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const BiometricAuth: React.FC<Props> = ({ isOpen, onClose, onSuccess }) => {
    const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');

    const handleScan = () => {
        setStatus('scanning');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                onSuccess();
                onClose();
                setStatus('idle');
            }, 1000);
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[4000] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-bg-overlay backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-surface-02 border border-border-light rounded-3xl p-8 w-full max-w-[280px] relative z-10 text-center shadow-2xl"
                    >
                        <div className="mb-6">
                            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center border-2 transition-all duration-500 ${status === 'scanning' ? 'border-primary animate-pulse' :
                                status === 'success' ? 'border-success bg-success/10' :
                                    status === 'error' ? 'border-error bg-error/10' :
                                        'border-border-medium'
                                }`}>
                                {status === 'success' ? (
                                    <Check size={40} className="text-success" />
                                ) : (
                                    <Fingerprint size={40} className={`${status === 'scanning' ? 'text-primary' : 'text-text-tertiary'}`} />
                                )}
                            </div>
                        </div>

                        <h3 className="text-lg font-bold mb-2">
                            {status === 'idle' ? 'Biometric Login' :
                                status === 'scanning' ? 'Scanning...' :
                                    status === 'success' ? 'Verified!' : 'Scan Failed'}
                        </h3>
                        <p className="text-xs text-text-secondary mb-8">
                            {status === 'idle' ? 'Use your fingerprint or face to sign in securely' :
                                status === 'scanning' ? 'Hold steady...' :
                                    status === 'success' ? 'Authentication successful' : 'Please try again'}
                        </p>

                        <div className="space-y-3">
                            {status === 'idle' && (
                                <button
                                    onClick={handleScan}
                                    className="w-full py-3 bg-primary hover:bg-primary-dark rounded-xl font-bold text-sm transition-all"
                                >
                                    START SCAN
                                </button>
                            )}
                            <button
                                onClick={onClose}
                                className="w-full py-2.5 text-xs text-text-tertiary hover:text-text-primary font-bold"
                            >
                                CANCEL
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BiometricAuth;
