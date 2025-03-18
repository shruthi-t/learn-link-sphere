
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ProfileCard } from '@/components/ProfileCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    quote: "Finding a mentor changed my career trajectory. The guidance I received helped me navigate difficult decisions and accelerate my growth.",
    author: "Sarah Johnson",
    role: "Software Engineer"
  },
  {
    quote: "As a mentor, I've found the platform incredibly rewarding. It's designed to foster meaningful connections that benefit both parties.",
    author: "Michael Chen",
    role: "Marketing Director"
  }
];

const featuredMentors = [
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    name: "David Miller",
    role: "UX Designer",
    rating: 4.8,
    skills: ["UI/UX", "Product Design", "Design Systems", "Figma"],
    description: "Helping new designers build their portfolio and break into tech. Specialized in product design for SaaS applications."
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
    name: "Emily Zhang",
    role: "Data Scientist",
    rating: 4.9,
    skills: ["Machine Learning", "Python", "SQL", "Data Visualization"],
    description: "Former Senior Data Scientist at Google. I love helping students and early career professionals navigate the complex world of data science."
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    name: "James Williams",
    role: "Startup Advisor",
    rating: 4.7,
    skills: ["Business Strategy", "Fundraising", "Product Management", "Growth"],
    description: "Serial entrepreneur with 3 successful exits. I help founders validate ideas, build MVPs, and secure funding for their startups."
  }
];

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      
      {/* Featured Mentors */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Meet our <span className="text-primary">featured mentors</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform hosts experts from diverse fields ready to share their knowledge and guide you on your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMentors.map((mentor, index) => (
              <ProfileCard
                key={index}
                image={mentor.image}
                name={mentor.name}
                role={mentor.role}
                rating={mentor.rating}
                skills={mentor.skills}
                description={mentor.description}
                onClick={() => {}}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/discover">Explore All Mentors</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              What our <span className="text-primary">users say</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card rounded-xl p-8 animate-scale-in">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1">
                    <p className="text-lg font-medium mb-4">{testimonial.quote}</p>
                    <footer>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600 dark:to-indigo-600"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="glass-card rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Ready to accelerate your growth?
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Join thousands of students and professionals who are advancing their careers and personal development through mentorship.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/dashboard">Find a Mentor</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link to="/dashboard">Become a Mentor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
