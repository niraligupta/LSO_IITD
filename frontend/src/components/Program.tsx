import { useEffect, useState } from 'react';
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
          <h2 className="section-title">Program Schedule</h2>
          <p className="section-subtitle">
            Comprehensive schedule covering theory, modeling, applications and computing in optimization.
          </p>
        </div>

        <div className="mt-16">
          <div className="overflow-x-auto">
            <table className="schedule-table min-w-full">

              {/* ✅ HEADER */}
              <thead>
                <tr>
                  {headers.map((header, idx) => (
                    <th key={idx}>
                      {typeof header === "string"
                        ? header.split("(").map((part, i) =>
                          i === 0 ? part : (
                            <span key={i}>
                              <br />
                              ({part}
                            </span>
                          )
                        )
                        : header}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* ✅ BODY */}
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
                      {row.map((cell: any, idx: number) => {

                        // ✅ DATE COLUMN (index = 1)
                        if (idx === 1) {
                          return (
                            <td key={idx}>
                              <div className="date-badge">
                                {cell}
                              </div>
                            </td>
                          );
                        }


                        return (
                          <td key={idx} className="text-l">
                            {typeof cell === "string"
                              ? cell.split("(").map((part, i) =>
                                i === 0 ? part : (
                                  <span key={i}>
                                    <br />
                                    ({part}
                                  </span>
                                )
                              )
                              : cell}
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
      </div>
    </section>
  );
};

export default Program;