import React from "react";

const Semaforo = () => {
    return (
        <div>
            <div className="w-25 m-auto bg-dark-subtle"></div>
            
            <div className="w-75 m-auto bg-dark-subtle">
                <div className="w-75 m-auto bg-succes"></div>
                <div className="w-75 m-auto bg-warning"></div>
                <div className="w-75 m-auto bg-danger"></div>
            </div>
        </div>
    );
};

export default Home;