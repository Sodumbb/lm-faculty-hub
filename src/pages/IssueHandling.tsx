import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  AlertTriangle, 
  User, 
  Calendar,
  CheckCircle,
  ArrowUp,
  MessageSquare
} from "lucide-react";

const IssueHandling = () => {
  const openIssues = [
    {
      id: "ISS001",
      title: "Power failure in Electronics Lab 1",
      lab: "Electronics Lab 1",
      reportedBy: "John Smith (TA)",
      reportedDate: "2024-01-15",
      priority: "critical",
      assignedTo: "Mike Wilson",
      status: "open",
      description: "Complete power outage affecting all equipment"
    },
    {
      id: "ISS002", 
      title: "Oscilloscope display malfunction",
      lab: "Communications Lab",
      reportedBy: "Sarah Miller",
      reportedDate: "2024-01-14",
      priority: "high",
      assignedTo: "Emma Davis",
      status: "in-progress",
      description: "Screen flickering and display artifacts"
    },
    {
      id: "ISS003",
      title: "Air conditioning not working",
      lab: "Digital Systems Lab", 
      reportedBy: "Alex Johnson",
      reportedDate: "2024-01-13",
      priority: "medium",
      assignedTo: "Lisa Chen",
      status: "open",
      description: "Room temperature too high for equipment operation"
    }
  ];

  const resolvedIssues = [
    {
      id: "ISS004",
      title: "Function generator calibration issue",
      lab: "Electronics Lab 1",
      reportedBy: "Emma Wilson",
      resolvedDate: "2024-01-12",
      resolvedBy: "John Smith",
      priority: "medium",
      resolution: "Equipment recalibrated and tested successfully"
    },
    {
      id: "ISS005",
      title: "Network connectivity problems",
      lab: "Communications Lab",
      reportedBy: "James Brown", 
      resolvedDate: "2024-01-11",
      resolvedBy: "Mike Wilson",
      priority: "high",
      resolution: "Router replaced and network configuration updated"
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <Badge variant="destructive" className="bg-destructive text-destructive-foreground">Critical</Badge>;
      case 'high':
        return <Badge variant="destructive" className="bg-destructive/70 text-destructive-foreground">High</Badge>;
      case 'medium':
        return <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">Medium</Badge>;
      case 'low':
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge variant="outline" className="bg-destructive/20 text-destructive border-destructive/30">Open</Badge>;
      case 'in-progress':
        return <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">In Progress</Badge>;
      case 'resolved':
        return <Badge variant="default" className="bg-success/20 text-success border-success/30">Resolved</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Issue Handling</h1>
          <p className="text-muted-foreground">
            Manage and resolve laboratory issues and equipment problems.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
          <AlertTriangle className="w-4 h-4 mr-2" />
          Report New Issue
        </Button>
      </div>

      {/* Tabs for open and resolved issues */}
      <Tabs defaultValue="open" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-card/50 border border-border/50">
          <TabsTrigger value="open" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Open Issues ({openIssues.length})
          </TabsTrigger>
          <TabsTrigger value="resolved" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Resolved Issues
          </TabsTrigger>
        </TabsList>

        <TabsContent value="open" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Open Issues</CardTitle>
              <CardDescription>Issues requiring attention and resolution</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead>Issue</TableHead>
                    <TableHead>Lab</TableHead>
                    <TableHead>Reported By</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {openIssues.map((issue) => (
                    <TableRow key={issue.id} className="border-border/50 hover:bg-sidebar-accent/20">
                      <TableCell>
                        <div>
                          <p className="font-medium text-card-foreground">{issue.title}</p>
                          <p className="text-sm text-muted-foreground">{issue.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">ID: {issue.id}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-card-foreground">{issue.lab}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-card-foreground">{issue.reportedBy}</p>
                            <p className="text-xs text-muted-foreground">{issue.reportedDate}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getPriorityBadge(issue.priority)}</TableCell>
                      <TableCell className="text-card-foreground">{issue.assignedTo}</TableCell>
                      <TableCell>{getStatusBadge(issue.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="bg-success/20 text-success border-success/30 hover:bg-success/30">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Resolve
                          </Button>
                          <Button size="sm" variant="outline" className="bg-warning/20 text-warning border-warning/30 hover:bg-warning/30">
                            <ArrowUp className="w-4 h-4 mr-1" />
                            Escalate
                          </Button>
                          <Button size="sm" variant="ghost">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resolved" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Resolved Issues</CardTitle>
              <CardDescription>Previously resolved issues and their solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead>Issue</TableHead>
                    <TableHead>Lab</TableHead>
                    <TableHead>Reported By</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Resolved By</TableHead>
                    <TableHead>Resolution</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resolvedIssues.map((issue) => (
                    <TableRow key={issue.id} className="border-border/50 hover:bg-sidebar-accent/20">
                      <TableCell>
                        <div>
                          <p className="font-medium text-card-foreground">{issue.title}</p>
                          <p className="text-xs text-muted-foreground">ID: {issue.id}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-card-foreground">{issue.lab}</TableCell>
                      <TableCell className="text-card-foreground">{issue.reportedBy}</TableCell>
                      <TableCell>{getPriorityBadge(issue.priority)}</TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm text-card-foreground">{issue.resolvedBy}</p>
                          <p className="text-xs text-muted-foreground">{issue.resolvedDate}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-card-foreground max-w-xs">{issue.resolution}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IssueHandling;