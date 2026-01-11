import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatBot from '../Chat/ChatBot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 dark:bg-bg-dark dark:text-text-inverted">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;