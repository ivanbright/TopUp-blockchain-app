import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
    AlertCircle
} from 'lucide-react';
// import WalletConnectQR from '../components/Auth/WalletConnectQR';

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(formData);
        navigate('/dashboard');
    };

    // const benefits = [
    //     "Earn reputation through contributions",
    //     "Get vouched by peers in the community",
    //     "Unlock premium opportunities",
    //     "Portable reputation across platforms"
    // ];

    const getPasswordStrength = () => {
        const len = formData.password.length;
        if (len === 0) return { label: '', class: 'w-0', color: 'text-text-tertiary' };
        if (len < 6) return { label: 'Weak', class: 'w-[25%] bg-error', color: 'text-error' };
        if (len < 10) return { label: 'Fair', class: 'w-[50%] bg-warning', color: 'text-warning' };
        if (len < 14) return { label: 'Good', class: 'w-[75%] bg-primary', color: 'text-primary' };
        return { label: 'Strong', class: 'w-[100%] bg-success shadow-glow', color: 'text-success' };
    };

    const strength = getPasswordStrength();

    return (
        <div className="">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-text-tertiary ml-1">Display Name</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Satoshi Nakamoto"
                                        className="input-field"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-text-tertiary ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        className="input-field"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                    <div className="flex items-center gap-2 text-[10px] text-text-tertiary italic ml-1 font-medium">
                                        <AlertCircle size={12} /> For notifications & recovery
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-text-tertiary ml-1">Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="input-field"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        required
                                    />

                                    {formData.password && (
                                        <div className="space-y-1.5 px-1">
                                            <div className="h-1.5 w-full bg-surface-03 rounded-full overflow-hidden">
                                                <div className={`h-full transition-all duration-500 ${strength.class}`} />
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] font-bold">
                                                <span className={strength.color}>Strength: {strength.label}</span>
                                                <span className="text-text-tertiary italic">Must include number</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button type="submit" className="w-full py-4 bg-brand-gradient hover:opacity-90 rounded-2xl font-black text-white text-lg shadow-glow transition-all active:scale-[0.98] mt-6">
                                    CREATE ACCOUNT
                                </button>
                            </form>

        </div>
    );
};

export default SignUp;
