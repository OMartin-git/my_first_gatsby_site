import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
const AboutPage = () =>{
    return (
        <Layout pageTitle='About'>
            <StaticImage src='../images/bild.jpg' alt='Pic of night sky'/>
            <p>Huhu Hier steht jetzt Text</p>
        </Layout>
    )
}
export default AboutPage

export const Head = ()=><title>About Me</title>