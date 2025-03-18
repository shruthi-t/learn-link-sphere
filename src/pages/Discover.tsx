
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { ProfileCard } from '@/components/ProfileCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';

const Discover: React.FC = () => {
  // Mock data for mentors
  const allMentors = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
      name: "David Miller",
      role: "UX Designer",
      rating: 4.8,
      skills: ["UI/UX", "Product Design", "Design Systems", "Figma"],
      description: "Helping new designers build their portfolio and break into tech. Specialized in product design for SaaS applications."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      name: "Emily Zhang",
      role: "Data Scientist",
      rating: 4.9,
      skills: ["Machine Learning", "Python", "SQL", "Data Visualization"],
      description: "Former Senior Data Scientist at Google. I love helping students and early career professionals navigate the complex world of data science."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      name: "James Williams",
      role: "Startup Advisor",
      rating: 4.7,
      skills: ["Business Strategy", "Fundraising", "Product Management", "Growth"],
      description: "Serial entrepreneur with 3 successful exits. I help founders validate ideas, build MVPs, and secure funding for their startups."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Sofia Patel",
      role: "Product Manager",
      rating: 4.6,
      skills: ["Product Strategy", "User Research", "Roadmapping", "Agile"],
      description: "10+ years leading product at tech companies. I mentor aspiring and junior PMs on building successful products and navigating tech careers."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      name: "Michael Johnson",
      role: "Software Engineer",
      rating: 4.5,
      skills: ["JavaScript", "React", "Node.js", "System Design"],
      description: "Senior Engineer at Amazon. Passionate about helping junior developers level up their coding skills and system design knowledge."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Aisha Khan",
      role: "Marketing Director",
      rating: 4.9,
      skills: ["Digital Marketing", "Brand Strategy", "Social Media", "SEO"],
      description: "CMO with expertise in scaling startups. I help marketers develop comprehensive growth strategies and build high-performing teams."
    }
  ];

  const categories = [
    "Design", "Development", "Data Science", "Business", "Marketing", "Product Management"
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [ratingFilter, setRatingFilter] = useState([4]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Filter mentors based on search term and filters
  const filteredMentors = allMentors.filter(mentor => {
    // Search by name or role
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category (simplified for demo)
    const matchesCategory = selectedCategory === "" || 
      (selectedCategory === "Design" && mentor.skills.some(skill => ['UI/UX', 'Product Design', 'Design Systems'].includes(skill))) ||
      (selectedCategory === "Development" && mentor.skills.some(skill => ['JavaScript', 'React', 'Node.js'].includes(skill))) ||
      (selectedCategory === "Data Science" && mentor.skills.some(skill => ['Machine Learning', 'Python', 'Data Visualization'].includes(skill))) ||
      (selectedCategory === "Business" && mentor.skills.some(skill => ['Business Strategy', 'Fundraising', 'Growth'].includes(skill))) ||
      (selectedCategory === "Marketing" && mentor.skills.some(skill => ['Digital Marketing', 'Brand Strategy', 'Social Media', 'SEO'].includes(skill))) ||
      (selectedCategory === "Product Management" && mentor.skills.some(skill => ['Product Strategy', 'User Research', 'Roadmapping', 'Product Management'].includes(skill)));
    
    // Filter by minimum rating
    const matchesRating = mentor.rating >= ratingFilter[0];
    
    // Filter by selected skills/tags
    const matchesFilters = selectedFilters.length === 0 || 
      selectedFilters.some(filter => mentor.skills.includes(filter));
    
    return matchesSearch && matchesCategory && matchesRating && matchesFilters;
  });

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setRatingFilter([4]);
    setSelectedFilters([]);
  };

  return (
    <Layout>
      <div className="animate-fade-in max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Find the Perfect Mentor</h1>
          <p className="text-muted-foreground mt-1">Discover mentors who match your interests and goals.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="lg:w-1/4">
            <div className="glass-card rounded-xl p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Search</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search mentors..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Category</h3>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">Minimum Rating</h3>
                  <span className="text-sm text-muted-foreground">{ratingFilter[0].toFixed(1)}+</span>
                </div>
                <Slider
                  defaultValue={[4]}
                  min={1}
                  max={5}
                  step={0.1}
                  value={ratingFilter}
                  onValueChange={setRatingFilter}
                />
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="space-y-2">
                  {['JavaScript', 'React', 'Product Design', 'UI/UX', 'Python', 'Business Strategy'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`skill-${skill}`} 
                        checked={selectedFilters.includes(skill)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            addFilter(skill);
                          } else {
                            removeFilter(skill);
                          }
                        }}
                      />
                      <Label htmlFor={`skill-${skill}`} className="text-sm">{skill}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:w-3/4">
            {/* Active filters */}
            {(selectedFilters.length > 0 || selectedCategory || searchTerm) && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Active Filters:</h3>
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Search: {searchTerm}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setSearchTerm("")}
                      />
                    </Badge>
                  )}
                  
                  {selectedCategory && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Category: {selectedCategory}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setSelectedCategory("")}
                      />
                    </Badge>
                  )}
                  
                  {selectedFilters.map(filter => (
                    <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                      {filter}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => removeFilter(filter)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Results count */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredMentors.length} of {allMentors.length} mentors
              </p>
            </div>

            {/* Mentors grid */}
            {filteredMentors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredMentors.map((mentor) => (
                  <ProfileCard
                    key={mentor.id}
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
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No mentors found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to find more mentors.</p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Discover;
