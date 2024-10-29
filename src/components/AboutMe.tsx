import photo from "../images/me.jpg"

const AboutMe = () => {
  return <section className="h-screen flex flex-col justify-around items-center mt-52 md:flex-row">
    <div className="flex flex-col justify-center items-center w-[20rem] h-[40rem] md:w-[30rem] md:h-[40rem] ">
      <h2 className="font-bold text-xl pb-5 ">O mně</h2>
      <p className="text-wrap text-[#cbcfcd] text-center" >
      Po dokončení studia účetnictví a daní jsem nastoupila jako účetní v e-shopu. Už tehdy jsem věděla, že to není obor, u kterého bych chtěla zůstat celý život. Po narození dcery jsem přemýšlela, jakým jiným směrem bych se mohla vydat. Naštěstí mi bratr doporučil, abych zkusila programování,i když jsem na začátku nevěřila, že zrovna já bych se v oboru IT dokázala uplatnit. </p>
      <br />
      <p className="text-wrap text-[#cbcfcd] text-center"> Začala jsem se učit Python a rychle jsem zjistila, že mě programování hrozně baví. Po ukončení kurzu jsem ale došla k závěru, že se chci zaměřit na frontend. Proto jsem se pustila do studia HTML, CSS a poté i JavaScriptu. </p>
      <br />
      <p className="text-wrap text-[#cbcfcd] text-center"> Jelikož už od narození dcera špatně spí, nebylo času na učení mnoho. Díky podpoře manžela a babiček jsem si však dokázala najít prostor na studium a dál se v programování zlepšovat.</p>
      <br />
      <p className="text-wrap text-[#cbcfcd] text-center"> Nikdy dřív mě učení nebavilo tak jako teď. Programování mě naplňuje, protože v sobě propojuje logické myšlení s kreativitou.
      </p>
    </div>
    <img src={photo} alt="personal-photo" className="hidden h-[20rem] rounded-xl md:h-[25rem] md:block" />
  </section>
}

export default AboutMe
