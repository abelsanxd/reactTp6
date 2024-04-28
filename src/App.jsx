import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ColorCard from "./components/ColorCard.jsx";

const App = () => {
  const [color, setColor] = useState(""); 
  const [colors, setColors] = useState(() => {
    const storedColors = localStorage.getItem("colors");
    return storedColors ? JSON.parse(storedColors) : [];
  });

  const handleInputChange = (event) => {
    setColor(event.target.value); 
  };

  const handleSaveColor = () => {
    if (color) {
      setColors([...colors, color]); 
      setColor(""); 
    }
  };

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <div className="container text-center mt-5 card">
      <h1>Administrar colores</h1>
      <section className="position-relative">
        <div className="row bg-light align-items-center">
          <div className="col-lg-6 mt-3">
            <div className="col-lg-4 mb-3">
              <div className="card-body">
                <p className="color-box" style={{ backgroundColor: color }}></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <input
              type="text"
              value={color}
              onChange={handleInputChange}
              placeholder="Escribe el nombre del color aquí"
              className="mr-2"
            />
            <button className="btn btn-primary ms-2" onClick={handleSaveColor}>Guardar</button>
          </div>
        </div>
      </section>
      <ColorCard colors={colors} setColors={setColors} />
    </div>
  );
};

export default App;
