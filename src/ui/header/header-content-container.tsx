"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useImageLoading } from "@/hooks";
import { cn } from "@/utils";
import { fadeUpAnimationVariants } from "@/consts";

export default function HeaderContentContainer() {
  const [, handleOnLoadingComplete, loadingAnimation] = useImageLoading();

  return (
    <div className="flex items-center justify-center py-10">
      <motion.div
        className="relative h-20 w-56 md:w-72"
        whileInView="show"
        initial="hidden"
        viewport={{
          once: true,
        }}
        variants={fadeUpAnimationVariants}
      >
        <Image
          className={cn(
            "h-auto w-full",
            "duration-700 ease-in-out",
            loadingAnimation,
          )}
          onLoadingComplete={handleOnLoadingComplete}
          src="/images/roqqetmedia.svg"
          alt="Roqqet Media"
          width={721}
          height={120}
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
}
