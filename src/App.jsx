import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
// import Videos from './pages/Videos';
// import Articles from './pages/Articles';
// import Categories from './pages/Categories';
// import AI from './pages/AI';
import Login from './components/layout/Login';
// import Register from './components/layout/Register';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/videos" element={<Videos />} /> */}
          {/* <Route path="/articles" element={<Articles />} /> */}
          {/* <Route path="/categories" element={<Categories />} /> */}
          {/* <Route path="/ai" element={<AI />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;