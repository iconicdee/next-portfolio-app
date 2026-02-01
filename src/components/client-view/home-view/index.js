"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import AnimationWrapper from "../animation-cover";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import aiImage from "../../../assets/image.png";
import { useRouter } from "next/navigation";

function variants() {
  return {
    offscreen: {
      y: 150,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialItem = [
  {
    id: "facebook",
    icon: <FaFacebookF color="rgba(13, 183, 96, 1)" className="w-7 h-7" />,
    url: "https://www.facebook.com/yongking.king.92",
  },
  {
    id: "instagram",
    icon: <FaInstagram color="rgba(13, 183, 96, 1)" className="w-7 h-7" />,
    url: "https://instagram.com/iconicdeeh",
  },
  {
    id: "linkedIn",
    icon: <FaLinkedinIn color="rgba(13, 183, 96, 1)" className="w-7 h-7" />,
    url: "https://www.linkedin.com/in/aina-david-webdev/",
  },
  {
    id: "twitter",
    icon: <FaTwitter color="rgba(13, 183, 96, 1)" className="w-7 h-7" />,
    url: "https://x.com/home",
  },
];

export default function ClientHomeView({ data }) {
  const router = useRouter();
  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper
        className={`grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16`}
      >
        <motion.div variants={setVariants}>
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {data && data.length
                ? data[0]?.heading.split(" ").map((item, index) => (
                    <span
                      key={index}
                      className={`${
                        index === 2 || index === 3
                          ? "text-green-main"
                          : "text-[#000]"
                      }`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </h1>
            <p className="text-[#000] mt-4 mb-8 font-bold">
              {data && data.length ? data[0]?.summary : null}
            </p>
            <motion.div className="flex gap-3 cursor-pointer">
              {socialItem.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                  onClick={() => handleSocialClick(item.url)}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <motion.div ref={containerRef} className="flex w-full justify-end ">
          <motion.div
            drag
            dragConstraints={containerRef}
            className="w-[400px] h-[400px] relative bg-green-main"
          >
            <div className="w-[400px] h-[400px] left-[-30px] rounded-lg border-[6px] border-[#000000] top-[40px] absolute"></div>
            <Image
              src={aiImage}
              alt="Profile Picture"
              quality={100}
              height={300}
              width={300}
              className="absolute top-[55px] left-6"
            />
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
