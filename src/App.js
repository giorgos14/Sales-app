import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Leads from './components/Leads';


function Companies() {
  return <h2>Companies Page - Εδώ θα είναι η λίστα με τις εταιρείες</h2>;
}

function Automations() {
  return <h2>Automations Page - Εδώ θα είναι οι αυτοματισμοί</h2>;
}

function Messages() {
  return <h2>Messages Page - Εδώ θα είναι τα προ-ετοιμασμένα μηνύματα</h2>;
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar */}
        <nav style={{
          width: '220px',
          background: '#222',
          color: 'white',
          padding: '20px',
          boxSizing: 'border-box'
        }}>
          <h1 style={{ fontSize: '1.5em', marginBottom: '1em' }}>Sales App</h1>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Leads</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/companies" style={{ color: 'white', textDecoration: 'none' }}>Companies</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/automations" style={{ color: 'white', textDecoration: 'none' }}>Automations</Link>
            </li>
            <li>
              <Link to="/messages" style={{ color: 'white', textDecoration: 'none' }}>Messages</Link>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <main style={{ flexGrow: 1, padding: '20px', overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Leads />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/automations" element={<Automations />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

