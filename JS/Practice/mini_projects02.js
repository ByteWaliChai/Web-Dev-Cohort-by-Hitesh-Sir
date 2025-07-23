// Unique system ID using Symbol
const systemId = Symbol("eventDashboard");

// BigInt: total views
let platformViews = 12345678901234567890n;

// Users array
const users = [
  { id: 1, name: "Alice", email: "alice@mail.com", isAdmin: true },
  { id: 2, name: "Bob", email: "bob@mail.com", isAdmin: false }
];

// Events array
let events = [
  {
    id: 101,
    title: "JavaScript Conference",
    description: null,
    capacity: 300,
    attendees: 120,
    isOnline: true,
    tags: ["javascript", "web", "dev"],
    hostId: 1,
    lastUpdated: undefined // unknown
  },
  {
    id: 102,
    title: "Node.js Meetup",
    description: "Community meetup to discuss Node.js",
    capacity: 100,
    attendees: 80,
    isOnline: false,
    tags: ["nodejs", "backend"],
    hostId: 2,
    lastUpdated: null
  }
];

// Boolean: maintenance mode
let maintenanceMode = false;






class EventManager {
  constructor(events, users) {
    this.events = events;
    this.users = users;
  }

  // Function: list all events
  listEvents() {
    this.events.forEach(e => {
      console.log(`📅 ${e.title} | Attendees: ${e.attendees}/${e.capacity}`);
    });
  }

  // Function: add new event
  addEvent(event) {
    this.events.push(event);
    console.log(`✅ Added event: ${event.title}`);
  }

  // Function: calculate average attendees
  avgAttendees() {
    let total = this.events.reduce((sum, e) => sum + e.attendees, 0);
    return (total / this.events.length).toFixed(1);
  }

  // Function: get popular tags
  getPopularTags() {
    let allTags = this.events.flatMap(e => e.tags);
    let counts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).sort((a,b)=>b[1]-a[1]);
  }

  // Function: get event summary (string methods)
  eventSummary(eventId) {
    let e = this.events.find(e => e.id === eventId);
    if (!e) return "Event not found.";
    return `${e.title.toUpperCase()} | ${e.attendees} attendees | Tags: ${e.tags.join(", ")}`;
  }
}





const manager = new EventManager(events, users);

manager.listEvents();
console.log("Average attendees:", manager.avgAttendees());
console.log("Popular tags:", manager.getPopularTags());
console.log(manager.eventSummary(101));





const newEvent = {
  id: 103,
  title: "React Summit",
  description: "Advanced React topics",
  capacity: 500,
  attendees: 300,
  isOnline: true,
  tags: ["react", "frontend", "javascript"],
  hostId: 1,
  lastUpdated: null
};

manager.addEvent(newEvent);
manager.listEvents();







console.log(`System ID: ${systemId.toString()}`);
console.log(`Platform total views: ${platformViews.toString().slice(0,8)}...`);
console.log(`Maintenance mode: ${maintenanceMode ? "ON" : "OFF"}`);
console.log(`New event description: ${newEvent.description ?? "No description"}`);
console.log(`Last updated: ${newEvent.lastUpdated ?? "Unknown"}`);





// for...of: list user emails
for (let user of users) {
  console.log(`User: ${user.name} (${user.email})`);
}

// Object.entries: print event IDs & titles
Object.entries(events).forEach(([index, event]) => {
  console.log(`Event ID: ${event.id} | Title: ${event.title}`);
});





// Add 5000 new views
platformViews += 5000n;
console.log(`Updated views: ${platformViews}`);





function summaryReport(manager) {
  return `
=== 📊 EVENT DASHBOARD SUMMARY ===
Events count: ${manager.events.length}
Average attendees: ${manager.avgAttendees()}
Most popular tag: ${manager.getPopularTags()[0][0]}
Maintenance: ${maintenanceMode ? "ON" : "OFF"}
`.trim();
}

console.log(summaryReport(manager));
