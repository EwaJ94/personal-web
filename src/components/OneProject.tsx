import pregnancydiet from "../images/pregnancy-diet.png"
import flashcards from "../images/flashcards.png"
import recipes from "../images/recipes.png"

const OneProject = () => {
  const projects = [{
    id: 1,
    image: {pregnancydiet},
    name: "Pregnancy diet",
    about: "Jedná se o webovou aplikaci pro těhotné ženy, ve které si mohou vyhledat, zda jsou jednotlivé potraviny vhodné ke konzumaci během těhotenství. Aplikace je vytvořená v Reactu a data jsou načítána z databáze Firebase Firestore.",
    githublink: "https://github.com/EwaJ94/pregnancy-diet",
    weblink: "https://pregnancy-diet.netlify.app/"
  },
  {
    id: 2,
    image: {flashcards},
    name: "Flashcards",
    about: "Webová aplikace pro snadné učení například slovíček. Aplikace je vytvořena v JavaScriptu.",
    githublink: "https://github.com/EwaJ94/flashcards",
    weblink: "https://flashcards0.netlify.app/"
  },
  {
    id: 3,
    image: {recipes},
    name: "My recipes",
    about: "Aplikace umožňuje vyhledávání receptů podle klíčového slova nebo kategorie. Uživatel si může oblíbené recepty uložit. Aplikace je vytvořená v Reactu a data jsou získávána prostřednictvím API.",
    githublink: "https://github.com/EwaJ94/my-recipes",
    weblink: "https://myrecipes0.netlify.app/"
  }
]

  return <section className="">
    <div className="">
    
    </div>
  </section>
}

export default OneProject
