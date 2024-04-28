import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ColorCard = ({ colors, setColors }) => {
  const handleDeleteColor = (index) => {
    const updatedColors = [...colors.slice(0, index), ...colors.slice(index + 1)];
    setColors(updatedColors);
    localStorage.setItem("colors", JSON.stringify(updatedColors)); // Guardar en localStorage
  };

  return (
    <section>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {colors.map((color, index) => (
          <div className="col" key={index}>
            <div className="card mb-3">
              <div className="card-body">
                <p className="card-title">Nombre color: {color}</p>
                <div className="bg-light">
                  <div className="mt-3" style={{ backgroundColor: color, height: "50px" }}></div>
                  <button className="btn btn-primary mt-3" onClick={() => handleDeleteColor(index)}>Borrar</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  const [colors, setColors] = useState(() => {
    const storedColors = localStorage.getItem("colors");
    return storedColors ? JSON.parse(storedColors) : [];
  });

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <div className="container text-center mt-5 card">
      <h1>Administrar colores</h1>
      <ColorCard colors={colors} setColors={setColors} />
    </div>
  );
};

export default App;
