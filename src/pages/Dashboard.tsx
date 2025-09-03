import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  AlertTriangle, 
  FlaskConical, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Eye,
  ArrowRight
} from "lucide-react";

const Dashboard = () => {
  const summaryData = [
    {
      title: "Pending Requests",
      value: "12",
      description: "Equipment reservations awaiting approval",
      icon: Clock,
      variant: "warning" as const,
      action: "Review Requests"
    },
    {
      title: "Reported Issues",
      value: "7",
      description: "3 Critical • 2 High • 2 Medium",
      icon: AlertTriangle,
      variant: "destructive" as const,
      action: "Handle Issues"
    },
    {
      title: "Active Experiments",
      value: "24",
      description: "Across 4 laboratories",
      icon: FlaskConical,
      variant: "primary" as const,
      action: "View All"
    },
    {
      title: "Student Progress",
      value: "87%",
      description: "Average completion rate this semester",
      icon: TrendingUp,
      variant: "success" as const,
      action: "View Details"
    }
  ];

  const labsData = [
    {
      name: "Electronics Lab 1",
      room: "Room 201",
      ta: "John Smith",
      activeStudents: 15,
      status: "active" as const
    },
    {
      name: "Communications Lab",
      room: "Room 203",
      ta: "Emma Davis",
      activeStudents: 12,
      status: "active" as const
    },
    {
      name: "Digital Systems Lab",
      room: "Room 205",
      ta: "Mike Wilson",
      activeStudents: 8,
      status: "maintenance" as const
    },
    {
      name: "Microwave Lab",
      room: "Room 207",
      ta: "Lisa Chen",
      activeStudents: 6,
      status: "active" as const
    }
  ];

  const recentActivities = [
    {
      type: "request",
      message: "New equipment request for Oscilloscope by Alex Johnson",
      time: "5 minutes ago",
      priority: "normal"
    },
    {
      type: "issue",
      message: "Critical issue reported in Electronics Lab 1 - Power failure",
      time: "12 minutes ago",
      priority: "critical"
    },
    {
      type: "experiment",
      message: "Experiment 'Signal Processing' submitted by Sarah Miller",
      time: "25 minutes ago",
      priority: "normal"
    },
    {
      type: "request",
      message: "Equipment maintenance completed for Function Generator",
      time: "1 hour ago",
      priority: "normal"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="default" className="bg-success text-success-foreground">Active</Badge>;
      case 'maintenance':
        return <Badge variant="secondary" className="bg-warning text-warning-foreground">Maintenance</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'text-destructive';
      case 'high':
        return 'text-warning';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Faculty Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Dr. Sarah Johnson. Here's your laboratory overview for today.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item) => (
          <Card key={item.title} className="bg-gradient-card border-border/50 hover:shadow-card transition-shadow">
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
                className="w-full bg-sidebar-accent/20 border-sidebar-border hover:bg-sidebar-accent/40"
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
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-card-foreground">Laboratory Management</CardTitle>
            <CardDescription>Overview of all assigned laboratories</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {labsData.map((lab) => (
              <div key={lab.name} className="flex items-center justify-between p-4 rounded-lg bg-sidebar-accent/20 hover:bg-sidebar-accent/30 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-card-foreground">{lab.name}</h4>
                    {getStatusBadge(lab.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{lab.room} • TA: {lab.ta}</p>
                  <p className="text-sm text-muted-foreground">{lab.activeStudents} active students</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-card-foreground">Recent Activities</CardTitle>
            <CardDescription>Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-sidebar-accent/20 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${getPriorityColor(activity.priority) === 'text-destructive' ? 'bg-destructive' : getPriorityColor(activity.priority) === 'text-warning' ? 'bg-warning' : 'bg-muted-foreground'}`} />
                <div className="flex-1">
                  <p className="text-sm text-card-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;