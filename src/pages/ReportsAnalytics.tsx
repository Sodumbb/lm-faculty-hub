import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  Users,
  Wrench,
  AlertTriangle,
  FileText
} from "lucide-react";

const ReportsAnalytics = () => {
  const analyticsCards = [
    {
      title: "Equipment Utilization",
      value: "78%",
      description: "Average utilization across all labs",
      icon: Wrench,
      trend: "+5.2%",
      trendUp: true
    },
    {
      title: "Student Engagement",
      value: "87%",
      description: "Average attendance and participation",
      icon: Users,
      trend: "+2.1%",
      trendUp: true
    },
    {
      title: "Issue Resolution Time",
      value: "2.4 hrs",
      description: "Average time to resolve issues",
      icon: AlertTriangle,
      trend: "-0.8 hrs",
      trendUp: true
    },
    {
      title: "Experiment Completion",
      value: "82%",
      description: "On-time completion rate",
      icon: FileText,
      trend: "+3.7%",
      trendUp: true
    }
  ];

  const reportTypes = [
    {
      title: "Equipment Usage Report",
      description: "Detailed analysis of equipment utilization across all laboratories",
      frequency: "Weekly",
      lastGenerated: "Jan 15, 2024",
      status: "ready"
    },
    {
      title: "Student Performance Analytics",
      description: "Comprehensive student progress and engagement metrics",
      frequency: "Monthly", 
      lastGenerated: "Jan 12, 2024",
      status: "ready"
    },
    {
      title: "Issue Trends Analysis",
      description: "Laboratory issues patterns and resolution effectiveness",
      frequency: "Bi-weekly",
      lastGenerated: "Jan 10, 2024", 
      status: "ready"
    },
    {
      title: "Lab Utilization Summary",
      description: "Peak usage hours and capacity optimization insights",
      frequency: "Monthly",
      lastGenerated: "Jan 08, 2024",
      status: "processing"
    }
  ];

  const chartData = [
    { month: "Sep", equipment: 65, students: 78, issues: 12 },
    { month: "Oct", equipment: 72, students: 82, issues: 8 },
    { month: "Nov", equipment: 68, students: 85, issues: 15 },
    { month: "Dec", equipment: 75, students: 87, issues: 6 },
    { month: "Jan", equipment: 78, students: 89, issues: 4 }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ready':
        return <Badge variant="default" className="bg-success/20 text-success border-success/30">Ready</Badge>;
      case 'processing':
        return <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">Processing</Badge>;
      case 'error':
        return <Badge variant="destructive">Error</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive insights and analytics for laboratory operations and performance.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
          <Download className="w-4 h-4 mr-2" />
          Export Dashboard
        </Button>
      </div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsCards.map((card, index) => (
          <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">
                {card.title}
              </CardTitle>
              <card.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-card-foreground mb-1">
                {card.value}
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {card.description}
              </p>
              <div className="flex items-center gap-1">
                <TrendingUp className={`h-3 w-3 ${card.trendUp ? 'text-success' : 'text-destructive'}`} />
                <span className={`text-xs font-medium ${card.trendUp ? 'text-success' : 'text-destructive'}`}>
                  {card.trend}
                </span>
                <span className="text-xs text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Equipment Utilization Chart */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-card-foreground">Equipment Utilization Trends</CardTitle>
            <CardDescription>Monthly equipment usage across all laboratories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              {/* Placeholder for chart - would use Recharts in real implementation */}
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Equipment Utilization Chart</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Monthly trends showing 78% average utilization
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Issue Trends Chart */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-card-foreground">Issue Resolution Trends</CardTitle>
            <CardDescription>Issue reporting and resolution patterns over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              {/* Placeholder for chart */}
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Issue Resolution Chart</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Decreasing trend: 65% faster resolution
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lab Usage Analytics */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-card-foreground">Laboratory Usage Analytics</CardTitle>
          <CardDescription>Peak usage hours and capacity optimization insights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-sidebar-accent/20">
              <h3 className="text-lg font-semibold text-card-foreground">Peak Hours</h3>
              <p className="text-2xl font-bold text-primary mt-2">10AM - 2PM</p>
              <p className="text-sm text-muted-foreground mt-1">Highest usage period</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-sidebar-accent/20">
              <h3 className="text-lg font-semibold text-card-foreground">Most Used Lab</h3>
              <p className="text-2xl font-bold text-success mt-2">Electronics Lab 1</p>
              <p className="text-sm text-muted-foreground mt-1">92% utilization</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-sidebar-accent/20">
              <h3 className="text-lg font-semibold text-card-foreground">Equipment Demand</h3>
              <p className="text-2xl font-bold text-warning mt-2">Oscilloscopes</p>
              <p className="text-sm text-muted-foreground mt-1">Highest demand</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-sidebar-accent/20">
              <h3 className="text-lg font-semibold text-card-foreground">Efficiency Score</h3>
              <p className="text-2xl font-bold text-primary-glow mt-2">8.7/10</p>
              <p className="text-sm text-muted-foreground mt-1">Overall performance</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Report Generation */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-card-foreground">Report Generation</CardTitle>
          <CardDescription>Generate and download various analytical reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {reportTypes.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-sidebar-accent/20 hover:bg-sidebar-accent/30 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium text-card-foreground">{report.title}</h4>
                    {getStatusBadge(report.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{report.description}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Frequency: {report.frequency}</span>
                    <span>Last: {report.lastGenerated}</span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule
                  </Button>
                  <Button variant="outline" size="sm" className="bg-gradient-primary/10 border-primary/30">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsAnalytics;