import Image from "next/image";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { PrimaryLayout } from "@/components/layouts";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/consts";

export default function Home() {
  return (
    <PrimaryLayout>
      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="space-y-3">
          <motion.h1
            className="text-center text-3xl font-bold uppercase md:text-5xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>NextJS Starter</Balancer>
          </motion.h1>
        </div>
        <motion.div
          className="relative mx-auto h-72 w-auto md:h-96"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Image fill src="/roqqetman.svg" alt="RoqqetMan" />
        </motion.div>
      </motion.div>
    </PrimaryLayout>
  );
}
