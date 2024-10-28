import Menu from "./components/Menu"
import HomePage from "./components/HomePage"
import AboutMe from "./components/AboutMe"
import Project from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return <div className="h-screen">
    <Menu />
    <HomePage />
    <AboutMe />
    <Project />
    <Contact />
    <Footer />
    </div>
}

export default App;