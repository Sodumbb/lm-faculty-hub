import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { 
  Users, 
  AlertTriangle, 
  FlaskConical, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Eye,
  ArrowRight,
  Settings,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  const [pendingRequests, setPendingRequests] = useState(12);
  const [reportedIssues, setReportedIssues] = useState(7);
  const [activeExperiments] = useState(24);
  const [studentProgress] = useState(87);

  const [selectedLab, setSelectedLab] = useState<any>(null);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  const summaryData = [
    {
      title: "Pending Requests",
      value: pendingRequests.toString(),
      description: "Equipment reservations awaiting approval",
      icon: Clock,
      variant: "warning" as const,
      action: "Review Requests",
      color: "bg-warning/10 border-warning/20"
    },
    {
      title: "Reported Issues",
      value: reportedIssues.toString(),
      description: "3 Critical • 2 High • 2 Medium",
      icon: AlertTriangle,
      variant: "destructive" as const,
      action: "Handle Issues",
      color: "bg-destructive/10 border-destructive/20"
    },
    {
      title: "Active Experiments",
      value: activeExperiments.toString(),
      description: "Across 4 laboratories",
      icon: FlaskConical,
      variant: "primary" as const,
      action: "View All",
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "Student Progress",
      value: `${studentProgress}%`,
      description: "Average completion rate this semester",
      icon: TrendingUp,
      variant: "success" as const,
      action: "View Details",
      color: "bg-success/10 border-success/20"
    }
  ];

  const labsData = [
    {
      name: "Electronics Lab 1",
      room: "Room 201",
      ta: "John Smith",
      activeStudents: 15,
      status: "active" as const,
      equipment: ["Oscilloscope", "Function Generator", "Power Supply"],
      capacity: 20
    },
    {
      name: "Communications Lab",
      room: "Room 203",
      ta: "Emma Davis",
      activeStudents: 12,
      status: "active" as const,
      equipment: ["Spectrum Analyzer", "Signal Generator", "Network Analyzer"],
      capacity: 18
    },
    {
      name: "Digital Systems Lab",
      room: "Room 205",
      ta: "Mike Wilson",
      activeStudents: 8,
      status: "maintenance" as const,
      equipment: ["Logic Analyzer", "FPGA Boards", "Microcontrollers"],
      capacity: 16
    },
    {
      name: "Microwave Lab",
      room: "Room 207",
      ta: "Lisa Chen",
      activeStudents: 6,
      status: "active" as const,
      equipment: ["VNA", "Horn Antennas", "Waveguides"],
      capacity: 12
    }
  ];

  const recentActivities = [
    {
      type: "request",
      message: "New equipment request for Oscilloscope by Alex Johnson",
      time: "5 minutes ago",
      priority: "normal",
      action: () => setPendingRequests(prev => prev + 1)
    },
    {
      type: "issue",
      message: "Critical issue reported in Electronics Lab 1 - Power failure",
      time: "12 minutes ago",
      priority: "critical",
      action: () => setReportedIssues(prev => prev + 1)
    },
    {
      type: "experiment",
      message: "Experiment 'Signal Processing' submitted by Sarah Miller",
      time: "25 minutes ago",
      priority: "normal",
      action: () => {}
    },
    {
      type: "request",
      message: "Equipment maintenance completed for Function Generator",
      time: "1 hour ago",
      priority: "normal",
      action: () => {}
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-success/20 text-success border-success/30">Active</Badge>;
      case 'maintenance':
        return <Badge className="bg-warning/20 text-warning border-warning/30">Maintenance</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <div className="w-2 h-2 rounded-full bg-destructive" />;
      case 'high':
        return <div className="w-2 h-2 rounded-full bg-warning" />;
      default:
        return <div className="w-2 h-2 rounded-full bg-muted-foreground" />;
    }
  };

  const handleCardAction = (action: string) => {
    // Mock actions that would navigate to different pages
    console.log(`Navigating to: ${action}`);
  };

  const handleLabView = (lab: any) => {
    setSelectedLab(lab);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Faculty Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Dr. Sarah Johnson. Here's your laboratory overview for today.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item) => (
          <Card key={item.title} className={`hover:shadow-lg transition-all duration-300 ${item.color} border-2`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">
                {item.title}
              </CardTitle>
              <item.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-card-foreground mb-1">
                {item.value}
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {item.description}
              </p>
              <Button 
                size="sm" 
                variant="outline"
                className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handleCardAction(item.action)}
              >
                {item.action}
                <ArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lab Management */}
        <Card className="border-2 border-border/50 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Laboratory Management
            </CardTitle>
            <CardDescription>Overview of all assigned laboratories</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {labsData.map((lab) => (
              <div key={lab.name} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-card-foreground">{lab.name}</h4>
                    {getStatusBadge(lab.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{lab.room} • TA: {lab.ta}</p>
                  <p className="text-sm text-muted-foreground">
                    {lab.activeStudents}/{lab.capacity} students
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={() => handleLabView(lab)}>
                      <Eye className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{lab.name}</DialogTitle>
                      <DialogDescription>
                        Detailed information about the laboratory
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Lab Information</h4>
                        <p className="text-sm text-muted-foreground">Room: {lab.room}</p>
                        <p className="text-sm text-muted-foreground">TA: {lab.ta}</p>
                        <p className="text-sm text-muted-foreground">
                          Occupancy: {lab.activeStudents}/{lab.capacity} students
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Available Equipment</h4>
                        <div className="flex flex-wrap gap-2">
                          {lab.equipment.map((item, index) => (
                            <Badge key={index} variant="outline">{item}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="border-2 border-border/50 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors border border-border">
                {getPriorityIcon(activity.priority)}
                <div className="flex-1">
                  <p className="text-sm text-card-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={activity.action}>
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;