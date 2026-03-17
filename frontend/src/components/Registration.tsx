import { Calendar, Check, X, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';


const fees = [
  { category: 'Students', description: 'PhD, Post-doctoral researchers, postgraduate or graduate', early_fees: '7,000', fee: '10,000' },
  { category: 'Faculty members', description: 'Universities or colleges in India', early_fees: '14,000', fee: '20,000' },
  { category: 'Practitioners and all others', description: 'Industry professionals and international participants', early_fees: '30,000', fee: '42,000' },
];

const included = [
  'All sessions and workshops',
  'Course materials',
  'Lunch and refreshments during breaks',
  'Certificate of participation',
];

const notIncluded = [
  'Accommodation',
  'Travel to/from venue',
  'Breakfast and dinner',
  'Personal expenses',
];

const requiredDocs = [
  'ID proof',
  'Student/Faculty ID card (if applicable)',
  'Payment confirmation',
  'Authorization letter (if sponsored)',
];

const importantDates = [
  { date: 'March , 2026', event: 'Registration Opens' },
  { date: '28 March , 2026', event: 'Registration Closes' },
  { date: 'June 01, 2026', event: 'School Starts' },
];

const faqs = [
  {
    question: 'When is the last date for registration?',
    answer: 'The early bird registration ends on 28 March 2026.',
  },
  {
    question: 'Can I get a refund if I cancel my registration?',
    answer: 'No refunds will be entertained if one does not attend the event.',
  },
  {
    question: 'Can I register for specific days only?',
    answer: 'The summer school is designed as a comprehensive program, and partial registration is not available. Participants are expected to attend the full program.',
  },
];

const Registration = () => {
  return (
    <section id="registration" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Registration</h2>
          <p className="section-subtitle">
            Join us for the LSO Summer School 2026 and advance your knowledge in optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Registration Details</h3>
            <p className="text-muted-foreground mb-4">
              Registration includes participation in all sessions, course materials, and refreshments during the program. It does not include accommodation, travel, lunch or dinner.
            </p>

            <Card className="p-6 mb-6 border-destructive/50 bg-destructive/5">
              <h4 className="font-bold text-destructive mb-2">Registrations  opened </h4>
              {/* <p className="text-sm text-muted-foreground">
                Please use latest version of Chrome, Edge, Safari, Brave etc. (but not Firefox). It is a two-step procedure. After filling your details, you will receive an email with a payment link. Registration is complete only after payment is successful.
              </p> */}



              <p className="text-sm text-muted-foreground mt-4">
                Registrations for the early bird close on 28 March 2026.
              </p>
            </Card>

            <img
              src="/images/regis.webp"
              alt="Professional academic setting"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Registration Fees</h3>
            <p className="text-sm text-muted-foreground mb-4">Includes goods and services tax (GST)</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Category</th>
                    <th className="text-right py-3 font-semibold"> Early Bird Fee (Rs) till 28 March 2026</th>
                    <th className="text-right py-3 font-semibold">  Fee (Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((item) => (
                    <tr key={item.category} className="border-b border-border">
                      <td className="py-3">
                        <div className="font-medium">{item.category}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </td>
                      <td className="py-3 text-right font-semibold">{item.early_fees}</td>
                      <td className="py-3 text-right font-semibold">{item.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-muted-foreground mb-8">
              * Registration fees do not include accommodation, travel and food.
            </p>

            {/* What's Included / Not Included / Required Docs */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  What's Included
                </h4>
                <ul className="text-sm space-y-2">
                  {included.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </Card>
              {/* 
              <Card className="p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <X className="h-5 w-5 text-destructive" />
                  Not Included
                </h4>
                <ul className="text-sm space-y-2">
                  {notIncluded.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </Card> */}

              <Card className="p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Required Documents
                </h4>
                <ul className="text-sm space-y-2">
                  {requiredDocs.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Important Dates</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {importantDates.map((item) => (
              <div key={item.event} className="text-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-red-400" />
                  <span className="font-bold text-red-500">{item.date}</span>
                </div>
                <p className="text-muted-foreground">{item.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Information */}
        <Card className="p-6 mt-12">
          {/* <h3 className="text-xl font-bold mb-4">Payment Information</h3>
          <p className="text-muted-foreground mb-4">
            Please go to the registration section, fill in your details, and submit the form. After registration, you will receive an email with your username, password, and login link. Once you log in, you can check your application status on the dashboard.
          </p>

          <p className="text-muted-foreground mb-4">
            If your application status shows “Pending,” please wait for a few days while your application is being reviewed.
          </p>

          <p className="text-muted-foreground mb-4">
            If you are selected for the workshop, you will receive a payment link via email or it will be available on your login dashboard. Payment can be made using a credit/debit card, net banking, or UPI.
          </p> */}


          <p className="text-muted-foreground">
            For any queries regarding registration, please contact: <a href="mailto:lso2026@admin.iitd.ac.in" className="text-red-500 hover:underline">lso2026@admin.iitd.ac.in</a>
          </p>
        </Card>

        {/* FAQs */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Registration;
