import React, { useState } from 'react';
import NewsDashboard from './NewsDashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Welcome To News Dashboard</h2>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        <NewsDashboard />
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin} style={styles.container}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.loginButton}>Login</button>
    </form>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
  },
  loginButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    background: 'blue',
    color: 'white',
    cursor: 'pointer',
  },
  logoutButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    background: 'red',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '20px',
  },
};

export default App;
