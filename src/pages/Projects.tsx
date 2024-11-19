import OneProject from "./OneProject"
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import react from "../images/react.png"
import tw from "../images/tailwind.png"
import git from "../images/git.png"
import github from "../images/github.png"
import ts from "../images/ts.png"

const Projects = () => {
  return <section id="projects" className="flex flex-col items-center justify-center 2xl:h-screen">
    <h2 className="font-bold text-3xl pb-5 text-[#cbcfcd]">Projekty</h2>
    <p className="pb-5 text-[#cbcfcd]">V projektech jsem pracova s těmito technologiemi:</p>
    <div className="flex gap-3 pb-10 sm:gap-5">
      <img src={html} alt="html 5" className="h-10 hover:scale-110" />
      <img src={css} alt="css" className="h-10 hover:scale-110" />
      <img src={tw} alt="tailwind css" className="h-10 hover:scale-110" />
      <img src={js} alt="javascript" className="h-10 hover:scale-110" />
      <img src={ts} alt="typescript" className="h-10 hover:scale-110" />
      <img src={react} alt="react js" className="h-10 hover:scale-110" />
      <img src={git} alt="git" className="h-10 hover:scale-110" />
      <img src={github} alt="github" className="h-10 hover:scale-110" />
    </div>
    <OneProject/>

  </section>
}

export default Projects

