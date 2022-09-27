import React from "react";
import Footer from "../components/landing/Footer";
import NavBar from "../components/layout-components/NavBar";


const PageContainer = ({user, children, activePath, title}) => {
    if(title){
        document.title = title;
    }
    return (
        <>
            <NavBar activePath/>
            <div className="page-container">
            {children}
            </div>
            <Footer/>
        </>
        )
}
export default PageContainer;
