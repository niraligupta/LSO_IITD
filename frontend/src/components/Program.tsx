
import { useEffect, useState } from 'react';
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
      </div>
    </section>
  );
};

export default Program;