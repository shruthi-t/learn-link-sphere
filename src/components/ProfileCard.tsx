
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface ProfileCardProps {
  image: string;
  name: string;
  role: string;
  rating: number;
  skills: string[];
  description: string;
  onClick?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  image,
  name,
  role,
  rating,
  skills,
  description,
  onClick
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg animate-scale-in">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="w-16 h-16 object-cover rounded-full border-2 border-primary/20"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold truncate">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
            <div className="flex items-center mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-xs text-muted-foreground">({rating.toFixed(1)})</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-1 mb-3">
            {skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge variant="outline" className="font-normal">
                +{skills.length - 3} more
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
        
        <div className="mt-5 flex">
          <Button 
            className="w-full" 
            onClick={onClick}
            size="sm"
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};
