
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from "recharts";

const timelineData = [
  { time: "10:30:00", value: 85, event: "Initial Detection" },
  { time: "10:30:15", value: 90, event: "First Malicious Request" },
  { time: "10:30:45", value: 95, event: "Payload Execution" },
  { time: "10:31:00", value: 100, event: "Data Exfiltration Attempt" },
];

const impactedSystems = [
  { name: "Web Server", affected: 75 },
  { name: "Database", affected: 45 },
  { name: "File Server", affected: 90 },
  { name: "Mail Server", affected: 25 },
];

const AlertTriage = () => {
  const { alertId } = useParams();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1>Alert Investigation</h1>
          <p className="text-sm text-muted-foreground">Alert ID: {alertId}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Download Report</Button>
          <Button variant="destructive">Mark as Incident</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Alert Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#ff4d4d" 
                  strokeWidth={2}
                  dot={{ fill: "#ff4d4d" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Impacted Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={impactedSystems}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="affected" fill="#9b87f5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>MITRE ATT&CK Mapping</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Initial Access</span>
                  <span className="text-sm text-muted-foreground">T1190 - Exploit Public-Facing Application</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Execution</span>
                  <span className="text-sm text-muted-foreground">T1059 - Command and Scripting Interpreter</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Exfiltration</span>
                  <span className="text-sm text-muted-foreground">T1048 - Exfiltration Over Alternative Protocol</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Affected Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Web Server</p>
                  <p className="text-sm text-muted-foreground">192.168.1.100</p>
                </div>
                <Button variant="outline" size="sm">Investigate</Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Database Server</p>
                  <p className="text-sm text-muted-foreground">192.168.1.101</p>
                </div>
                <Button variant="outline" size="sm">Investigate</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium mb-1">Immediate Actions</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Isolate affected systems</li>
                  <li>• Block malicious IPs</li>
                  <li>• Update web application firewall rules</li>
                </ul>
              </div>
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium mb-1">Long-term Mitigation</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Implement additional WAF rules</li>
                  <li>• Update security patches</li>
                  <li>• Enhance monitoring for similar patterns</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlertTriage;
