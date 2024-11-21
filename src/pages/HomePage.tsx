import work from "../images/work1.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import { motion } from "framer-motion"

const textVariants = {
  hidden: {x:1000},
  visible: {
    x:0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeOut"
    }
  }
}

const imgVariants = {
  hidden: {x:-1000},
  visible: {
    x:0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeOut",
    }
  }
}

const HomePage = () => {

  return <main id="home-page" 
  className="h-screen flex flex-col justify-center items-center text-[#cbcfcd] lg:flex-row-reverse lg:justify-around">

    <motion.div
    variants={textVariants}
    initial="hidden"
    animate="visible"
    className="flex flex-col justify-center items-center">
      <h2 className=" font-semibold text-2xl italic sm:text-3xl lg:text-5xl">Ewa Jochymková</h2>
      <p className=" pt-5 font-thin italic font lg:text-2xl">Junior Frontend Developer</p>
      <div className="flex justify-between w-20 pt-5">
        <a href="https://github.com/EwaJ94">
        <motion.img whileHover={{scale: 1.1}} src={github} alt="Github link" className="h-8" /></a>
        <a href="https://www.linkedin.com/in/ewa-jochymkova">
        <motion.img whileHover={{scale: 1.1}} src={linkedin} alt="LinkedIn link" className="h-9" /></a>
      </div>
    </motion.div>

    <motion.div
    variants={imgVariants}
    initial="hidden"
    animate="visible">
      <img src={work} alt="working woman" className="h-[30rem] md:h-[35rem]" />
    </motion.div>
  </main>
}

export default HomePage