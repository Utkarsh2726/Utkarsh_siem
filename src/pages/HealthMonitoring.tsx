
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Cpu, HardDrive, Network } from "lucide-react";
import { healthMetrics } from "@/data/sampleData";

const HealthMonitoring = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">Health Monitoring</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={healthMetrics.cpu} />
              <p className="text-xs text-muted-foreground">{healthMetrics.cpu}% utilized</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={healthMetrics.memory} />
              <p className="text-xs text-muted-foreground">{healthMetrics.memory}% utilized</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disk Usage</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={healthMetrics.disk} />
              <p className="text-xs text-muted-foreground">{healthMetrics.disk}% utilized</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Usage</CardTitle>
            <Network className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={healthMetrics.network} />
              <p className="text-xs text-muted-foreground">{healthMetrics.network}% utilized</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Component Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {healthMetrics.components.map((component) => (
              <div key={component.name} className="flex items-center justify-between">
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
    </div>
  );
};

export default HealthMonitoring;
