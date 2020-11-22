import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <h1>Completed React Components</h1>
            <div><Link className='link' to='/pagination'>Pagination</Link></div>
            <div><Link className='link' to='/tabs'>Tabs</Link></div>
        </div>
    );
};

export default Home;