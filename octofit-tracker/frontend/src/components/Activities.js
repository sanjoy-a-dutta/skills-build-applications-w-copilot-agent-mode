import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;


function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    console.log('Fetching Activities from', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setActivities(results);
        console.log('Fetched Activities:', data);
      })
      .catch(e => console.error('Error fetching activities:', e));
  }, []);
  return (
    <div className="mb-4">
      <h2 className="display-5 mb-3">Activities</h2>
      <div className="card p-3 shadow-sm">
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                {activities[0] && Object.keys(activities[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activities.map((a, i) => (
                <tr key={a.id || i}>
                  {a && Object.values(a).map((val, j) => (
                    <td key={j}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {activities.length === 0 && <div className="text-muted">No activities found.</div>}
        </div>
      </div>
    </div>
  );
}

export default Activities;