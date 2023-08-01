"use client";

import { motion } from "framer-motion";
import { currentYear, fadeUpAnimationVariants } from "@/consts";

export default function FooterContentContainer() {
  return (
    <div className="text-center">
      <motion.div
        className="text-sm font-semibold md:text-base"
        whileInView="show"
        initial="hidden"
        viewport={{
          once: true,
        }}
        variants={fadeUpAnimationVariants}
      >
        {`© ${currentYear} Roqqet Media. All rights reserved.`}
      </motion.div>
    </div>
  );
}
