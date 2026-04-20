# NovaBrew Coffee Taste Profile Quiz — Requirements

## Overview
A web-based personality quiz that matches coffee subscribers to their "coffee personality" and recommends specific NovaBrew coffees based on their results.

## Personality Types
1. **Bold Explorer** — Loves intense, dark roasts. Ethiopian Yirgacheffe, Sumatra Mandheling. The person who orders an espresso and means it. Adventurous, confident, no sugar needed.
2. **Smooth Operator** — Medium roasts, balanced flavors, crowd-pleasers. Colombian Supremo, Brazilian Santos. Reliable, consistent, the friend everyone likes. Appreciates quality but does not need to shout about it.
3. **Cozy Classic** — Comfort-first. Flavored coffees, light-to-medium roasts, pairs with a good book. Hazelnut, vanilla, caramel notes. The cozy Sunday morning person.
4. **Wild Card** — The experimenter. Single-origin micro-lots, unusual processing methods, funky natural ferments. This person orders whatever is weirdest on the menu and loves it.

## Coffee Pairings
- **Bold Explorer:** Off the Map (Experimental processing, funky fruit notes, surprises every time. Rotating micro-lot.)
- **Smooth Operator:** Velvet Fog (Medium-light, creamy mouthfeel, almond and cocoa notes. Brazilian.)
- **Cozy Classic:** Campfire Stories (Dark roast, s'mores vibes, marshmallow and graham. Flavored blend.)
- **Wild Card:** Double Down (Extra-bold espresso roast, thick crema, no apologies. Italian-style.)

## Quiz Questions
**Question 1: It's Saturday morning and you have the whole day to yourself. What's the plan?**
- A) Going on an impromptu hike or exploring a new neighborhood. (Bold Explorer)
- B) Catching up on life admin at a local cafe and running practical errands. (Smooth Operator)
- C) Staying in pajamas until noon, baking something sweet, and reading. (Cozy Classic)
- D) Thrifting for bizarre vintage finds or trying a bizarre new hobby. (Wild Card)

**Question 2: Which color palette catches your eye the most?**
- A) Deep charcoal, burnt orange, and dark forest green. (Bold Explorer)
- B) Slate grey, navy blue, and crisp white. (Smooth Operator)
- C) Warm beige, soft cream, and muted blush pink. (Cozy Classic)
- D) Neon yellow, electric blue, and striking magenta. (Wild Card)

**Question 3: When going out for dinner, how do you usually order?**
- A) I find the spiciest or most intense dish on the menu and go for it. (Bold Explorer)
- B) I stick to the classics—a beautifully made, reliable dish never fails. (Smooth Operator)
- C) I look for whatever sounds the most comforting, warm, and filling. (Cozy Classic)
- D) I order the weirdest thing on the menu or ask the waiter to surprise me. (Wild Card)

**Question 4: If your life were a movie, what genre would it be?**
- A) A high-stakes, action-packed adventure film. (Bold Explorer)
- B) A sleek, polished, and critically-acclaimed modern drama. (Smooth Operator)
- C) A heartwarming and feel-good romantic comedy. (Cozy Classic)
- D) A quirky, surreal, and unpredictable indie film. (Wild Card)

**Question 5: You're planning your ideal vacation. Where are you heading?**
- A) Trekking across remote trails or backpacking in Patagonia. (Bold Explorer)
- B) A premium hotel in an iconic city with a perfectly curated itinerary. (Smooth Operator)
- C) A quiet, secluded lakeside cabin with a fireplace and plenty of books. (Cozy Classic)
- D) A vibrant, underground art street-festival in a city you've barely heard of. (Wild Card)

## Quiz Logic
- Each answer maps to one personality type
- Track a running tally across all questions
- At the end, the personality with the highest count is the exclusively shown result (Single Result Option A format).

## Visual Style
- Minimal Style: Clean, minimal, lots of white space. San-serif fonts. Muted earth tones. Think an Apple product page meets a specialty coffee shop. Subtle animations. 

## Extra Features
- Images: No (skip for now)
- Icons/emoji: No
- Result Output: Exact Option A style single mapping.

## Technical Notes
- Built with React (Vite) + Tailwind CSS (Note: Adjusted from Next.js per user's stack preference based on the workspace)
- Single-page app with smooth transitions between questions
- Mobile-responsive (works on phones)
- Results page is shareable
