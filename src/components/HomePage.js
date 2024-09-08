import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
  // State to control which form is displayed
  const [showForm, setShowForm] = useState(null);

  const handleLoginClick = () => {
    setShowForm('login');
  };

  const handleSignUpClick = () => {
    setShowForm('signup');
  };

  const handleCloseForm = () => {
    setShowForm(null);
  };

  return (
    <div className="home-page">
      {/* Header with title and buttons */}
      <div className="header">
        <div className="title">
          <h1>Welcome to Smarter Splitwise</h1>
          <p>Manage your expenses effortlessly.</p>
        </div>
        <div className="buttons">
          <button onClick={handleLoginClick} className="top-button">Login</button>
          <button onClick={handleSignUpClick} className="top-button">Sign Up</button>
        </div>
      </div>

      {/* Display login or signup form based on state */}
      {showForm && (
        <div className="form-container">
          <div className="form-content">
            {showForm === 'login' ? (
              <>
                <h2>Login</h2>
                <form>
                  <input type="text" placeholder="Username" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit">Login</button>
                </form>
              </>
            ) : (
              <>
                <h2>Sign Up</h2>
                <form>
                  <input type="text" placeholder="Username" required />
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit">Sign Up</button>
                </form>
              </>
            )}
            <button onClick={handleCloseForm} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
