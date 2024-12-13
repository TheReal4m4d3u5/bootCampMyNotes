// Importing necessary components from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Nav />
      {/* Define routes for each page */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        {/* Add a route for handling errors or unmatched routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
