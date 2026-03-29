
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';


const fees = [
  { category: 'Students', description: 'PhD, Post-doc researchers, postgraduate or graduate, academic associates (RA/TA/JRF/SRF)', early_fees: '7,000', fee: '10,000' },
  { category: 'Faculty members', description: 'Universities or colleges in India', early_fees: '14,000', fee: '20,000' },
  { category: 'Industry professionals/Government officers ', description: 'R&D engineers, Operations managers, Policymakers, etc.', early_fees: '30,000', fee: '42,000' },
];




const faqs = [
  // {
  //   question: 'When is the last date for registration?',
  //   answer: 'The early bird registration ends on 28 March 2026 and the late registration ends on 15 April 2026.',
  // },
  {
    question: 'Is there a provision for a fee waiver?',
    answer: 'The registration fee covers participation in a week-long on-site program at IIT Delhi campus and includes course materials, certificate, lunch, and two refreshments each day of the program. The fees are kept to a minimum, and we are unable to provide any further discounts or waivers on them. Thanks for your understanding.',
  },
  {
    question: 'Will accommodation be provided?',
    answer: 'A limited number of on-campus hostel accommodations are available on a sharing basis. If you opt for this option, more information will be shared later through email after you register.',
  },
  {
    question: 'Does the summer school have an online version?',
    answer: 'The LSO Summer School 2026 is a week-long on-site program at the IIT Delhi campus featuring interactive lectures by IIT and IIM faculty members and provides hands-on lab sessions. It is not offered in an online format.',
  },
  {
    question: 'Can I get a refund if I cancel my registration?',
    answer: 'No refunds will be entertained if one does not attend the event.',
  },
  {
    question: 'Can I register for specific days only?',
    answer: 'The Summer School is a week-long comprehensive program featuring interactive lectures, and partial registration is not available. Participants are expected to attend the full program.',
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
              Registration includes participation in all sessions, course materials, certificate, and lunch/refreshments during the program. It does not include accommodation, travel, breakfast, and dinner.
            </p>
            <Card className="p-6 mb-6 border-destructive/50 bg-destructive/5">
              <h4 className="font-bold text-destructive mb-2">Registration has started! </h4>




              <p className="text-sm text-muted-foreground mt-4">
                Early bird registration closes on <span className='font-bold'>28 March 2026.</span>
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Late registration closes on <span className='font-bold'>15 April 2026.</span>
              </p>
            </Card>


            <Card className="p-6">
              <img
                src="/images/iit_hostel.jpg"
                alt="IIT Delhi campus view"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2">On-Campus Accommodation</h4>

              <p className="text-muted-foreground mb-4">
                A limited number of on-campus hostel accommodations are available on a sharing basis. If you opt for this option, more information will be shared later through email.</p>
              <div className="space-y-2">

                <p className="font-semibold">
                  Rs. 750 per day (including all meals) + Rs. 60 per day for bedding.
                </p>
                <p className="text-sm text-muted-foreground">Walking distance to venue</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Note: <span className="text-sm text-muted-foreground"> Accommodation charges are not included in the conference registration fee.</span></p>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Registration Fees <sup>
              <span className="text-sm text-red-500 mb-8">*</span>{" "}
              <span className="text-sm text-blue-500 mb-4">#</span>
            </sup>
            </h3>
            <p className="text-sm text-muted-foreground mb-4"> Includes goods and services tax (GST)</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold">Category</th>
                    <th className="text-right py-3 font-semibold"> Early Bird Fee (in rupees) <br></br>(<s>until 28 March 2026</s> <span className="text-green-500">until 30 April 2026</span>)</th>
                    <th className="text-right py-3 font-semibold">    Late Fee (in rupees)<br></br>(<s>until 15 April 2026 </s> <span className="text-green-500">until 15 May 2026 </span>)</th>
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

            <p className="text-sm text-red-500 mb-4">
              * Registration fee does not include accommodation, travel, and breakfast/dinner.
            </p>
            <p className="text-sm text-blue-500 mb-8">
              # If an institution or organization sends more than 20 participants, they can avail of a 15% discount on the existing fee. For group registrations, please write an email to <a href="mailto:lso2026@admin.iitd.ac.in" className="text-blue-500 hover:underline">lso2026@admin.iitd.ac.in</a>.
            </p>
            {/* CTA */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-400 text-accent-foreground font-semibold shadow-glow"
                asChild
              >
                <a href="https://cepqip.iitd.ac.in/post/program/large-scale-optimization-summer-school">
                  Register Now
                </a>
              </Button>
            </div>
            <div className="grid md:grid-cols-1 gap-8 mb-12">
              <Card className="p-6 mt-12">


                <p className="text-muted-foreground">
                  For any queries regarding registration and payment, please contact: <a href="mailto:cepaccounts@admin.iitd.ac.in" className="text-red-500 hover:underline">cepaccounts@admin.iitd.ac.in</a> copying
                  <a href="mailto:cepiitd@admin.iitd.ac.in" className="text-red-500 hover:underline">cepiitd@admin.iitd.ac.in</a> and
                  <a href="mailto:lso2026@admin.iitd.ac.in" className="text-red-500 hover:underline">lso2026@admin.iitd.ac.in</a>
                </p>
              </Card>

            </div>
          </div>
        </div>



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
