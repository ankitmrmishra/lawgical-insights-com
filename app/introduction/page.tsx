"use client";
import React from "react";
import { motion } from "framer-motion";

const introduction = () => {
  return (
    <div
      id='home'
      className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-5 lgl:gap-8 mdl:px-10 xl:px-4 p-7 sm:mt-9'
    >
      <motion.div
        initial={{ y: 98, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className='1 mb-4'
      >
        <span className='bg-Green text-White rounded-sm p-1 bg-opacity-30 backdrop-blur-lg  drop-shadow-lg '>
          LEGAL SCHOLOR{" "}
        </span>
      </motion.div>
      <motion.div
        initial={{ y: 98, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='2 font-titleFont text-White xl:text-7xl text-5xl font-bold gap-4 '
      >
        LAWGICAL INSIGHTS{" "}
        <span className='3 font-titleFont text-LightSlate xl:text-7xl sm:text-4xl '>
          Empowering Legal Minds
        </span>
      </motion.div>

      <motion.div
        initial={{ y: 98, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className=''
      >
        <p
          className='leading-8 font-bodyFont text-LightestSlate 
                w-full xl:w-2/3
                '
        >
          Embark on a journey of legal enlightenment as we demystify complex
          legal topics, provide comprehensive coverage of legal developments,
          and empower you with valuable insights to navigate the legal
          landscape.
        </p>
      </motion.div>
    </div>
  );
};

export default introduction;
