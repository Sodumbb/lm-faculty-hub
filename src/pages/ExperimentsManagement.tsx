import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FlaskConical, 
  Plus, 
  Edit, 
  Trash, 
  Users,
  Calendar,
  FileText,
  Download
} from "lucide-react";

const ExperimentsManagement = () => {
  const experiments = [
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
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="default" className="bg-success/20 text-success border-success/30">Active</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-muted/20 text-muted-foreground border-muted/30">Completed</Badge>;
      case 'draft':
        return <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">Draft</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return <Badge variant="outline" className="bg-success/20 text-success border-success/30">Beginner</Badge>;
      case 'intermediate':
        return <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">Intermediate</Badge>;
      case 'advanced':
        return <Badge variant="destructive" className="bg-destructive/20 text-destructive border-destructive/30">Advanced</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const calculateProgress = (completed: number, total: number) => {
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Experiments Management</h1>
          <p className="text-muted-foreground">
            Create, manage, and monitor laboratory experiments and student submissions.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          New Experiment
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Experiments</p>
                <p className="text-2xl font-bold text-card-foreground">12</p>
              </div>
              <FlaskConical className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Experiments</p>
                <p className="text-2xl font-bold text-card-foreground">8</p>
              </div>
              <Calendar className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Submissions</p>
                <p className="text-2xl font-bold text-card-foreground">187</p>
              </div>
              <FileText className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Completion</p>
                <p className="text-2xl font-bold text-card-foreground">78%</p>
              </div>
              <Users className="h-8 w-8 text-primary-glow" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {experiments.map((experiment) => (
          <Card key={experiment.id} className="bg-gradient-card border-border/50 hover:shadow-card transition-shadow">
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
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
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
                  View Details
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                  View Submissions
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