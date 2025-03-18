
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600 dark:to-indigo-600"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 lg:py-48">
        <div className="text-center">
          <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block text-foreground mb-2">Connect with the perfect</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">mentor for your journey</span>
          </h1>
          <p className="animate-fade-in mt-6 max-w-lg mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground">
            Personalized guidance from experienced mentors to help you achieve your goals and unlock your full potential.
          </p>
          <div className="animate-fade-in mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base" asChild>
              <Link to="/dashboard">Find a Mentor</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base" asChild>
              <Link to="/dashboard">Become a Mentor</Link>
            </Button>
          </div>
        </div>

        {/* Hero visual */}
        <div className="animate-fade-in mt-20 relative mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Mentoring Session" 
              className="w-full object-cover h-auto sm:h-[400px] lg:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            
            {/* Floating elements */}
            <div className="absolute top-12 right-12 glass-card rounded-2xl p-4 shadow-xl animate-slide-up">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="font-medium text-sm">AS</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Alex Smith</p>
                  <p className="text-xs text-muted-foreground">Marketing Mentor</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-12 left-12 glass-card rounded-2xl p-4 shadow-xl max-w-xs animate-slide-up">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">Next Session</p>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Today</span>
                </div>
                <p className="text-xs text-muted-foreground">Career Development Strategy</p>
                <div className="mt-2 h-1 w-full bg-muted rounded-full">
                  <div className="h-1 w-3/4 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
