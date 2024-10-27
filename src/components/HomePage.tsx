import photo from "../images/me.jpg"

const HomePage = () => {
  return <main className="h-screen flex justify-around">
    <h2 className=" font-semibold text-3xl text-[#cbcfcd]">Ewa Jochymková</h2>
    <img src={photo} alt="profile" className="h-40 w-40 rounded-[50%] opacity-80 sm:h-80 sm:w-80" />
  </main>
}

export default HomePage
