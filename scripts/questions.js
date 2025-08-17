
class Questions {
    id;
    question;
    level;
    points;
    correctAnswer;
    options ;
    correctOptionIndex;
    constructor(quest){
        this.id = quest.id;
        this.question = quest.question;
        this.level = quest.level;
        this.points = quest.points;
        this.correctAnswer = quest.correctAnswer;
        this.options = quest.options ;
        this.correctOptionIndex = quest.correctOptionIndex;
    }
    
}

// Function to shuffle array and update correct answer position
function shuffleOptionsAndUpdateIndex(question) {
    const correctAnswer = question.correctAnswer;
    const options = [...question.options]; // Create a copy of options
    
    // Fisher-Yates shuffle algorithm
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    // Find the new index of the correct answer
    const newCorrectIndex = options.indexOf(correctAnswer);
    
    return {
        ...question,
        options: options,
        correctOptionIndex: newCorrectIndex
    };
}

// Apply randomization to all questions
export const questions = [
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'How to center a div?',
        level: 1,
        points: 5,
        correctAnswer: 'Use flexbox',
        options: [
            'Use flexbox',
            'Use display property',
            'Use position property',
            'Use margin auto'
        ],
        correctOptionIndex: 0
    }),
    // EASY QUESTIONS (Level 1)
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What does HTML stand for?',
        level: 1,
        points: 5,
        correctAnswer: 'HyperText Markup Language',
        options: [
            'HyperText Markup Language',
            'High Tech Modern Language',
            'Home Tool Markup Language',
            'Hyperlink and Text Markup Language'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which tag is used for creating a hyperlink?',
        level: 1,
        points: 5,
        correctAnswer: '<a>',
        options: [
            '<a>',
            '<link>',
            '<href>',
            '<url>'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What does CSS stand for?',
        level: 1,
        points: 5,
        correctAnswer: 'Cascading Style Sheets',
        options: [
            'Cascading Style Sheets',
            'Computer Style Sheets',
            'Creative Style Sheets',
            'Colorful Style Sheets'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which property changes text color?',
        level: 1,
        points: 5,
        correctAnswer: 'color',
        options: [
            'color',
            'text-color',
            'font-color',
            'foreground-color'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'How do you add a comment in HTML?',
        level: 1,
        points: 5,
        correctAnswer: '<!-- -->',
        options: [
            '<!-- -->',
            '//',
            '/* */',
            '##'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which tag creates a paragraph?',
        level: 1,
        points: 5,
        correctAnswer: '<p>',
        options: [
            '<p>',
            '<paragraph>',
            '<text>',
            '<para>'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the default display value for div?',
        level: 1,
        points: 5,
        correctAnswer: 'block',
        options: [
            'block',
            'inline',
            'flex',
            'grid'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which property makes text bold?',
        level: 1,
        points: 5,
        correctAnswer: 'font-weight',
        options: [
            'font-weight',
            'text-weight',
            'bold',
            'font-style'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'How do you add a comment in CSS?',
        level: 1,
        points: 5,
        correctAnswer: '/* */',
        options: [
            '/* */',
            '<!-- -->',
            '//',
            '##'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which tag creates a line break?',
        level: 1,
        points: 5,
        correctAnswer: '<br>',
        options: [
            '<br>',
            '<break>',
            '<lb>',
            '<newline>'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What does JavaScript do?',
        level: 1,
        points: 5,
        correctAnswer: 'Adds interactivity to web pages',
        options: [
            'Adds interactivity to web pages',
            'Styles web pages',
            'Creates web page structure',
            'Optimizes images'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which property changes background color?',
        level: 1,
        points: 5,
        correctAnswer: 'background-color',
        options: [
            'background-color',
            'bg-color',
            'color-background',
            'back-color'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'How do you add a comment in JavaScript?',
        level: 1,
        points: 5,
        correctAnswer: '//',
        options: [
            '//',
            '<!-- -->',
            '/* */',
            '##'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which tag creates a heading?',
        level: 1,
        points: 5,
        correctAnswer: '<h1>',
        options: [
            '<h1>',
            '<heading>',
            '<title>',
            '<header>'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the file extension for HTML?',
        level: 1,
        points: 5,
        correctAnswer: '.html',
        options: [
            '.html',
            '.htm',
            '.web',
            '.page'
        ],
        correctOptionIndex: 0
    }),
    // MEDIUM QUESTIONS (Level 2)
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the difference between let and var?',
        level: 2,
        points: 10,
        correctAnswer: 'let has block scope, var has function scope',
        options: [
            'let has block scope, var has function scope',
            'let is faster than var',
            'var is newer than let',
            'There is no difference'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What does DOM stand for?',
        level: 2,
        points: 10,
        correctAnswer: 'Document Object Model',
        options: [
            'Document Object Model',
            'Data Object Model',
            'Document Oriented Model',
            'Dynamic Object Model'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which CSS property creates rounded corners?',
        level: 2,
        points: 10,
        correctAnswer: 'border-radius',
        options: [
            'border-radius',
            'corner-radius',
            'round-corners',
            'border-round'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is an event listener?',
        level: 2,
        points: 10,
        correctAnswer: 'A function that waits for an event to occur',
        options: [
            'A function that waits for an event to occur',
            'A type of HTML element',
            'A CSS property',
            'A JavaScript library'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which method adds an element to the end of an array?',
        level: 2,
        points: 10,
        correctAnswer: 'push()',
        options: [
            'push()',
            'add()',
            'append()',
            'insert()'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of localStorage?',
        level: 2,
        points: 10,
        correctAnswer: 'Store data in the browser',
        options: [
            'Store data in the browser',
            'Store data on a server',
            'Store data in a database',
            'Store data in cookies'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which CSS property creates a shadow?',
        level: 2,
        points: 10,
        correctAnswer: 'box-shadow',
        options: [
            'box-shadow',
            'shadow',
            'drop-shadow',
            'element-shadow'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is a callback function?',
        level: 2,
        points: 10,
        correctAnswer: 'A function passed as an argument to another function',
        options: [
            'A function passed as an argument to another function',
            'A function that calls itself',
            'A function that returns a function',
            'A function with no parameters'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which HTML tag creates a form?',
        level: 2,
        points: 10,
        correctAnswer: '<form>',
        options: [
            '<form>',
            '<input>',
            '<fieldset>',
            '<formset>'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of JSON?',
        level: 2,
        points: 10,
        correctAnswer: 'Data interchange format',
        options: [
            'Data interchange format',
            'Programming language',
            'Database system',
            'Web server'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which CSS property controls text alignment?',
        level: 2,
        points: 10,
        correctAnswer: 'text-align',
        options: [
            'text-align',
            'align-text',
            'text-position',
            'alignment'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the difference between == and ===?',
        level: 2,
        points: 10,
        correctAnswer: '=== checks value and type, == checks only value',
        options: [
            '=== checks value and type, == checks only value',
            '== is faster than ===',
            '=== is newer than ==',
            'There is no difference'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which method removes the last element from an array?',
        level: 2,
        points: 10,
        correctAnswer: 'pop()',
        options: [
            'pop()',
            'remove()',
            'delete()',
            'shift()'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of CSS Grid?',
        level: 2,
        points: 10,
        correctAnswer: 'Create two-dimensional layouts',
        options: [
            'Create two-dimensional layouts',
            'Style text elements',
            'Create animations',
            'Handle user interactions'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which HTML attribute makes an input required?',
        level: 2,
        points: 10,
        correctAnswer: 'required',
        options: [
            'required',
            'mandatory',
            'must',
            'needed'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of async/await?',
        level: 2,
        points: 10,
        correctAnswer: 'Handle asynchronous operations',
        options: [
            'Handle asynchronous operations',
            'Create loops',
            'Define variables',
            'Style elements'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which CSS property creates a transition?',
        level: 2,
        points: 10,
        correctAnswer: 'transition',
        options: [
            'transition',
            'animation',
            'transform',
            'change'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of fetch API?',
        level: 2,
        points: 10,
        correctAnswer: 'Make HTTP requests',
        options: [
            'Make HTTP requests',
            'Create animations',
            'Style elements',
            'Handle events'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'Which HTML tag creates a table?',
        level: 2,
        points: 10,
        correctAnswer: '<table>',
        options: [
            '<table>',
            '<grid>',
            '<data>',
            '<matrix>'
        ],
        correctOptionIndex: 0
    }),
    // HARD QUESTIONS (Level 3)
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is closure in JavaScript?',
        level: 3,
        points: 15,
        correctAnswer: 'Function with access to variables in its outer scope',
        options: [
            'Function with access to variables in its outer scope',
            'A way to close browser tabs',
            'A method to end loops',
            'A type of HTML element'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of Webpack?',
        level: 3,
        points: 15,
        correctAnswer: 'Module bundler for JavaScript',
        options: [
            'Module bundler for JavaScript',
            'CSS preprocessor',
            'JavaScript framework',
            'Database system'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the Virtual DOM?',
        level: 3,
        points: 15,
        correctAnswer: 'Lightweight copy of the actual DOM',
        options: [
            'Lightweight copy of the actual DOM',
            'A type of database',
            'A CSS framework',
            'A JavaScript library'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of Redux?',
        level: 3,
        points: 15,
        correctAnswer: 'State management for JavaScript apps',
        options: [
            'State management for JavaScript apps',
            'CSS framework',
            'Database system',
            'Web server'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the difference between null and undefined?',
        level: 3,
        points: 15,
        correctAnswer: 'null is assigned, undefined is default',
        options: [
            'null is assigned, undefined is default',
            'null is a number, undefined is a string',
            'null is newer than undefined',
            'There is no difference'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of Babel?',
        level: 3,
        points: 15,
        correctAnswer: 'JavaScript compiler/transpiler',
        options: [
            'JavaScript compiler/transpiler',
            'CSS preprocessor',
            'HTML validator',
            'Database system'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the event loop in JavaScript?',
        level: 3,
        points: 15,
        correctAnswer: 'Mechanism that handles asynchronous operations',
        options: [
            'Mechanism that handles asynchronous operations',
            'A type of loop in JavaScript',
            'A way to handle events',
            'A debugging tool'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of TypeScript?',
        level: 3,
        points: 15,
        correctAnswer: 'Add static typing to JavaScript',
        options: [
            'Add static typing to JavaScript',
            'Replace JavaScript',
            'Style web pages',
            'Create databases'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the difference between shallow and deep copy?',
        level: 3,
        points: 15,
        correctAnswer: 'Deep copy copies nested objects, shallow does not',
        options: [
            'Deep copy copies nested objects, shallow does not',
            'Shallow copy is faster than deep copy',
            'Deep copy is newer than shallow copy',
            'There is no difference'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of CSS-in-JS?',
        level: 3,
        points: 15,
        correctAnswer: 'Write CSS in JavaScript',
        options: [
            'Write CSS in JavaScript',
            'Replace CSS with JavaScript',
            'Optimize CSS performance',
            'Create animations'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of Service Workers?',
        level: 3,
        points: 15,
        correctAnswer: 'Enable offline functionality',
        options: [
            'Enable offline functionality',
            'Create web servers',
            'Handle database operations',
            'Style web pages'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of WebSockets?',
        level: 3,
        points: 15,
        correctAnswer: 'Real-time communication between client and server',
        options: [
            'Real-time communication between client and server',
            'Create secure connections',
            'Handle file uploads',
            'Style web pages'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of JWT?',
        level: 3,
        points: 15,
        correctAnswer: 'Secure authentication and authorization',
        options: [
            'Secure authentication and authorization',
            'Create animations',
            'Handle database operations',
            'Style web pages'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of GraphQL?',
        level: 3,
        points: 15,
        correctAnswer: 'Query language for APIs',
        options: [
            'Query language for APIs',
            'Database system',
            'CSS framework',
            'JavaScript library'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of Progressive Web Apps?',
        level: 3,
        points: 15,
        correctAnswer: 'Web apps that work like native apps',
        options: [
            'Web apps that work like native apps',
            'Mobile-only applications',
            'Desktop applications',
            'Server-side applications'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of CSS Custom Properties?',
        level: 3,
        points: 15,
        correctAnswer: 'Create reusable CSS variables',
        options: [
            'Create reusable CSS variables',
            'Replace CSS with JavaScript',
            'Optimize CSS performance',
            'Create animations'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of Intersection Observer?',
        level: 3,
        points: 15,
        correctAnswer: 'Detect when elements enter viewport',
        options: [
            'Detect when elements enter viewport',
            'Handle user interactions',
            'Create animations',
            'Style elements'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of Web Components?',
        level: 3,
        points: 15,
        correctAnswer: 'Create reusable custom elements',
        options: [
            'Create reusable custom elements',
            'Replace HTML elements',
            'Style web pages',
            'Handle database operations'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of CSS Grid Areas?',
        level: 3,
        points: 15,
        correctAnswer: 'Define named grid areas for layout',
        options: [
            'Define named grid areas for layout',
            'Create animations',
            'Style text elements',
            'Handle user interactions'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of Web Workers?',
        level: 3,
        points: 15,
        correctAnswer: 'Run JavaScript in background threads',
        options: [
            'Run JavaScript in background threads',
            'Create web servers',
            'Handle database operations',
            'Style web pages'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of CSS Containment?',
        level: 3,
        points: 15,
        correctAnswer: 'Optimize rendering performance',
        options: [
            'Optimize rendering performance',
            'Create animations',
            'Style text elements',
            'Handle user interactions'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of WebAssembly?',
        level: 3,
        points: 15,
        correctAnswer: 'Run code at near-native speed in browsers',
        options: [
            'Run code at near-native speed in browsers',
            'Replace JavaScript',
            'Create animations',
            'Style web pages'
        ],
        correctOptionIndex: 0
    }),
    shuffleOptionsAndUpdateIndex({
        id: uid(),
        question: 'What is the purpose of CSS Logical Properties?',
        level: 3,
        points: 15,
        correctAnswer: 'Support different writing modes and directions',
        options: [
            'Support different writing modes and directions',
            'Create animations',
            'Optimize performance',
            'Handle user interactions'
        ],
        correctOptionIndex: 0
    })
];
 export const hardQuests = questions.filter(question => question.level === 3).map(question => new Questions(question));

export const middQuests = questions.filter(question => question.level === 2).map(question => new Questions(question));

export const easyQuests = questions.filter(question => question.level === 1).map(question => new Questions(question));

function uid() {
    // Date.now(): milliseconds since 1970 → base‑36 string (e.g. "kxwbls")
    // Math.random(): 0–1 → base‑36, slice off "0." → 5 chars (e.g. "4f2h9")
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
