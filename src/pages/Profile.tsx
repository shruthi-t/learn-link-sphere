
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Edit, BookOpen, Award, Target, Calendar, Mail, MapPin, Briefcase, User, Clock, ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Profile: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Mock user profile data
  const profile = {
    name: 'John Davidson',
    role: 'UX Designer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'San Francisco, CA',
    bio: 'UX Designer with 3 years of experience. Currently learning advanced design systems and seeking mentorship in product strategy.',
    education: 'Bachelor of Design, University of California',
    work: 'Product Designer at Designco',
    email: 'john.davidson@example.com',
    website: 'johndavidson.design',
    skills: [
      { name: 'UI Design', level: 85 },
      { name: 'UX Research', level: 70 },
      { name: 'Figma', level: 90 },
      { name: 'Prototyping', level: 75 },
      { name: 'HTML/CSS', level: 60 }
    ],
    interests: ['Design Systems', 'User Research', 'Mobile UX', 'Accessibility'],
    achievements: [
      { title: 'Completed UX Certification', date: 'May 2023' },
      { title: 'Design Award Finalist', date: 'February 2023' }
    ],
    goals: [
      { title: 'Complete UX Case Study', progress: 65 },
      { title: 'Learn Python Basics', progress: 40 }
    ]
  };
  
  // Mock data for profile activity
  const activities = [
    { id: 1, type: 'meeting', title: 'Portfolio Review with David Miller', date: 'June 15, 2023' },
    { id: 2, type: 'goal', title: 'Created a new goal: Learn Python Basics', date: 'June 10, 2023' },
    { id: 3, type: 'achievement', title: 'Completed UX Certification', date: 'May 30, 2023' },
    { id: 4, type: 'meeting', title: 'Data Analysis Fundamentals with Emily Zhang', date: 'May 25, 2023' }
  ];
  
  const mentors = [
    {
      id: 1,
      name: 'David Miller',
      role: 'UX Designer',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
      relationshipStart: 'April 2023',
      sessions: 5,
      focus: 'UI/UX Design'
    },
    {
      id: 2,
      name: 'Emily Zhang',
      role: 'Data Scientist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
      relationshipStart: 'May 2023',
      sessions: 2,
      focus: 'Data Analysis'
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in max-w-7xl mx-auto">
        {/* Profile header */}
        <div className="mb-8">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="h-32 sm:h-40 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <div className="p-6 relative">
              <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                <div className="absolute -top-16 border-4 border-background rounded-full">
                  <img 
                    src={profile.avatar} 
                    alt={profile.name} 
                    className="h-32 w-32 rounded-full object-cover"
                  />
                </div>
                <div className="sm:ml-36 mt-16 sm:mt-0 flex-1">
                  <h1 className="text-3xl font-bold">{profile.name}</h1>
                  <p className="text-muted-foreground">{profile.role}</p>
                </div>
                <div className="flex gap-2 mt-4 sm:mt-0">
                  <Button variant="outline" className="flex items-center">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Profile information */}
          <div className="space-y-6">
            {/* About section */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{profile.bio}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{profile.work}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{profile.education}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ExternalLink className="mr-2 h-4 w-4 text-muted-foreground" />
                    <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {profile.website}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Skills section */}
            <Card className="animate-scale-in [animation-delay:75ms]">
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Interests section */}
            <Card className="animate-scale-in [animation-delay:150ms]">
              <CardHeader>
                <CardTitle>Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Achievements section */}
            <Card className="animate-scale-in [animation-delay:225ms]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {profile.achievements.map((achievement, index) => (
                  <div key={index} className="flex justify-between items-center p-2 rounded-lg border">
                    <div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          {/* Right columns: Tabs for Activity, Mentors, Goals */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="activity" className="animate-slide-up">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="mentors">My Mentors</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
              </TabsList>
              
              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent progress and interactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {activities.map((activity) => (
                        <div key={activity.id} className="flex">
                          <div className="mr-4 flex flex-col items-center">
                            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-primary/10 text-primary">
                              {activity.type === 'meeting' && <Calendar className="h-5 w-5" />}
                              {activity.type === 'goal' && <Target className="h-5 w-5" />}
                              {activity.type === 'achievement' && <Award className="h-5 w-5" />}
                            </div>
                            {activity.id !== activities[activities.length - 1].id && (
                              <div className="h-full w-px bg-muted my-2"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-muted-foreground">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Share an Update</CardTitle>
                    <CardDescription>Let your mentors know what you're working on</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea placeholder="What's on your mind?" />
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Post Update</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Mentors Tab */}
              <TabsContent value="mentors" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Mentors</CardTitle>
                    <CardDescription>Your active mentoring relationships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mentors.map((mentor) => (
                        <div key={mentor.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg">
                          <div className="flex-shrink-0">
                            <img 
                              src={mentor.avatar} 
                              alt={mentor.name} 
                              className="h-16 w-16 rounded-full object-cover" 
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{mentor.name}</h3>
                            <p className="text-sm text-muted-foreground">{mentor.role}</p>
                            <div className="flex flex-wrap gap-4 mt-2">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>Since {mentor.relationshipStart}</span>
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="mr-1 h-3 w-3" />
                                <span>{mentor.sessions} sessions</span>
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Target className="mr-1 h-3 w-3" />
                                <span>Focus: {mentor.focus}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 sm:self-start">
                            <Button size="sm">Message</Button>
                            <Button variant="outline" size="sm">Schedule</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Find More Mentors</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Mentor Recommendations</CardTitle>
                    <CardDescription>Potential mentors that match your interests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-12 text-center">
                      <User className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-medium mb-1">Discover New Mentors</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Find experienced mentors who match your interests and career goals.
                      </p>
                      <Button>Browse Mentors</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Goals Tab */}
              <TabsContent value="goals" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Goals</CardTitle>
                    <CardDescription>Track your progress on active goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {profile.goals.map((goal, index) => (
                        <div key={index} className="space-y-2 p-4 border rounded-lg">
                          <div className="flex justify-between items-center">
                            <p className="font-medium">{goal.title}</p>
                            <span className="text-xs font-medium text-muted-foreground">{goal.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary rounded-full h-2 transition-all"
                              style={{ width: `${goal.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View All Goals</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Goal Suggestions</CardTitle>
                    <CardDescription>Based on your profile and interests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <p className="font-medium">Master Figma Advanced Features</p>
                        <p className="text-sm text-muted-foreground">Enhance your design workflow</p>
                      </div>
                      <div className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <p className="font-medium">Build a Design System</p>
                        <p className="text-sm text-muted-foreground">Create a cohesive design language</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Create New Goal</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
