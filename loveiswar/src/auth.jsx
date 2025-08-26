// src/Auth.jsx
import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebaseconfig";
import "./auth.css";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Email signup
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setUser(result.user);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Email login
  const handleLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="auth-container">
      {user ? (
        <div className="auth-welcome">
          <p>Welcome, {user.email || user.displayName}</p>
          <button className="auth-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="auth-box">
          <h2>{isSignup ? "Signup" : "Login"}</h2>

          {/* Google login */}
          <button className="auth-button google" onClick={handleGoogleLogin}>
            Continue with Google
          </button>

          <div className="auth-inputs">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

            {/* Confirm password only when signing up */}
            {isSignup && (
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className="auth-actions">
            {isSignup ? (
              <button className="auth-button" onClick={handleSignup}>
                Signup
              </button>
            ) : (
              <button className="auth-button" onClick={handleLogin}>
                Login
              </button>
            )}
            <p
              className="auth-toggle"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup
                ? "Already have an account? Login"
                : "Don't have an account? Signup"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
