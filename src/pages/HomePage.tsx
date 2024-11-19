import work from "../images/work1.png"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"

const HomePage = () => {
  return <main id="home-page" className="h-[100vh] flex flex-col justify-center items-center text-[#cbcfcd] lg:flex-row-reverse lg:justify-evenly">
    <div
    className="flex flex-col justify-center items-center">
      <h2 className=" font-semibold text-2xl italic sm:text-3xl lg:text-5xl">Ewa Jochymková</h2>
      <p className=" pt-5 font-thin italic font lg:text-2xl">Junior Frontend Developer</p>
      <div className="flex justify-between w-20 pt-5">
        <a href="https://github.com/EwaJ94" className=""><img src={github} alt="Github link" className="h-8" /></a>
        <a href="https://www.linkedin.com/in/ewa-jochymkov%C3%A1-59770a287/" className=""><img src={linkedin} alt="LinkedIn link" className="h-9" /></a>
      </div>
    </div>
    <div>
      <img src={work} alt="working woman" className="h-[30rem] md:h-[35rem]" />
      </div>
    </main>
}

export default HomePage
