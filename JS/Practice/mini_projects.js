// Symbol for unique system ID (won't conflict)
const systemId = Symbol("dashboardId");

// BigInt for total platform-wide views
let totalViews = 9876543210123456789n;

// Users array (list of user objects)
let users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 28,
    isAdmin: true,
    followers: 1200,
    hobbies: ["reading", "coding", "gaming"],
    lastLogin: null // user hasn't logged in yet
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    age: 35,
    isAdmin: false,
    followers: 800,
    hobbies: ["travel", "music"],
    lastLogin: undefined // unknown
  }
];

// Add 1 user dynamically (show loop, object method)
users.push({
  id: 3,
  name: "Charlie",
  email: "charlie@web.com",
  age: 22,
  isAdmin: false,
  followers: 500,
  hobbies: ["sports", "music", "art"],
  lastLogin: null
});

// Boolean
let maintenanceMode = false;




console.log(`🛡️ Dashboard ID: ${systemId.toString()}`);
console.log(`Total platform views: ${totalViews.toString().slice(0,10)}...`);
console.log("Maintenance mode: " + maintenanceMode);

// Loop: for...of
for (let user of users) {
  console.log(`\nUser: ${user.name} (${user.email})`);
  console.log(`Age: ${user.age} | Admin: ${user.isAdmin ? "Yes" : "No"}`);
  console.log(`Followers: ${user.followers}`);
  console.log(`Hobbies: ${user.hobbies.join(", ")}`);
  console.log(`Last login: ${user.lastLogin ?? "Never logged in"}`);
}





// Total age & total followers
let totalAge = users.reduce((sum, user) => sum + user.age, 0);
let avgAge = (totalAge / users.length).toFixed(1);

let totalFollowers = users.reduce((sum, u) => sum + u.followers, 0);

console.log(`\n📊 Average age: ${avgAge}`);
console.log(`Total followers: ${totalFollowers}`);





let admins = users.filter(u => u.isAdmin).map(u => u.name);
console.log(`Admins: ${admins.join(", ")}`);

let popularUsers = users.filter(u => u.followers > 1000).map(u => u.name);
console.log(`Popular users (>1000 followers): ${popularUsers.join(", ")}`);






users.forEach(u => {
  let summary = `${u.name} (${u.email}) has ${u.followers} followers.`;
  console.log(summary.toUpperCase());
});






let userObj = users[0]; // pick first user
console.log("\nFirst user properties:");
console.log(Object.keys(userObj)); // property names
console.log(Object.values(userObj)); // values

console.log("Entries:");
Object.entries(userObj).forEach(([key, val]) => {
  console.log(`${key}: ${val}`);
});






users.forEach(u => {
  // Slug = lowercase, replace spaces
  let slug = u.name.toLowerCase().replace(" ", "-");
  console.log(`Slug for ${u.name}: ${slug}`);
});

// BigInt math: add 1000 new views
totalViews += 1000n;
console.log(`Updated total views: ${totalViews}`);





function showUserSummary(user) {
  return `
👤 ${user.name} (${user.email})
Age: ${user.age} | Followers: ${user.followers}
Hobbies: ${user.hobbies.join(", ")}
Last login: ${user.lastLogin ?? "Never"}
`.trim();
}

// Use in loop
for (let user of users) {
  console.log(showUserSummary(user));
}





users[1].lastLogin = null; // Bob logged out

users.forEach(u => {
  console.log(`${u.name}'s last login: ${u.lastLogin ?? "Unknown"}`);
});
