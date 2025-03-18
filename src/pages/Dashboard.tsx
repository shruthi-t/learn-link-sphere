
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, Users, Target, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  // Mock data for dashboard
  const upcomingMeetings = [
    {
      id: 1,
      mentorName: 'David Miller',
      title: 'Portfolio Review',
      date: 'June 15, 2023',
      time: '10:00 AM',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80'
    },
    {
      id: 2,
      mentorName: 'Emily Zhang',
      title: 'Data Science Project Planning',
      date: 'June 18, 2023',
      time: '2:30 PM',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
    }
  ];

  const activeGoals = [
    {
      id: 1,
      title: 'Complete UX Case Study',
      progress: 65,
      dueDate: 'June 30, 2023'
    },
    {
      id: 2,
      title: 'Learn Python Basics',
      progress: 40,
      dueDate: 'July 15, 2023'
    }
  ];

  const recommendedMentors = [
    {
      id: 1,
      name: 'James Williams',
      role: 'Startup Advisor',
      match: '92% match',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      id: 2,
      name: 'Sofia Patel',
      role: 'Product Manager',
      match: '88% match',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    }
  ];

  const recentMessages = [
    {
      id: 1,
      from: 'David Miller',
      message: 'Looking forward to our meeting tomorrow!',
      time: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80'
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, John</h1>
            <p className="text-muted-foreground mt-1">Here's what's happening with your mentorship journey.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild>
              <Link to="/discover">Find New Mentors</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="animate-scale-in">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingMeetings.length}</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
          <Card className="animate-scale-in [animation-delay:75ms]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Recent Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{recentMessages.length}</div>
              <p className="text-xs text-muted-foreground">New messages</p>
            </CardContent>
          </Card>
          <Card className="animate-scale-in [animation-delay:150ms]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Mentors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Working with you</p>
            </CardContent>
          </Card>
          <Card className="animate-scale-in [animation-delay:225ms]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Goals Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">52%</div>
              <p className="text-xs text-muted-foreground">Completion rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Upcoming Meetings</CardTitle>
              <CardDescription>Your scheduled mentoring sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMeetings.map(meeting => (
                  <div key={meeting.id} className="flex items-center p-3 rounded-lg border">
                    <div className="flex-shrink-0 mr-3">
                      <img src={meeting.image} alt={meeting.mentorName} className="h-10 w-10 rounded-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{meeting.title}</p>
                      <p className="text-xs text-muted-foreground">with {meeting.mentorName}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {meeting.time}
                      </div>
                      <p className="text-xs">{meeting.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="ml-auto" asChild>
                <Link to="/meetings" className="flex items-center">
                  View all meetings
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="animate-slide-up [animation-delay:75ms]">
            <CardHeader>
              <CardTitle>Active Goals</CardTitle>
              <CardDescription>Track your progress on current goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeGoals.map(goal => (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium">{goal.title}</p>
                      <span className="text-xs font-medium text-muted-foreground">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>In progress</span>
                      <span>Due: {goal.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="ml-auto" asChild>
                <Link to="/goals" className="flex items-center">
                  View all goals
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 animate-slide-up [animation-delay:150ms]">
            <CardHeader>
              <CardTitle>Recommended Mentors</CardTitle>
              <CardDescription>Personalized suggestions based on your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedMentors.map(mentor => (
                  <div key={mentor.id} className="flex p-3 rounded-lg border">
                    <div className="flex-shrink-0 mr-3">
                      <img src={mentor.image} alt={mentor.name} className="h-12 w-12 rounded-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{mentor.name}</p>
                      <p className="text-xs text-muted-foreground">{mentor.role}</p>
                      <div className="mt-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                          {mentor.match}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/discover">View</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="ml-auto" asChild>
                <Link to="/discover" className="flex items-center">
                  Explore all mentors
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="animate-slide-up [animation-delay:225ms]">
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Stay in touch with your mentors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map(message => (
                  <div key={message.id} className="p-3 rounded-lg border">
                    <div className="flex items-center mb-2">
                      <div className="flex-shrink-0 mr-2">
                        <img src={message.image} alt={message.from} className="h-8 w-8 rounded-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{message.from}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <p className="text-xs text-muted-foreground">{message.time}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{message.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="ml-auto" asChild>
                <Link to="/messages" className="flex items-center">
                  View all messages
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
