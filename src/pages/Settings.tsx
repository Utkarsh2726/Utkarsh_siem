
import { Card } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
      </div>
      <Card className="p-4">
        <div className="text-center text-muted-foreground">
          Settings interface will be implemented here
        </div>
      </Card>
    </div>
  );
};

export default Settings;
