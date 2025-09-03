import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  Users, 
  User, 
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  TrendingUp,
  BookOpen
} from "lucide-react";

const StudentMonitoring = () => {
  const labs = [
    { id: "lab1", name: "Electronics Lab 1", students: 25 },
    { id: "lab2", name: "Communications Lab", students: 22 },
    { id: "lab3", name: "Digital Systems Lab", students: 28 },
    { id: "lab4", name: "Microwave Lab", students: 15 }
  ];

  const studentsData = [
    {
      id: "ET2021001",
      name: "Alex Johnson",
      rollNo: "ET2021001",
      batch: "ET2021-A",
      lab: "Electronics Lab 1",
      attendance: 92,
      experimentsCompleted: 8,
      totalExperiments: 10,
      equipmentBorrowed: 3,
      lastActivity: "2024-01-15",
      status: "active"
    },
    {
      id: "ET2021002",
      name: "Sarah Miller",
      rollNo: "ET2021002", 
      batch: "ET2021-A",
      lab: "Electronics Lab 1",
      attendance: 88,
      experimentsCompleted: 7,
      totalExperiments: 10,
      equipmentBorrowed: 2,
      lastActivity: "2024-01-14",
      status: "active"
    },
    {
      id: "ET2021003",
      name: "Mike Davis",
      rollNo: "ET2021003",
      batch: "ET2021-B", 
      lab: "Communications Lab",
      attendance: 76,
      experimentsCompleted: 5,
      totalExperiments: 8,
      equipmentBorrowed: 1,
      lastActivity: "2024-01-12",
      status: "warning"
    },
    {
      id: "ET2021004",
      name: "Emma Wilson",
      rollNo: "ET2021004",
      batch: "ET2021-A",
      lab: "Electronics Lab 1",
      attendance: 96,
      experimentsCompleted: 9,
      totalExperiments: 10,
      equipmentBorrowed: 4,
      lastActivity: "2024-01-15",
      status: "excellent"
    }
  ];

  const attendanceData = [
    { student: "Alex Johnson", rollNo: "ET2021001", jan15: true, jan14: true, jan13: false, jan12: true, jan11: true },
    { student: "Sarah Miller", rollNo: "ET2021002", jan15: true, jan14: false, jan13: true, jan12: true, jan11: true },
    { student: "Mike Davis", rollNo: "ET2021003", jan15: false, jan14: false, jan13: true, jan12: false, jan11: true },
    { student: "Emma Wilson", rollNo: "ET2021004", jan15: true, jan14: true, jan13: true, jan12: true, jan11: true }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excellent':
        return <Badge variant="default" className="bg-success text-success-foreground">Excellent</Badge>;
      case 'active':
        return <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">Active</Badge>;
      case 'warning':
        return <Badge variant="destructive" className="bg-warning/20 text-warning border-warning/30">Needs Attention</Badge>;
      case 'inactive':
        return <Badge variant="destructive">Inactive</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-success';
    if (percentage >= 75) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Student Monitoring</h1>
        <p className="text-muted-foreground">
          Track student participation, performance, and laboratory activities.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold text-card-foreground">90</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Attendance</p>
                <p className="text-2xl font-bold text-card-foreground">88%</p>
              </div>
              <Calendar className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completion Rate</p>
                <p className="text-2xl font-bold text-card-foreground">76%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Equipment</p>
                <p className="text-2xl font-bold text-card-foreground">23</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary-glow" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-border/50">
          <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Student Overview
          </TabsTrigger>
          <TabsTrigger value="attendance" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Attendance Management  
          </TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Performance Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Student Overview</CardTitle>
              <CardDescription>Comprehensive view of student performance and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead>Student</TableHead>
                    <TableHead>Lab</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Experiments</TableHead>
                    <TableHead>Equipment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studentsData.map((student) => (
                    <TableRow key={student.id} className="border-border/50 hover:bg-sidebar-accent/20">
                      <TableCell>
                        <div>
                          <p className="font-medium text-card-foreground">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.rollNo}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-card-foreground">{student.lab}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${getAttendanceColor(student.attendance)}`}>
                            {student.attendance}%
                          </span>
                          <Progress value={student.attendance} className="w-16 h-2" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="text-card-foreground">
                            {student.experimentsCompleted}/{student.totalExperiments}
                          </span>
                          <Progress 
                            value={(student.experimentsCompleted / student.totalExperiments) * 100} 
                            className="w-16 h-2" 
                          />
                        </div>
                      </TableCell>
                      <TableCell className="text-card-foreground">{student.equipmentBorrowed}</TableCell>
                      <TableCell>{getStatusBadge(student.status)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Attendance Management</CardTitle>
              <CardDescription>Mark and track student attendance for laboratory sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead>Student</TableHead>
                    <TableHead>Jan 15</TableHead>
                    <TableHead>Jan 14</TableHead>
                    <TableHead>Jan 13</TableHead>
                    <TableHead>Jan 12</TableHead>
                    <TableHead>Jan 11</TableHead>
                    <TableHead>Overall</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceData.map((record, index) => (
                    <TableRow key={index} className="border-border/50 hover:bg-sidebar-accent/20">
                      <TableCell>
                        <div>
                          <p className="font-medium text-card-foreground">{record.student}</p>
                          <p className="text-sm text-muted-foreground">{record.rollNo}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {record.jan15 ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <Clock className="w-5 h-5 text-destructive" />
                        )}
                      </TableCell>
                      <TableCell>
                        {record.jan14 ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <Clock className="w-5 h-5 text-destructive" />
                        )}
                      </TableCell>
                      <TableCell>
                        {record.jan13 ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <Clock className="w-5 h-5 text-destructive" />
                        )}
                      </TableCell>
                      <TableCell>
                        {record.jan12 ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <Clock className="w-5 h-5 text-destructive" />
                        )}
                      </TableCell>
                      <TableCell>
                        {record.jan11 ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <Clock className="w-5 h-5 text-destructive" />
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-success/20 text-success border-success/30">
                          80%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Lab-wise Performance */}
            {labs.map((lab) => (
              <Card key={lab.id} className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-card-foreground">{lab.name}</CardTitle>
                  <CardDescription>{lab.students} students enrolled</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Average Attendance</span>
                      <span className="text-card-foreground">87%</span>
                    </div>
                    <Progress value={87} className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Experiment Completion</span>
                      <span className="text-card-foreground">72%</span>
                    </div>
                    <Progress value={72} className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Equipment Usage</span>
                      <span className="text-card-foreground">64%</span>
                    </div>
                    <Progress value={64} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentMonitoring;