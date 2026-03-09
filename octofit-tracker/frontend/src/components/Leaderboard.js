import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;


function Leaderboard() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    console.log('Fetching Leaderboard from', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setEntries(results);
        console.log('Fetched Leaderboard:', data);
      })
      .catch(e => console.error('Error fetching leaderboard:', e));
  }, []);
  return (
    <div className="mb-4">
      <h2 className="display-5 mb-3">Leaderboard</h2>
      <div className="card p-3 shadow-sm">
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                {entries[0] && Object.keys(entries[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {entries.map((e, i) => (
                <tr key={e.id || i}>
                  {e && Object.values(e).map((val, j) => (
                    <td key={j}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {entries.length === 0 && <div className="text-muted">No leaderboard data found.</div>}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;