import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
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
  MessageSquare,
  Clock,
  Settings
} from "lucide-react";

const IssueHandling = () => {
  const [openIssues, setOpenIssues] = useState([
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
  ]);

  const [resolvedIssues] = useState([
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
  ]);

  const [isAddingIssue, setIsAddingIssue] = useState(false);
  const [newIssue, setNewIssue] = useState({
    title: "",
    lab: "",
    priority: "medium",
    description: "",
    assignedTo: ""
  });

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <Badge className="bg-destructive/20 text-destructive border-destructive/30">Critical</Badge>;
      case 'high':
        return <Badge className="bg-destructive/15 text-destructive border-destructive/20">High</Badge>;
      case 'medium':
        return <Badge className="bg-warning/20 text-warning border-warning/30">Medium</Badge>;
      case 'low':
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-destructive/20 text-destructive border-destructive/30">Open</Badge>;
      case 'in-progress':
        return <Badge className="bg-warning/20 text-warning border-warning/30">In Progress</Badge>;
      case 'resolved':
        return <Badge className="bg-success/20 text-success border-success/30">Resolved</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const handleResolveIssue = (issueId: string) => {
    const issue = openIssues.find(i => i.id === issueId);
    if (issue) {
      const resolvedIssue = {
        id: issue.id,
        title: issue.title,
        lab: issue.lab,
        reportedBy: issue.reportedBy,
        resolvedDate: new Date().toISOString().split('T')[0],
        resolvedBy: "Current Faculty",
        priority: issue.priority,
        resolution: "Issue resolved by faculty member"
      };
      
      setOpenIssues(prev => prev.filter(i => i.id !== issueId));
      // In a real app, you'd add to resolved issues
      console.log("Issue resolved:", resolvedIssue);
    }
  };

  const handleEscalateIssue = (issueId: string) => {
    setOpenIssues(prev => prev.map(issue => 
      issue.id === issueId 
        ? { ...issue, priority: issue.priority === 'medium' ? 'high' : 'critical' }
        : issue
    ));
  };

  const handleAddIssue = () => {
    const issue = {
      ...newIssue,
      id: `ISS${String(openIssues.length + 6).padStart(3, '0')}`,
      reportedBy: "Current Faculty",
      reportedDate: new Date().toISOString().split('T')[0],
      status: "open"
    };
    
    setOpenIssues(prev => [...prev, issue]);
    setNewIssue({
      title: "",
      lab: "",
      priority: "medium",
      description: "",
      assignedTo: ""
    });
    setIsAddingIssue(false);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Issue Handling</h1>
          <p className="text-muted-foreground">
            Manage and resolve laboratory issues and equipment problems.
          </p>
        </div>
        <Dialog open={isAddingIssue} onOpenChange={setIsAddingIssue}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Report New Issue
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Report New Issue</DialogTitle>
              <DialogDescription>
                Report a new laboratory or equipment issue.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="issue-title" className="text-right">Title</Label>
                <Input
                  id="issue-title"
                  className="col-span-3"
                  value={newIssue.title}
                  onChange={(e) => setNewIssue(prev => ({...prev, title: e.target.value}))}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="issue-lab" className="text-right">Laboratory</Label>
                <Select onValueChange={(value) => setNewIssue(prev => ({...prev, lab: value}))}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select laboratory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Electronics Lab 1">Electronics Lab 1</SelectItem>
                    <SelectItem value="Communications Lab">Communications Lab</SelectItem>
                    <SelectItem value="Digital Systems Lab">Digital Systems Lab</SelectItem>
                    <SelectItem value="Microwave Lab">Microwave Lab</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="issue-priority" className="text-right">Priority</Label>
                <Select onValueChange={(value) => setNewIssue(prev => ({...prev, priority: value}))}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="issue-assignedTo" className="text-right">Assign To</Label>
                <Input
                  id="issue-assignedTo"
                  className="col-span-3"
                  value={newIssue.assignedTo}
                  onChange={(e) => setNewIssue(prev => ({...prev, assignedTo: e.target.value}))}
                  placeholder="Assign to TA or technician"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="issue-description" className="text-right">Description</Label>
                <Textarea
                  id="issue-description"
                  className="col-span-3"
                  value={newIssue.description}
                  onChange={(e) => setNewIssue(prev => ({...prev, description: e.target.value}))}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingIssue(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddIssue} disabled={!newIssue.title || !newIssue.lab}>
                Report Issue
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tabs for open and resolved issues */}
      <Tabs defaultValue="open" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-secondary border border-border">
          <TabsTrigger value="open" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Clock className="w-4 h-4 mr-2" />
            Open Issues ({openIssues.length})
          </TabsTrigger>
          <TabsTrigger value="resolved" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <CheckCircle className="w-4 h-4 mr-2" />
            Resolved Issues
          </TabsTrigger>
        </TabsList>

        <TabsContent value="open" className="mt-6">
          <Card className="border-2 border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Open Issues
              </CardTitle>
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
                    <TableRow key={issue.id} className="border-border/50 hover:bg-accent/50">
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
                          <Button 
                            size="sm" 
                            className="bg-success/20 text-success border-success/30 hover:bg-success/30"
                            onClick={() => handleResolveIssue(issue.id)}
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Resolve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="bg-warning/20 text-warning border-warning/30 hover:bg-warning/30"
                            onClick={() => handleEscalateIssue(issue.id)}
                          >
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
          <Card className="border-2 border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Resolved Issues
              </CardTitle>
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
                    <TableRow key={issue.id} className="border-border/50 hover:bg-accent/50">
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