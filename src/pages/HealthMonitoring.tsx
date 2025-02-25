
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, Cpu, HardDrive, Network, Database, 
  Box, Server, AlertTriangle 
} from "lucide-react";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import { healthMetrics } from "@/data/sampleData";

const performanceData = [
  { time: "00:00", ingestion: 2400, indexing: 1800, queries: 3200 },
  { time: "04:00", ingestion: 1398, indexing: 2800, queries: 2800 },
  { time: "08:00", ingestion: 9800, indexing: 7800, queries: 5200 },
  { time: "12:00", ingestion: 3908, indexing: 3800, queries: 4800 },
  { time: "16:00", ingestion: 4800, indexing: 4300, queries: 3800 },
  { time: "20:00", ingestion: 3800, indexing: 2800, queries: 2800 },
];

const HealthMonitoring = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1>Health Monitoring</h1>
          <p className="text-sm text-muted-foreground">
            System performance and health metrics
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SIEM Core CPU</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={healthMetrics.cpu} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{healthMetrics.cpu}% utilized</span>
                <span>24 cores</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heap Memory</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={healthMetrics.memory} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{healthMetrics.memory}% utilized</span>
                <span>64GB total</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Index Storage</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={healthMetrics.disk} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{healthMetrics.disk}% utilized</span>
                <span>2TB total</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network I/O</CardTitle>
            <Network className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={healthMetrics.network} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{healthMetrics.network}% utilized</span>
                <span>10Gbps total</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="ingestion" 
                stroke="#9b87f5" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="indexing" 
                stroke="#4ecdc4" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="queries" 
                stroke="#ff6b6b" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Components Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {healthMetrics.components.map((component) => (
                <div key={component.name} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">{component.name}</p>
                    <p className="text-sm text-muted-foreground">Latency: {component.latency}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className={`h-4 w-4 ${
                      component.status === "healthy" ? "text-green-500" : "text-yellow-500"
                    }`} />
                    <span className={`text-sm font-medium ${
                      component.status === "healthy" ? "text-green-500" : "text-yellow-500"
                    }`}>
                      {component.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">Data Ingestion Pipeline</p>
                  <p className="text-sm text-muted-foreground">Processing 2.3k EPS</p>
                </div>
                <Activity className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">Elasticsearch Cluster</p>
                  <p className="text-sm text-muted-foreground">3/3 nodes healthy</p>
                </div>
                <Server className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">Alert Engine</p>
                  <p className="text-sm text-muted-foreground">Processing delay: 1.2s</p>
                </div>
                <Box className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">Machine Learning</p>
                  <p className="text-sm text-muted-foreground">Model accuracy: 98.5%</p>
                </div>
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthMonitoring;
