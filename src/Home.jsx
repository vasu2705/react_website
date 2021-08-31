import React from 'react';
import Common from './Common_comp'
import web from "../src/images/1.svg"
const Home = () => {
    return (
        <>
            <Common name="Let's grow together with" imgsrc={web} visit="/service" btnname="Get started" />
        </>
    );
};
export default Home;