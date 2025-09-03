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
  CheckCircle, 
  X, 
  Clock, 
  Plus,
  Edit,
  Wrench,
  AlertCircle
} from "lucide-react";

const EquipmentManagement = () => {
  const pendingRequests = [
    {
      id: "REQ001",
      student: "Alex Johnson",
      rollNo: "ET2021001",
      equipment: "Digital Oscilloscope",
      requestDate: "2024-01-15",
      purpose: "Signal Analysis Lab",
      status: "pending",
      priority: "normal"
    },
    {
      id: "REQ002",
      student: "Sarah Miller",
      rollNo: "ET2021002",
      equipment: "Function Generator",
      requestDate: "2024-01-15",
      purpose: "Waveform Generation Study",
      status: "pending",
      priority: "high"
    },
    {
      id: "REQ003",
      student: "Mike Davis",
      rollNo: "ET2021003",
      equipment: "Spectrum Analyzer",
      requestDate: "2024-01-14",
      purpose: "Frequency Domain Analysis",
      status: "pending",
      priority: "normal"
    }
  ];

  const equipmentInventory = [
    {
      id: "EQ001",
      name: "Digital Oscilloscope - Tektronix",
      model: "TDS2024C",
      quantity: 5,
      available: 3,
      location: "Electronics Lab 1",
      lastServiced: "2024-01-10",
      status: "operational"
    },
    {
      id: "EQ002",
      name: "Function Generator - Agilent",
      model: "33250A",
      quantity: 4,
      available: 2,
      location: "Electronics Lab 1",
      lastServiced: "2024-01-08",
      status: "operational"
    },
    {
      id: "EQ003",
      name: "Spectrum Analyzer - Rohde & Schwarz",
      model: "FSW26",
      quantity: 2,
      available: 0,
      location: "Communications Lab",
      lastServiced: "2023-12-20",
      status: "maintenance"
    }
  ];

  const reservationHistory = [
    {
      id: "RES001",
      student: "Emma Wilson",
      equipment: "Digital Oscilloscope",
      startDate: "2024-01-10",
      endDate: "2024-01-12",
      status: "completed",
      returnCondition: "good"
    },
    {
      id: "RES002",
      student: "James Brown",
      equipment: "Function Generator",
      startDate: "2024-01-08",
      endDate: "2024-01-10",
      status: "completed",
      returnCondition: "good"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">Pending</Badge>;
      case 'operational':
        return <Badge variant="default" className="bg-success/20 text-success border-success/30">Operational</Badge>;
      case 'maintenance':
        return <Badge variant="destructive" className="bg-destructive/20 text-destructive border-destructive/30">Maintenance</Badge>;
      case 'completed':
        return <Badge variant="default" className="bg-success/20 text-success border-success/30">Completed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive" className="bg-destructive/20 text-destructive border-destructive/30">High</Badge>;
      case 'normal':
        return <Badge variant="outline">Normal</Badge>;
      default:
        return <Badge variant="outline">Low</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Equipment Management</h1>
          <p className="text-muted-foreground">
            Manage equipment reservations, inventory, and maintenance schedules.
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          Add Equipment
        </Button>
      </div>

      {/* Tabs for different sections */}
      <Tabs defaultValue="requests" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-border/50">
          <TabsTrigger value="requests" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Pending Requests
          </TabsTrigger>
          <TabsTrigger value="inventory" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Equipment Inventory
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Reservation History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Pending Equipment Requests</CardTitle>
              <CardDescription>Review and approve student equipment reservation requests</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead>Student</TableHead>
                    <TableHead>Equipment</TableHead>
                    <TableHead>Request Date</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingRequests.map((request) => (
                    <TableRow key={request.id} className="border-border/50 hover:bg-sidebar-accent/20">
                      <TableCell>
                        <div>
                          <p className="font-medium text-card-foreground">{request.student}</p>
                          <p className="text-sm text-muted-foreground">{request.rollNo}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-card-foreground">{request.equipment}</TableCell>
                      <TableCell className="text-card-foreground">{request.requestDate}</TableCell>
                      <TableCell className="text-card-foreground">{request.purpose}</TableCell>
                      <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="bg-success/20 text-success border-success/30 hover:bg-success/30">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" className="bg-destructive/20 text-destructive border-destructive/30 hover:bg-destructive/30">
                            <X className="w-4 h-4 mr-1" />
                            Reject
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

        <TabsContent value="inventory" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Equipment Inventory</CardTitle>
              <CardDescription>Monitor equipment availability and maintenance status</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead>Equipment</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Availability</TableHead>
                    <TableHead>Last Serviced</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equipmentInventory.map((item) => (
                    <TableRow key={item.id} className="border-border/50 hover:bg-sidebar-accent/20">
                      <TableCell>
                        <div>
                          <p className="font-medium text-card-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">ID: {item.id}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-card-foreground">{item.model}</TableCell>
                      <TableCell className="text-card-foreground">{item.location}</TableCell>
                      <TableCell>
                        <span className="text-card-foreground">{item.available}/{item.quantity}</span>
                        <div className="w-full bg-muted mt-1 rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full" 
                            style={{ width: `${(item.available / item.quantity) * 100}%` }}
                          />
                        </div>
                      </TableCell>
                      <TableCell className="text-card-foreground">{item.lastServiced}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Wrench className="w-4 h-4" />
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

        <TabsContent value="history" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Reservation History</CardTitle>
              <CardDescription>View past equipment reservations and returns</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead>Student</TableHead>
                    <TableHead>Equipment</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Condition</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reservationHistory.map((reservation) => (
                    <TableRow key={reservation.id} className="border-border/50 hover:bg-sidebar-accent/20">
                      <TableCell className="text-card-foreground">{reservation.student}</TableCell>
                      <TableCell className="text-card-foreground">{reservation.equipment}</TableCell>
                      <TableCell className="text-card-foreground">{reservation.startDate}</TableCell>
                      <TableCell className="text-card-foreground">{reservation.endDate}</TableCell>
                      <TableCell>{getStatusBadge(reservation.status)}</TableCell>
                      <TableCell className="text-card-foreground capitalize">{reservation.returnCondition}</TableCell>
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

export default EquipmentManagement;