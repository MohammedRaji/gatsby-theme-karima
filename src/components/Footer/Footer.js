import React from "react";

import SocialLinks from "../SocialLinks/sociallinks";
//import {FooterMenu} from "../Menu/menu"
import * as styles from "./footer.module.css"

function Footer({ config }) {
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
 	<footer className={styles.footer } id="footer">
		<div className={`${styles.container} ${styles.widget}`}>
       		<SocialLinks/>
            {/*<FooterMenu/>*/}
		</div>

		<div className={styles.copyrights}>
			<div className={styles.container}>
				<p className="footer-text">{copyright}</p>
			</div>
		</div>
	</footer>

  );
}

export default Footer;
