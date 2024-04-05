import { Post } from "@/app/lib/interface";
import { slugify } from "@/app/utils/helpers";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  const PortableTextComponent = {
    types: {
      image: ({ value }: any) => (
        <Image
          src={urlFor(value).url()}
          className='rounded-lg w-full h-full lg:w-full lg:h-[30rem] flex align-middle items-center justify-center  '
          alt='Post'
          width={500}
          height={500}
        />
      ),
    },
    block: {
      h1: ({ value }: any) => (
        <h1
          id={slugify(value.children[0].text)}
          className='text-4xl flex items-start justify-start  w-full font-bold mb-3'>
          {value.children[0].text}
        </h1>
      ),
      h2: ({ value }: any) => (
        <h2
          id={slugify(value.children[0].text)}
          className='text-3xl flex items-start justify-start  w-full font-bold mb-3'>
          {value.children[0].text}
        </h2>
      ),
      h3: ({ value }: any) => (
        <h3
          id={slugify(value.children[0].text)}
          className='text-2xl flex items-start justify-start  w-full font-bold mb-3'>
          {value.children[0].text}
        </h3>
      ),
      h4: ({ value }: any) => (
        <h4
          id={slugify(value.children[0].text)}
          className='text-2xl flex items-start justify-start  w-full font-bold mb-3'>
          {value.children[0].text}
        </h4>
      ),
      h5: ({ value }: any) => (
        <h5
          id={slugify(value.children[0].text)}
          className='text-2xl flex items-start justify-start  w-full font-bold mb-3'>
          {value.children[0].text}
        </h5>
      ),
      h6: ({ value }: any) => (
        <h6
          id={slugify(value.children[0].text)}
          className='text-xl flex items-start justify-start  w-full font-bold mb-3'>
          {value.children[0].text}
        </h6>
      ),
    },
  };

  

  return (
    <main
      className={"notw flex justify-center align-middle items-center w-full "}>
      <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700'>
        <header className='pt-6 '>
          <div className='space-y-1 text-center'>
            <div className='space-y-10'>
              <div>
                <p className='text-base font-medium leading-6 text-teal-500'>
                  {new Date(data._createdAt).toISOString().split("T")[0]}
                </p>
              </div>
            </div>

            <div>
              <h1 className='text-3xl font-extrabold  tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 '>
                {data.title}
              </h1>
            </div>
          </div>
        </header>
        <div className=' flex flex-col justify-center pl-10 pr-10 pb-72 lg:justify-center  lg:items-center lg:p-40 lg:pt-[-10rem]'>
          <PortableText
            value={data.content}
            components={PortableTextComponent}
          />
        </div>

        {/* <div className='divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0'>
          <div className='divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0'>
            <div className='prose max-w-none  pt-10 dark:prose-invert prose-lg'>
             
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
