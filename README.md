# TankQuiz

TankQuiz is a responsive web app for learning about modern tanks through interactive flashcards and quizzes.

## Features
- **Flashcards**: Flip cards to reveal facts about modern tanks.
- **Accordion Questions**: Click to reveal answers to tank trivia without affecting flashcard layout.
- **Quiz Mode**: Start a quiz with images and multiple-choice questions. Get instant feedback and a final score.
- **Responsive Design**: Works well on desktop and mobile devices.
- **Modern UI**: Uses CSS Grid, Flexbox, and custom color themes for a clean, modern look.

## How It Works
1. **Flashcards**: Click any flashcard to flip and see the answer. Cards are fixed in size and scrollable if content is long.
2. **Accordion Questions**: Below the flashcards, click a question to reveal its answer. The answer slides open without resizing the flashcards.
3. **Quiz**: Click "Start Quiz" to begin. Each question shows a tank image and options. Select an answer to get feedback and move to the next question. Your score is tracked and shown at the end.
4. **About Modal**: Click "About" in the navigation to see info about the app.

## Development
- All logic is in `index.html` and `scripts.js` (if present).
- Styles are in `styles.css`.
- No build step is required; just open `index.html` in your browser.

## Customization
- Add or edit flashcards and questions directly in the HTML.
- Update quiz questions in the `quizData` array in the script section.
- Change colors and layout in `styles.css`.

## License
All rights reserved. No part of this project may be used, copied, modified, or distributed without explicit permission from the author.
