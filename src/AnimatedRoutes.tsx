
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PageTransition from './components/Animations/PageTransition';


// Start of Selection
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
                <Route path="/case-studies/:id" element={<PageTransition><CaseStudyDetail /></PageTransition>} />
                <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
