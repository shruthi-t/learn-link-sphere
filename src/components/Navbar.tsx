
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Discover', href: '/discover' },
    { name: 'Messages', href: '/messages' },
    { name: 'Meetings', href: '/meetings' },
    { name: 'Goals', href: '/goals' },
  ];

  const isLoggedIn = false; // This will be replaced with actual auth state

  const navbarClasses = `
    fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
    ${isScrolled || !isHome ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-primary">
                MentorMatch
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            {isLoggedIn ? (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`
                      text-sm font-medium transition-colors hover:text-primary
                      ${location.pathname === link.href 
                        ? 'text-primary' 
                        : 'text-muted-foreground'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/profile">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="font-medium text-sm">JD</span>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  How it works
                </Link>
                <Link 
                  to="/dashboard" 
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  For Mentors
                </Link>
                <Link 
                  to="/dashboard" 
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  For Students
                </Link>
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" asChild>
                    <Link to="/dashboard">Log in</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/dashboard">Get Started</Link>
                  </Button>
                </div>
              </>
            )}
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {isLoggedIn ? (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`
                      block py-2 text-base font-medium transition-colors
                      ${location.pathname === link.href 
                        ? 'text-primary' 
                        : 'text-muted-foreground'
                      }
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/profile"
                  className="block py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/dashboard" 
                  className="block py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How it works
                </Link>
                <Link 
                  to="/dashboard" 
                  className="block py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  For Mentors
                </Link>
                <Link 
                  to="/dashboard" 
                  className="block py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  For Students
                </Link>
                <Link 
                  to="/dashboard"
                  className="block py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Button 
                  className="w-full mt-2" 
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/dashboard">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
