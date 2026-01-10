import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    AlertCircle,
    X,
    MessageSquare,
    ShieldCheck,
    Info
} from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'message' | 'vouch';

interface Toast {
    id: string;
    type: ToastType;
    title: string;
    message: string;
    duration?: number;
}

interface ToastContextType {
    showToast: (type: ToastType, title: string, message: string, duration?: number) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = React.useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = React.useState<Toast[]>([]);

    const showToast = (type: ToastType, title: string, message: string, duration = 5000) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, type, title, message, duration }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4 max-w-sm w-full">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.95 }}
                            className="bg-[#1A1D2E] border border-white/10 rounded-[28px] p-6 shadow-2xl flex items-start gap-4 relative overflow-hidden group hover:border-white/20 transition-all active:scale-[0.98]"
                        >
                            {/* Decorative side accent */}
                            <div className={`absolute left-0 inset-y-0 w-1.5 ${toast.type === 'success' ? 'bg-success shadow-glow-success' :
                                    toast.type === 'error' ? 'bg-error shadow-glow-error' :
                                        toast.type === 'message' ? 'bg-primary shadow-glow-primary' :
                                            toast.type === 'vouch' ? 'bg-warning shadow-glow-warning' :
                                                'bg-info shadow-glow-info'
                                }`} />

                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${toast.type === 'success' ? 'bg-success/10 text-success' :
                                    toast.type === 'error' ? 'bg-error/10 text-error' :
                                        toast.type === 'message' ? 'bg-primary/10 text-primary' :
                                            toast.type === 'vouch' ? 'bg-warning/10 text-warning' :
                                                'bg-info/10 text-info'
                                }`}>
                                {toast.type === 'success' && <CheckCircle2 size={24} />}
                                {toast.type === 'error' && <AlertCircle size={24} />}
                                {toast.type === 'message' && <MessageSquare size={24} />}
                                {toast.type === 'vouch' && <ShieldCheck size={24} />}
                                {toast.type === 'info' && <Info size={24} />}
                            </div>

                            <div className="flex-1 space-y-1">
                                <h4 className="text-sm font-black text-white uppercase tracking-wider">{toast.title}</h4>
                                <p className="text-xs text-slate-400 font-medium leading-relaxed">{toast.message}</p>
                            </div>

                            <button
                                onClick={() => removeToast(toast.id)}
                                className="p-2 text-slate-600 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X size={16} />
                            </button>

                            {/* Progress bar timer */}
                            <motion.div
                                initial={{ width: '100%' }}
                                animate={{ width: '0%' }}
                                transition={{ duration: toast.duration ? toast.duration / 1000 : 5, ease: 'linear' }}
                                className="absolute bottom-0 left-0 h-0.5 bg-white/5"
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};
