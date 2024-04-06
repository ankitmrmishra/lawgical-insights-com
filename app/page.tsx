import Link from "next/link";
import { Post } from "./lib/interface";
import { client } from "./lib/sanity";
import Introduction from "./introduction/page";
import Books from "./books/page";
import Contact from "./contact/page";
import About from "./about/page";
import Image from "next/image";
// import { motion } from "framer-motion";
import { urlFor } from "./lib/sanityImageUrl";
import SocialMedia from "./components/SocialMedia";
import Email from "./components/email";
async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function IndexPage() {
  const data = (await getData()) as Post[];

  return (
    <main>
      <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        <div className='remaning-portion-1 social-media-banner  xl:inline-flex w-32 h-full hidden fixed left-0 bottom-0'>
          <SocialMedia />
        </div>
        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
          <Introduction />
        </div>

        <div className='remaning-portion-3 email-sections hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
          <Email />
        </div>
      </div>

      <div className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-5 lgl:gap-8 mdl:px-10 xl:px-4 p-7 sm:mt-9'>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            All Posts
          </h1>
        </div>

        <ul className='lg:grid lg:grid-cols-3 lg:gap-16 gap-6 flex flex-col  '>
          {data.map((post) => (
            <li key={post._id} className=''>
              <article className=' lg:w-96 lg:h-[30rem] rounded-lg bg-LightNavy lg:justify-evenly lg:p-5 lg:align-middle lg:flex lg:flex-col p-5 '>
                <div className=''>
                  <p className=' pb-3  rounded-sm p-1 bg-opacity-30 backdrop-blur-lg  drop-shadow-lg font-medium leading-6 text-teal-500'>
                    {new Date(post._createdAt).toISOString().split("T")[0]}
                  </p>
                  <div className=' flex justify-center items-center align-middle'>
                    {post.content.some(
                      (item: { _type: string }) => item._type === "image"
                    ) && (
                      <Image
                        className='lg:w-[21.5rem] w-[18rem] rounded-md h-48  bg-black'
                        src={urlFor(
                          post.content.find(
                            (item: { _type: string }) => item._type === "image"
                          ).asset
                        ).url()}
                        alt='this main image'
                        width={400}
                        height={400}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <Link
                    href={`/post/${post.slug.current}`}
                    prefetch
                    className='space-y-3 xl:col-span-3'>
                    <div>
                      <h3 className='text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100'>
                        {post.title}
                      </h3>
                    </div>

                    <p className='prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2'>
                      {post.overview}
                    </p>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
      {/* <Books /> */}
      <About />
      <Contact />
    </main>
  );
}

export const revalidate = 60;
