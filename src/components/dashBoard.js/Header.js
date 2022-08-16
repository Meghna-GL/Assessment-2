import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header>

                {/* <nav>
                <ul>
               
                    <li>
                        <NavLink to='/'>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'>PRODUCTS</NavLink>
                    </li>
                </ul>
            </nav> */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    {/* <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink to='/' className="nav-link">HOME <span className="sr-only"></span></NavLink>
                            </li>
                            <li className="nav-item">

                                <NavLink to='/about' className="nav-link">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">

                                <NavLink to='/products' className="nav-link">PRODUCTS</NavLink>
                            </li>
                        </ul>

                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to='/login' className="nav-link">LOGIN</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/signup' className="nav-link">SIGNUP</NavLink>
                                </li>
                            </ul>


                        </div>
                    </div>
                </nav>


            </header>

        </>
    )
}

export default Header


/*


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        // <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        <NavLink to='/' className="nav-link">HOME <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        // <a className="nav-link" href="#">Features</a>
         <NavLink to='/about' className="nav-link">ABOUT</NavLink>
      </li>
      <li className="nav-item">
        //<a className="nav-link" href="#">Pricing</a>
         <NavLink to='/products' className="nav-link">PRODUCTS</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

*/