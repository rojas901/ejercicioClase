import React from 'react'
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Children } from 'react';

const Layout = ({children}) => {
    return (
        <div className="mainContainer">
            <Header/>
                <main>
                    {children} 
                </main>
            <Footer/>
        </div>
    )
}

export default Layout;
