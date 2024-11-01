"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";

export default function HeroContentContainer() {
  return (
    <Container>
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
          className="2xs:h-56 relative h-44 w-auto md:h-72 xl:h-96"
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
    </Container>
  );
}
