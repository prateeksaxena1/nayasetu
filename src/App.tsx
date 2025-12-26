
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { LanguageProvider } from './contexts/LanguageContext';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </LanguageProvider>
  );
}


export default App;