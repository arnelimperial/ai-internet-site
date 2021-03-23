import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "../components/layout.css"

const Header = ({ siteTitle }) => (

  <header className="mt-3">

    <h1 className="coder">
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav>
      <ul css={{ display: `inline-block`, '@media(max-width:371px)': { display: `block` } }}>
        <li className="home_menu"><Link className="anchor" to="/">Home</Link></li>
        <li className="common_menu"><Link className="anchor" to="/about/">About</Link></li>
        <li className="common_menu"><Link className="anchor" to="/projects/">Projects</Link></li>
        <li className="common_menu"><Link className="anchor" to="/contact/">Contact</Link></li>
      </ul>
    </nav>

  </header>


)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


