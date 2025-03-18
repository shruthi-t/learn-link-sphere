
import React from 'react';
import { Users, Target, Calendar, MessageSquare, BookOpen, Star } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-card hover:shadow-lg">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Smart Matching",
      description: "Our algorithm connects you with the perfect mentor based on your goals, interests, and learning style."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal Tracking",
      description: "Set meaningful goals and track your progress with structured guidance from your mentor."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Scheduled Sessions",
      description: "Book and manage mentoring sessions with an easy-to-use calendar interface."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Direct Messaging",
      description: "Communicate seamlessly with your mentor through our integrated messaging platform."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Resource Sharing",
      description: "Exchange documents, articles, and learning materials to enhance your growth journey."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Feedback System",
      description: "Give and receive constructive feedback to continuously improve your mentoring experience."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Features designed for <span className="text-primary">meaningful connections</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools you need to build effective mentor-student relationships that drive real growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
