
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sampleAlerts } from "@/data/sampleData";

const severityColor = (severity: string) => {
  switch (severity) {
    case "critical":
      return "bg-red-100 text-red-800";
    case "high":
      return "bg-orange-100 text-orange-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-blue-100 text-blue-800";
  }
};

const statusColor = (status: string) => {
  switch (status) {
    case "open":
      return "bg-red-100 text-red-800";
    case "investigating":
      return "bg-yellow-100 text-yellow-800";
    case "closed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Alerts = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">Alert Management</h1>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severities</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
            </SelectContent>
          </Select>
          <Button>New Alert Rule</Button>
        </div>
      </div>

      <Card className="p-4">
        <div className="space-y-4">
          {sampleAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start justify-between p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${severityColor(alert.severity)}`}>
                    {alert.severity}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor(alert.status)}`}>
                    {alert.status}
                  </span>
                </div>
                <p className="font-medium">{alert.title}</p>
                <p className="text-sm text-muted-foreground">{alert.description}</p>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>{alert.source}</span>
                  <span>•</span>
                  <span>{new Date(alert.timestamp).toLocaleString()}</span>
                </div>
              </div>
              <Button asChild variant="outline">
                <Link to={`/triage/${alert.id}`}>Investigate</Link>
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Alerts;
