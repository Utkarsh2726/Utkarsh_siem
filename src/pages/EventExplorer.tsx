
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { sampleEvents, systemSources } from "@/data/sampleData";

const EventExplorer = () => {
  const [selectedSource, setSelectedSource] = useState<string>("");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">Event Explorer</h1>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Advanced Filters
        </Button>
      </div>

      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              className="pl-10"
            />
          </div>
          <Select value={selectedSource} onValueChange={setSelectedSource}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              {systemSources.map((source) => (
                <SelectItem key={source.id} value={source.id.toString()}>
                  {source.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card className="p-4">
        <div className="space-y-4">
          {sampleEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start justify-between p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
            >
              <div className="space-y-1">
                <p className="font-medium">{event.description}</p>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>{event.source}</span>
                  <span>•</span>
                  <span>{event.type}</span>
                  <span>•</span>
                  <span>{new Date(event.timestamp).toLocaleString()}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm">View Details</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default EventExplorer;
