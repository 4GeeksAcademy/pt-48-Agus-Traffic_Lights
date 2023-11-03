import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	
	/*useEffect(() => {
		setRed()
	})*/

	const setRed = () => {
        setTimeout(() => {
          redUpdate("light red")
          yellowUpdate("light black")
          setGreen();
        }, 1500)
      }

    const setGreen = () => {
      setTimeout(() => {
        redUpdate("light black")
        greenUpdate("light green")
        setYellow();
      }, 3000)
    }

    const setYellow = () => {
      setTimeout(() => {
        redUpdate("light black")
        yellowUpdate("light yellow")
        greenUpdate("light black")
        setRed();
      }, 3000)
    }

  const [ redOff, redUpdate ] = useState("light black")
  const [ yellowOff, yellowUpdate ] = useState("light black")
  const [ greenOff, greenUpdate ] = useState("light black")

	return (<>
		<div className="traffic-light">
			<div className={redOff}></div>
			<div className={yellowOff}></div>
			<div className={greenOff}></div>
		</div>
		<div className="d-flex justify-content-center">
			<button className="btn btn-dark" onClick={() => setRed()}>Empezar</button>
		</div>
	</>);
};

export default Home;
