import React, { useRef, MutableRefObject } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './useDimensions';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import '../../../dist/css/Navbar/MobileNavbar.css';

let sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 154.5px 41px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    } 
  },
};

export default function MobileNavbar() {
	const [sidebarState, sidebarChange] = useCycle(false, true);
  const containerRef = useRef() as MutableRefObject<HTMLElement>;
  const { height } = useDimensions(containerRef);

	return (
		<div className="mobile-nav-bar">
      <div className="brand">
				<div className="logo"><FontAwesomeIcon icon={faHouseChimney} size="2x" color='#007FFF' /></div>
				<div className="name">
					<h3 className="name-top">Travely</h3>
					<div className="name-bottom">Travel anywhere</div>
				</div>
			</div>
      <motion.nav
        initial={false}
        animate={sidebarState ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => sidebarChange()} />
      </motion.nav>
    </div>
	)
}