import { Link } from "react-router-dom"

const Error = () => {
  return <div>
      <h2 className="">404</h2>
      <p className="">Stránka nenalezena</p>
      <p className=""><Link to="/">Domů</Link></p>
    </div>

}

export default Error
