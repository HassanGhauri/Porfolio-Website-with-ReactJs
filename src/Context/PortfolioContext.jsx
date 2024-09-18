/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{ createContext,useRef } from "react";

export const PortfolioContext = createContext(null);

const PortfolioContextProvider = (props) => {
    const Aboutref = useRef();
    const Skillsref = useRef();
    const Projectref = useRef();
    const Contactref = useRef();
    const Homeref = useRef();


    const contextValue = {
        Aboutref,
        Skillsref,
        Projectref,
        Contactref,
        Homeref
    };

    return (
        <PortfolioContext.Provider value={contextValue}>
          {props.children}
        </PortfolioContext.Provider>
      );
}

export default PortfolioContextProvider;

