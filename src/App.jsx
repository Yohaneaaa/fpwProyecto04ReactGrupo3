import Formulario from "./components/formulario";
import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  const guardarNuevoJugador = (datos) => {
    console.log("Datos recibidos del formulario:", datos);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <Card.Title className="mb-4 text-center">
                TP Formulario - El Dado de la Suerte
              </Card.Title>
              <Formulario guardarNuevoJugador={guardarNuevoJugador} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;