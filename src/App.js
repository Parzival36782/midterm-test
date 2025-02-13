// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components/pages
import Home from './pages/home';
import Order from './pages/order';
import Bill from './pages/bill';
import './styles/navstyle.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav className="navbar navbar-expand-lg bg-body-red">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Sushi Station</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/order">Order</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bill">Bill</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/bill" element={<Bill />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
