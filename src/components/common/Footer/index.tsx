import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS, year } from "@/consts";

export function Footer() {
  return (
    <footer>
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
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="m-4 text-center text-sm font-semibold md:my-8 md:text-base"
        >
          {`© ${year} Roqqet Media. All rights reserved.`}
        </motion.p>
      </motion.div>
    </footer>
  );
}
