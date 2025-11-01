# 🌟 Bright Quiz

A beautiful, interactive web-based quiz application designed to test your knowledge across different difficulty levels. Built with vanilla HTML, CSS, and JavaScript, featuring a modern UI with smooth animations and responsive design.

## ✨ Features

- **🎯 Three Difficulty Levels**: Easy (5 points), Medium (10 points), and Hard (15 points)
- **📊 Real-time Scoring**: Watch your score update as you play
- **🎨 Modern UI**: Beautiful gradient backgrounds with glassmorphism effects
- **📱 Responsive Design**: Fully responsive and works on all devices
- **⏱️ Auto-advance**: Questions automatically move to the next after selection
- **🔄 Randomized Answers**: Answer choices are shuffled for each question
- **📈 Detailed Results**: View your right answers, wrong answers, and total score
- **💾 Local Storage**: Progress saved using browser localStorage

## 🚀 Getting Started

### Prerequisites

No special requirements! Just a modern web browser and a web server (or run locally).

### Installation

1. Clone or download this repository
2. Open `index.html` in a web browser, or
3. Serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

4. Open `http://localhost:8000` in your browser

## 📁 Project Structure

```
Quiz/
│
├── index.html          # Landing page with start button
├── level.html          # Difficulty selection page
├── game.html           # Main quiz game page
├── score.html          # Results display page
│
├── scripts/
│   ├── main.js         # Main game logic and event handling
│   ├── questions.js    # Question database and randomization
│   └── score.js        # Score display logic
│
└── images/
    ├── logo.png        # Application logo
    └── edk.html        # (Test/debug file)
```

## 🎮 How to Play

1. **Start**: Click "Start Game" on the landing page
2. **Choose Level**: Select Easy, Medium, or Hard difficulty
3. **Answer Questions**: Click on your answer choice
   - Correct answers turn green and add points
   - Wrong answers turn red
   - After 5 seconds, automatically moves to the next question
   - Or click "Next" to skip waiting
4. **View Results**: See your final score and statistics
5. **Play Again**: Click "Play Again" to restart

## 💡 Scoring System

- **Easy Questions**: 5 points each (Level 1)
- **Medium Questions**: 10 points each (Level 2)
- **Hard Questions**: 15 points each (Level 3)

Each difficulty level contains 20 questions covering various web development topics.

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: 
  - Flexbox & Grid layouts
  - CSS animations and transitions
  - Glassmorphism effects
  - Responsive media queries
- **Vanilla JavaScript (ES6+)**:
  - ES6 modules
  - Classes and object-oriented programming
  - DOM manipulation
  - Event handling
  - LocalStorage API
  - Fisher-Yates shuffle algorithm
- **Google Fonts**: Roboto & Intel One Mono

## 📚 Question Topics

The quiz covers a wide range of web development topics:

### Easy Level
- HTML basics (tags, attributes, structure)
- CSS fundamentals (properties, selectors)
- JavaScript basics (variables, functions, comments)

### Medium Level
- JavaScript concepts (DOM, events, arrays, objects)
- CSS layouts (Grid, Flexbox)
- Advanced HTML (forms, tables)
- Async operations and APIs

### Hard Level
- Advanced JavaScript (closures, prototypes, event loop)
- Modern web technologies (PWA, WebSockets, WebAssembly)
- Build tools and frameworks (Webpack, Redux, TypeScript)
- Performance optimization
- Security and authentication (JWT, CORS)

## 🎨 Design Features

- **Animated Backgrounds**: Floating gradient circles
- **Glassmorphism UI**: Frosted glass effects with backdrop filters
- **Smooth Transitions**: Hover effects and state changes
- **Color-Coded Levels**: 
  - 🟢 Green for Easy
  - 🟠 Orange for Medium
  - 🔴 Red for Hard
- **Typography**: Clean, modern fonts with proper hierarchy
- **Accessibility**: High contrast colors and readable fonts

## 🔧 Customization

### Adding New Questions

Edit `scripts/questions.js` and add questions following this format:

```javascript
shuffleOptionsAndUpdateIndex({
    id: uid(),
    question: 'Your question here?',
    level: 1, // 1 = Easy, 2 = Medium, 3 = Hard
    points: 5, // Points for correct answer
    correctAnswer: 'Correct answer',
    options: [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4'
    ],
    correctOptionIndex: 0 // Initially 0, auto-updated by shuffle
}),
```

### Styling Changes

All styles are inline in the HTML files. Main color scheme:
- Primary: `#024704` (Dark green)
- Accent: `#4CAF50` (Green)
- Background: Black with green gradient

## 📝 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

Requires ES6+ support for modules.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more questions
- Improve UI/UX
- Fix bugs
- Add new features

## 📄 License

This project is open source and available under the MIT License.

## 👏 Credits

- Questions compiled by the development team
- Design inspired by modern web trends
- Fonts provided by Google Fonts

---

**Made with ❤️ for learning and fun!**

Happy Quizzing! 🎉

