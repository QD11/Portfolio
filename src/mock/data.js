import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Quang Do | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Quang',
  subtitle: 'Passionate and Driven Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'pro3.png',
  paragraphOne: 'Hello! My name is Quang and I am a software developer with a Bachelor of Science in Aerospace Engineering from the University of Notre Dame ☘️.',
  paragraphTwo: 'My coding languages of choice are Javascript and Python. I also have experiences with Pthon, C++, and Fortran. I love learning new technologies. Currently, I am learning Next.js and Express.js, in place of React and Ruby on Rails, to create full stack web applications. After that, I plan to learn Java as my next language. ',
  paragraphThree: 'Other than coding, I enjoy working out and playing board games!',
  resume: '/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pjman_pic.png',
    title: 'PJ Man',
    info: 'A project management application to provide smooth workflow to individual users and teams. Users can create projects/tasks and assign them to members of their team. Users can also realtime message with other members of the same team.',
    info2: '',
    tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'WebSocket'],
    url: 'https://pj-man.herokuapp.com/',
    repo: 'https://github.com/QD11/PJ-Man', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chatapp_pic.png',
    title: 'Chat App',
    info: 'A chat application where users can realtime message other registered members. Users can chat with multiple members in a message group.',
    info2: '',
    tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'WebSocket'],
    url: 'https://chat-app-fi.herokuapp.com/',
    repo: 'https://github.com/QD11/chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flote_pic.png',
    title: 'Flote',
    info: 'An application where users can search up and save flight tickets when provided with two locations. The tickets contain information regarding airlines, prices, cities, and whether they are round trips or not. ',
    info2: '',
    tech: ['Javascript'],
    url: 'https://qd11.github.io/Flote/',
    repo: 'https://github.com/QD11/Flote', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'qdangdo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/quang-do/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/QD11',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
