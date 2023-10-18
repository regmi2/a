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
  
  import Work6 from './assets/PortfolioPics/project-6.jpg';
  import WIEA from './assets/PortfolioPics/WIEA.png'
  import madhos from './assets/PortfolioPics/madhos.png'
  import R2R from './assets/PortfolioPics/Brochure_R2R.png'
  import R2RPDF from './assets/R2R_Brochure.pdf'
  import Brand from './assets/PortfolioPics/brand.png'
  import MilwaukeeFC from './assets/PortfolioPics/milfc.jpg'
  import Skyline from './assets/PortfolioPics/PIML.png'
  import Magnolia from './assets/PortfolioPics/magnolia.jpg'
  import Nil from './assets/PortfolioPics/Nilgiri.png'
  import PR from './assets/PortfolioPics/PR.png'
  import Dadhelo from './assets/PortfolioPics/Dadhelo.png'
  import MNFC from './assets/PortfolioPics/MNFC.jpg'




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
  

  export const videos = [
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
      id: 29,
      img: PR,
      title: 'Puerto Rico Video',
      description: 'Using drones & iPhones, shot a video of our visit Cerro Mime, PR with my brother and friend. ',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Personal',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Video',
        },
        {
          icon: <FaCode />,
          title: 'Softwares: ',
          desc: 'Adobe Premiere Pro, After Effects',
        },
        {
          icon: <FiExternalLink />,
          title: 'Link: ',
          desc: 'Click Here',
          link: 'https://drive.google.com/file/d/1aamHSrS5nDFDhLzuWzHCcdYG5O0RMP1r/view?usp=share_link'
        },
      ]
    },
    {
      id: 40,
      img: Dadhelo,
      title: 'Dadhelo Music Video',
      description: 'A music video I storyboarded, directed, and shot for one of my favorite Nepali songs. Shot with DSLR & Dolly. Edited with Premiere Pro.',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Personal',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Video',
        },
        {
          icon: <FaCode />,
          title: 'Softwares: ',
          desc: 'Adobe Premiere Pro',
        },
        {
          icon: <FiExternalLink />,
          title: 'Link: ',
          desc: 'Click Here',
          link: 'https://drive.google.com/file/d/0B07GFZae0OYUTlFiQjhHcXVubms/view?resourcekey=0-RasphPGsWLtYW1NGyegQRg'
        },
      ]
    }

  ]
  
  export const portfolio = [

    {
      id: 10,
      img: Brand,
      title: 'Family Logo',
      description: 'Regmi Family Logo. The character to the right is pronounced "rey" and the mountain signifies our homeland of Nepal.',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Personal Project',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Graphic Design',
        },
        {
          icon: <FaCode />,
          title: 'Softwares/Hardware: ',
          desc: 'Illustrator, Photoshop',
        },
      ]
    },
    {
      id: 22,
      img: Magnolia,
      title: 'Magnolia',
      description: 'A photo of a magnolia flower during a lovely Madison spring day',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Personal Project',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Photography',
        },
        {
          icon: <FaCode />,
          title: 'Softwares: ',
          desc: 'Adobe Photoshop',
        },
      ]
      

    },
   




    {
      id: 6,
      img: Work6,
      title: 'Happy Buddha',
      description: 'One of many photos I took at a friend\'s home while visiting Nepal.',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Personal Project',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Camera Photography',
        },
        {
          icon: <FaCode />,
          title: 'Softwares/Hardware: ',
          desc: 'Photoshop, Canon EOS Rebel T7 ',
        },
      ]
    },
    
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
      id: 21,
      img: Skyline,
      title: 'Skyline Edit',
      description: 'Skyline edit combining places I fell in love with - Madison, Kathmandu, and Seattle',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Personal Project',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Graphic Design',
        },
        {
          icon: <FaCode />,
          title: 'Softwares: ',
          desc: 'Adobe Photoshop',
        },
      ]
      

    },


/** ADD NILGIRI HERE */
{
  id: 25,
  img: Nil,
  title: 'Direction',
  description:'Waves wash away the surface and reveal the \'rey\' hidden inside',
  details: [
    {
      icon: <FiUser />,
      title: 'Client: ',
      desc: 'Personal',
    },
    {
      icon: <CgMediaLive />,
      title: 'Medium: ',
      desc: 'Graphic Design',
    },
    {
      icon: <FaCode />,
      title: 'Softwares: ',
      desc: 'Adobe Photoshop, Illustrator',
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
      id: 20,
      img: MNFC,
      title: 'Madison FC Logo',
      description: 'Designed and developed for the Madison Nepali Football (Soccer) Club. The colors represent both the US and Nepali flag.',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Madison Nepali Football Club',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Print & Web Graphic Design',
        },
        {
          icon: <FaCode />,
          title: 'Softwares: ',
          desc: 'Adobe Photoshop, Illustrator',
        },
      ]
      

    },

    {
      id: 55,
      img: MilwaukeeFC,
      title: 'Milwaukee FC Logo',
      description: 'Designed and developed for the Nepali Milwaukee Football (Soccer) Club. The colors represent both the US and Nepali flag.',
      details: [
        {
          icon: <FiUser />,
          title: 'Client: ',
          desc: 'Milwaukee Nepali Football Club',
        },
        {
          icon: <CgMediaLive />,
          title: 'Medium: ',
          desc: 'Print & Web Graphic Design',
        },
        {
          icon: <FaCode />,
          title: 'Softwares: ',
          desc: 'Adobe Photoshop, Illustrator',
        },
      ]
      

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
  