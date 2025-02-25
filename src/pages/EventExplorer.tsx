
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, Filter, ChevronDown, Code, FileJson, AlignJustify } from "lucide-react";
import { sampleEvents, systemSources } from "@/data/sampleData";

const EventExplorer = () => {
  const [selectedSource, setSelectedSource] = useState<string>("");
  const [selectedViewMode, setSelectedViewMode] = useState<string>("list");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const renderEventDetails = (event: any, viewMode: string) => {
    switch (viewMode) {
      case 'json':
        return (
          <pre className="bg-muted p-4 rounded-lg overflow-auto">
            {JSON.stringify(event, null, 2)}
          </pre>
        );
      case 'raw':
        return (
          <pre className="font-mono text-sm bg-muted p-4 rounded-lg overflow-auto">
            {`${event.timestamp} ${event.source} [${event.type}]: ${event.description}`}
          </pre>
        );
      default:
        return (
          <div className="space-y-2">
            <p className="font-medium">{event.description}</p>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <span>{event.source}</span>
              <span>•</span>
              <span>{event.type}</span>
              <span>•</span>
              <span>{new Date(event.timestamp).toLocaleString()}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1>Event Explorer</h1>
        <div className="flex gap-2">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={selectedViewMode === "list" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setSelectedViewMode("list")}
            >
              <AlignJustify className="h-4 w-4" />
            </Button>
            <Button
              variant={selectedViewMode === "json" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setSelectedViewMode("json")}
            >
              <FileJson className="h-4 w-4" />
            </Button>
            <Button
              variant={selectedViewMode === "raw" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setSelectedViewMode("raw")}
            >
              <Code className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filters
          </Button>
        </div>
      </div>

      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events... (e.g., user:admin, source:windows)"
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
            <Sheet key={event.id}>
              <SheetTrigger asChild>
                <div
                  className="flex items-start justify-between p-4 rounded-lg border bg-card hover:bg-accent transition-colors cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  {renderEventDetails(event, selectedViewMode)}
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Event Details</SheetTitle>
                  <SheetDescription>
                    Detailed view of the selected event
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Raw Log</h3>
                    <pre className="font-mono text-sm bg-muted p-4 rounded-lg overflow-auto">
                      {`${event.timestamp} ${event.source} [${event.type}]: ${event.description}`}
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">JSON View</h3>
                    <pre className="bg-muted p-4 rounded-lg overflow-auto">
                      {JSON.stringify(event, null, 2)}
                    </pre>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default EventExplorer;
