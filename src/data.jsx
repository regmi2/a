import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaRegWindowClose
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  import {CgMediaLive} from 'react-icons/cg'
  
  import Work1 from './assets/PortfolioPics/project-1.jpeg';
  import Work2 from './assets/PortfolioPics/project-2.jpg';
  import Work3 from './assets/PortfolioPics/project-3.jpeg';
  import Work4 from './assets/PortfolioPics/project-4.jpeg';
  import Work5 from './assets/PortfolioPics/project-5.jpg';
  import Work6 from './assets/PortfolioPics/project-6.jpg';
  import WIEA from './assets/PortfolioPics/WIEA.png'
  import madhos from './assets/PortfolioPics/madhos.jpeg'
  import R2R from './assets/PortfolioPics/Brochure_R2R.png'
  import R2RPDF from './assets/R2R_Brochure.pdf'
  
import Theme1 from './assets/ThemeColors/purple.png';
import Theme2 from './assets/ThemeColors/red.png';
import Theme3 from './assets/ThemeColors/blueviolet.png';
import Theme4 from './assets/ThemeColors/blue.png';
import Theme5 from './assets/ThemeColors/goldenrod.png';
import Theme6 from './assets/ThemeColors/magenta.png';
import Theme7 from './assets/ThemeColors/yellowgreen.png';
import Theme8 from './assets/ThemeColors/orange.png';
import Theme9 from './assets/ThemeColors/green.png';
import Theme10 from './assets/ThemeColors/yellow.png';

  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/a/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/a/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/a/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/a/contact',
    }
  ];
  
//   export const personalInfo = [
//     {
//       id: 1,
//       title: 'First Name : ',
//       description: 'Steve',
//     },
  
//     {
//       id: 2,
//       title: 'Last Name : ',
//       description: 'Milner',
//     },
  
//     {
//       id: 3,
//       title: 'Age : ',
//       description: '27 Years',
//     },
  
//     {
//       id: 4,
//       title: 'Nationality : ',
//       description: 'Tunisian',
//     },
  
//     {
//       id: 5,
//       title: 'Freelance : ',
//       description: 'Available',
//     },
  
//     {
//       id: 6,
//       title: 'Address : ',
//       description: 'Tunis',
//     },
  
//     {
//       id: 7,
//       title: 'Phone : ',
//       description: '+21621184010',
//     },
  
//     {
//       id: 8,
//       title: 'Email : ',
//       description: 'you@mail.com',
//     },
  
//     {
//       id: 9,
//       title: 'Skype : ',
//       description: 'steve.milner',
//     },
  
//     {
//       id: 10,
//       title: 'Langages : ',
//       description: 'French, English',
//     },
//   ];
  
//   export const stats = [
//     {
//       id: 1,
//       no: '6+',
//       title: 'Years of <br /> Experience',
//     },
  
//     {
//       id: 2,
//       no: '97+',
//       title: 'Completed <br /> Projects',
//     },
  
    // {
    //   id: 3,
    //   no: '30+',
    //   title: 'Happy <br /> Customers',
    // },
  
    // {
    //   id: 4,
    //   no: '53+',
    //   title: ' Awards <br /> Won',
    // },
  //];
  
//   export const resume = [
//     {
//       id: 1,
//       category: 'experience',
//       icon: <FaBriefcase />,
//       year: '2018 - PRESENT',
//       title: 'Web Developer <span> Envato </span>',
//       desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
//     },
  
//     {
//       id: 2,
//       category: 'experience',
//       icon: <FaBriefcase />,
//       year: '2013 - 2018',
//       title: 'UI/UX Designer <span> Themeforest </span>',
//       desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
//     },
  
//     {
//       id: 3,
//       category: 'experience',
//       icon: <FaBriefcase />,
//       year: '2005 - 2013',
//       title: 'Consultant <span> Videohive </span>',
//       desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
//     },
  
//     {
//       id: 4,
//       category: 'education',
//       icon: <FaGraduationCap />,
//       year: '2015',
//       title: 'Engineering Degree <span> Oxford University </span>',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
//     },
  
//     {
//       id: 5,
//       category: 'education',
//       icon: <FaGraduationCap />,
//       year: '2012',
//       title: 'Master Degree <span> KIEV University </span>',
//       desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
//     },
  
//     {
//       id: 6,
//       category: 'education',
//       icon: <FaGraduationCap />,
//       year: '2009',
//       title: 'Bachelor Degree <span> Tunis High School </span>',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
//     },
//   ];
  
//   export const skills = [
//     {
//       id: 1,
//       title: 'Html',
//       percentage: '25',
//     },
  
//     {
//       id: 2,
//       title: 'Javascript',
//       percentage: '89',
//     },
  
//     {
//       id: 3,
//       title: 'Css',
//       percentage: '70',
//     },
  
//     {
//       id: 4,
//       title: 'Php',
//       percentage: '66',
//     },
  
//     {
//       id: 5,
//       title: 'Wordpress',
//       percentage: '95',
//     },
  
//     {
//       id: 6,
//       title: 'Jquery',
//       percentage: '50',
//     },
  
//     {
//       id: 7,
//       title: 'Angular',
//       percentage: '65',
//     },
  
//     {
//       id: 8,
//       title: 'React',
//       percentage: '45',
//     },
//   ];
  
  export const portfolio = [
    {
      id: 7,
      img: WIEA,
      title: 'WIEA Conference Booklet',
      description: 'Designed and Developed for the 2023 WIEA Annual Conference Booklet. Clickable links in web booklet for easy navigation.',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Wisconsin Indian Education Association (WIEA)',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Print & Web Graphic Design',
        },
        {
          icon: <FaCode />,
          title: 'Softwares: ',
          desc: 'Adobe Photoshop, InDesign, Illustrator',
        },
        {
          icon: <FiExternalLink />,
          title: 'Link: ',
          desc: 'Click Here',
          link: 'https://static1.squarespace.com/static/620fdee24e443d4632442918/t/64409865508bd86d899cfac7/1681954936246/WIEA2023_Interactive+%283%29.pdf'
        },
      ]
      

    },
    {
      id: 8,
      img: madhos,
      title: 'Madhos Bane Music Video',
      description: 'Collaborated with editors and colorists from Nepal to enhance music video. Filmed and edited social media posts for the artist.',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Lekh Kafle Music',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Video, Social Media',
        },
        {
          icon: <FaCode />,
          title: 'Softwares: ',
          desc: 'Adobe Premiere Pro, After Effects, Illustrator',
        },
        {
          icon: <FiExternalLink />,
          title: 'Link: ',
          desc: 'Click Here',
          link: 'https://www.youtube.com/watch?v=7QqISnu8Kow&ab_channel=LekhKafle'
        },
      ]
      

    },
    {
      id: 9,
      img: R2R,
      title: 'R2R Brochure',
      description: 'Designed and Developed an informational brochure using brand kit to reference typography and logo to reference colors. Collaborated with stakeholders through Canva',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Root 2 Rise',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Print & Web Graphic Design',
        },
        {
          icon: <FaCode />,
          title: 'Softwares: ',
          desc: 'Adobe Photoshop, Illustrator, Canva',
        },
        {
          icon: <FiExternalLink />,
          title: 'Link: ',
          desc: 'Click Here',
          link: R2RPDF,
        },
      ]
      

    },
    {
      id: 1,
      img: Work1,
      title: 'Photo Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Website Design',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Video Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Video',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Premium',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'Video Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Video',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Premium',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'Landing Page',
      details: [
        {
          title: 'Project : ',
          desc: 'Website',
        },
        {
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          title: 'Language : ',
          desc: 'React JS, Node JS',
        },
        {
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: 'Photo Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dibble.com',
        },
      ],
    },
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  