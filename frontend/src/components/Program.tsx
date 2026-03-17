import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import * as XLSX from 'xlsx';

const Program = () => {
  const [schedule, setSchedule] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchExcel = async () => {
      try {

        const res = await fetch(
          'https://docs.google.com/spreadsheets/d/1ZZ17QNHS1MtRENhgHI8nvQE4ISM4qSK86QFC4zFS7FU/edit?invite=CJmlj8UJ&gid=1441974153#gid=1441974153'
        );
        const arrayBuffer = await res.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        const rawData: any[][] = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
          defval: '',
        });

        // console.log("RAW DATA:", rawData);

        const filtered = rawData.filter(row =>
          row.some(cell => String(cell).trim() !== '')
        );

        const cleaned = filtered
          .map(row => row.slice(1))
          .filter(row => row.some(cell => String(cell).trim() !== ''));


        const headerRow = cleaned[2] as string[];

        const dataRows = cleaned.slice(3);

        setHeaders(headerRow || []);
        setSchedule(dataRows || []);
      } catch (error) {
        console.error("Error loading Excel:", error);
      }
    };

    fetchExcel();
  }, []);


  return (
    <section id="program" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Program</h2>
          <p className="section-subtitle">
            Comprehensive schedule covering theory, modeling, applications and computing in optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="/images/program_overview.jpg"
              alt="Academic professional giving a mathematical presentation"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Program Overview</h3>
            <p className="text-muted-foreground mb-4">
              The LSO Summer School 2026 will feature a mix of lectures, hands-on sessions, and panel discussions focused on various aspects of optimization methods.
            </p>
            <p className="text-muted-foreground mb-6">
              The detailed schedule and program information will be announced closer to the event date.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-destructive px-4 py-2 rounded-lg font-semibold">
              <Calendar className="h-5 w-5" />
              June 01-06, 2026
            </div>
          </div>
        </div>

        {/* Programme Schedule */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Programme Schedule</h3>
          <p className="text-center text-muted-foreground mb-8">
            Main Programme, Lecture Hall Complex, IIT Delhi
          </p>

          <div className="overflow-x-auto">
            <table className="schedule-table min-w-full">
              <thead>
                <tr>
                  {headers.map((header, idx) => (
                    <th key={idx}>{header}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {schedule.map((row: any[], i: number) => {
                  const isSectionRow =
                    row[0] && row.slice(1).every(cell => cell === '');

                  if (isSectionRow) {
                    return (
                      <tr key={i}>
                        <td colSpan={headers.length} className="font-bold section-row">
                          {row[0]}
                        </td>
                      </tr>
                    );
                  }
                  if (row.every(cell => String(cell).trim() === '')) {
                    return null;
                  }

                  return (
                    <tr key={i}>
                      {row.map((cell: any, idx: number) => (
                        <td key={idx} className="text-s">
                          {cell}
                        </td>
                      ))}
                    </tr>

                    // <tr key={i}>
                    //   {row.map((cell: any, idx: number) => {
                    //     const text = String(cell);

                    //     // Match text inside brackets (e.g., "(Sachin Jayaswal)")
                    //     const match = text.match(/(.*?)(\s*\(.*\))/);

                    //     return (
                    //       <td key={idx} className="text-s">
                    //         {match ? (
                    //           <>
                    //             {match[1]}
                    //             <span style={{ fontWeight: "bold" }}>
                    //               {match[2]}
                    //             </span>
                    //           </>
                    //         ) : (
                    //           text
                    //         )}
                    //       </td>
                    //     );
                    //   })}
                    // </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;