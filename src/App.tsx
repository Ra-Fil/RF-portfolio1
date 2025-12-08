import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-primary font-sans">
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;