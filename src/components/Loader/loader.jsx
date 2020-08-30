import React from "react";
import "./loader.css";
const Loader = (props) => {
    const classes = props.loading
        ? "loader-container show"
        : "loader-container hide";
    return (
        <div className={classes}>
            <div className="top-bar"></div>
            <div className="right-bar"></div>
            <div className="bottom-bar"></div>
            <div className="left-bar"></div>
        </div>
    );
};

export default Loader;
