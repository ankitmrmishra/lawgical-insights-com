"use client";
import React from "react";

import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialFacebook,
} from "react-icons/sl";

function page() {
  return (
    <div className='  max-w-contentContainer mx-auto pb-[10rem] mdl:py-24 flex flex-col gap-5 lgl:gap-8 mdl:px-10 xl:px-4 p-7 sm:mt-9 '>
      <div className='text-White text-center  '>
        <span className='lg:text-6xl text-4xl w-8 font-bold'>Get in touch</span>
        <h1>Break the virtual ice, reach out and lets start a conversation.</h1>
      </div>

      <div className='emailpart text-center rounded-s-md border-green-600 text-White mb-11     '>
        <a
          href='mailto:lawgicalinsights@gmail.com'
          className=' border rounded-md border-green-600 pt-3 pb-3 pl-8 pr-8 text-lg  hover:text-Green'
        >
          Mail
        </a>
      </div>
    </div>
  );
}

export default page;
