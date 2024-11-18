import photo from "../images/me.jpg"
// import { motion } from "framer-motion"

const AboutMe = () => {

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = `${process.env.PUBLIC_URL}/CV.pdf`
    link.download = "CV_Jochymková.pdf"
    link.click()
  }

  return <section id="about-me" className="h-[100vh] flex justify-center items-center">
  
    <div className="flex flex-col justify-evenly items-center h-[55rem] w-[30rem] bg-[#1C1E12] rounded-xl md:flex-row md:justify-around md:items-center md:w-[50rem] lg:h-[45rem] lg:w-[80rem]">
      <div className=" w-[20rem] md:w-[25rem]">
        <h2 className="font-bold text-center text-3xl pb-5 text-[#cbcfcd]">O mně</h2>
        <p className="text-wrap text-[#cbcfcd] text-center" >
        Po dokončení studia účetnictví a daní jsem nastoupila jako účetní v e-shopu. Už tehdy jsem věděla, že to není obor, u kterého bych chtěla zůstat celý život. Po narození dcery jsem přemýšlela, jakým jiným směrem bych se mohla vydat. Naštěstí mi bratr doporučil, abych zkusila programování,i když jsem na začátku nevěřila, že zrovna já bych se v oboru IT dokázala uplatnit. </p>
        <br />
        <p className="text-wrap text-[#cbcfcd] text-center"> Začala jsem se učit Python a rychle jsem zjistila, že mě programování hrozně baví. Po dokončení kurzu jsem ale došla k závěru, že se chci zaměřit na frontend. Proto jsem se pustila do studia HTML, CSS a poté i JavaScriptu. </p>
        <br />
        <p className="text-wrap text-[#cbcfcd] text-center"> Protože dcera od narození špatně spí, nebylo času na učení mnoho. Díky podpoře manžela a babiček jsem si však dokázala najít prostor na studium a dál se v programování zlepšovat.</p>
        <br />
        <p className="text-wrap text-[#cbcfcd] text-center"> Nikdy dřív mě učení nebavilo tak jako teď. Programování mě naplňuje, protože v sobě propojuje logické myšlení s kreativitou. Zároveň to, že člověk vytvoří něco z ničeho, ve mě vyvolává obrovskou radost.
        </p>
        
      </div>
        <div className="flex flex-col items-center">
          <img src={photo} alt="personal-photo" className="hidden md:h-[25rem] rounded-3xl md:block " />
          <button className="text-[#cbcfcd] border border-[#cbcfcd] rounded-md w-36 h-10 mt-10 hover:text-[#f9fbfa]" onClick={handleDownloadCV}>
            <div className="flex justify-around">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg> 
            <p>Stáhnout CV</p>
          </div>
        </button>
      </div>
    </div>
  </section>
}

export default AboutMe
