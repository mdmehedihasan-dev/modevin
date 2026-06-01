// High-fidelity rich dataset matching both page 1 of the screenshot and enriching with realistic user profiles to enable fully working pagination/filters
export const mockTransactions = [
  // Page 1 matches Screenshot 1 perfectly
  {
    id: 1,
    user: {
      name: "Evelyn Thorne",
      collectorId: "LA- 8892",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      email: "evelyn.thorne@example.com"
    },
    trxId: "#123456",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$75",
    date: "2 hours ago",
    dateString: "02-24-2024",
    acNumber: "**** **** **** *545",
    type: "All Users"
  },
  {
    id: 2,
    user: {
      name: "Evelyn Thorne",
      collectorId: "LA- 8892",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      email: "evelyn.thorne@example.com"
    },
    trxId: "#123456",
    subscription: "Pro",
    planName: "Pro Subscription",
    price: "$25",
    date: "2 hours ago",
    dateString: "02-24-2024",
    acNumber: "**** **** **** *545",
    type: "All Users"
  },
  {
    id: 3,
    user: {
      name: "Evelyn Thorne",
      collectorId: "LA- 8892",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      email: "evelyn.thorne@example.com"
    },
    trxId: "#123456",
    subscription: "Basic",
    planName: "Basic Subscription",
    price: "$25",
    date: "2 hours ago",
    dateString: "02-24-2024",
    acNumber: "**** **** **** *545",
    type: "All Users"
  },
  {
    id: 4,
    user: {
      name: "Evelyn Thorne",
      collectorId: "LA- 8892",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      email: "evelyn.thorne@example.com"
    },
    trxId: "#123456",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$25",
    date: "2 hours ago",
    dateString: "02-24-2024",
    acNumber: "**** **** **** *545",
    type: "All Users"
  },
  // Additional pages & modal verification users
  {
    id: 5,
    user: {
      name: "John Doe",
      collectorId: "LA- 5451",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      email: "john@email.com"
    },
    trxId: "#12345678",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$75",
    date: "2 hours ago",
    dateString: "02-24-2024",
    acNumber: "**** **** **** *545",
    type: "All Users"
  },
  {
    id: 6,
    user: {
      name: "Marcus Wright",
      collectorId: "LA- 5521",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      email: "m.wright@gmail.com"
    },
    trxId: "#98765432",
    subscription: "Pro",
    planName: "Pro Subscription",
    price: "$25",
    date: "5 hours ago",
    dateString: "02-23-2024",
    acNumber: "**** **** **** *911",
    type: "All Users"
  },
  {
    id: 7,
    user: {
      name: "Elena Rodriguez",
      collectorId: "LA- 9112",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      email: "rodriguez.e@vanguard.com"
    },
    trxId: "#33445566",
    subscription: "Basic",
    planName: "Basic Subscription",
    price: "$25",
    date: "1 day ago",
    dateString: "02-22-2024",
    acNumber: "**** **** **** *112",
    type: "All Users"
  },
  {
    id: 8,
    user: {
      name: "Alexander Sterling",
      collectorId: "LA- 0422",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
      email: "a.sterling@chronos.io"
    },
    trxId: "#66778899",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$75",
    date: "2 days ago",
    dateString: "02-21-2024",
    acNumber: "**** **** **** *422",
    type: "All Users"
  },
  {
    id: 9,
    user: {
      name: "Sophia Loren",
      collectorId: "LA- 1121",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      email: "s.loren@cinecitta.it"
    },
    trxId: "#77889900",
    subscription: "Pro",
    planName: "Pro Subscription",
    price: "$25",
    date: "3 days ago",
    dateString: "02-20-2024",
    acNumber: "**** **** **** *121",
    type: "All Users"
  },
  {
    id: 10,
    user: {
      name: "Clara Oswald",
      collectorId: "LA- 0399",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      email: "c.oswald@tardis.co.uk"
    },
    trxId: "#10293847",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$75",
    date: "5 days ago",
    dateString: "02-18-2024",
    acNumber: "**** **** **** *399",
    type: "All Users"
  },
  {
    id: 11,
    user: {
      name: "Alistair Cooke",
      collectorId: "LA- 5612",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      email: "a.cooke@chronicle.org"
    },
    trxId: "#84739201",
    subscription: "Basic",
    planName: "Basic Subscription",
    price: "$25",
    date: "1 week ago",
    dateString: "02-15-2024",
    acNumber: "**** **** **** *612",
    type: "All Users"
  },
  // Internal transaction items to enable toggle filtering
  {
    id: 12,
    user: {
      name: "Charles Leclerc",
      collectorId: "LA- 1616",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      email: "c.leclerc@scuderia.mc"
    },
    trxId: "#99008811",
    subscription: "Pro",
    planName: "Pro Subscription",
    price: "$25",
    date: "5 hours ago",
    dateString: "02-23-2024",
    acNumber: "**** **** **** *161",
    type: "Internal"
  },
  {
    id: 13,
    user: {
      name: "Victoria Windsor",
      collectorId: "LA- 1901",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      email: "v.windsor@royal.gov.uk"
    },
    trxId: "#11223344",
    subscription: "Basic",
    planName: "Basic Subscription",
    price: "$25",
    date: "1 day ago",
    dateString: "02-22-2024",
    acNumber: "**** **** **** *190",
    type: "Internal"
  },
  {
    id: 14,
    user: {
      name: "Thomas Cromwell",
      collectorId: "LA- 1540",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      email: "tcromwell@tudor.court"
    },
    trxId: "#55667788",
    subscription: "Legacy",
    planName: "Monthly Subscription",
    price: "$75",
    date: "2 days ago",
    dateString: "02-21-2024",
    acNumber: "**** **** **** *154",
    type: "Internal"
  }
];
