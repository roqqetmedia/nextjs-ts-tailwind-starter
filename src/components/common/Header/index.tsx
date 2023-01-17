import { motion } from "framer-motion";
import Image from "next/image";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/consts";

export function Header() {
  return (
    <header>
      <motion.div
        className="mx-auto max-w-7xl"
        aria-label="Top"
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
        <div className="flex items-center justify-center py-10">
          <motion.div
            className="relative h-20 w-56 md:w-72"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Image fill src="/roqqetmedia.svg" alt="RoqqetMedia" />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
