import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log('Fetching Users from', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setUsers(results);
        console.log('Fetched Users:', data);
      })
      .catch(e => console.error('Error fetching users:', e));
  }, []);
  return (
    <div className="mb-4">
      <h2 className="display-5 mb-3">Users</h2>
      <div className="card p-3 shadow-sm">
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                {users[0] && Object.keys(users[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.id || i}>
                  {u && Object.values(u).map((val, j) => (
                    <td key={j}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && <div className="text-muted">No users found.</div>}
        </div>
      </div>
    </div>
  );
}

export default Users;