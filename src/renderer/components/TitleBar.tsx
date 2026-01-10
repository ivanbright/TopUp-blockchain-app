import React from 'react';
import { Minus, Square, X } from 'lucide-react';

const TitleBar: React.FC = () => {
    const platform = window.electronAPI?.platform || 'windows';

    const handleMinimize = () => window.electronAPI?.minimize();
    const handleClose = () => window.electronAPI?.close();

    return (
        <div className="title-bar shrink-0">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-glow" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-text-secondary uppercase">TopUp</span>
            </div>

            <div className="title-bar-controls">
                {platform === 'darwin' ? (
                    // macOS specific "Traffic Lights" style
                    <div className="flex gap-2 px-2">
                        <button onClick={handleClose} className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/10 hover:brightness-90 transition-all" title="Close" />
                        <button onClick={handleMinimize} className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/10 hover:brightness-90 transition-all" title="Minimize" />
                        <button className="w-3 h-3 rounded-full bg-[#28C840] border border-black/10 hover:brightness-90 transition-all" title="Maximize" />
                    </div>
                ) : (
                    // Windows / Linux style
                    <div className="flex">
                        <button
                            onClick={handleMinimize}
                            className="p-2 hover:bg-white/10 transition-colors text-text-tertiary hover:text-warning"
                        >
                            <Minus size={14} />
                        </button>
                        <button
                            className="p-2 hover:bg-white/10 transition-colors text-text-tertiary hover:text-success"
                        >
                            <Square size={12} />
                        </button>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-error/80 transition-colors text-text-tertiary hover:text-white"
                        >
                            <X size={14} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TitleBar;
