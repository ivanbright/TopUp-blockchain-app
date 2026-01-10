import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import Notification from '../components/Notification';
import { AnimatePresence } from 'framer-motion';

interface User {
    name: string;
    username: string;
    reputation: number;
    isAuthenticated: boolean;
}

interface AuthContextType {
    user: User | null;
    login: (credentials: any) => Promise<void>;
    logout: () => void;
    showNotification: (message: string, type: 'success' | 'error' | 'info') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [notifications, setNotifications] = useState<{ id: number; message: string; type: 'success' | 'error' | 'info' }[]>([]);

    const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
        const id = Date.now();
        setNotifications(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, 4000);
    };

    const login = async (credentials: any) => {
        await new Promise(resolve => setTimeout(resolve, 1500));

        showNotification('🎉 Login successful! Redirecting to dashboard...', 'success');

        const mockUser: User = {
            name: credentials.email?.split('@')[0] || 'Web3User',
            username: credentials.username || credentials.email?.split('@')[0] || 'web3_enthusiast',
            reputation: 850,
            isAuthenticated: true
        };

        setUser(mockUser);

        if (window.electronAPI) {
            const encrypted = await window.electronAPI.encryptToken('mock-jwt-token');
            localStorage.setItem('auth_token', encrypted);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth_token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, showNotification }}>
            {children}
            {/* Toast Overlay */}
            <div className="fixed bottom-4 right-4 z-[5000] flex flex-col gap-2 pointer-events-none">
                <AnimatePresence>
                    {notifications.map(n => (
                        <div key={n.id} className="pointer-events-auto">
                            <Notification
                                id={n.id}
                                message={n.message}
                                type={n.type}
                                onClose={(id) => setNotifications(prev => prev.filter(notif => notif.id !== id))}
                            />
                        </div>
                    ))}
                </AnimatePresence>
            </div>
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
