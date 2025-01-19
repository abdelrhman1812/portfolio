import navItems from "@/data/mock-navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const NavMobile = ({ toggle }: { toggle: boolean }) => {
  return (
    <>
      {/* Mobile Menu with animation */}
      {toggle && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="lg:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Link href={`/#${item.href}`} passHref legacyBehavior>
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="block cursor-pointer w-full px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted"
                  activeClass="text-primary font-bold"
                >
                  {item.name}
                </ScrollLink>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default NavMobile;
