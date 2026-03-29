import React from "react";
import { Calendar } from "lucide-react";

const importantDates = [
    { date: "19 March, 2026", event: "Registration Opens" },
    { date: <span><s>28 March, 2026</s>, 30 April, 2026</span>, event: "Early Bird Registration Closes" },
    { date: <span><s>15 April, 2026</s>, 15 May, 2026</span>, event: "Late Registration Closes" },
    { date: "1 June, 2026", event: "School Starts" },
];

const ImportantDates: React.FC = () => {
    return (
        <section id="important" className="scroll-mt-24">

            <div className="container-custom">

                <div className="text-center mb-12">
                    <h2 className="section-title">Important Dates</h2>

                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {importantDates.map((item) => (
                        <div key={item.event} className="text-center">
                            <div className="inline-flex items-center gap-2 mb-2">
                                <Calendar className="h-5 w-5 text-red-400" />
                                <span className="font-bold text-red-500">
                                    {item.date}
                                </span>
                            </div>
                            <p className="text-muted-foreground">{item.event}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default ImportantDates;