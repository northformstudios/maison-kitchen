import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoBanner from './components/DemoBanner';
import ScrollToTop from './components/ScrollToTop';
import { PageTransition } from './components/motion/MotionTransitions';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuItemDetail from './pages/MenuItemDetail';
import About from './pages/About';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/menu"
          element={
            <PageTransition>
              <Menu />
            </PageTransition>
          }
        />
        <Route
          path="/menu/:id"
          element={
            <PageTransition>
              <MenuItemDetail />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/reservations"
          element={
            <PageTransition>
              <Reservations />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#171717] font-body selection:bg-[#B99A75]/20 selection:text-[#171717]">
        {/* Top Demo Banner */}
        <DemoBanner />

        {/* Apple-inspired Sticky Glass Navigation */}
        <Navbar />

        {/* Dynamic Animated Route Pages */}
        <main className="flex-1">
          <AnimatedRoutes />
        </main>

        {/* Editorial Luxury Footer */}
        <Footer />
      </div>
    </Router>
  );
}
