import React from "react"
import {MainMenu} from "../Menu/menu"
import SocialLinks from "../SocialLinks/sociallinks";
//import SocialLinks from "./sociallinks";
import {Logo} from "../Logo/logo"
import { Link } from "gatsby-plugin-modal-routing";


export default function Header() {
	

  return (
    <header>
<div className="headerTop container" id="header-top">
<SocialLinks/>
   <Logo/>
   <Link className="searchBtn" to="/search">
 
<svg height="26" ratio="1.3" viewBox="0 0 20 20" width="26" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" fill="none" r="7" stroke="#000" stroke-width="1.1"></circle>
<path d="M14,14 L18,18 L14,14 Z" fill="none" stroke="#000" stroke-width="1.1"></path>
</svg>
<span>Rechercher</span>

</Link>
   </div>
   
   
   

   <div className="header-menu " id="header-menu">
		<MainMenu/>
</div>
    </header>
  	)
}
