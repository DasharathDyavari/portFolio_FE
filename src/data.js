import path_finding from './images/path_finding.png';
import algo_visuals from './images/algo_visuals.png';
import weather from './images/weather.png';
import chess_game from './images/chess_game.png';

export const projects = [
    {
        name: 'Path Finding Visualizer',
        description: 'This application is built using A* algorithm which is used to find the shortest distance between source and destination',
        image: path_finding,
        tools: ['HTML','CSS','JavaScript', 'React.js','Redux','MUI','Graphs','BFS','DFS'],
        codelink: 'https://github.com/Dasharath9920/myGoogleMap',
        application: 'https://mini-google-maps.netlify.app/'
    },
    {
        name: 'Chess Game',
        description: 'Chess game is a two player game developed using React.js. Also we are bringing the feature where Artificial Intelligence plays from system side with one player soon.',
        image: chess_game,
        tools: ['HTML','React.js','MongoDb','Python','Redux','CSS','JavaScript','Arrays'],
        codelink: 'https://github.com/Dasharath9920/chess-game-ai',
        application: 'chess-game-9920.netlify.app'
    },
    {
        name: 'Sorting Algorithms Visualizer',
        description: 'With the help of this Sorting Algorithm Visualizer with #reactjs where you can visualize how the sorting algorithms work internally with animations.',
        image: algo_visuals,
        tools: ['HTML','CSS','JavaScript', 'React.js','Redux','MUI'],
        codelink: 'https://github.com/Dasharath9920/AlgoVisuals',
        application: 'https://algovisualizer-76b0f.web.app/'
    },
    {
        name: 'Weather Forecasting',
        description: 'This is a Weather Forecasting Application which provides the conditions of the atmosphere for a given location. You can search the city you want to know the weather condition.',
        image: weather,
        tools: ['HTML','CSS','JavaScript','React.js'],
        codelink: 'https://github.com/Dasharath9920/Whether-forecasting',
        application: 'https://whether-forcasting.netlify.app/'
    }
];

export const skills = [
    {
        name: 'Developer',
        icon: 'https://img.icons8.com/ios-filled/100/source-code.png',
        description: 'I\'m working as a Software Engineer with 1.5years of experiece developing various features in Web development. I\'ve also built several projects some of them mentioned above.',
        skills: ['HTML','CSS','JavaScript','Java','Python','C++','MongoDb','ReactJs','bootstrap','TypeScript']
    },
    {
        name: 'Youtuber',
        icon: 'https://img.icons8.com/ios-glyphs/90/video-call.png',
        description: 'I\'ve a Youtube channel named \'Crazy CSE Projects\' where I make videos on Computer Science Projects using Data Structures and Development tools which are useful for entry level coders to build a strong coding foundation.',
        skills: ['Editing','CSE projects','Coding','DSA','Communication']
    },
    {
        name: 'Photographer',
        icon: 'https://img.icons8.com/ios-glyphs/30/000000/camera--v1.png',
        description: 'I\'m a Photographer who captures moments on film and uses images to convey stories. Collaborate with art teams, develop concepts, and employ various techniques to achieve desired results.',
        skills: ['Creativity','Attention']
    },
    {
        name: 'Editor',
        icon: 'https://img.icons8.com/ios-filled/50/clapperboard.png',
        description: 'I\'m an Editor manipulating video footage to create a project that accurately depicts the film directors envision. I\'m at early stage. In coming days, I\'ll be using complex editing software to piece together stills, footage, sound effects, dialog, and animation effects.',
        skills: ['Writing','Communication','Adaptability','Creativity']
    },
    {
        name: 'Problem Solver',
        icon: 'https://img.icons8.com/external-ddara-lineal-ddara/64/external-problem-solving-managements-ddara-lineal-ddara.png',
        description: 'Being proficient in coding, I\'ll be able to solve complex problems using Data Structure and Algorithms. Solved 1000+ problems on platforms such as GeeksForGeeks, Leetcode, etc. with 1856 contest rating',
        skills: ['Competitive Programmer','Data Structures','Problem Solving','Algorithms']
    }
]