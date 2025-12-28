
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}


export default App;