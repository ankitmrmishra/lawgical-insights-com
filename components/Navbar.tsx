"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { BsFillPencilFill } from "react-icons/bs";
import { CgGirl } from "react-icons/cg";
import { MdPermContactCalendar } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "public/assets/Copy of lawgical insights.png";

const navbar = () => {
  return (
    <div className='w-full  shadow-navbarShadow h-20 lg:h-[12vh] lg:sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container  h-full mx-auto py-1 font-titleFont flex items-center justify-center lg:justify-between'>
        <Link href={"/"}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <Image src={logo} alt='logo' className='w-60' />
          </motion.div>
        </Link>

        <div className='fixed  bottom-0 z-[100] justify-center align-middle items-center bg-LightNavy lg:bg-transparent pt-4 pb-4 pl-[7rem]   lg:block lg:w-[auto] xl:block w-[100vw]  lg:justify-end lg:relative mdl:inline-flex  gap7'>
          <ul className='flex justify-center text-White align-middle items-center text-[13px] gap-7 mr-28'>
            <Link
              href={"/"}
              className='flex items-center gap-1 font-medium text-textDark hover:text-Green cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
                className='flex flex-col items-center'
              >
                <span className='lg:hidden text-lg'>
                  <AiFillHome />
                </span>{" "}
                Home
              </motion.li>
            </Link>
            {/* <Link
              href={"/blogs"}
              className='flex items-center gap-1 font-medium text-textDark hover:text-Green cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
                className='flex flex-col items-center'
              >
                <span className='lg:hidden text-lg'>
                  <BsFillPencilFill />
                </span>
                Articles
              </motion.li>
            </Link>
            <Link
              href='/books'
              className='flex items-center gap-1 font-medium text-textDark hover:text-Green cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                className='flex flex-col items-center'
              >
                <span className='lg:hidden text-lg'>
                  <GiBookshelf />
                </span>{" "}
                Books
              </motion.li>
            </Link> */}
            <Link
              href='/about'
              className='flex items-center gap-1 font-medium text-textDark hover:text-Green cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
                className='flex flex-col items-center'
              >
                <span className='lg:hidden text-lg'>
                  <CgGirl />
                </span>{" "}
                About
              </motion.li>
            </Link>
            <Link
              href='/contact'
              className='flex items-center gap-1 font-medium text-textDark hover:text-Green cursor-pointer duration-300 nav-link'
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.6 }}
                className='flex flex-col items-center'
              >
                <span className='lg:hidden text-lg'>
                  <MdPermContactCalendar />
                </span>{" "}
                Contact
              </motion.li>
            </Link>
          </ul>
        </div>
        {/* Small screen icon here */}
      </div>
    </div>
  );
};

export default navbar;
