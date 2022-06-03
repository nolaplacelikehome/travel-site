import React from 'react';
import { motion } from 'framer-motion';
import { navItems } from './navItems';
import MobileNavItem from './MobileNavItem';

let variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, delayChildren: -1 }
  }
};

export default function Navigation() {
  return(
    <motion.ul variants={variants}>
      {navItems.map(item =>
        <MobileNavItem path={item.path} key={item.id} name={item.name} />
    )}
    </motion.ul>
  );
}