import React, { useState, useEffect } from "react";

const years = [2025, 2024, 2023];
const months = [
  { id: 1, name: "Ιανουάριος" },
  { id: 2, name: "Φεβρουάριος" },
  { id: 3, name: "Μάρτιος" },
  { id: 4, name: "Απρίλιος" },
  { id: 5, name: "Μάιος" },
  { id: 6, name: "Ιούνιος" },
  { id: 7, name: "Ιούλιος" },
  { id: 8, name: "Αύγουστος" },
  { id: 9, name: "Σεπτέμβριος" },
  { id: 10, name: "Οκτώβριος" },
  { id: 11, name: "Νοέμβριος" },
  { id: 12, name: "Δεκέμβριος" },
];

export default function Leads() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState(7);
  const [leads, setLeads] = useState(null);
  const [error, setError] = useState(null);

  const fetchLeads = () => {
    fetch(
      `https://sales-app-production-d062.up.railway.app/leads?year=${selectedYear}&month=${selectedMonth}`
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setLeads(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLeads(null);
      });
  };

  useEffect(() => {
    fetchLeads();
  }, [selectedYear, selectedMonth]);

  return (
    <div>
      <div>
        <label>Έτος: </label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <label> Μήνας: </label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {months.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        {error && <p style={{ color: "red" }}>Σφάλμα: {error}</p>}
        {!error && leads && leads.length === 0 && <p>Δεν υπάρχουν leads.</p>}
        {!error && leads && leads.length > 0 && (
          <ul>
            {leads.map((lead, index) => (
              <li key={index}>
                <strong>{lead.name}</strong> - {lead.company}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}













