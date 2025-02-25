
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
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Search, Filter, ChevronDown, Code, FileJson, AlignJustify, Calendar as CalendarIcon } from "lucide-react";
import { sampleEvents, systemSources } from "@/data/sampleData";
import { format } from "date-fns";

const EventExplorer = () => {
  const [selectedSource, setSelectedSource] = useState<string>("");
  const [selectedViewMode, setSelectedViewMode] = useState<string>("list");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSeverity, setSelectedSeverity] = useState<string>("");
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });

  // Advanced filter states
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [includeRawLogs, setIncludeRawLogs] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filterEvents = (events: any[]) => {
    return events.filter(event => {
      const matchesSearch = searchQuery === "" || 
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.source.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesSource = selectedSource === "" || 
        event.source === systemSources.find(s => s.id.toString() === selectedSource)?.name;
      
      const matchesCategory = selectedCategory === "" || 
        event.category === selectedCategory;
      
      const matchesSeverity = selectedSeverity === "" || 
        event.severity === selectedSeverity;
      
      const matchesTypes = selectedTypes.length === 0 || 
        selectedTypes.includes(event.type);

      const matchesDateRange = !dateRange.from || !dateRange.to || 
        (new Date(event.timestamp) >= dateRange.from && 
         new Date(event.timestamp) <= dateRange.to);

      return matchesSearch && matchesSource && matchesCategory && 
             matchesSeverity && matchesTypes && matchesDateRange;
    });
  };

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
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                event.severity === 'high' ? 'bg-red-100 text-red-800' :
                event.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {event.severity}
              </span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100">
                {event.category}
              </span>
            </div>
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

  const uniqueCategories = Array.from(new Set(sampleEvents.map(event => event.category)));
  const uniqueTypes = Array.from(new Set(sampleEvents.map(event => event.type)));
  const filteredEvents = filterEvents(sampleEvents);

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
          <Sheet open={showAdvancedFilters} onOpenChange={setShowAdvancedFilters}>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px]">
              <SheetHeader>
                <SheetTitle>Advanced Filters</SheetTitle>
                <SheetDescription>
                  Configure advanced filtering options for events
                </SheetDescription>
              </SheetHeader>
              
              <div className="py-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Event Category</h3>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      {uniqueCategories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Severity Level</h3>
                  <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Severities</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Event Types</h3>
                  <div className="space-y-2">
                    {uniqueTypes.map(type => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={(checked) => {
                            setSelectedTypes(
                              checked
                                ? [...selectedTypes, type]
                                : selectedTypes.filter(t => t !== type)
                            );
                          }}
                        />
                        <label htmlFor={type} className="text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Date Range</h3>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateRange.from ? (
                          dateRange.to ? (
                            <>
                              {format(dateRange.from, "LLL dd, y")} -{" "}
                              {format(dateRange.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(dateRange.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date range</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        selected={{ from: dateRange.from, to: dateRange.to }}
                        onSelect={(range: any) => setDateRange(range)}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rawLogs"
                    checked={includeRawLogs}
                    onCheckedChange={(checked: boolean) => setIncludeRawLogs(checked)}
                  />
                  <label htmlFor="rawLogs" className="text-sm">
                    Include raw logs in search
                  </label>
                </div>
              </div>

              <SheetFooter>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedCategory("");
                    setSelectedSeverity("");
                    setSelectedTypes([]);
                    setDateRange({ from: undefined, to: undefined });
                    setIncludeRawLogs(false);
                  }}
                >
                  Reset Filters
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events... (e.g., user:admin, source:windows)"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedSource} onValueChange={setSelectedSource}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Sources</SelectItem>
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
          {filteredEvents.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No events found matching your filters
            </div>
          ) : (
            filteredEvents.map((event) => (
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
            ))
          )}
        </div>
      </Card>
    </div>
  );
};

export default EventExplorer;
