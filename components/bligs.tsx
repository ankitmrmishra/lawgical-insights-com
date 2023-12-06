
"use client"
import React from 'react'
import BlogCard from '@/pages/items/blogCard'
import {motion } from 'framer-motion'

const Blogs = () => {
  return (
    <div
    id='blogs'
    className='flex align-middle flex-col justify-center  items-center'>
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
      className="text-4xl lg:text-8xl text-White font-bold font-titleFont items-center">Blogs</motion.h1>
  
    <div className='lg:grid grid-cols-3 gap-5 flex flex-col justify-center align-middle items-center p-7  lg:ml-0'>
      
       <BlogCard coverPhoto='https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' title='What is constitution' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nulla dolore, quaerat illo sed exercitationem ipsam autem obcaecati atque architecto fugiat quas voluptatem quo sequi commodi harum necessitatibus tempora quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, maiores? Porro, beatae deleniti. Aliquam sequi animi eveniet, mollitia aperiam tenetur ipsa quas deleniti laborum suscipit dolores saepe autem vel voluptate?' author='MANDVI TRIPATHI' date='11/06/2023' />
       <BlogCard coverPhoto='https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' title='What is constitution' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nulla dolore, quaerat illo sed exercitationem ipsam autem obcaecati atque architecto fugiat quas voluptatem quo sequi commodi harum necessitatibus tempora quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, maiores? Porro, beatae deleniti. Aliquam sequi animi eveniet, mollitia aperiam tenetur ipsa quas deleniti laborum suscipit dolores saepe autem vel voluptate?' author='MANDVI TRIPATHI' date='11/06/2023' />
       <BlogCard coverPhoto='https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' title='What is constitution' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nulla dolore, quaerat illo sed exercitationem ipsam autem obcaecati atque architecto fugiat quas voluptatem quo sequi commodi harum necessitatibus tempora quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, maiores? Porro, beatae deleniti. Aliquam sequi animi eveniet, mollitia aperiam tenetur ipsa quas deleniti laborum suscipit dolores saepe autem vel voluptate?' author='MANDVI TRIPATHI' date='11/06/2023' />
       <BlogCard coverPhoto='https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' title='What is constitution' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nulla dolore, quaerat illo sed exercitationem ipsam autem obcaecati atque architecto fugiat quas voluptatem quo sequi commodi harum necessitatibus tempora quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, maiores? Porro, beatae deleniti. Aliquam sequi animi eveniet, mollitia aperiam tenetur ipsa quas deleniti laborum suscipit dolores saepe autem vel voluptate?' author='MANDVI TRIPATHI' date='11/06/2023' />
       <BlogCard coverPhoto='https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' title='What is constitution' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nulla dolore, quaerat illo sed exercitationem ipsam autem obcaecati atque architecto fugiat quas voluptatem quo sequi commodi harum necessitatibus tempora quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, maiores? Porro, beatae deleniti. Aliquam sequi animi eveniet, mollitia aperiam tenetur ipsa quas deleniti laborum suscipit dolores saepe autem vel voluptate?' author='MANDVI TRIPATHI' date='11/06/2023' />
       <BlogCard coverPhoto='https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VwcmVtZSUyMGNvdXJ0JTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' title='What is constitution' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nulla dolore, quaerat illo sed exercitationem ipsam autem obcaecati atque architecto fugiat quas voluptatem quo sequi commodi harum necessitatibus tempora quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, maiores? Porro, beatae deleniti. Aliquam sequi animi eveniet, mollitia aperiam tenetur ipsa quas deleniti laborum suscipit dolores saepe autem vel voluptate?' author='MANDVI TRIPATHI' date='11/06/2023' />
       <BlogCard coverPhoto='https://images.unsplash.com/photo-1641803187720-735266974285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1097&q=80' title='What is constitution' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nulla dolore, quaerat illo sed exercitationem ipsam autem obcaecati atque architecto fugiat quas voluptatem quo sequi commodi harum necessitatibus tempora quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, maiores? Porro, beatae deleniti. Aliquam sequi animi eveniet, mollitia aperiam tenetur ipsa quas deleniti laborum suscipit dolores saepe autem vel voluptate?' author='MANDVI TRIPATHI' date='11/06/2023' />
       <BlogCard coverPhoto='https://images.unsplash.com/photo-1641803188693-3243afa000a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80' title='What is constitution' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nulla dolore, quaerat illo sed exercitationem ipsam autem obcaecati atque architecto fugiat quas voluptatem quo sequi commodi harum necessitatibus tempora quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, maiores? Porro, beatae deleniti. Aliquam sequi animi eveniet, mollitia aperiam tenetur ipsa quas deleniti laborum suscipit dolores saepe autem vel voluptate?' author='MANDVI TRIPATHI' date='11/06/2023' />
       <BlogCard coverPhoto='https://images.unsplash.com/photo-1664612706700-a83730b552d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' title='What is constitution' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nulla dolore, quaerat illo sed exercitationem ipsam autem obcaecati atque architecto fugiat quas voluptatem quo sequi commodi harum necessitatibus tempora quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, maiores? Porro, beatae deleniti. Aliquam sequi animi eveniet, mollitia aperiam tenetur ipsa quas deleniti laborum suscipit dolores saepe autem vel voluptate?' author='MANDVI TRIPATHI' date='11/06/2023' />
       <BlogCard coverPhoto='https://images.unsplash.com/photo-1677227695433-3213a1b1204e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80' title='What is constitution' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nulla dolore, quaerat illo sed exercitationem ipsam autem obcaecati atque architecto fugiat quas voluptatem quo sequi commodi harum necessitatibus tempora quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, maiores? Porro, beatae deleniti. Aliquam sequi animi eveniet, mollitia aperiam tenetur ipsa quas deleniti laborum suscipit dolores saepe autem vel voluptate?' author='MANDVI TRIPATHI' date='11/06/2023' />
    
    </div>
      </div>
  )
}

export default Blogs
