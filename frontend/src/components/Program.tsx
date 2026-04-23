
import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
const preschoolSessions = [
  { date: 'May 16, 2026', topic: 'Introduction to Optimization Problems and Mathematical Modeling', speaker: 'Shubham Keshri, IIT Kanpur' },
  { date: 'May 17, 2026', topic: 'Python and Gurobi Installation', speaker: 'Saurabh Chandra, IIM Indore' },
  { date: 'May 22, 2026', topic: 'Heuristics', speaker: 'Reshma Chandrasekharan, IIM Bangalore' },
  { date: 'May 23, 2026', topic: 'Introduction to Linear Programming and the Simplex Method', speaker: 'Simran Lakhani, IIT Bombay' },
  { date: 'May 24, 2026', topic: 'Linear Programming Duality', speaker: 'Yogesh Agarwal, IIM Lucknow' },
  { date: 'May 25, 2026', topic: 'Sequential Decision Making', speaker: 'Amber Srivastava, IIT Delhi' },
];
const Program = () => {
  const [schedule, setSchedule] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchSheet = async () => {
      try {
        const res = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/1ZZ17QNHS1MtRENhgHI8nvQE4ISM4qSK86QFC4zFS7FU/values/LSO2026%20Tentative%20Programme?key=AIzaSyA7PazN3OYJAeiYq0bZZAWY7_4wMUGoyWs"
        );

        const data = await res.json();
        const rows = data.values;
        const filtered = rows.filter((row: any[]) =>
          row.some(cell => cell && cell.trim() !== "")
        );
        const cleaned = filtered.map(row => {
          const newRow = [...row];
          while (newRow.length < 10) {
            newRow.push("");
          }

          return newRow;
        });


        const headerRow = cleaned[1];
        let lastDay = "";
        let lastDate = "";

        const dataRows = cleaned.slice(2).map((row: any[]) => {
          const newRow = [...row];

          const nonEmptyCells = newRow.filter(cell => cell && cell.trim() !== "");

          if (nonEmptyCells.length === 1) {
            return newRow;
          }

          if (newRow[0]) lastDay = newRow[0];
          else newRow[0] = lastDay;

          if (newRow[1]) lastDate = newRow[1];
          else newRow[1] = lastDate;

          return newRow;
        });

        setHeaders(headerRow);
        setSchedule(dataRows);

      } catch (error) {
        console.error("Error loading sheet:", error);
      }
    };

    fetchSheet();
  }, []);


  if (!headers.length) return <div>Loading...</div>;

  return (
    <section id="program" className="section-padding bg-background">
      <div className="container-custom">

        <div className="text-center mb-12">
          <h2 className="section-title">Program Schedule</h2>
          <p className="section-subtitle">
            Comprehensive schedule covering theory, modeling, applications and computing in optimization.
          </p>
        </div>

        <div className="mt-16 overflow-x-auto">
          <table className="schedule-table min-w-full">

            <thead>
              <tr>
                {headers.map((header, idx) => (
                  <th key={idx}>
                    {header.split("(").map((part, i) =>
                      i === 0 ? part : (
                        <span key={i}>
                          <br />({part}
                        </span>
                      )
                    )}
                  </th>
                ))}
              </tr>
            </thead>


            <tbody>
              {schedule.map((row: any[], i: number) => {

                const normalizedRow = [...row];
                while (normalizedRow.length < headers.length) {
                  normalizedRow.push("");
                }


                const isSectionRow =
                  normalizedRow.filter(cell => cell && cell.trim() !== "").length === 1;

                if (isSectionRow) {
                  return (
                    <tr key={i}>
                      <td colSpan={headers.length} className="section-row  text-center font-bold">
                        {normalizedRow.find(cell => cell !== "")}
                      </td>
                    </tr>
                  );
                }

                if (normalizedRow.every(cell => cell === "")) return null;

                return (
                  <tr key={i}>
                    {normalizedRow.map((cell, idx) => {


                      if (idx === 0) {
                        return (
                          <td key={idx} className="text-center font-medium">
                            {cell}
                          </td>
                        );
                      }


                      if (idx === 1 && cell) {
                        return (
                          <td key={idx} className="text-center align-middle">
                            <div className="date-badge mx-auto">
                              {cell}
                            </div>
                          </td>
                        );
                      }

                      return (
                        <td key={idx}>
                          {cell?.split("(").map((part: string, i: number) =>
                            i === 0 ? part : (
                              <span key={i}>
                                <br />({part}
                              </span>
                            )
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

        {/* Pre-School Sessions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-center">Online Pre-School Sessions</h3>
          <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            Online pre-school sessions will be conducted prior to the main LSO Summer School event to help participants refresh foundational concepts and gain an introductory overview of the topics to be covered.
          </p>
          <p className="text-center mb-8">
            The pre-school sessions will take place from <strong>6:00 PM to 7:30 PM</strong>. Interested participants are requested to join via <strong>MS Teams</strong> using the meeting link shared by email.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {preschoolSessions.map((session, idx) => (
              <Card key={idx} className="p-4">
                <div className="text-red-500 font-semibold mb-2">Session {idx + 1}: {session.date}</div>
                <h4 className="font-semibold mb-2">{session.topic}</h4>
                <p className="text-sm text-muted-foreground">{session.speaker}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;