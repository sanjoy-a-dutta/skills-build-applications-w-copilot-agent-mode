import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;


function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    console.log('Fetching Teams from', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setTeams(results);
        console.log('Fetched Teams:', data);
      })
      .catch(e => console.error('Error fetching teams:', e));
  }, []);
  return (
    <div className="mb-4">
      <h2 className="display-5 mb-3">Teams</h2>
      <div className="card p-3 shadow-sm">
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                {teams[0] && Object.keys(teams[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {teams.map((t, i) => (
                <tr key={t.id || i}>
                  {t && Object.values(t).map((val, j) => (
                    <td key={j}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {teams.length === 0 && <div className="text-muted">No teams found.</div>}
        </div>
      </div>
    </div>
  );
}

export default Teams;