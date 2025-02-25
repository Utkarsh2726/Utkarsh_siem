
export const systemSources = [
  { id: 1, name: "Windows Server 2019", type: "Windows", status: "active" },
  { id: 2, name: "Ubuntu Web Server", type: "Linux", status: "active" },
  { id: 3, name: "Cisco ASA Firewall", type: "Network", status: "active" },
  { id: 4, name: "Palo Alto NGFW", type: "Network", status: "warning" },
  { id: 5, name: "Apache Web Server", type: "Linux", status: "active" },
  { id: 6, name: "Microsoft SQL Server", type: "Windows", status: "error" },
];

export const sampleAlerts = [
  {
    id: "ALT-001",
    severity: "critical",
    title: "Potential Ransomware Activity Detected",
    source: "Windows Server 2019",
    timestamp: "2024-03-20T10:30:00Z",
    status: "open",
    description: "Multiple file encryption attempts detected in short succession",
  },
  {
    id: "ALT-002",
    severity: "high",
    title: "Brute Force Attack Detected",
    source: "Ubuntu Web Server",
    timestamp: "2024-03-20T09:45:00Z",
    status: "investigating",
    description: "Multiple failed login attempts from IP 192.168.1.100",
  },
  {
    id: "ALT-003",
    severity: "medium",
    title: "Unusual Network Traffic",
    source: "Cisco ASA Firewall",
    timestamp: "2024-03-20T08:15:00Z",
    status: "closed",
    description: "High volume of outbound traffic to unknown IP addresses",
  },
];

export const sampleEvents = [
  {
    id: "EVT-001",
    timestamp: "2024-03-20T10:30:00Z",
    source: "Windows Server 2019",
    type: "Authentication",
    description: "Failed login attempt - user: admin",
  },
  {
    id: "EVT-002",
    timestamp: "2024-03-20T10:29:00Z",
    source: "Palo Alto NGFW",
    type: "Network",
    description: "Blocked outbound connection to malicious IP",
  },
  {
    id: "EVT-003",
    timestamp: "2024-03-20T10:28:00Z",
    source: "Apache Web Server",
    type: "Application",
    description: "HTTP 500 error in production environment",
  },
];

export const healthMetrics = {
  cpu: 65,
  memory: 78,
  disk: 45,
  network: 82,
  components: [
    { name: "Event Collector", status: "healthy", latency: "45ms" },
    { name: "Search Index", status: "healthy", latency: "120ms" },
    { name: "Alert Engine", status: "healthy", latency: "65ms" },
    { name: "Log Parser", status: "warning", latency: "350ms" },
  ],
};

export const systemHealth = [
  { name: "00:00", value: 98 },
  { name: "04:00", value: 95 },
  { name: "08:00", value: 97 },
  { name: "12:00", value: 92 },
  { name: "16:00", value: 96 },
  { name: "20:00", value: 98 },
];

export const eventTrends = [
  { name: "00:00", events: 245, alerts: 5 },
  { name: "04:00", events: 312, alerts: 8 },
  { name: "08:00", events: 478, alerts: 12 },
  { name: "12:00", events: 512, alerts: 15 },
  { name: "16:00", events: 392, alerts: 9 },
  { name: "20:00", events: 289, alerts: 7 },
];

export const threatCategories = [
  { name: "Malware", value: 35 },
  { name: "Brute Force", value: 25 },
  { name: "Data Exfiltration", value: 15 },
  { name: "Policy Violation", value: 25 },
];
