import * as React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AuthChoice from './pages/AuthChoice';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Opportunities from './pages/Opportunities';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
// import TitleBar from './components/TitleBar';
import PlatformWrapper from './components/PlatformWrapper';
import MainLayout from './components/Layout/MainLayout';
import { useToast } from './contexts/ToastContext';

const App: React.FC = () => {
    const { showToast } = useToast();
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        if (window.electronAPI) {
            window.electronAPI.onDeepLink((url) => {
                if (url.includes('auth-success')) {
                    showToast('success', 'Connection Secure', 'MetaMask connected successfully! Redirecting...');
                    setTimeout(() => navigate('/dashboard'), 1500);
                }
            });
        }
    }, [navigate, showToast]);

    // Screens that should NOT use the MainLayout (Auth screens)
    const isAuthPage = ['/', '/signup', '/login'].includes(location.pathname);

    return (
        <PlatformWrapper>
            {/* Native TitleBar is always at the top for window dragging */}
            {/*<TitleBar />*/}

            <div className="flex-1 overflow-hidden relative">
                {isAuthPage ? (
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<AuthChoice />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </AnimatePresence>
                ) : (
                    <MainLayout>
                        <AnimatePresence mode="wait">
                            <Routes location={location} key={location.pathname}>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/leaderboard" element={<Leaderboard />} />
                                <Route path="/opportunities" element={<Opportunities />} />
                                <Route path="/messages" element={<Messages />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/settings/*" element={<Settings />} />
                            </Routes>
                        </AnimatePresence>
                    </MainLayout>
                )}
            </div>
        </PlatformWrapper>
    );
};

export default App;
