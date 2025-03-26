import { NavLink } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const toggleVariants = {
  hidden: {x:1000},
  visible:{
    x:0,
    transition: {
    duration: 1,
    ease: "easeOut"
    }
  },
  exit: {
    x:1000,
    transition: {
    duration: 1,
    ease: "easeIn"
    }
  }
}


const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  const getNavLinkClass = (isActive: boolean) => 
    isActive 
      ? "cursor-pointer underline text-[#1C1E12]"
      : "cursor-pointer hover:underline" 

  return <nav>
    <div className="w-full h-16 hidden sm:flex sm:justify-end sm:items-center sm:font-semibold sm:text-[#cbcfcd] sm:text-xl sm:gap-10 sm:pr-5">
      <NavLink 
      to="/" 
      className={({ isActive }) => getNavLinkClass(isActive)}>Domů</NavLink>

      <NavLink 
      to="/about" 
      className={({ isActive }) => getNavLinkClass(isActive)}>O mně</NavLink>

      <NavLink 
      to="/projects" 
      className={({ isActive }) => getNavLinkClass(isActive)}>Projekty</NavLink>

      <NavLink 
      to="/contact" 
      className={({ isActive }) => getNavLinkClass(isActive)}>Kontakt</NavLink>
    </div>
    
    <div className="w-full flex justify-end items-center h-16 pr-5 sm:hidden">
    {toggle ? (
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="2" 
      stroke="currentColor" 
      className="w-8 h-8 text-[#cbcfcd] cursor-pointer sm:hidden"
      onClick = {() => setToggle(false)}>
      <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      d="M6 18 18 6M6 6l12 12"/>
    </svg>
    ) 
    : <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="2" 
      stroke="currentColor" 
      className="w-8 h-8 text-[#cbcfcd] cursor-pointer sm:hidden" 
      onClick={() => setToggle(true)}>
      <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      }
    </div>

  <AnimatePresence>
    {toggle && (
      <motion.div 
      variants={toggleVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-15 right-0 text-[#cbcfcd] font-bold text-2xl gap-2 bg-[#1C1E12] w-screen h-screen z-50 flex flex-col justify-center items-center">
        <NavLink 
        to="/"
        onClick={() => setToggle(false)}>Domů</NavLink>

        <NavLink 
        to="/about"
        onClick={() => setToggle(false)}>O mně</NavLink>

        <NavLink 
        to="/projects"
        onClick={() => setToggle(false)}>Projekty</NavLink>

        <NavLink 
        to="/contact"
        onClick={() => setToggle(false)}>Kontakt</NavLink>
      </motion.div>
    )} 
  </AnimatePresence>
  </nav>
}

export default Navbar