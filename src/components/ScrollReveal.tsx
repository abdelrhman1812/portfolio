// "use client";

// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// interface ScrollRevealProps {
//   children: React.ReactNode;
//   width?: "full" | "auto";
// }

// export function ScrollReveal({ children, width = "full" }: ScrollRevealProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useIntersectionObserver(ref);

//   return (
//     <div ref={ref} className={width === "full" ? "w-full" : "w-auto"}>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }
