import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface NotificationProps {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: (id: number) => void;
}

const Notification: React.FC<NotificationProps> = ({ id, message, type, onClose }) => {
    const icons = {
        success: <CheckCircle className="text-success" size={18} />,
        error: <AlertCircle className="text-error" size={18} />,
        info: <Info className="text-info" size={18} />
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className={`notification ${type} min-w-[280px] shadow-2xl relative group`}
        >
            <div className="flex items-center gap-3">
                {icons[type]}
                <span className="text-xs font-medium text-text-primary flex-1">{message}</span>
                <button
                    onClick={() => onClose(id)}
                    className="p-1 text-text-tertiary hover:text-text-primary transition-colors opacity-0 group-hover:opacity-100"
                >
                    <X size={14} />
                </button>
            </div>
        </motion.div>
    );
};

export default Notification;
