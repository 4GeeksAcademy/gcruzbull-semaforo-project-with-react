

const Autobotton = ({color, setColor}) => {

    const changeColor = () => {
        if (color == "red") {
            setColor("yellow")
        } else if (color == "yellow") {
            setColor("green")
        } else if (color == "green") {
            setColor("red")
        } else {setColor("red")}
    }

    return (
        <button className="btn btn-dark mt-3" 
                onClick={changeColor}>
            Automatic Mode
        </button>
    );
};

export default Autobotton;