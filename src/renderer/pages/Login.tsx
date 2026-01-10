import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
    // ShieldCheck,
    ArrowRight,
    // Wallet,
    // Smartphone,
    CheckCircle2,
    // Lock,
    // Fingerprint, ArrowRight
} from 'lucide-react';
// import WalletConnectQR from '../components/Auth/WalletConnectQR';
// import BiometricAuth from '../components/Auth/BiometricAuth';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    // const [isQRModalOpen, setIsQRModalOpen] = React.useState(false);
    // const [isBiometricOpen, setIsBiometricOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    //
    // const benefits = [
    //     { text: "Earn reputation through contributions", checked: true },
    //     { text: "Get vouched by peers in the community", checked: true },
    //     { text: "Unlock premium opportunities", checked: false },
    //     { text: "Portable reputation across platforms", checked: false },
    // ];

    const handleEmailAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        await login({ email, password });
        navigate('/dashboard');
    };


    return (
        <div>
        <form onSubmit={handleEmailAuth} className="space-y-5">
            <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-tertiary ml-1">Email Address</label>
                <input
                    type="email"
                    placeholder="name@example.com"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                    <label className="text-xs font-black uppercase tracking-widest text-text-tertiary">Password</label>
                    <button type="button" className="text-xs text-primary-light font-bold hover:underline">Forget Password?</button>
                </div>
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="flex items-center justify-between py-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative w-5 h-5 flex items-center justify-center">
                        <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer z-10" />
                        <div className="w-5 h-5 bg-bg-secondary border border-border-medium rounded-md peer-checked:bg-primary peer-checked:border-primary transition-all" />
                        <div className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                            <CheckCircle2 size={14} />
                        </div>
                    </div>
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">Remember me</span>
                </label>
            </div>

            <button type="submit" className="w-full py-4 bg-brand-gradient hover:opacity-90 rounded-2xl font-black text-white text-base shadow-glow transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-3">
                SIGN IN <ArrowRight size={20} />
            </button>
        </form>

        </div>
    );
};

export default Login;
