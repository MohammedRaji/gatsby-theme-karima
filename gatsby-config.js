module.exports = {
  siteMetadata: {
    title: "karima",
     authorname:'MONIKA SPECTOR',
  authordes:'Hi, i am glad you made it here to know more about me. I am a Lifestyle blogger. Him fowl divided. Lesser which fruitful image, first seas have the, seas grass image ',
    social:[{
         name:'facebook',
         link:'https://twitter.com/_umusi'
      },
      {
         name:'twitter',
         link:'https://twitter.com/_umusi'
      }],
    menuLinks:[
      {
         name:'home',
         link:'/'
      },
      {
         name:'Life Style',
         link:'/page-2'
      },
      {
         name:'FOOD',
         link:'/'
      },
      {
         name:'TRAVEL',
         link:'/'
      },
    ],
    footerLinks:[
      {
         name:'FAQ',
         link:'/'
      },
      {
         name:'PRIVACY POLICY',
         link:'/page-2'
      },
      {
         name:'CONTACT',
         link:'/'
      }
    ],
  },
  plugins: [
    "gatsby-plugin-image",
    //{
      //resolve: "gatsby-plugin-google-analytics",
      //options: {
      //  trackingId: "",
      //},
    //},
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690,
            },
          },
        ],
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    
   
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`,
      },
      __key: "posts",
    },
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            //endpoint: process.env.MAILCHIMP_ENDPOINT, 
            endpoint:"https://gmail.us1.list-manage.com/subscribe/post?u=faeb62ca9bb5c38de300de151&amp;id=599bc04a5b",
        },
    },
    {
      resolve: 'gatsby-plugin-modal-routing',
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',
 
        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: { },
      }
    }
  ],
};
