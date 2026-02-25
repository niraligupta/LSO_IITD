import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Mail, KeyRound, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ADMIN_CREDENTIALS, findParticipantByLogin, findParticipantByEmail } from '@/lib/mockData';
const Login = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [showPassword, setShowPassword] = useState(false);
    const [forgotOpen, setForgotOpen] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            toast({ title: 'Missing Fields', description: 'Please fill in all fields to continue.', variant: 'destructive' });
            return;
        }

        if (
            formData.email === ADMIN_CREDENTIALS.email &&
            formData.password === ADMIN_CREDENTIALS.password
        ) {
            sessionStorage.setItem('lso_user', JSON.stringify({ email: formData.email, role: 'admin' }));
            toast({ title: 'Admin Login Successful', description: 'Redirecting to admin dashboard…' });
            navigate('/admin');
            return;
        }
        // Check participant credentials
        const participant = findParticipantByLogin(formData.email, formData.userId, formData.password);
        if (participant) {
            sessionStorage.setItem('lso_user', JSON.stringify({ email: participant.email, userId: participant.userId, role: 'user', participantId: participant.id }));
            toast({ title: 'Login Successful', description: 'Redirecting to dashboard…' });
            navigate('/dashboard');
            return;
        }
        toast({ title: 'Invalid Credentials', description: 'Email, User ID or password is incorrect.', variant: 'destructive' });
    };
    const handleForgotPassword = () => {
        if (!forgotEmail) {
            toast({ title: 'Enter Email', description: 'Please enter your registered email address.', variant: 'destructive' });
            return;
        }
        const participant = findParticipantByEmail(forgotEmail);
        if (!participant) {
            toast({ title: 'Email Not Found', description: 'No account found with this email address.', variant: 'destructive' });
            return;
        }
        // Mock: generate token and redirect
        const token = btoa(`${participant.email}:${Date.now()}`);
        sessionStorage.setItem('lso_reset_token', JSON.stringify({ email: participant.email, token }));
        toast({ title: 'Reset Link Sent', description: 'Redirecting to reset password page… (demo mode)' });
        setForgotOpen(false);
        navigate(`/reset-password?token=${token}`);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-4">
            {/* Decorative background */}
            <div className="absolute inset-0 hero-gradient opacity-90" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <Card className="relative z-10 w-full max-w-md border-border/60 shadow-elevated bg-card/95 backdrop-blur-sm">
                <CardHeader className="text-center space-y-2 pb-2">
                    <CardTitle className="text-2xl font-display font-bold tracking-tight">LSO 2026</CardTitle>
                    <CardDescription className="text-muted-foreground">Sign in to access your dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="email" type="email" placeholder="you@example.com" className="pl-10" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="pl-10 pr-10" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                        {/* Forgot Password */}
                        <div className="text-right">
                            <Dialog open={forgotOpen} onOpenChange={setForgotOpen}>
                                <DialogTrigger asChild>
                                    <button type="button" className="text-sm text-accent hover:underline font-medium">Forgot Password?</button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                        <DialogTitle>Reset Password</DialogTitle>
                                        <DialogDescription>Enter your registered email to receive a reset link.</DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4 pt-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="forgotEmail">Email Address</Label>
                                            <Input id="forgotEmail" type="email" placeholder="you@example.com" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} />
                                        </div>
                                        <Button onClick={handleForgotPassword} className="w-full accent-gradient text-accent-foreground font-semibold">Send Reset Link</Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <Button type="submit" className="w-full accent-gradient text-accent-foreground font-semibold">Sign In</Button>
                        <p className="text-center text-sm text-muted-foreground">
                            Back to{' '}<a href="/" className="text-accent hover:underline font-medium">Home</a>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
export default Login;