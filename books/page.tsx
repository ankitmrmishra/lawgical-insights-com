"use client";

import React from "react";
import BookCard from "../components/items/bookCard";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-5 lgl:gap-8 mdl:px-10 xl:px-4 p-7 sm:mt-9'>
      {" "}
      <div className='titiles flex items-center gap-4 justify-center align-middle '>
        <span className='w-[10vw] h-[1px]  bg-Green'></span>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.7, delay: 0.25 }}
          className='text-4xl lg:text-6xl text-orange-400  font-heading items-center'
        >
          Books
        </motion.h1>

        <span className='w-[10vw] h-[1px]  bg-Green'></span>
      </div>
      <div className='  lg:grid grid-cols-3 gap-5 flex flex-col justify-center align-middle items-center p-7  lg:ml-0'>
        <BookCard
          coverPhoto='https://m.media-amazon.com/images/I/817tHNcyAgL.jpg'
          backCover='https://media.npr.org/assets/img/2012/01/17/John%20Green_custom-ba66749e880e3fe6aaa057dde962efd7fe8c9d62-s1100-c50.jpg'
          title='Exploring Life’s big questions: The Fault In Our Stars'
          content='
        The Fault in Our Stars is a novel that explores the themes of love, loss, and the meaning of life. The book is written from the perspective of the main character, Hazel, who is a 16-year-old girl with thyroid cancer. She meets Augustus Waters, a 17-year-old boy who
         '
          link='https://medium.com/@lawgicalinsights/exploring-lifes-big-questions-the-fault-in-our-stars-d8e2d8506a5f'
        />
      </div>
    </div>
  );
};

export default page;
