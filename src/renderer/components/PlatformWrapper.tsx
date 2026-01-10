import React from 'react';

interface Props {
    children: React.ReactNode;
}

const PlatformWrapper: React.FC<Props> = ({ children }) => {
    const platform = window.electronAPI?.platform || 'windows';

    return (
        <div className={`h-full w-full relative flex flex-col ${platform}`}>
            <main className="flex-1 overflow-hidden">
                {children}
            </main>

            {/* Platform specific accents */}
            {platform === 'windows' && (
                <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-lg ring-1 ring-inset ring-white/5 active:ring-primary/20" />
            )}
        </div>
    );
};

export default PlatformWrapper;
