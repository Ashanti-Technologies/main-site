import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  delayFactor?: number;
  staggerChildren?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function StaggeredContainer({
  children,
  className = "",
  staggerChildren = 0.15,
}: StaggeredContainerProps) {
  const customContainerVariants = {
    ...containerVariants,
    show: {
      ...containerVariants.show,
      transition: {
        ...containerVariants.show.transition,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      variants={customContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
