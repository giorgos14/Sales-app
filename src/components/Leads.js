import React, { useState } from 'react';

function Leads() {
  // Δημιουργούμε τα δεδομένα για κάθε χρόνο με τους 12 μήνες
  const leadsByYear = {
    2023: {
      January: [],
      February: [],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: [],
    },
    2024: {
      January: [],
      February: [],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: [],
    },
    2025: {
      January: [],
      February: [],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: [],
    },
    2026: {
      January: [],
      February: [],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: [],
    },
    2027: {
      January: [],
      February: [],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: [],
    },
  };

  const years = Object.keys(leadsByYear);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const months = Object.keys(leadsByYear[selectedYear]);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);

  return (
    <div>
      <h2>Leads List</h2>

      {/* Κουμπιά για έτη */}
      <div style={{ marginBottom: 10 }}>
        {years.map(year => (
          <button
            key={year}
            onClick={() => {
              setSelectedYear(year);
              const firstMonth = Object.keys(leadsByYear[year])[0];
              setSelectedMonth(firstMonth);
            }}
            style={{
              marginRight: 10,
              padding: '8px 16px',
              backgroundColor: year === selectedYear ? '#007bff' : '#ddd',
              color: year === selectedYear ? 'white' : 'black',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Κουμπιά για μήνες */}
      <div style={{ marginBottom: 20 }}>
        {months.map(month => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            style={{
              marginRight: 10,
              padding: '6px 14px',
              backgroundColor: month === selectedMonth ? '#28a745' : '#eee',
              color: month === selectedMonth ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Πίνακας με leads για το επιλεγμένο έτος και μήνα */}
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th>Όνομα</th>
            <th>Εταιρεία</th>
            <th>Κατάσταση</th>
          </tr>
        </thead>
        <tbody>
          {leadsByYear[selectedYear][selectedMonth].length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>
                Δεν υπάρχουν leads για αυτήν την περίοδο.
              </td>
            </tr>
          ) : (
            leadsByYear[selectedYear][selectedMonth].map(lead => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.company}</td>
                <td>{lead.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Leads;

