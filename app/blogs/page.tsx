"use client";
import React from "react";

import { Post } from "../lib/interface";
import { motion } from "framer-motion";
import { client } from "../lib/sanity";
import Link from "next/link";
async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

async function Blogs() {
  const data = (await getData()) as Post[];
  return (
    <div
      id='blogs'
      className='max-w-contentContainer bg-black mx-auto py-10 mdl:py-24 flex flex-col gap-5 lgl:gap-8 mdl:px-10 xl:px-4 p-7 sm:mt-9'
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.7, delay: 0.25 }}
        className='text-4xl lg:text-6xl z-50 text-black  font-heading items-center'
      >
        Blogs
      </motion.h1>
      <div className='lg:grid grid-cols-3 gap-5 flex flex-col justify-center align-middle items-center p-7  lg:ml-0'>
        <ul>
          {data.map((post) => (
            <li key={post._id} className='py-4'>
              <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                <div>
                  <p className='text-base font-medium leading-6 text-teal-500'>
                    {new Date(post._createdAt).toISOString().split("T")[0]}
                  </p>
                </div>

                <Link
                  href={`/post/${post.slug.current}`}
                  prefetch
                  className='space-y-3 xl:col-span-3'
                >
                  <div>
                    <h3 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
                      {post.title}
                    </h3>
                  </div>

                  <p className='prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2'>
                    {post.overview}
                  </p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Blogs;
