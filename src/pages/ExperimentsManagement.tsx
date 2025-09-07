import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { 
  FlaskConical, 
  Plus, 
  Edit, 
  Trash, 
  Users,
  Calendar,
  FileText,
  Download,
  BookOpen,
  Clock
} from "lucide-react";

const ExperimentsManagement = () => {
  const [experiments, setExperiments] = useState([
    {
      id: "EXP001",
      title: "Signal Processing and Fourier Analysis",
      description: "Understanding frequency domain analysis using FFT",
      lab: "Electronics Lab 1",
      assignedBatch: "ET2021-A",
      totalStudents: 25,
      completed: 18,
      createdDate: "2024-01-10",
      dueDate: "2024-01-25",
      status: "active",
      attachments: ["manual.pdf", "sample_signals.mat"],
      difficulty: "intermediate"
    },
    {
      id: "EXP002", 
      title: "Digital Communication Systems",
      description: "Modulation techniques and channel coding",
      lab: "Communications Lab",
      assignedBatch: "ET2021-B",
      totalStudents: 22,
      completed: 15,
      createdDate: "2024-01-08",
      dueDate: "2024-01-22",
      status: "active",
      attachments: ["lab_guide.pdf", "matlab_codes.zip"],
      difficulty: "advanced"
    },
    {
      id: "EXP003",
      title: "Basic Circuit Analysis",
      description: "Ohm's law and Kirchhoff's circuit laws",
      lab: "Electronics Lab 1",
      assignedBatch: "ET2022-A",
      totalStudents: 28,
      completed: 28,
      createdDate: "2023-12-15",
      dueDate: "2024-01-05",
      status: "completed",
      attachments: ["circuit_diagrams.pdf"],
      difficulty: "beginner"
    }
  ]);

  const [isAddingExperiment, setIsAddingExperiment] = useState(false);
  const [newExperiment, setNewExperiment] = useState({
    title: "",
    description: "",
    lab: "",
    assignedBatch: "",
    totalStudents: 0,
    dueDate: "",
    difficulty: "beginner"
  });

  const [stats, setStats] = useState({
    totalExperiments: 12,
    activeExperiments: 8,
    totalSubmissions: 187,
    avgCompletion: 78
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-success/20 text-success border-success/30">Active</Badge>;
      case 'completed':
        return <Badge className="bg-muted/20 text-muted-foreground border-muted/30">Completed</Badge>;
      case 'draft':
        return <Badge className="bg-warning/20 text-warning border-warning/30">Draft</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return <Badge className="bg-success/20 text-success border-success/30">Beginner</Badge>;
      case 'intermediate':
        return <Badge className="bg-warning/20 text-warning border-warning/30">Intermediate</Badge>;
      case 'advanced':
        return <Badge className="bg-destructive/20 text-destructive border-destructive/30">Advanced</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const calculateProgress = (completed: number, total: number) => {
    return Math.round((completed / total) * 100);
  };

  const handleAddExperiment = () => {
    const experiment = {
      ...newExperiment,
      id: `EXP${String(experiments.length + 1).padStart(3, '0')}`,
      completed: 0,
      createdDate: new Date().toISOString().split('T')[0],
      status: "active",
      attachments: []
    };
    
    setExperiments(prev => [...prev, experiment]);
    setStats(prev => ({
      ...prev,
      totalExperiments: prev.totalExperiments + 1,
      activeExperiments: prev.activeExperiments + 1
    }));
    
    setNewExperiment({
      title: "",
      description: "",
      lab: "",
      assignedBatch: "",
      totalStudents: 0,
      dueDate: "",
      difficulty: "beginner"
    });
    setIsAddingExperiment(false);
  };

  const handleDeleteExperiment = (id: string) => {
    setExperiments(prev => prev.filter(exp => exp.id !== id));
    setStats(prev => ({
      ...prev,
      totalExperiments: prev.totalExperiments - 1,
      activeExperiments: prev.activeExperiments - 1
    }));
  };

  const handleViewSubmissions = (experiment: any) => {
    console.log(`Viewing submissions for ${experiment.title}`);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Experiments Management</h1>
          <p className="text-muted-foreground">
            Create, manage, and monitor laboratory experiments and student submissions.
          </p>
        </div>
        <Dialog open={isAddingExperiment} onOpenChange={setIsAddingExperiment}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              New Experiment
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Experiment</DialogTitle>
              <DialogDescription>
                Add a new laboratory experiment for students to complete.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">Title</Label>
                <Input
                  id="title"
                  className="col-span-3"
                  value={newExperiment.title}
                  onChange={(e) => setNewExperiment(prev => ({...prev, title: e.target.value}))}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">Description</Label>
                <Textarea
                  id="description"
                  className="col-span-3"
                  value={newExperiment.description}
                  onChange={(e) => setNewExperiment(prev => ({...prev, description: e.target.value}))}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lab" className="text-right">Laboratory</Label>
                <Select onValueChange={(value) => setNewExperiment(prev => ({...prev, lab: value}))}>
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
                <Label htmlFor="batch" className="text-right">Batch</Label>
                <Input
                  id="batch"
                  className="col-span-3"
                  value={newExperiment.assignedBatch}
                  onChange={(e) => setNewExperiment(prev => ({...prev, assignedBatch: e.target.value}))}
                  placeholder="e.g., ET2021-A"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="students" className="text-right">Total Students</Label>
                <Input
                  id="students"
                  type="number"
                  className="col-span-3"
                  value={newExperiment.totalStudents}
                  onChange={(e) => setNewExperiment(prev => ({...prev, totalStudents: parseInt(e.target.value)}))}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dueDate" className="text-right">Due Date</Label>
                <Input
                  id="dueDate"
                  type="date"
                  className="col-span-3"
                  value={newExperiment.dueDate}
                  onChange={(e) => setNewExperiment(prev => ({...prev, dueDate: e.target.value}))}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="difficulty" className="text-right">Difficulty</Label>
                <Select onValueChange={(value) => setNewExperiment(prev => ({...prev, difficulty: value}))}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingExperiment(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddExperiment} disabled={!newExperiment.title || !newExperiment.lab}>
                Create Experiment
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Experiments</p>
                <p className="text-2xl font-bold text-card-foreground">{stats.totalExperiments}</p>
              </div>
              <FlaskConical className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-success/20 bg-success/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Experiments</p>
                <p className="text-2xl font-bold text-card-foreground">{stats.activeExperiments}</p>
              </div>
              <Calendar className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-warning/20 bg-warning/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Submissions</p>
                <p className="text-2xl font-bold text-card-foreground">{stats.totalSubmissions}</p>
              </div>
              <FileText className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary-glow/20 bg-primary-glow/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Completion</p>
                <p className="text-2xl font-bold text-card-foreground">{stats.avgCompletion}%</p>
              </div>
              <Users className="h-8 w-8 text-primary-glow" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {experiments.map((experiment) => (
          <Card key={experiment.id} className="border-2 border-border/50 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg text-card-foreground">{experiment.title}</CardTitle>
                  <div className="flex gap-2">
                    {getStatusBadge(experiment.status)}
                    {getDifficultyBadge(experiment.difficulty)}
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleDeleteExperiment(experiment.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <CardDescription className="text-muted-foreground">
                {experiment.description}
              </CardDescription>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Lab:</span>
                  <span className="text-card-foreground">{experiment.lab}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Batch:</span>
                  <span className="text-card-foreground">{experiment.assignedBatch}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Due Date:</span>
                  <span className="text-card-foreground">{experiment.dueDate}</span>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-card-foreground">
                    {experiment.completed}/{experiment.totalStudents} students
                  </span>
                </div>
                <Progress 
                  value={calculateProgress(experiment.completed, experiment.totalStudents)} 
                  className="w-full"
                />
                <p className="text-xs text-center text-muted-foreground">
                  {calculateProgress(experiment.completed, experiment.totalStudents)}% completed
                </p>
              </div>

              {/* Attachments */}
              {experiment.attachments.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-card-foreground">Attachments:</p>
                  <div className="space-y-1">
                    {experiment.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{attachment}</span>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Details
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => handleViewSubmissions(experiment)}
                >
                  <Clock className="w-3 h-3 mr-1" />
                  Submissions
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperimentsManagement;