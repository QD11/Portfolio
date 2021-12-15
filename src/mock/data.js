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
  img: 'pro3.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pjman_pic.jpg',
    title: 'PJ Man',
    info: '',
    info2: '',
    url: 'https://pj-man.herokuapp.com/',
    repo: 'https://github.com/QD11/PJ-Man', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chatapp_pic.jpg',
    title: 'Chat App',
    info: '',
    info2: '',
    url: 'https://chat-app-fi.herokuapp.com/',
    repo: 'https://github.com/QD11/chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flote_pic.jpg',
    title: 'Flote',
    info: '',
    info2: '',
    url: 'https://qd11.github.io/Flote/',
    repo: 'https://github.com/QD11/Flote', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Email',
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
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
