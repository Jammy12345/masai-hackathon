import Nav from './Nav'
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container-fluid pad-0">
        {children}
      </div>
    </>
  )
}

export default Layout