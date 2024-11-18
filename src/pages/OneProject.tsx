import pregnancydiet from "../images/pregnancy-diet.png"
import flashcards from "../images/flashcards.png"
import recipes from "../images/recipes.png"
import github from "../images/github.png"
import web from "../images/web.png"

const OneProject = () => {
  const projects = [{
    id: 1,
    image: pregnancydiet,
    name: "Pregnancy diet",
    about: "Jedná se o webovou aplikaci pro těhotné ženy, ve které si mohou vyhledat, zda jsou jednotlivé potraviny vhodné ke konzumaci během těhotenství. Aplikace je vytvořená v Reactu a data jsou načítána z databáze Firebase Firestore.",
    githublink: "https://github.com/EwaJ94/pregnancy-diet",
    weblink: "https://pregnancy-diet.netlify.app/"
  },
  {
    id: 2,
    image: flashcards,
    name: "Flashcards",
    about: "Webová aplikace pro snadné učení slovíček.Uživatel si může jednotlivá slovíčka přidávat, procházet a mazat. Zobrazuje se mu také počet slovíček v jeho slovníku. Aplikace je vytvořena v JavaScriptu.",
    githublink: "https://github.com/EwaJ94/flashcards",
    weblink: "https://flashcards0.netlify.app/"
  },
  {
    id: 3,
    image: recipes,
    name: "My recipes",
    about: "Aplikace umožňuje vyhledávání receptů podle klíčového slova nebo kategorie. Uživatel si může oblíbené recepty uložit. Aplikace je vytvořená v Reactu a data jsou získávána prostřednictvím API.",
    githublink: "https://github.com/EwaJ94/my-recipes",
    weblink: "https://myrecipes0.netlify.app/"
  }
]


  return <section className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-12">
    {projects.map((oneProject) =>
      {const {id, image, name, about, githublink, weblink} = oneProject
      return <div key={id} className="flex flex-col justify-around items-center h-[35rem] w-[20rem] bg-[#1C1E12] rounded-lg mb-5 sm:w-[25rem] ">
        <img src={image} alt={name} className="h-52 w-72 m-10"/>
        <h3 className="text-[#cbcfcd] font-bold">{name}</h3>
        <p className="text-[#cbcfcd] p-5 text-center">{about}</p>
        <div className="flex justify-around pb-5 w-32">
          <a href={githublink} className="cursor-pointer"><img src={github} alt="github icon" className="h-8 w-8 bg-white rounded-full hover:scale-110" /></a>
          <a href={weblink} className="cursor-pointer"><img src={web} alt="web icon" className="h-8 w-8 hover:scale-110" /></a>
        </div>
        </div>
        }
    )}
  </section>
}

export default OneProject