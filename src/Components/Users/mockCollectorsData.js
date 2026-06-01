// Rich, high-fidelity mock collectors dataset matching the look and feel of the dashboard
const rawMockCollectors = [
  {
    id: 1,
    name: "Alexander Sterling",
    email: "a.sterling@chronos.io",
    plan: "ELITE",
    status: "Active",
    lastActive: "2 mins ago",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    email: "rodriguez.e@vanguard.com",
    plan: "PREMIUM",
    status: "Active",
    lastActive: "14 hrs ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 3,
    name: "Marcus Wright",
    email: "m.wright@gmail.com",
    plan: "FREE",
    status: "Suspended",
    lastActive: "Oct 12, 2023",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 4,
    name: "Julian Thorne",
    email: "j.thorne@horizon.net",
    plan: "ELITE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 5,
    name: "Julian Thorne",
    email: "j.thorne@horizon.net",
    plan: "ELITE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 6,
    name: "Julian Thorne",
    email: "j.thorne@horizon.net",
    plan: "ELITE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 7,
    name: "Julian Thorne",
    email: "j.thorne@horizon.net",
    plan: "ELITE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 8,
    name: "Julian Thorne",
    email: "j.thorne@horizon.net",
    plan: "ELITE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  // Page 2 & 3 mock users for beautiful paginated experience
  {
    id: 9,
    name: "Clara Oswald",
    email: "c.oswald@tardis.co.uk",
    plan: "PREMIUM",
    status: "Active",
    lastActive: "5 mins ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 10,
    name: "Alistair Cooke",
    email: "a.cooke@chronicle.org",
    plan: "FREE",
    status: "Active",
    lastActive: "2 hrs ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 11,
    name: "Sophia Loren",
    email: "s.loren@cinecitta.it",
    plan: "ELITE",
    status: "Active",
    lastActive: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 12,
    name: "Charles Leclerc",
    email: "c.leclerc@scuderia.mc",
    plan: "PREMIUM",
    status: "Suspended",
    lastActive: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 13,
    name: "Victoria Windsor",
    email: "v.windsor@royal.gov.uk",
    plan: "ELITE",
    status: "Active",
    lastActive: "10 mins ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 14,
    name: "Thomas Cromwell",
    email: "tcromwell@tudor.court",
    plan: "FREE",
    status: "Pending",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 15,
    name: "Anne Boleyn",
    email: "aboleyn@tudor.court",
    plan: "PREMIUM",
    status: "Pending",
    lastActive: "4 days ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 16,
    name: "Winston Churchill",
    email: "w.churchill@downing.gov.uk",
    plan: "ELITE",
    status: "Active",
    lastActive: "5 hrs ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 17,
    name: "Albert Einstein",
    email: "aeinstein@princeton.edu",
    plan: "FREE",
    status: "Active",
    lastActive: "12 hrs ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 18,
    name: "Arthur Pendragon",
    email: "arthur@camelot.kingdom",
    plan: "ELITE",
    status: "Active",
    lastActive: "3 mins ago",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 19,
    name: "Guinevere du Lac",
    email: "guinevere@camelot.kingdom",
    plan: "PREMIUM",
    status: "Active",
    lastActive: "20 mins ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 20,
    name: "Robin Hood",
    email: "robin@sherwood.forest",
    plan: "FREE",
    status: "Suspended",
    lastActive: "Dec 25, 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 21,
    name: "Marian Fitzwalter",
    email: "marian@sherwood.forest",
    plan: "PREMIUM",
    status: "Active",
    lastActive: "Yesterday",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 22,
    name: "Richard Lionheart",
    email: "richard@england.crown",
    plan: "ELITE",
    status: "Pending",
    lastActive: "6 days ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 23,
    name: "Jane Seymour",
    email: "jseymour@tudor.court",
    plan: "FREE",
    status: "Active",
    lastActive: "8 hrs ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 24,
    name: "Erasmus Rotterdam",
    email: "erasmus@humanist.org",
    plan: "PREMIUM",
    status: "Active",
    lastActive: "1 day ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 25,
    name: "Martin Luther",
    email: "luther@wittenberg.de",
    plan: "FREE",
    status: "Pending",
    lastActive: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 26,
    name: "John Calvin",
    email: "calvin@geneva.ch",
    plan: "ELITE",
    status: "Suspended",
    lastActive: "Oct 27, 2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const mockCollectors = rawMockCollectors.map((c, index) => {
  const phoneNumbers = [
    "+1 (555) 012-3456",
    "+1 (555) 234-5678",
    "+1 (555) 987-6543",
    "+1 (555) 876-5432",
    "+1 (555) 765-4321"
  ];
  const joinedDates = [
    "Jan 12, 2022",
    "Mar 24, 2021",
    "Nov 02, 2023",
    "Jul 19, 2022",
    "Sep 05, 2022",
    "May 14, 2023"
  ];
  const regions = [
    "North America",
    "Europe",
    "Asia",
    "Switzerland",
    "United Kingdom"
  ];
  
  return {
    ...c,
    phone: phoneNumbers[index % phoneNumbers.length],
    joinedDate: joinedDates[index % joinedDates.length],
    region: regions[index % regions.length],
    billingHistory: [
      { id: "9982", date: "Oct 2023", amount: "$24.99" },
      { id: "9421", date: "Sep 2023", amount: "$24.99" }
    ]
  };
});
