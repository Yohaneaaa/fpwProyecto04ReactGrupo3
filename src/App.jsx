import Formulario from "./components/formulario";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { useState } from "react";
import Dado3D from "./components/Dado3D";
import { generarNumeroAleatorio, obtenerResultado } from "./services/dadoServices"; 

function App() {
  const [jugadores, setJugadores] = useState([]);
  const [numeroAleatorio, setNumeroAleatorio] = useState(1);
  const [tiradaId, setTiradaId] = useState(0);

  const guardarNuevoJugador = (datos) => {
    setJugadores((jugadoresAnteriores) => [
      ...jugadoresAnteriores,
      datos,
    ]);
    lanzarDado();
  };

  const lanzarDado = () => {
    const nuevoNumero = generarNumeroAleatorio();
    setNumeroAleatorio(nuevoNumero);
    setTiradaId((prev) => prev + 1);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-4">
        <Col md={12} className="text-center mb-3">
          <h2 className="fw-bold">TP Formulario - El Dado de la Suerte</h2>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body className="p-4">
              <Card.Title className="mb-4 text-center">
                Datos del jugador
              </Card.Title>
              <Formulario guardarNuevoJugador={guardarNuevoJugador} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0 h-100 text-center">
            <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center">
              <Card.Title className="mb-3">🎲 El Dado "</Card.Title>
              
              <div className="my-3 w-100">
                <Dado3D numeroAleatorio={numeroAleatorio} tiradaId={tiradaId} />
              </div>

              <h5 className="mt-3 mb-3 text-secondary">
                {tiradaId > 0 ? obtenerResultado(numeroAleatorio) : "¡Probá tu suerte! 🍀"}
              </h5>

              <Button
                variant="primary"
                size="lg"
                className="mt-2"
                onClick={lanzarDado}
              >
                Lanzar Dado
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <Card.Title className="mb-3">Jugadores Registrados</Card.Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                  </tr>
                </thead>
                <tbody>
                  {jugadores.length > 0 ? (
                    jugadores.map((jugador, indice) => (
                      <tr key={indice}>
                        <td>{jugador.nombre}</td>
                        <td>{jugador.apellido}</td>
                        <td>{jugador.edad}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center text-muted">
                        No hay jugadores registrados todavía.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;