"use client";

import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image'
import {BsFillSignpostFill} from 'react-icons/bs'
import {  useEffect , useRef } from 'react';
import { useInView , motion, useAnimation } from 'framer-motion';
const BlogCard = ({coverPhoto , title , content ,author , date}:{coverPhoto:string,title:string,content:string,author:string,date:string}) => {


   const ref = useRef(null);
    const isInview = useInView(ref, {once:false})
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    
    useEffect(() => {
        if(isInview){
            mainControls.start("visible")
            slideControls.start("visible")
            
            
        }
    })
  
  return (
    <motion.div ref={ref}
     variants={
        {
            hidden:{opacity:0, y:10},
            visible:{opacity:1, y:0},
        
        }
      }
        
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{duration:0.7 , delay:0.85}}
    
    className='flex flex-col align-middle  h-[450px] w-[300px] sm:w-[320px] bg-LightNavy p-3 rounded-3xl'>
<img
 src={coverPhoto}
      width={350}
      height={350}
      alt="coverphoto"
className='rounded-2xl h-[200px]'
/>
<div className="heaadingandtime pt-4">
  <span className='w-4/5 text-Green font-titleFont font-bold text-lg  hover:text-White cursor-pointer transition delay-75'>{title} </span>
 
</div>
<div className=" line-clamp-3 font-bodyFont text-left">{content}</div>
<motion.span 
whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
className='bg-LightestNavy text-Green p-2 text-center w-3/4 ml-10 mt-4 cursor-pointer hover:bg-Green hover:text-LightestNavy  rounded-full'>READ MORE </motion.span>
<div className="authordate flex justify-between pt-4">
  <div className="author bg-bodyColor rounded-md text-Green p-[5px]">{author}</div>
  <div className="date bg-bodyColor rounded-md text-Green p-[5px]">{date}</div>
</div>
    </motion.div>
  )
}

export default BlogCard