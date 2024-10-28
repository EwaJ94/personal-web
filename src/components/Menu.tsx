const Menu = () => {
  return <menu className="h-[10%] flex justify-center items-center sm:justify-end"> 
        <ul className="flex justify-center items-center gap-6 font-semibold text-lg text-[#cbcfcd] sm:justify-end sm:text-xl sm:gap-10 sm:mr-10">
            <li className="cursor-pointer hover:underline">Domů</li>
            <li className="cursor-pointer hover:underline">O mně</li>
            <li className="cursor-pointer hover:underline">Projekty</li>
            <li className="cursor-pointer hover:underline">Kontakt</li>
        </ul>
    </menu>
  
}

export default Menu
