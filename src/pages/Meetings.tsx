
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, Video, Users, Plus, Check, X } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const Meetings: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Mock data for upcoming meetings
  const upcomingMeetings = [
    {
      id: 1,
      mentorName: 'David Miller',
      title: 'Portfolio Review',
      date: new Date('2023-06-15T10:00:00'),
      duration: 60,
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
      type: 'video',
      status: 'confirmed'
    },
    {
      id: 2,
      mentorName: 'Emily Zhang',
      title: 'Data Science Project Planning',
      date: new Date('2023-06-18T14:30:00'),
      duration: 45,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
      type: 'video',
      status: 'confirmed'
    }
  ];
  
  // Mock data for meeting requests
  const meetingRequests = [
    {
      id: 3,
      mentorName: 'James Williams',
      title: 'Business Plan Review',
      date: new Date('2023-06-20T11:00:00'),
      duration: 60,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      type: 'video',
      status: 'pending'
    }
  ];
  
  // Mock data for past meetings
  const pastMeetings = [
    {
      id: 4,
      mentorName: 'David Miller',
      title: 'Initial Consultation',
      date: new Date('2023-06-01T09:00:00'),
      duration: 30,
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
      type: 'video',
      status: 'completed'
    },
    {
      id: 5,
      mentorName: 'Emily Zhang',
      title: 'Data Analysis Fundamentals',
      date: new Date('2023-05-25T15:00:00'),
      duration: 60,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
      type: 'video',
      status: 'completed'
    }
  ];
  
  // Function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-500/10 text-green-700 hover:bg-green-500/10 hover:text-green-700">Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/10 hover:text-yellow-700">Pending</Badge>;
      case 'completed':
        return <Badge className="bg-blue-500/10 text-blue-700 hover:bg-blue-500/10 hover:text-blue-700">Completed</Badge>;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="animate-fade-in max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Meetings</h1>
            <p className="text-muted-foreground mt-1">Schedule and manage your mentoring sessions</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              Schedule Meeting
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar and upcoming meetings */}
          <div className="lg:col-span-2">
            <Card className="mb-8 animate-scale-in">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-lg font-semibold mb-4">Calendar</h3>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-lg font-semibold mb-4">Selected Date</h3>
                    {date && (
                      <div>
                        <p className="font-medium">{format(date, 'EEEE, MMMM do, yyyy')}</p>
                        <div className="mt-4">
                          {upcomingMeetings.filter(meeting => 
                            format(meeting.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                          ).length > 0 ? (
                            upcomingMeetings.filter(meeting => 
                              format(meeting.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                            ).map(meeting => (
                              <div key={meeting.id} className="mb-3 p-3 border rounded-lg">
                                <div className="flex items-center justify-between">
                                  <p className="font-medium">{meeting.title}</p>
                                  {getStatusBadge(meeting.status)}
                                </div>
                                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>{format(meeting.date, 'h:mm a')} ({meeting.duration} min)</span>
                                </div>
                                <div className="flex items-center mt-1">
                                  <img 
                                    src={meeting.image} 
                                    alt={meeting.mentorName} 
                                    className="h-5 w-5 rounded-full object-cover mr-2" 
                                  />
                                  <span className="text-sm">{meeting.mentorName}</span>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-muted-foreground">No meetings scheduled for this date.</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="upcoming" className="animate-slide-up">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="requests">Requests</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="space-y-4">
                {upcomingMeetings.map(meeting => (
                  <Card key={meeting.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <img 
                            src={meeting.image} 
                            alt={meeting.mentorName} 
                            className="h-12 w-12 rounded-full object-cover" 
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="font-semibold">{meeting.title}</h3>
                              <p className="text-sm">{meeting.mentorName}</p>
                            </div>
                            {getStatusBadge(meeting.status)}
                          </div>
                          <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              {format(meeting.date, 'EEEE, MMMM do')}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              {format(meeting.date, 'h:mm a')} ({meeting.duration} min)
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Video className="h-4 w-4 mr-1" />
                              Video Call
                            </div>
                          </div>
                          <div className="mt-4 flex flex-col sm:flex-row gap-2">
                            <Button variant="outline" size="sm">Reschedule</Button>
                            <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">Cancel</Button>
                            <Button size="sm" className="sm:ml-auto">Join Meeting</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="requests" className="space-y-4">
                {meetingRequests.length > 0 ? (
                  meetingRequests.map(meeting => (
                    <Card key={meeting.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <img 
                              src={meeting.image} 
                              alt={meeting.mentorName} 
                              className="h-12 w-12 rounded-full object-cover" 
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div>
                                <h3 className="font-semibold">{meeting.title}</h3>
                                <p className="text-sm">{meeting.mentorName}</p>
                              </div>
                              {getStatusBadge(meeting.status)}
                            </div>
                            <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <CalendarIcon className="h-4 w-4 mr-1" />
                                {format(meeting.date, 'EEEE, MMMM do')}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="h-4 w-4 mr-1" />
                                {format(meeting.date, 'h:mm a')} ({meeting.duration} min)
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Video className="h-4 w-4 mr-1" />
                                Video Call
                              </div>
                            </div>
                            <div className="mt-4 flex flex-col sm:flex-row gap-2">
                              <Button size="sm" className="flex items-center">
                                <Check className="mr-1 h-4 w-4" />
                                Accept
                              </Button>
                              <Button variant="outline" size="sm" className="flex items-center text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                                <X className="mr-1 h-4 w-4" />
                                Decline
                              </Button>
                              <Button variant="outline" size="sm" className="sm:ml-auto">Suggest New Time</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <p className="text-muted-foreground">No pending meeting requests</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="past" className="space-y-4">
                {pastMeetings.map(meeting => (
                  <Card key={meeting.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <img 
                            src={meeting.image} 
                            alt={meeting.mentorName} 
                            className="h-12 w-12 rounded-full object-cover grayscale opacity-80" 
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="font-semibold">{meeting.title}</h3>
                              <p className="text-sm">{meeting.mentorName}</p>
                            </div>
                            {getStatusBadge(meeting.status)}
                          </div>
                          <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              {format(meeting.date, 'EEEE, MMMM do')}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              {format(meeting.date, 'h:mm a')} ({meeting.duration} min)
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Video className="h-4 w-4 mr-1" />
                              Video Call
                            </div>
                          </div>
                          <div className="mt-4 flex flex-col sm:flex-row gap-2">
                            <Button variant="outline" size="sm">Meeting Notes</Button>
                            <Button variant="outline" size="sm" className="sm:ml-auto">Schedule Follow-up</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Meeting stats and quick actions */}
          <div className="space-y-6">
            <Card className="animate-scale-in">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Meeting Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">This Month</span>
                      <span className="text-sm font-medium">4 sessions</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Total Sessions</span>
                      <span className="text-sm font-medium">12 sessions</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Session Duration</span>
                      <span className="text-sm font-medium">9 hours</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-scale-in [animation-delay:75ms]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Find New Mentors
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Video className="mr-2 h-4 w-4" />
                    Schedule Group Session
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    View Availability Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-scale-in [animation-delay:150ms]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Suggested Time Slots</h3>
                <div className="space-y-2">
                  {['Monday, June 19 • 10:00 AM', 'Wednesday, June 21 • 2:30 PM', 'Friday, June 23 • 4:00 PM'].map((slot, i) => (
                    <Button key={i} variant="outline" className="w-full justify-between" size="sm">
                      {slot}
                      <Plus className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Meetings;
