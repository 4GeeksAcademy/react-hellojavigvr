import React from "react";

 const Jumbotron = (props) => {
    return (
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Jumbotron personalizado</h1>
          <p className="col-md-8 fs-4">Usando una serie de utilidades, puedes crear este jumbotron, tal como el de versiones
            anteriores de Bootstrap. Consulta los ejemplos a continuación para saber cómo puede remezclarlo y cambiarle
            el estilo a tu gusto.</p>
          <button className="btn btn-primary btn-lg" type="button">Botón de ejemplo</button>
        </div>
    )
}
export default Jumbotron;