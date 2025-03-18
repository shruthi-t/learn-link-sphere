
import React from 'react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Navbar />
      <main className={`flex-1 ${isHome ? '' : 'pt-20 px-4 sm:px-6 lg:px-8'}`}>
        {children}
      </main>
      {!isHome && (
        <footer className="py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground border-t">
          <div className="max-w-7xl mx-auto">
            <p>© {new Date().getFullYear()} Mentor Match. All rights reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};
