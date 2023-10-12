import React, { useState } from 'react'

// import ResumeItem from './ResumeItem'
// import {resume} from '../../data'

import './about.css'
import { FaReact, FaNode, FaRust } from 'react-icons/fa'; 
import { IconContext } from 'react-icons/lib'

export const skills = [
  {
    id: 1,
    name: 'ReactJS', 
    icon: <FaReact className='skill__icon' />,
    tags:['Framework', 'Highlighted', ],
  },
  {
    id: 2,
    name: 'NodeJS',
    icon: <FaNode className='skill__icon' />,
    tags:['Runtime Environment', 'Highlighted', ],
  },
  {
    id: 3,
    name: 'Rust',
    icon: <FaRust className='skill__icon' />,
    tags:['Language', ],
  },

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

                What I Do: I engineer full stack software applications
                with a strong focus on accessibility and explicit value.
                In the front end, I thrive in crafting interactive and 
                visually appealing user interfaces.
                Combined with an optimized, resourceful, & secure back end, I weave together 
                full stack applications that provide a seamless experience for users and
                stakeholders.
                <br/>
                <br/>
            </p>
            </div>
        
            <div className="about__images">
              Image Here

            </div>

        </div>


        </section>



        <div className="separator"> </div>

      <section className='skills__section'>
      <h3 className="section__subtitle">My Skills/Tools</h3>
      
      {/* Tag filtering buttons */}
      <div className="tags">
        <button onClick={() => setSelectedTag('All')}>All</button>
        {uniqueTags.map(tag => (
          <button key={tag} onClick={() => setSelectedTag(tag)}>
            {tag}
          </button>
        ))}
      </div>

      {/* Display the filtered skills */}
      <div className="skills">
        {filteredSkills.map(({name,icon},index) => (
          
          <div key={index} className="skill">
            <div className='skill__icon' >
            {icon}
              </div>
     

            
            <p>{name}</p>
          </div>
        ))}




      </div>
          


        

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
