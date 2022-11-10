import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Imagen.css";
function Imagen() {
  const [num, setnum] = useState(68);
  const [num2, setnum2] = useState(75);
  const [por, setpor] = useState(0);

  const hacerPrueba = () => {
    const styles = document.documentElement.style;

    let px = 0.75;
    let px2 = 0.75;
    let total = parseFloat(num) - parseFloat(px);
    let total2 = parseFloat(por) + parseFloat(1);
    let total3 = parseFloat(num2) - parseFloat(px2);

    setnum(total);
    setpor(total2);
    setnum2(total3);

    styles.setProperty("--si", `${num}vh`);
    styles.setProperty("--px", `${num2}vh`);
  };

  return (
    <>
      <Container fluid className="px-4 pt-3">
        <Row className="d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center">
          <Col className="col-xl-8">
            <div className="card shadow mb-3">
              <div className="card-header d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex align-items-center align-items-sm-center align-items-md-center align-items-lg-center align-items-xl-center">
                <div className="col">
                  <p id="lb-titulo" className="text-primary m-0 fw-bold">
                    Chart Race
                  </p>
                </div>
              </div>
              <div className="card-body">
                <button className="btn btn-primary" onClick={hacerPrueba} disabled={por == 100? true:false } >
                  Click
                </button>{" "}
                <br />
                <div align="center">
                  <img src="dinero.png" id="image-overlay" />
                  <img src="dinero.png" id="image" />
                  <h1 class="texto-encima">
                    _____________{por}%______________
                  </h1>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Imagen;
