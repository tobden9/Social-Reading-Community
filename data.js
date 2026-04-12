// data.js
const bookData = [
    { "id": "1", "title": "The Last Kingdom", "author": "Bernard Cornwell", "genre": "History", "tags": ["Historical Fiction", "Vikings", "War"] },
    { "id": "2", "title": "Project Hail Mary", "author": "Andy Weir", "genre": "Sci-Fi", "tags": ["Space", "Science", "Survival"] },
    { "id": "3", "title": "The Name of the Wind", "author": "Patrick Rothfuss", "genre": "Fantasy", "tags": ["Magic", "Coming of Age", "Music"] },
    { "id": "4", "title": "The Silent Patient", "author": "Alex Michaelides", "genre": "Mystery", "tags": ["Psychological", "Suspense", "Thriller"] },
    { "id": "5", "title": "Dune", "author": "Frank Herbert", "genre": "Sci-Fi", "tags": ["Politics", "Desert", "Epic"] },
    { "id": "6", "title": "Circe", "author": "Madeline Miller", "genre": "History", "tags": ["Mythology", "Greece", "Fantasy"] },
    { "id": "7", "title": "The Way of Kings", "author": "Brandon Sanderson", "genre": "Fantasy", "tags": ["Epic", "High Fantasy", "Knights"] },
    { "id": "8", "title": "The 7 Deaths of Evelyn Hardcastle", "author": "Stuart Turton", "genre": "Mystery", "tags": ["Time Loop", "Whodunnit", "Creative"] },
    { "id": "9", "title": "The Pillars of the Earth", "author": "Ken Follett", "genre": "History", "tags": ["Cathedrals", "Medieval", "Drama"] },
    { "id": "10", "title": "Neuromancer", "author": "William Gibson", "genre": "Sci-Fi", "tags": ["Cyberpunk", "Hacking", "AI"] }
];

// Sprint 4 Data (PB8: Gamification, PB9: Progress Tracking)

const userData = {
    name: "Alex",
    readingGoal: 12,
    booksRead: 7,
    currentStreak: 5,
    clubs: ["Fantasy Readers", "Sci-Fi Circle"]
};

const badges = [
    { id: "b1", name: "First Page", description: "Finished your first book", icon: "📖", earned: true },
    { id: "b2", name: "On a Roll", description: "Read 3 books in a row", icon: "🔥", earned: true },
    { id: "b3", name: "Halfway There", description: "Reached 50% of your annual goal", icon: "⭐", earned: true },
    { id: "b4", name: "Club Champion", description: "Joined 2 book clubs", icon: "🏆", earned: true },
    { id: "b5", name: "Speed Reader", description: "Finished a book in under 7 days", icon: "⚡", earned: false },
    { id: "b6", name: "Genre Explorer", description: "Read books from 4 different genres", icon: "🗺️", earned: false },
    { id: "b7", name: "Bookworm", description: "Read 10 books", icon: "🐛", earned: false },
    { id: "b8", name: "Goal Crusher", description: "Hit your annual reading goal", icon: "🎯", earned: false }
];

const currentBooks = [
    {
        id: "cb1",
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        genre: "Fantasy",
        progress: 68,
        totalPages: 1007,
        pagesRead: 685,
        club: "Fantasy Readers",
        meetingDate: "2026-04-18"
    },
    {
        id: "cb2",
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "Sci-Fi",
        progress: 32,
        totalPages: 476,
        pagesRead: 152,
        club: "Sci-Fi Circle",
        meetingDate: "2026-04-20"
    }
];

const milestones = [
    { percent: 25, label: "Quarter Done", reached: true },
    { percent: 50, label: "Halfway", reached: true },
    { percent: 75, label: "Almost There", reached: false },
    { percent: 100, label: "Goal Reached!", reached: false }
];

const recentActivity = [
    { date: "2026-04-10", action: "Updated progress on The Way of Kings to 68%" },
    { date: "2026-04-08", action: "Earned badge: Club Champion" },
    { date: "2026-04-06", action: "Finished Dune — book #7 of 12" },
    { date: "2026-04-03", action: "Joined Sci-Fi Circle book club" }
];