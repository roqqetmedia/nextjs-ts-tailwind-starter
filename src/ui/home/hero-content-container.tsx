"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";

export default function HeroContentContainer() {
  return (
    <motion.div
      className="space-y-8 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainerVariants}
    >
      <motion.h1
        className="text-3xl font-bold uppercase md:text-5xl"
        variants={fadeUpAnimationVariants}
      >
        NextJS Starter
      </motion.h1>
      <motion.div
        className="relative h-44 w-auto 2xs:h-56 md:h-72 xl:h-96"
        variants={fadeUpAnimationVariants}
      >
        <Image
          loading="eager"
          fill
          src="/images/roqqetman.svg"
          alt="RoqqetMan"
        />
      </motion.div>
    </motion.div>
  );
}
