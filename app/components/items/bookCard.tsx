"use client";
import React from "react";
import Image from "next/image";
import "../items/bokk.css";
import { motion } from "framer-motion";
const bookCard = ({
  coverPhoto,
  title,
  content,
  backCover,
  link,
}: {
  coverPhoto: string;
  title: string;
  content: string;
  backCover: string;
  link: string;
}) => {
  return (
    <div className=' card relative w-[300px] h-[400px] bg-White rounded-sm shadow-navbarShadow group  '>
      <div className='cover absolute top-0 left-0 w-full h-full bg-red-700 rounded-sm  '>
        <img src={coverPhoto} alt='cover' />
        <img src={backCover} alt='backcover' />
      </div>
      <div className='content '>
        <span className='text-3xl font-titleFont font-bold text-bodyColor'>
          {title}
        </span>
        <p className=' flex flex-col   items-center whitespace-pre-wrap text-black w-full h-[400px] text-sm '>
          {content}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={link}
            className='bg-LightestNavy text-Green p-2 text-center w-3/4 mt-3 cursor-pointer  hover:text-White  rounded-full'
          >
            READ MORE{" "}
          </motion.a>
        </p>
      </div>
    </div>
  );
};

export default bookCard;
