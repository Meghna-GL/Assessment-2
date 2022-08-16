import { NavLink } from "react-router-dom"

const Header = () => {
  return (
   <>
    <header>
            
            <nav>
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
            </nav>

            
        </header>

   </>
  )
}

export default Header