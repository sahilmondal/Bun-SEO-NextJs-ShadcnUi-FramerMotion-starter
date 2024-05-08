"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionH4 = motion.h4;
export const MotionH5 = motion.h5;
export const MotionP = motion.p;
export const MotionSpan = motion.span;

// to use Framer Motion in Next.js- use <MotionDiv> </MotionDiv> instead of <motion.div></motion.div> and so on...

const MotionAnimatedDiv = ({
  children,
  className,
  delay,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) => {
  return (
    <MotionDiv
      initial={{ top: 50, opacity: 0 }}
      whileInView={{ top: 0, opacity: 1 }}
      transition={{
        duration: duration ? duration : 0.5,
        type: "spring",
        delay: delay ? delay : 0.6,
      }}
      viewport={{ amount: "some", margin: "50px", once: true }}
      className={cn("relative overflow-hidden", className)}
    >
      {children}
    </MotionDiv>
  );
};

export default MotionAnimatedDiv;
