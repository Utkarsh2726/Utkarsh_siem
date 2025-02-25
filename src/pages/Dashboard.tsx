
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from "recharts";
import { 
  Download, AlertCircle, Activity, Search, Database, 
  Shield, Users, Globe, Server 
} from "lucide-react";
import { systemHealth, eventTrends, threatCategories, sampleAlerts, sampleEvents } from "@/data/sampleData";

const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"];

const topViolators = [
  { ip: "192.168.1.100", count: 156, type: "Brute Force" },
  { ip: "192.168.1.101", count: 89, type: "SQL Injection" },
  { ip: "192.168.1.102", count: 67, type: "XSS Attempts" },
  { ip: "192.168.1.103", count: 45, type: "File Inclusion" },
];

const geoDistribution = [
  { country: "United States", attacks: 1245 },
  { country: "China", attacks: 856 },
  { country: "Russia", attacks: 645 },
  { country: "Brazil", attacks: 433 },
];

const Dashboard = () => {
  const criticalAlerts = sampleAlerts.filter(alert => alert.severity === "critical");
  const recentEvents = sampleEvents.slice(0, 5);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Security Dashboard</h1>
          <p className="text-sm text-muted-foreground">Real-time security monitoring and analytics</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">7</div>
            <p className="text-xs text-muted-foreground">+2 in last hour</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Events Today</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345</div>
            <p className="text-xs text-muted-foreground">+123 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">98%</div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">6 require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Security Status Row */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Top Security Violations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topViolators.map((violator, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{violator.ip}</p>
                    <p className="text-xs text-muted-foreground">{violator.type}</p>
                  </div>
                  <div className="text-sm font-medium">{violator.count} attempts</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Geographic Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geoDistribution.map((geo, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span>{geo.country}</span>
                  </div>
                  <div className="text-sm font-medium">{geo.attacks} attacks</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <CardHeader>
            <CardTitle>System Health Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={systemHealth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#4ECDC4" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader>
            <CardTitle>Event & Alert Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={eventTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="events" fill="#45B7D1" />
                <Bar dataKey="alerts" fill="#FF6B6B" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <CardHeader>
            <CardTitle>Threat Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={threatCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {threatCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Critical Alerts</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criticalAlerts.slice(0, 3).map((alert) => (
                <div key={alert.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{alert.title}</p>
                    <p className="text-sm text-muted-foreground">{alert.source}</p>
                  </div>
                  <Button variant="destructive" size="sm">Investigate</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Events Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Events</CardTitle>
            <Button variant="ghost" size="sm">View All Events</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-3 bg-muted rounded-lg"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-muted-foreground" />
                    <p className="font-medium">{event.source}</p>
                  </div>
                  <p className="text-sm">{event.description}</p>
                  <div className="flex gap-2 text-xs text-muted-foreground">
                    <span>{event.type}</span>
                    <span>•</span>
                    <span>{new Date(event.timestamp).toLocaleString()}</span>
                  </div>
                </div>
                <Shield className={`h-4 w-4 ${
                  event.severity === "high" 
                    ? "text-red-500" 
                    : event.severity === "medium"
                    ? "text-yellow-500"
                    : "text-blue-500"
                }`} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
