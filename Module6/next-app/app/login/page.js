"use client";
import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResults, setSubmitResults] = useState("");
  const [failedAttempts, setFailedAttempts] = useState(0);
  const maxAttempts = 3;
  const [displayForm, setDisplayForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (failedAttempts >= maxAttempts) {
      setSubmitResults(
        "Account locked due to too many incorrect password attempts"
      );
      setDisplayForm(false);
      return;
    }

    if (userPassword.length < 5) {
      setSubmitResults("Password must be at least 5 characters long");
      setFailedAttempts(failedAttempts + 1);
    } else if (userPassword === userEmail) {
      setSubmitResults("Password must not match email");
      setFailedAttempts(failedAttempts + 1);
    } else {
      setSubmitResults("Successful login");
      setFailedAttempts(0);
      setDisplayForm(false);
    }
  };

  return (
    <div className="LoginForm componentBox">
      <div className="formRow">
        <label>
          Email Address:
          {/* Controlled form element needs both value and onChange.
onChange handler uses event param e to access target value.
Whenever user types, new value is stored in state. */}
          <input
            type="email"
            value={userEmail}
            name="userEmail"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Password:
          <input
            type="password"
            value={userPassword}
            name="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>
        <div className="LoginForm componentBox">
          {displayForm ? (
            <form onSubmit={handleSubmit}>
              <button>Log In</button>
            </form>
          ) : null}
          <p>{submitResults}</p>
        </div>
      </div>
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
