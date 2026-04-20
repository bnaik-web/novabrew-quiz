export const personalityTypes = {
  "Bold Explorer": {
    name: "Bold Explorer",
    description: "Loves intense, dark roasts. Ethiopian Yirgacheffe, Sumatra Mandheling. The person who orders an espresso and means it. Adventurous, confident, no sugar needed.",
    coffee: "Off the Map",
    coffeeDescription: "Experimental processing, funky fruit notes, surprises every time. Rotating micro-lot.",
  },
  "Smooth Operator": {
    name: "Smooth Operator",
    description: "Medium roasts, balanced flavors, crowd-pleasers. Colombian Supremo, Brazilian Santos. Reliable, consistent, the friend everyone likes. Appreciates quality but does not need to shout about it.",
    coffee: "Velvet Fog",
    coffeeDescription: "Medium-light, creamy mouthfeel, almond and cocoa notes. Brazilian.",
  },
  "Cozy Classic": {
    name: "Cozy Classic",
    description: "Comfort-first. Flavored coffees, light-to-medium roasts, pairs with a good book. Hazelnut, vanilla, caramel notes. The cozy Sunday morning person.",
    coffee: "Campfire Stories",
    coffeeDescription: "Dark roast, s'mores vibes, marshmallow and graham. Flavored blend.",
  },
  "Wild Card": {
    name: "Wild Card",
    description: "The experimenter. Single-origin micro-lots, unusual processing methods, funky natural ferments. This person orders whatever is weirdest on the menu and loves it.",
    coffee: "Double Down",
    coffeeDescription: "Extra-bold espresso roast, thick crema, no apologies. Italian-style.",
  }
};

export const questions = [
  {
    question: "It's Saturday morning and you have the whole day to yourself. What's the plan?",
    options: [
      { text: "Going on an impromptu hike or exploring a new neighborhood.", type: "Bold Explorer" },
      { text: "Catching up on life admin at a local cafe and running practical errands.", type: "Smooth Operator" },
      { text: "Staying in pajamas until noon, baking something sweet, and reading.", type: "Cozy Classic" },
      { text: "Thrifting for bizarre vintage finds or trying a bizarre new hobby.", type: "Wild Card" }
    ]
  },
  {
    question: "Which color palette catches your eye the most?",
    options: [
      { text: "Deep charcoal, burnt orange, and dark forest green.", type: "Bold Explorer" },
      { text: "Slate grey, navy blue, and crisp white.", type: "Smooth Operator" },
      { text: "Warm beige, soft cream, and muted blush pink.", type: "Cozy Classic" },
      { text: "Neon yellow, electric blue, and striking magenta.", type: "Wild Card" }
    ]
  },
  {
    question: "When going out for dinner, how do you usually order?",
    options: [
      { text: "I find the spiciest or most intense dish on the menu and go for it.", type: "Bold Explorer" },
      { text: "I stick to the classics—a beautifully made, reliable dish never fails.", type: "Smooth Operator" },
      { text: "I look for whatever sounds the most comforting, warm, and filling.", type: "Cozy Classic" },
      { text: "I order the weirdest thing on the menu or ask the waiter to surprise me.", type: "Wild Card" }
    ]
  },
  {
    question: "If your life were a movie, what genre would it be?",
    options: [
      { text: "A high-stakes, action-packed adventure film.", type: "Bold Explorer" },
      { text: "A sleek, polished, and critically-acclaimed modern drama.", type: "Smooth Operator" },
      { text: "A heartwarming and feel-good romantic comedy.", type: "Cozy Classic" },
      { text: "A quirky, surreal, and unpredictable indie film.", type: "Wild Card" }
    ]
  },
  {
    question: "You're planning your ideal vacation. Where are you heading?",
    options: [
      { text: "Trekking across remote trails or backpacking in Patagonia.", type: "Bold Explorer" },
      { text: "A premium hotel in an iconic city with a perfectly curated itinerary.", type: "Smooth Operator" },
      { text: "A quiet, secluded lakeside cabin with a fireplace and plenty of books.", type: "Cozy Classic" },
      { text: "A vibrant, underground art street-festival in a city you've barely heard of.", type: "Wild Card" }
    ]
  }
];
