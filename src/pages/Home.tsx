import React, { useEffect, useRef } from "react";
//import Navbar from "../components/Navbar";
import Threebox from "../components/Threebox";
import Utilitybox from "../components/Utilitybox";
import Thetoken from "../components/Thetoken";
import Digitalworldbox from "../components/Digitalworldbox";
import Transparancybox from "../components/Transparancybox";
//import Footer from "../components/Footer";
import MainLayout from "../Layouts/MainLayout";
import { useLocation } from "react-router-dom";
import Purpleshadow from "../assets/images/purpleshadow.webp";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const { pathname } = useLocation();
  const sectionRefs = {
    Threebox: useRef<HTMLDivElement>(null),
    Utilitybox: useRef<HTMLDivElement>(null),
    Digitalworldbox: useRef<HTMLDivElement>(null),
    Transparancybox: useRef<HTMLDivElement>(null),
    Thetoken: useRef<HTMLDivElement>(null),
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <MainLayout sectionRefs={sectionRefs}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full items-center justify-center"
      >
        <Thetoken />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative h-[300px] w-full"
      >
        <img src={Purpleshadow} className="absolute left-0 top-0 z-10 h-full w-full object-cover" />
      </motion.div>
      <div ref={sectionRefs.Threebox} className="relative z-20 -mt-[200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="z-50 flex w-full flex-wrap justify-center text-center"
        >
          <span className="hidden text-center font-darkgrotesque font-semibold text-white sm:block md:text-[55px] lg:px-4 lg:text-[60px] xl:text-[75px] 2xl:text-[77px]">
            Your Key to Growing <span className="text-custom-purple1"> Ecosystem</span>{" "}
          </span>
          <span className="block py-3 text-center font-darkgrotesque text-[40px] font-normal leading-none text-white sm:hidden">
            Your Key to Growing <br /> <span className="text-custom-purple1"> Ecosystem</span>{" "}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full items-center justify-center md:pt-5"
        >
          <Threebox />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        ref={sectionRefs.Utilitybox}
        className="w-full items-center justify-center md:pt-5"
      >
        <Utilitybox />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        ref={sectionRefs.Digitalworldbox}
        className="w-full items-center justify-center bg-custom-black1 md:pt-5"
      >
        <Digitalworldbox />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        ref={sectionRefs.Transparancybox}
        className="w-full items-center justify-center pb-2 pt-14"
      >
        <Transparancybox />
      </motion.div>
    </MainLayout>
  );
};

export default Home;
