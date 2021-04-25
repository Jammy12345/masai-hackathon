import Link from 'next/link'
import Meta from "./Meta"

const Nav = () => {
  return (
      <>
        <Meta/>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">
                    <h2 className="logo">Fitness</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    ADDD
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Programs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>
  )
}

export default Nav