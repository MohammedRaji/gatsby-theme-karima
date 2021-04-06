import React from "react";
import { Helmet } from "react-helmet";
//import config from "../../data/SiteConfig";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


import config from "../../../data/SiteConfig";
import * as styles from "./layout.module.css"
//import "./index.css";

export default function MainLayout({ children }) {
  return (
    <>
   
      
      <Helmet>
        <html lang="en" />
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <meta name="theme-color" content="#E6E6FA" />
        <html lang="en" />
      </Helmet>
      
      <div className={styles.wrapper}>
      		<Header/>
      		
      {children}
      
    
      <Footer config={config} />
      </div>
    </>
    
  );
}
