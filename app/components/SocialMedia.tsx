"use client";
import React from "react";
import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialFacebook,
} from "react-icons/sl";
const SocialMedia = () => {
  return (
    <div className='w-full h-full flex flex-col align-middle justify-end  gap-4 items-center '>
      <a href='http://' target='_blank'>
        <span className='w-10 h-10 text-xl bg-LightestNavy rounded-full inline-flex items-center justify-center hover:text-Green cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SlSocialInstagram />
        </span>
      </a>
      <a href='https://www.instagram.com/lawgical.insights/' target='_blank'>
        <span className='w-10 h-10 text-xl bg-LightestNavy rounded-full inline-flex items-center justify-center hover:text-Green cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SlSocialFacebook />
        </span>
      </a>
      <a href='http://' target='_blank'>
        <span className='w-10 h-10 text-xl bg-LightestNavy rounded-full inline-flex items-center justify-center hover:text-Green cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SlSocialTwitter />
        </span>
      </a>

      <span className='h-[30vh]  w-[2px] align-middle group-hover:translate-x-2 transition-all ease-in-out duration-300 text-black bg-Green'></span>
    </div>
  );
};

export default SocialMedia;
