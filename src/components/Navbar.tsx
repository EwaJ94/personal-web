import { NavLink } from "react-router-dom"

const Navbar = () => {

  const getNavLinkClass = (isActive: boolean) => 
    isActive 
      ? "cursor-pointer underline text-[#1C1E12]"
      : "cursor-pointer hover:underline"

  return <header className="top-0 h-16 flex justify-between items-center ">
    <nav className="w-full flex justify-center items-center gap-6 font-semibold text-lg text-[#cbcfcd] sm:justify-end sm:text-xl sm:gap-10 sm:mr-10">

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
    </nav>
  </header>
}

export default Navbar