import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { KeyRound, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { resetPassword } from '@/lib/mockData';
const ResetPassword = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
    // Validate token
    const storedToken = sessionStorage.getItem('lso_reset_token');
    const tokenData = storedToken ? JSON.parse(storedToken) : null;
    const isValidToken = tokenData && tokenData.token === token;
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.password || !formData.confirmPassword) {
            toast({ title: 'Missing Fields', description: 'Please fill in all fields.', variant: 'destructive' });
            return;
        }
        if (formData.password.length < 6) {
            toast({ title: 'Weak Password', description: 'Password must be at least 6 characters.', variant: 'destructive' });
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            toast({ title: 'Mismatch', description: 'Passwords do not match.', variant: 'destructive' });
            return;
        }
        const success = resetPassword(tokenData.email, formData.password);
        if (success) {
            sessionStorage.removeItem('lso_reset_token');
            toast({ title: 'Password Reset', description: 'Your password has been updated. Please login.' });
            navigate('/login');
        } else {
            toast({ title: 'Error', description: 'Could not reset password. Try again.', variant: 'destructive' });
        }
    };
    if (!isValidToken) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-4">
                <div className="absolute inset-0 hero-gradient opacity-90" />
                <Card className="relative z-10 w-full max-w-md border-border/60 shadow-elevated bg-card/95 backdrop-blur-sm">
                    <CardContent className="p-8 text-center space-y-4">
                        <h2 className="text-xl font-display font-bold text-destructive">Invalid or Expired Link</h2>
                        <p className="text-muted-foreground text-sm">This reset link is invalid or has expired.</p>
                        <Button variant="outline" onClick={() => navigate('/login')}>Back to Login</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-4">
            <div className="absolute inset-0 hero-gradient opacity-90" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <Card className="relative z-10 w-full max-w-md border-border/60 shadow-elevated bg-card/95 backdrop-blur-sm">
                <CardHeader className="text-center space-y-2 pb-2">
                    <CardTitle className="text-2xl font-display font-bold tracking-tight">Reset Password</CardTitle>
                    <CardDescription className="text-muted-foreground">Set a new password for {tokenData.email}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <div className="relative">
                                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="newPassword" type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="pl-10 pr-10" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <div className="relative">
                                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="confirmPassword" type="password" placeholder="••••••••" className="pl-10" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                            </div>
                        </div>
                        <Button type="submit" className="w-full accent-gradient text-accent-foreground font-semibold">Reset Password</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
export default ResetPassword;