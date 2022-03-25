import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App({ name }) {
  return (
    <Router>
      <div>
        <p>{name} is mounted</p>
        <nav>
          <ul>
            <li>
              <Link to="/react">Home</Link>
            </li>
            <li>
              <Link to="/react/about">About</Link>
            </li>
            <li>
              <Link to="/react/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/react/about" element={<About/>} />
          <Route path="/react/users" element={<Users/>} />
          <Route path="/react" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
