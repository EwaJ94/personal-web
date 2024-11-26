import OneProject from "./OneProject"
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import react from "../images/react.png"
import tw from "../images/tailwind.png"
import git from "../images/git.png"
import github from "../images/github.png"
import ts from "../images/ts.png"
import { motion } from "framer-motion"

const mainVariants = {
  hidden: {opacity:0},
  visible: {
    opacity:1,
    transition: {
      delay: 0.5,
      duration: 2,
    }
  }
}

const Projects = () => {
  return <section id="projects" className="flex flex-col items-center justify-center my-5 2xl:h-screen">
    <motion.div
    variants={mainVariants}
    initial="hidden"
    animate="visible"
    className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-2xl pb-5 text-[#cbcfcd] sm:text-3xl">Projekty</h2>
      <p className="pb-5 text-[#cbcfcd]">V projektech jsem pracova s těmito technologiemi:</p>

      <div className="flex flex-wrap justify-center gap-5 pb-10">
        <img src={html} alt="html 5" className="h-10 hover:scale-110" />
        <img src={css} alt="css" className="h-10 hover:scale-110" />
        <img src={tw} alt="tailwind css" className="h-10 hover:scale-110" />
        <img src={js} alt="javascript" className="h-10 hover:scale-110" />
        <img src={ts} alt="typescript" className="h-10 hover:scale-110" />
        <img src={react} alt="react js" className="h-10 hover:scale-110" />
        <img src={git} alt="git" className="h-10 hover:scale-110" />
        <img src={github} alt="github" className="h-10 hover:scale-110" />
      </div>
    </motion.div>

    <OneProject/>
  </section>
}

export default Projects