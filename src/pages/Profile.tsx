import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Bell,
  Shield,
  Clock,
  Save,
  Edit,
  Camera
} from "lucide-react";

const Profile = () => {
  const facultyInfo = {
    name: "Dr. Sarah Johnson",
    designation: "Professor",
    department: "Electronics and Telecommunications",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    office: "Room 302, Engineering Block",
    joiningDate: "August 2018",
    specialization: "Digital Signal Processing, Communications",
    qualifications: "Ph.D. in Electronics Engineering"
  };

  const officeHours = [
    { day: "Monday", time: "9:00 AM - 11:00 AM", available: true },
    { day: "Tuesday", time: "2:00 PM - 4:00 PM", available: true },
    { day: "Wednesday", time: "10:00 AM - 12:00 PM", available: false },
    { day: "Thursday", time: "3:00 PM - 5:00 PM", available: true },
    { day: "Friday", time: "9:00 AM - 11:00 AM", available: true }
  ];

  const notificationSettings = [
    { id: "equipment_requests", label: "Equipment Requests", description: "New equipment reservation requests", enabled: true },
    { id: "issue_reports", label: "Issue Reports", description: "New laboratory issues reported", enabled: true },
    { id: "student_submissions", label: "Student Submissions", description: "Experiment submissions from students", enabled: false },
    { id: "maintenance_alerts", label: "Maintenance Alerts", description: "Equipment maintenance reminders", enabled: true },
    { id: "deadline_reminders", label: "Deadline Reminders", description: "Upcoming experiment deadlines", enabled: true }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Profile & Settings</h1>
        <p className="text-muted-foreground">
          Manage your profile information, preferences, and account settings.
        </p>
      </div>

      {/* Profile Overview Card */}
      <Card className="bg-gradient-card border-border/50">
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-primary/20">
                <AvatarImage src="/faculty-avatar.jpg" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl">
                  DR
                </AvatarFallback>
              </Avatar>
              <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-card-foreground mb-1">{facultyInfo.name}</h2>
              <p className="text-lg text-muted-foreground mb-2">{facultyInfo.designation}</p>
              <p className="text-muted-foreground mb-4">{facultyInfo.department}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-card-foreground">{facultyInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-card-foreground">{facultyInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-card-foreground">{facultyInfo.office}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-card-foreground">Joined {facultyInfo.joiningDate}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different sections */}
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-card/50 border border-border/50">
          <TabsTrigger value="profile" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Profile Info
          </TabsTrigger>
          <TabsTrigger value="office-hours" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Office Hours
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Profile Information</CardTitle>
              <CardDescription>Update your personal and professional details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-card-foreground">Full Name</Label>
                  <Input id="fullName" defaultValue={facultyInfo.name} className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="designation" className="text-card-foreground">Designation</Label>
                  <Input id="designation" defaultValue={facultyInfo.designation} className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">Email Address</Label>
                  <Input id="email" type="email" defaultValue={facultyInfo.email} className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-card-foreground">Phone Number</Label>
                  <Input id="phone" defaultValue={facultyInfo.phone} className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="office" className="text-card-foreground">Office Location</Label>
                  <Input id="office" defaultValue={facultyInfo.office} className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-card-foreground">Department</Label>
                  <Input id="department" defaultValue={facultyInfo.department} className="bg-input border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialization" className="text-card-foreground">Areas of Specialization</Label>
                <Textarea 
                  id="specialization" 
                  defaultValue={facultyInfo.specialization}
                  className="bg-input border-border min-h-[80px]" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qualifications" className="text-card-foreground">Qualifications</Label>
                <Textarea 
                  id="qualifications" 
                  defaultValue={facultyInfo.qualifications}
                  className="bg-input border-border min-h-[80px]" 
                />
              </div>
              <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="office-hours" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Office Hours Management</CardTitle>
              <CardDescription>Set your availability for student consultations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-sidebar-accent/20 hover:bg-sidebar-accent/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-card-foreground">{schedule.day}</p>
                      <p className="text-sm text-muted-foreground">{schedule.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Switch checked={schedule.available} />
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                <Save className="w-4 h-4 mr-2" />
                Update Office Hours
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Notification Preferences</CardTitle>
              <CardDescription>Choose what notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notificationSettings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between p-4 rounded-lg bg-sidebar-accent/20">
                  <div className="flex items-center gap-4">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-card-foreground">{setting.label}</p>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                  </div>
                  <Switch checked={setting.enabled} />
                </div>
              ))}
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                <Save className="w-4 h-4 mr-2" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-card-foreground">Security Settings</CardTitle>
              <CardDescription>Manage your account security and password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-card-foreground">Current Password</Label>
                  <Input id="currentPassword" type="password" className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-card-foreground">New Password</Label>
                  <Input id="newPassword" type="password" className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-card-foreground">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" className="bg-input border-border" />
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-sidebar-accent/20">
                  <div className="flex items-center gap-4">
                    <Shield className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-medium text-card-foreground">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
              </div>

              <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
                <Save className="w-4 h-4 mr-2" />
                Update Password
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;