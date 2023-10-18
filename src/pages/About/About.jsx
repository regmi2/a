import React, { useState } from 'react'
import PallavLake from "../../assets/pallav_lake.jpg"
// import ResumeItem from './ResumeItem'
// import {resume} from '../../data'

import './About.css'
import { FaReact, FaNode, FaRust } from 'react-icons/fa'; 
import {SiAdobepremierepro, SiPython,
  SiAdobephotoshop, SiAdobeillustrator, SiReact,SiAdobelightroom,
  SiAdobeaftereffects, SiAdobeaudition, SiHtml5,SiCss3,SiJavascript,
  SiAdobeindesign, SiAdobecreativecloud, SiCanva} from 'react-icons/si'
import {TbBrandVscode} from 'react-icons/tb'


  import { IconContext } from 'react-icons/lib'

export const skills = [
  {
    id: 1,
    name: 'Photoshop', 
    icon: <SiAdobephotoshop id='skill_icon' />,
    tags:['Highlighted', 'Graphic Design', 'Photo/Video',],
  },
  {
    id: 2,
    name: 'Illustrator',
    icon: <SiAdobeillustrator id='skill_icon' />,
    tags:['Graphic Design', 'Highlighted' ],
  },
  {
    id: 3,
    name: 'Premiere Pro',
    icon: <SiAdobepremierepro id='skill_icon' />,
    tags:[ 'Highlighted', 'Photo/Video'],
  },
  {
    id: 4,
    name: 'After Effects',
    icon: <SiAdobeaftereffects id='skill_icon' />,
    tags:['Photo/Video'],
  },
  {
    id: 5,
    name: 'Audition',
    icon: <SiAdobeaudition id='skill_icon' />,
    tags:['Photo/Video' ],
  },
  {
    id: 6,
    name: 'InDesign',
    icon: <SiAdobeindesign id='skill_icon' />,
    tags:['Graphic Design', 'Highlighted'],
  },
  {
    id: 7,
    name: 'Adobe Creative Suite',
    icon: <SiAdobecreativecloud id='skill_icon' />,
    tags:['Highlighted', 'Graphic Design','Photo/Video'],
  },
  {
    id: 8,
    name:'Canva',
    icon: <SiCanva id="skill_icon" />,
    tags:['Graphic Design']
  },
  {
    id: 9,
    name:'VSCode',
    icon: <TbBrandVscode id="skill_icon" />,
    tags:['Code']
  },
  {
    id: 10,
    name:'HTML',
    icon: <SiHtml5 id="skill_icon" />,
    tags:['Code', 'Highlighted']
  },
  {
    id: 11,
    name:'CSS',
    icon: <SiCss3 id="skill_icon" />,
    tags:['Code', 'Highlighted']
  },
  {
    id: 12,
    name:'JavaScript',
    icon: <SiJavascript id="skill_icon" />,
    tags:['Code', 'Highlighted']
  },
  {
    id: 13,
    name:'React',
    icon:<SiReact id='skill_icon'/>,
    tags:['Code']
  } , 
  {
    id: 14,
    name:'Lightroom',
    icon:<SiAdobelightroom id='skill_icon'/>,
    tags:['Graphic Design', 'Photo/Video',],
  },
  {
    id:15,
    name:'Python',
    icon: <SiPython id='skill_icon'/>,
    tags:['Code','Highlighted']
  }



];




const About = () => {


  // Initialize with 'All' to show all skills
  const [selectedTag, setSelectedTag] = useState('All'); 
  // Filter the skills based on the selected tag
  const filteredSkills = skills.filter(skill => {
    return selectedTag === 'All' || skill.tags.includes(selectedTag);
  });
  // Create a list of unique tags
  const uniqueTags = [...new Set(skills.map(skill => skill.tags).flat())];

    return(
    <main className="section container">
      <section className="about">
      <h2 className="section__title">
        About <span>Me</span>
        
      </h2>

        <div className="about__container grid">
        
          <div className="about__info">
            <h3 className="section__subtitle"> What I Do</h3>
            
            <p className="about__paragraph">
                
                {/* What I Do
                How I Work
                Languages & Softwares 
                Current Occupations
                My Goals
                Outside Of Work  */}

                I am passionate about crafting and delivering 
                compelling and accessible narratives.
                All of our perspectives are shaped by a tapestry 
                of stories. When a compelling narrative meets us 
                our perspectives, paradigms shift.
                What I do is collaborate with my fellow humans to access
                and leverage narratives that empower them and their people.
                
                <br/>
                <br/>
            </p>
            </div>

        
            <div className="about__images">
                <img src={PallavLake} alt="pallav by the lake" className='about__img' />

            </div>

        </div>


        </section>



        <div className="separator"> </div>

      <section className='skills__section'>
      <h3 className="section__subtitle">My Skills/Tools</h3>
 
      
      {/* Tag filtering buttons */}
      <div className="tags">
        <p onClick={() => setSelectedTag('All')}>All</p>
        {uniqueTags.map(tag => (
          <p key={tag} id='tag-button' onClick={() => setSelectedTag(tag)}>
            {tag}
          </p>
        ))}
      </div>

      {/* Display the filtered skills */}

      <div className="skills">
  {filteredSkills.map(({ name, icon }, index) => (
    <div key={index} className="skill">
      <div className='skill__icon_container'>
        {React.cloneElement(icon, { style: { width: '50px', height: '50px', color: 'var(--first-color)', filter: 'grayscale(15%)'} })}
      </div>
      <p>{name}</p>
    </div>
  ))}
</div>


      {/* <div className="skills">
        {filteredSkills.map(({name,icon},index) => (
          
          <div key={index} className="skill">
            <div className='skill__icon_container' >
            {icon}
              </div>
            <p>{name}</p>
          </div>
        ))}




      </div> */}
          
      </section>
        <div className="separator"> </div>

{/* 
<section className="resume">

<div className="resume__container grid">
          <h3 className="section__subtitle subtitle__center">
         Experience </h3>
          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>

          <h3 className="section__subtitle subtitle__center">
         Education</h3>

         
         <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>


         </div>
      </section> */}


    </main>

    )
    
}

export default About


                {/* My Tech Stack: 
                I started my 
                programming journey in university 
                with Java, C (including some assembly), bash for command line, 
                and lots of math.
                I also built projects with Rust, Haskell, and Python for
                classes and extracurricular development.
                <br/>
                In my own time, I picked up HTML, CSS, and JS and then learned 
                how React combines all 3 to create reusable components and other 
                nifty things and I've been using that ever since. 
                <br/>
                Through internships and work, I learned and implemented full stack 
                projects using ASP.NET Core and SQL.



                For the past 2 years, I have worked extensively with React, 
                Python (Django & Flask),
                and Node.JS. I have also worked with No Code tools like 
                SquareSpace, Elementor, and BettyBlocks for projects and learning. 

                To see a full list of all my technical capacities, click here



                <br/>
                <br/>
                Current Occupation: 
                Currently, I share my technical services through
                <a href="https://www.webhilltech.com" target='_blank'> Web Hill Tech</a>, 
                a company I founded in 2021.
                My team and I work with both local and international small businesses, non-profits, 
                organizations, & individuals to help them build a captivating online presence.
                <br/><br/>
                Outside of Webhill Tech, I serve my community 
                as a Tech Instructor and a Fitness Instructor. 
                I provide lessons in programming, computer use, and career coaching
                to tech curious folks ranging from teenagers to retired adults.

                I also teach yoga and pilates to local community members biweekly to 
                help them tap into a deeper sense of self. 
                
                Check out this link
                to get in touch with me about tutoring or fitness instruction.
                <br/><br/>

                How I Work 
                I have successfully managed to deliver high quality results to 
                30+ organizations and individuals because I take initiative and
                 responsibility in everything I do.
                Collaborative by nature, I excel in team settings, 
                contributing ideas and 
                solutions while fostering a positive work environment.
                <br/><br/>
                My Goals 
                I am passionate about leveraging tech & art in order to 
                bridge the gaps to self-empowerment.
                I'm passionate about reducing , and I'm constantly exploring 
                new technologies and staying updated with industry trends. Let's connect 
                and create something amazing together!

                Outside of Work:
                Daily meditation and stretching are fundamental to who I am.
                These practices enhance my inner world and my outer world.
                Along with feeling better inside, I'm better at what I do
                and how I engage with my fellow humans and my environment. 
                <br/>
                I enjoy yoga, pilates, animal flow, running, and weightlifting
                to stay in shape. I free my mental chatter through
                writing or freestyling rap lyrics and I try to read as often 
                as I can. Check out the most recent book I read here.
                I rejuvenate by sleeping in, sharing a meal with family and friends,
                and traveling whenever I can! */}