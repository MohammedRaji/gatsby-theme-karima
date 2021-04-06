import React from 'react';
import { useStaticQuery, graphql} from "gatsby"
import Icon from '../Icons/icon';


function SocialLinks() {
  const data = useStaticQuery(graphql`
query {
  site{
    siteMetadata{
      social {
         name
         link
            }
    }
  }
}
`)

    return (
     
            <ul >
              {data.site.siteMetadata.social.map(link => (
              
                <li className="socialItem"
                  key={link.name}
                >
                  
<a  className="SocialIcon" href={link.link} target="_blank" rel="noreferrer">
                  <Icon name={link.name}/>
   </a>                           

                </li>
              ))}
            </ul>
         
    );


}


export default SocialLinks;

