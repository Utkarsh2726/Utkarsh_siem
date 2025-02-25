export const systemSources = [
  { id: 1, name: "Windows Server 2019", type: "Windows", status: "active" },
  { id: 2, name: "Ubuntu Web Server", type: "Linux", status: "active" },
  { id: 3, name: "Cisco ASA Firewall", type: "Network", status: "active" },
  { id: 4, name: "Palo Alto NGFW", type: "Network", status: "warning" },
  { id: 5, name: "Apache Web Server", type: "Linux", status: "active" },
  { id: 6, name: "Microsoft SQL Server", type: "Windows", status: "error" },
  { id: 7, name: "FortiGate Firewall", type: "Network", status: "active" },
  { id: 8, name: "Exchange Server", type: "Windows", status: "warning" },
  { id: 9, name: "Domain Controller", type: "Windows", status: "active" },
  { id: 10, name: "Redis Cache Server", type: "Linux", status: "active" }
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
  {
    id: "ALT-004",
    severity: "critical",
    title: "SQL Injection Attempt",
    source: "Microsoft SQL Server",
    timestamp: "2024-03-20T10:15:00Z",
    status: "open",
    description: "Multiple malformed SQL queries detected from web application",
  },
  {
    id: "ALT-005",
    severity: "high",
    title: "Privilege Escalation",
    source: "Domain Controller",
    timestamp: "2024-03-20T09:30:00Z",
    status: "investigating",
    description: "Unauthorized attempt to gain administrator privileges",
  },
  {
    id: "ALT-006",
    severity: "medium",
    title: "SSL Certificate Expiring",
    source: "Apache Web Server",
    timestamp: "2024-03-20T08:45:00Z",
    status: "open",
    description: "SSL certificate will expire in 7 days",
  },
  {
    id: "ALT-007",
    severity: "critical",
    title: "Data Exfiltration Attempt",
    source: "Palo Alto NGFW",
    timestamp: "2024-03-20T10:00:00Z",
    status: "investigating",
    description: "Large data transfer to known malicious IP address",
  },
  {
    id: "ALT-008",
    severity: "high",
    title: "Exchange Server Vulnerability",
    source: "Exchange Server",
    timestamp: "2024-03-20T09:15:00Z",
    status: "open",
    description: "Critical security patch missing (CVE-2024-XXX)",
  },
  {
    id: "ALT-009",
    severity: "medium",
    title: "Failed Backup Job",
    source: "Windows Server 2019",
    timestamp: "2024-03-20T08:30:00Z",
    status: "closed",
    description: "System backup job failed due to insufficient storage",
  },
  {
    id: "ALT-010",
    severity: "high",
    title: "Memory Overflow Attack",
    source: "Redis Cache Server",
    timestamp: "2024-03-20T07:45:00Z",
    status: "investigating",
    description: "Buffer overflow attempt detected in cache server",
  }
];

export const sampleEvents = [
  {
    id: "EVT-001",
    timestamp: "2024-03-20T10:30:00Z",
    source: "Windows Server 2019",
    type: "Authentication",
    description: "Failed login attempt - user: admin",
    severity: "medium",
    category: "Security"
  },
  {
    id: "EVT-002",
    timestamp: "2024-03-20T10:29:00Z",
    source: "Palo Alto NGFW",
    type: "Network",
    description: "Blocked outbound connection to malicious IP",
    severity: "high",
    category: "Security"
  },
  {
    id: "EVT-003",
    timestamp: "2024-03-20T10:28:00Z",
    source: "Apache Web Server",
    type: "Application",
    description: "HTTP 500 error in production environment",
    severity: "low",
    category: "Application"
  },
  {
    id: "EVT-004",
    timestamp: "2024-03-20T10:27:00Z",
    source: "Domain Controller",
    type: "Authentication",
    description: "User account locked out: jsmith",
    severity: "medium",
    category: "Security"
  },
  {
    id: "EVT-005",
    timestamp: "2024-03-20T10:26:00Z",
    source: "Microsoft SQL Server",
    type: "Database",
    description: "Deadlock detected in transaction",
    severity: "medium",
    category: "Database"
  },
  {
    id: "EVT-006",
    timestamp: "2024-03-20T10:25:00Z",
    source: "FortiGate Firewall",
    type: "Network",
    description: "IPS signature match: SQL injection attempt",
    severity: "high",
    category: "Security"
  },
  {
    id: "EVT-007",
    timestamp: "2024-03-20T10:24:00Z",
    source: "Exchange Server",
    type: "Application",
    description: "Transport service stopped unexpectedly",
    severity: "high",
    category: "Application"
  },
  {
    id: "EVT-008",
    timestamp: "2024-03-20T10:23:00Z",
    source: "Ubuntu Web Server",
    type: "System",
    description: "High CPU utilization alert",
    severity: "medium",
    category: "Performance"
  },
  {
    id: "EVT-009",
    timestamp: "2024-03-20T10:22:00Z",
    source: "Redis Cache Server",
    type: "Application",
    description: "Cache eviction threshold reached",
    severity: "low",
    category: "Performance"
  },
  {
    id: "EVT-010",
    timestamp: "2024-03-20T10:21:00Z",
    source: "Cisco ASA Firewall",
    type: "Network",
    description: "VPN tunnel down: Site-to-Site connection",
    severity: "high",
    category: "Network"
  }
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
