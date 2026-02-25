import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, User, Mail, Phone, Building2, GraduationCap, Globe, MapPin, MessageCircle } from 'lucide-react';

const categories = [
    { value: 'student', label: 'Student / Post Doctoral' },
    { value: 'faculty', label: 'Faculty Member' },
    { value: 'government', label: 'Government Officer' },
    { value: 'industry', label: 'Industry Professional' },
];

const RegistrationForm = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        affiliation: '',
        designation: '',
        category: '',
        researchArea: '',
        whatsapp: '',
        country: '',
        address: '',
        state: '',
        city: '',
        gender: '',
        postalCode: '',
        agreeTerms: false,
    });

    const handleChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // ── Map frontend camelCase → backend snake_case ─────────────────────
        const payload = {
            full_name: formData.fullName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            whatsapp: formData.whatsapp.trim(),
            country: formData.country.trim(),
            address: formData.address.trim(),
            city: formData.city.trim(),
            state: formData.state.trim(),
            postal_code: formData.postalCode.trim(),
            affiliation: formData.affiliation.trim(),
            designation: formData.designation.trim(),
            category: formData.category,
            gender: formData.gender,
            research_area: formData.researchArea.trim(),
            agree_terms: formData.agreeTerms,
            // agree_terms usually NOT sent to backend
        };

        try {
            const response = await fetch("http://localhost:8000/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                toast({
                    title: "Registration Submitted!",
                    description: "Confirmation email sent.",
                });
                // Optional: reset form
                // setFormData({ ...initialFormData });
            } else {
                // 400, 422 etc → show proper error
                const errorMsg = data.error || data.detail || data.non_field_errors?.[0] || "Validation failed";
                toast({
                    title: "Registration Failed",
                    description: errorMsg,
                    variant: "destructive",
                });
                console.log("Backend error response:", data); // ← very useful!
            }
        } catch (err) {
            toast({
                title: "Network Error",
                description: "Could not reach the server. Is backend running?",
                variant: "destructive",
            });
            console.error(err);
        }
    };


    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (!formData.fullName || !formData.email || !formData.category || !formData.agreeTerms) {
    //         toast({
    //             title: 'Missing fields',
    //             description: 'Please fill all required fields and accept the terms.',
    //             variant: 'destructive',
    //         });
    //         return;
    //     }
    //     toast({
    //         title: 'Registration Submitted!',
    //         description: 'We will get back to you with a confirmation email shortly.',
    //     });
    // };

    return (
        <section id="registration" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-primary/[0.03]" />
            <div className="absolute top-0 left-0 w-72 h-72 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="section-container relative z-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-red-500 font-semibold text-sm uppercase tracking-wider mb-4">
                        Join Us
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Register for <span className="text-red-500">LSO 2026</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Secure your spot at India's premier optimization summer school.
                        Limited seats available — register early!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Info Panel */}
                    <div className="space-y-6">
                        <Card className="border-red-500/20 bg-card">
                            <CardContent className="p-6 space-y-4">
                                <h3 className="font-display font-semibold text-xl text-foreground">Registration Details</h3>
                                <div className="space-y-3 text-sm text-muted-foreground">
                                    <div className="flex justify-between border-b border-border pb-2">
                                        <span>Students</span>
                                        <span className="font-semibold text-foreground">₹2,000</span>
                                    </div>
                                    <div className="flex justify-between border-b border-border pb-2">
                                        <span>Faculty</span>
                                        <span className="font-semibold text-foreground">₹5,000</span>
                                    </div>
                                    <div className="flex justify-between border-b border-border pb-2">
                                        <span>Industry</span>
                                        <span className="font-semibold text-foreground">₹10,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Government</span>
                                        <span className="font-semibold text-foreground">₹5,000</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border bg-card">
                            <CardContent className="p-6 space-y-3">
                                <h3 className="font-display font-semibold text-xl text-foreground">What's Included</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {['All lectures & workshops', 'Course materials', 'Lunch & refreshments', 'Certificate of participation', 'Networking events'].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-border bg-card">
                            <CardContent className="p-6">
                                <h3 className="font-display font-semibold text-xl text-foreground mb-2">Important Dates</h3>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex justify-between">
                                        <span>Registration open</span>
                                        <span className="font-medium text-foreground">April 30, 2026</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Registration closes</span>
                                        <span className="font-medium text-foreground">May 25, 2026</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-border shadow-elevated">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="fullName" className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-red-500" />
                                                Full Name <span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="fullName"
                                                placeholder="Name"
                                                value={formData.fullName}
                                                onChange={(e) => handleChange('fullName', e.target.value)}
                                                maxLength={100}
                                                className="focus-visible:ring-red-300"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-red-500" />
                                                Email <span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder=" your email"
                                                value={formData.email}
                                                onChange={(e) => handleChange('email', e.target.value)}
                                                maxLength={255}
                                                className="focus-visible:ring-red-300"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-base font-semibold">
                                            Gender <span className="text-destructive">*</span>
                                        </Label>
                                        <RadioGroup
                                            value={formData.gender}
                                            onValueChange={(val) => handleChange('gender', val)}
                                            className="grid sm:grid-cols-3 gap-3"
                                        >
                                            {[
                                                { value: 'male', label: 'Male' },
                                                { value: 'female', label: 'Female' },
                                                { value: 'other', label: 'Other' },
                                            ].map((g) => (
                                                <Label
                                                    key={g.value}
                                                    htmlFor={`gender-${g.value}`}
                                                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.gender === g.value
                                                        ? 'border-red-500 bg-red-500/5'
                                                        : 'border-border hover:border-red-500/30'
                                                        }`}
                                                >
                                                    <RadioGroupItem value={g.value} id={`gender-${g.value}`}
                                                        className="border-red-500 text-red-500 data-[state=checked]:border-red-300 data-[state=checked]:bg-red-300"
                                                    />
                                                    <span className="text-sm font-medium">{g.label}</span>
                                                </Label>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                    {/* Phone & Affiliation */}
                                    <div className="grid sm:grid-cols-3 gap-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-red-500" />
                                                Phone Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="Enter 10 digit number"
                                                value={formData.phone}
                                                onChange={(e) => handleChange('phone', e.target.value)}
                                                maxLength={20}
                                                required
                                                className="focus-visible:ring-red-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="whatsapp" className="flex items-center gap-2">
                                                <MessageCircle className="w-4 h-4 text-red-500" />
                                                WhatsApp Number
                                            </Label>
                                            <Input
                                                id="whatsapp"
                                                type="tel"
                                                placeholder="Enter 10 digit number"
                                                value={formData.whatsapp}
                                                onChange={(e) => handleChange('whatsapp', e.target.value)}
                                                maxLength={20}
                                                className="focus-visible:ring-red-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="country" className="flex items-center gap-2">
                                                <Globe className="w-4 h-4 text-red-500" />
                                                Country <span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="country"
                                                placeholder="India"
                                                value={formData.country}
                                                onChange={(e) => handleChange('country', e.target.value)}
                                                maxLength={100}
                                                required
                                                className="focus-visible:ring-red-300"
                                            />
                                        </div>
                                    </div>
                                    {/* Affiliation */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="affiliation" className="flex items-center gap-2">
                                                <Building2 className="w-4 h-4 text-red-500" />
                                                Institution / Organization <span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="affiliation"
                                                placeholder="IIT Delhi"
                                                value={formData.affiliation}
                                                onChange={(e) => handleChange('affiliation', e.target.value)}
                                                maxLength={200}
                                                className="focus-visible:ring-red-300"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Designation */}
                                    <div className="space-y-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="designation" className="flex items-center gap-2">
                                                <GraduationCap className="w-4 h-4 text-red-500" />
                                                Designation / Role<span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="designation"
                                                placeholder="Assistant Professor / PhD Scholar / Student"
                                                value={formData.designation}
                                                onChange={(e) => handleChange('designation', e.target.value)}
                                                maxLength={100}
                                                required
                                                className="focus-visible:ring-red-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Category */}
                                    <div className="space-y-3">
                                        <Label className="text-base font-semibold">
                                            Category <span className="text-destructive">*</span>
                                        </Label>
                                        <RadioGroup
                                            value={formData.category}
                                            onValueChange={(val) => handleChange('category', val)}
                                            className="grid sm:grid-cols-2 gap-3"
                                        >
                                            {categories.map((cat) => (
                                                <Label
                                                    key={cat.value}
                                                    htmlFor={cat.value}
                                                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.category === cat.value
                                                        ? 'border-red-500 bg-red-500/5'
                                                        : 'border-border hover:border-red-500/30'
                                                        }`}
                                                >
                                                    <RadioGroupItem value={cat.value} id={cat.value}
                                                        className="border-red-500 text-red-500 data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500"
                                                    />
                                                    <span className="text-sm font-medium">{cat.label}</span>
                                                </Label>
                                            ))}
                                        </RadioGroup>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="researchArea">Academic Background <span className="text-destructive">*</span></Label>
                                        <Textarea
                                            id="researchArea"
                                            placeholder="Provide a short summary of your Bachelor’s/Master’s/PhD background and academic interests."
                                            value={formData.researchArea}
                                            onChange={(e) => handleChange('researchArea', e.target.value)}
                                            maxLength={500}
                                            required
                                            className="min-h-[80px]"
                                        />
                                    </div>

                                    {/* Correspondence Address */}
                                    <div className="space-y-4">
                                        <Label className="flex items-center gap-2 text-base font-semibold">
                                            <MapPin className="w-4 h-4 text-red-500" />
                                            Correspondence Address <span className="text-destructive">*</span>
                                        </Label>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="address">Address</Label>
                                                <Textarea
                                                    id="address"
                                                    placeholder="Street address, building, apartment..."
                                                    value={formData.address}
                                                    onChange={(e) => handleChange('address', e.target.value)}
                                                    maxLength={300}
                                                    required
                                                    className="min-h-[60px] focus-visible:ring-red-300"
                                                />
                                            </div>
                                            <div className="grid sm:grid-cols-3 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="city">City / Town / Village</Label>
                                                    <Input
                                                        id="city"
                                                        placeholder="New Delhi"
                                                        value={formData.city}
                                                        onChange={(e) => handleChange('city', e.target.value)}
                                                        maxLength={100}
                                                        required
                                                        className="focus-visible:ring-red-300"

                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="state">State</Label>
                                                    <Input
                                                        id="state"
                                                        placeholder="Delhi"
                                                        value={formData.state}
                                                        onChange={(e) => handleChange('state', e.target.value)}
                                                        maxLength={100}
                                                        required
                                                        className="focus-visible:ring-red-300"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="postalCode">Postal Code</Label>
                                                    <Input
                                                        id="postalCode"
                                                        placeholder="110016"
                                                        value={formData.postalCode}
                                                        onChange={(e) => handleChange('postalCode', e.target.value)}
                                                        maxLength={10}
                                                        required
                                                        className="focus-visible:ring-red-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Terms */}
                                    <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                                        <Checkbox
                                            id="terms"
                                            checked={formData.agreeTerms}
                                            onCheckedChange={(val) => handleChange('agreeTerms', !!val)}
                                        />
                                        <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                                            I agree to the terms and conditions and understand that the registration fee is non-refundable. <span className="text-destructive">*</span>
                                        </Label>
                                    </div>

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-red-500 hover:bg-red-500/90 text-white font-semibold shadow-glow"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Submit Registration
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
