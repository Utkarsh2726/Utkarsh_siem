
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";

const AlertTriage = () => {
  const { alertId } = useParams();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">Alert Triage</h1>
      </div>
      <Card className="p-4">
        <div className="text-center text-muted-foreground">
          Alert triage interface for ID: {alertId} will be implemented here
        </div>
      </Card>
    </div>
  );
};

export default AlertTriage;
