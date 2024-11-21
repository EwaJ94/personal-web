import { Link } from "react-router-dom"

const Error = () => {
  return <section className="flex justify-center items-center h-screen">
  <div className="flex flex-col justify-center items-center h-56 w-[30rem] text-2xl text-[#cbcfcd] font-bold bg-[#1C1E12] rounded-xl gap-3">
    <h2 className="font-thin">404</h2>
    <p className="font-thin">Stránka nenalezena</p>
    <button className="pt-5 hover:scale-110">
      <Link to="/" className="p-2 border-2 rounded-xl text-center text-xl">Domů</Link>
    </button>
  </div>
  </section>
}

export default Error