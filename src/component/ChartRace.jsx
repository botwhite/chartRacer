import { React, useState, useEffect } from "react";
import ChartRace from "react-chart-race";
import Guau from "../../public/guau.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ChartRace.css";

function ChartRaceEje() {
  const [data, setData] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    const data = [
      {
        id: 0,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 1</div> */}
            <img src='prueba.png' style={{ width: 40 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#DC7633",
      },
      {
        id: 1,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 2</div> */}
            <img src='frowning.png' style={{ width: 60 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#3498DB",
      },
      {
        id: 2,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 3</div> */}
            <img src='bull steam.png' style={{ width: 60 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#52BE80",
      },
      {
        id: 3,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 4</div> */}
            <img src='Lina.png' style={{ width: 60 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#C0392B",
      },
      {
        id: 4,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 5</div> */}
            <img src='wendy.png' style={{ width: 60 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#AED6F1",
      },
      {
        id: 5,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 7</div> */}
            <img src='Nelvis.png' style={{ width: 60 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#8E44AD",
      },
    ];

    setData([...data]);
  }, []);

  function handleChange() {
    const data = [
      {
        id: 0,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 1</div> */}
            <img src='prueba.png' style={{ width: 40 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#DC7633",
      },
      {
        id: 1,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 2</div> */}
            <img src='frowning.png' style={{ width: 60 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#3498DB",
      },
      {
        id: 2,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 3</div> */}
            <img src='bull steam.png' style={{ width: 60 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#52BE80",
      },
      {
        id: 3,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 4</div> */}
            <img src='Lina.png' style={{ width: 60 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#C0392B",
      },
      {
        id: 4,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 5</div> */}
            <img src='wendy.png' style={{ width: 60 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#AED6F1",
      },
      {
        id: 5,
        title: (
          <div>
            {/* <div style={{ fontFamily: "bold" }}>Prueba 7</div> */}
            <img src='Nelvis.png' style={{ width: 60 }}></img>
          </div>
        ),
        value: getRandomInt(1, 100),
        color: "#8E44AD",
      },
    ];

    setData([...data]);
  }

  return (
    <>
      <Container fluid className="px-4 pt-3">
        <Row className="d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center">
          <Col className="col-xl-9">
            <div className="card shadow mb-3">
              <div className="card-header d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex align-items-center align-items-sm-center align-items-md-center align-items-lg-center align-items-xl-center">
                <div className="col">
                  <p id="lb-titulo" className="text-primary m-0 fw-bold">
                    Chart Race
                  </p>
                </div>
              </div>
              <div className="card-body">
                <button className="btn btn-primary" onClick={handleChange}>
                  Click Me!
                </button>
                <ChartRace
                  data={data}
                  //backgroundColor="#000"
                  width={1000}
                  padding={12}
                  itemHeight={60}
                  gap={20}
                  titleStyle={{ font: "normal 400 10px Arial"  }}
                  valueStyle={{
                    font: "normal 400 24px Bold",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ChartRaceEje;
