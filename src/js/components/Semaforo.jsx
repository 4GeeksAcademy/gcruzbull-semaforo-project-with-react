import React, {useState} from "react";

const Semaforo = ({color, setColor}) => {

        

    return (
        <div>
            <div className="palito"></div>
            
            <div className="traficlight">
                <div className={`redlight ${color == "red" ? "red-glow" : "opacity-25"}`} 
                    onClick={() => setColor("red") }>
                </div>
                <div className={`yellowlight ${color == "yellow" ? "yellow-glow" : "opacity-25"}`} 
                    onClick={() => setColor("yellow")}>
                </div>
                <div className={`greenlight ${color == "green" ? "green-glow" : "opacity-25"}`} 
                    onClick={() => setColor("green")}>
                </div>
            </div>
        </div>
    );
};

export default Semaforo;