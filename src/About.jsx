import React from 'react';
import web from "../src/images/2.svg"
import Common from "./Common_comp";
const About = () => {
    return (
        <>
            <Common name="Welcome to about page" imgsrc={web} visit="/contact" btnname="Contact me" />
        </>
    );
};
export default About;