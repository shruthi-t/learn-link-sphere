
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon, CheckCircle2, Clock, Plus, Target, Trophy, ArrowRight } from 'lucide-react';

const Goals: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  
  // Mock data for goals
  const currentGoals = [
    {
      id: 1,
      title: 'Complete UX Case Study',
      description: 'Create a comprehensive case study for a mobile banking app, including research, wireframes, and user testing.',
      category: 'Design',
      progress: 65,
      startDate: new Date('2023-06-01'),
      dueDate: new Date('2023-06-30'),
      milestones: [
        { id: 1, title: 'Research phase', completed: true },
        { id: 2, title: 'User personas', completed: true },
        { id: 3, title: 'Wireframes', completed: true },
        { id: 4, title: 'Visual design', completed: false },
        { id: 5, title: 'User testing', completed: false },
        { id: 6, title: 'Final documentation', completed: false }
      ],
      mentors: [
        { id: 1, name: 'David Miller', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80' }
      ]
    },
    {
      id: 2,
      title: 'Learn Python Basics',
      description: 'Master fundamental Python concepts including variables, data types, loops, functions, and basic data structures.',
      category: 'Programming',
      progress: 40,
      startDate: new Date('2023-06-05'),
      dueDate: new Date('2023-07-15'),
      milestones: [
        { id: 1, title: 'Variables and data types', completed: true },
        { id: 2, title: 'Control flow (if/else)', completed: true },
        { id: 3, title: 'Loops', completed: false },
        { id: 4, title: 'Functions', completed: false },
        { id: 5, title: 'Lists and dictionaries', completed: false }
      ],
      mentors: [
        { id: 2, name: 'Emily Zhang', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80' }
      ]
    }
  ];
  
  const completedGoals = [
    {
      id: 3,
      title: 'Create Design Portfolio',
      description: 'Build a personal design portfolio website to showcase projects and skills.',
      category: 'Design',
      progress: 100,
      startDate: new Date('2023-04-15'),
      dueDate: new Date('2023-05-30'),
      completedDate: new Date('2023-05-28'),
      milestones: [
        { id: 1, title: 'Content strategy', completed: true },
        { id: 2, title: 'Website design', completed: true },
        { id: 3, title: 'Development', completed: true },
        { id: 4, title: 'Launch', completed: true }
      ],
      mentors: [
        { id: 1, name: 'David Miller', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80' }
      ]
    }
  ];

  const suggestedGoals = [
    {
      id: 1,
      title: 'Master Figma Advanced Features',
      description: 'Learn advanced Figma techniques including auto-layout, variants, and component properties.',
      category: 'Design',
      estimatedTime: '2 weeks'
    },
    {
      id: 2,
      title: 'Build a Full-Stack Web Application',
      description: 'Create a complete web application using React, Node.js, and MongoDB.',
      category: 'Development',
      estimatedTime: '4 weeks'
    }
  ];
  
  // Find goal by ID (for detail view)
  const [selectedGoal, setSelectedGoal] = useState(currentGoals[0]);
  
  // Toggle milestone completion
  const toggleMilestone = (milestoneId: number) => {
    // In a real app, this would update the database
    console.log(`Toggling milestone ${milestoneId}`);
  };

  return (
    <Layout>
      <div className="animate-fade-in max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Goals</h1>
            <p className="text-muted-foreground mt-1">Track your progress and achievements</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Goal
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Create New Goal</DialogTitle>
                  <DialogDescription>
                    Define a clear, achievable goal with specific milestones to track your progress.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">Goal Title</label>
                    <Input id="title" placeholder="Enter a clear, specific goal title" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">Description</label>
                    <Textarea id="description" placeholder="Describe what you want to achieve and why it's important" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="career">Career</SelectItem>
                          <SelectItem value="personal">Personal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Due Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Milestones</label>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Input placeholder="Add a milestone..." className="flex-1" />
                        <Button variant="outline" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Breaking your goal into smaller milestones makes it more achievable.
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Assign Mentors</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mentor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="david">David Miller</SelectItem>
                        <SelectItem value="emily">Emily Zhang</SelectItem>
                        <SelectItem value="james">James Williams</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button type="submit">Create Goal</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="current" className="animate-slide-up">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="current">Current Goals ({currentGoals.length})</TabsTrigger>
                <TabsTrigger value="completed">Completed Goals ({completedGoals.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="current" className="space-y-6">
                {currentGoals.map(goal => (
                  <Card key={goal.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedGoal(goal)}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle>{goal.title}</CardTitle>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted">
                          {goal.category}
                        </span>
                      </div>
                      <CardDescription>{goal.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm font-medium">{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Start Date</span>
                            <span className="text-sm">{format(goal.startDate, 'MMM d, yyyy')}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Due Date</span>
                            <span className="text-sm">{format(goal.dueDate, 'MMM d, yyyy')}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">Mentors:</span>
                          <div className="flex -space-x-2">
                            {goal.mentors.map(mentor => (
                              <img 
                                key={mentor.id}
                                src={mentor.avatar} 
                                alt={mentor.name} 
                                className="h-6 w-6 rounded-full border-2 border-background"
                                title={mentor.name}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="completed" className="space-y-6">
                {completedGoals.map(goal => (
                  <Card key={goal.id} className="opacity-80 hover:opacity-100 transition-opacity">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="flex items-center">
                          {goal.title}
                          <CheckCircle2 className="ml-2 h-4 w-4 text-green-500" />
                        </CardTitle>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted">
                          {goal.category}
                        </span>
                      </div>
                      <CardDescription>{goal.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm font-medium">{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Completed</span>
                            <span className="text-sm">{format(goal.completedDate!, 'MMM d, yyyy')}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Due Date</span>
                            <span className="text-sm">{format(goal.dueDate, 'MMM d, yyyy')}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            {/* Goal Details */}
            {selectedGoal && (
              <Card className="animate-scale-in sticky top-24">
                <CardHeader>
                  <CardTitle>Goal Details</CardTitle>
                  <CardDescription>View and update your progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg">{selectedGoal.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{selectedGoal.description}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm">{selectedGoal.progress}%</span>
                    </div>
                    <Progress value={selectedGoal.progress} className="h-2" />
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-3">Milestones</h4>
                    <div className="space-y-2">
                      {selectedGoal.milestones.map(milestone => (
                        <div 
                          key={milestone.id}
                          className={`p-2 rounded-md border flex items-center gap-2 ${
                            milestone.completed ? 'border-green-200 bg-green-50' : 'border-muted'
                          }`}
                        >
                          <input 
                            type="checkbox"
                            checked={milestone.completed}
                            onChange={() => toggleMilestone(milestone.id)}
                            className="rounded text-primary"
                          />
                          <span className={milestone.completed ? 'line-through text-muted-foreground' : ''}>
                            {milestone.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="block text-muted-foreground text-xs">Start Date</span>
                      <span>{format(selectedGoal.startDate, 'MMM d, yyyy')}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground text-xs">Due Date</span>
                      <span>{format(selectedGoal.dueDate, 'MMM d, yyyy')}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Assigned Mentors</h4>
                    <div className="flex items-center gap-3">
                      {selectedGoal.mentors.map(mentor => (
                        <div key={mentor.id} className="flex items-center gap-2">
                          <img 
                            src={mentor.avatar} 
                            alt={mentor.name} 
                            className="h-8 w-8 rounded-full object-cover" 
                          />
                          <span className="text-sm">{mentor.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button className="w-full">Update Progress</Button>
                  <Button variant="outline" className="w-full">Request Feedback</Button>
                </CardFooter>
              </Card>
            )}
            
            {/* Suggested Goals */}
            <Card className="animate-scale-in [animation-delay:75ms]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-primary" />
                  Suggested Goals
                </CardTitle>
                <CardDescription>Based on your interests and profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedGoals.map(goal => (
                  <div key={goal.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">{goal.title}</h4>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted">
                        {goal.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{goal.description}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      Estimated time: {goal.estimatedTime}
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="ml-auto" asChild>
                  <div className="flex items-center">
                    View more suggestions
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Achievement Stats */}
            <Card className="animate-scale-in [animation-delay:150ms]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 border rounded-lg">
                    <p className="text-2xl font-bold text-primary">{currentGoals.length + completedGoals.length}</p>
                    <p className="text-xs text-muted-foreground">Total Goals</p>
                  </div>
                  <div className="text-center p-3 border rounded-lg">
                    <p className="text-2xl font-bold text-primary">{completedGoals.length}</p>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                  <div className="text-center p-3 border rounded-lg">
                    <p className="text-2xl font-bold text-primary">33%</p>
                    <p className="text-xs text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="text-center p-3 border rounded-lg">
                    <p className="text-2xl font-bold text-primary">12</p>
                    <p className="text-xs text-muted-foreground">Days Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Goals;
