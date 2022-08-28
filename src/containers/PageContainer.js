import React from "react";
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
        </>
        )
}
export default PageContainer;
