"use client"

import React from 'react';
import Photo from './photoShoot.jpg';
import './about.css'

import Image from 'next/image';
import {BsFillSignpostFill} from 'react-icons/bs'

import { useInView , motion, useAnimation } from 'framer-motion';

const About = () => {
   
  

  const skills = ['Reading Books', 'Mandala Artist', 'Content Writer', 'Photography'];

  return (
    <section id="about"   
      className='lg:max-w-contentContainer flex flex-col align-middle justify-center mx-auto lg:py-10 mdl:py-24  gap-5 lgl:gap-8 mdl:px-10 xl:px-4 p-12 mt-4 mb-11'>
      <motion.h1
      variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.7 , delay:0.25}}
      className="text-4xl lg:text-5xl text-White font-bold font-titleFont">About Me</motion.h1>

      <div className=" flex flex-col lg:flex-row mx-auto lg:gap-32 gap-5">
       
          <div className=' lg:w-[50vw] lg:h-[70vh] flex flex-col lg:gap-5 gap-4 leading-8 font-bodyFont text-LightestSlate 
                w-full xl:w-2/3   '>
            <motion.p
             variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
       whileInView="visible"
      transition={{duration:0.7 , delay:0.45}}
            >
             Hey there! I am <span className='text-Green'> Mandvi Tripathi</span>, a vibrant law scholar and a High Court intern, dedicated to unraveling the mysteries of the legal system and aiding individuals in their journey through it. 



            </motion.p>

              <motion.p
             variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
       whileInView="visible"
      transition={{duration:0.7 , delay:0.65}}
            >
              With an ardent passion for assisting others, I embark on this blog to impart my wisdom and experiences, enlightening you on your legal rights and debunking any misconceptions about Law and the Indian Legal System.
            </motion.p>

             <motion.p
             variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
       whileInView="visible"
      transition={{duration:0.7 , delay:0.85}}
            >
           
 When I am not immersed in the captivating world of law, you can find me indulging in my hobbies of reading, writing, creating art, and exploring new destinations.
  </motion.p>
            <motion.p
             variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
       whileInView="visible"
      transition={{duration:0.7 , delay:0.95}}
            >
             So, join me on this exciting adventure as we navigate the intricate realms of law together!
            </motion.p>
        

          <motion.ul
            variants={
        {
            hidden:{opacity:0, y:80},
            visible:{opacity:1, y:0},
        
        }
      }
      initial="hidden"
     
      transition={{duration:0.7 , delay:1}}
          
          className="skills-list grid grid-cols-2 gap-3 ">
            {skills && skills.map((skill, i) => <li key={i} className='flex align-middle items-center gap-1 text-Green'><BsFillSignpostFill  />{skill}</li>)}
          </motion.ul>
       
  </div>
       
          <motion.div 
              variants={
        {
            hidden:{opacity:0, x:80},
            visible:{opacity:1, x:0},
        
        }
      }
      initial="hidden"
     whileInView="visible"
      transition={{duration:0.7 , delay:0.5}}
          
          className="wrapper  h-80 relative group  ">
           
            <Image 
            
              className=" image shadow-[5px_5px_0px_0px_rgba(100,255,218)] lg:h-full lg:w-[400px] filter mix-blend-normal contrast-100  hover:tranform hover:-translate-y-6 hover:duration-750 duration-700"
              src={Photo}
              width={400}
              height={400}
          
              
              alt="Headshot"
            />
           
          </motion.div>
       
      </div>
    </section>
  );
};

export default About;