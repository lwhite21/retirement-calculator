import React, { useState, useContext, useEffect } from "react";
import './inputs.css';
import { DataContext } from "../homepage";

const Inputs = () => {
    const { data } = useContext<any>(DataContext);

    return (
        <div className="inputs-container">
        <h1>Inputs</h1>
        </div>
    );
};

export default Inputs;