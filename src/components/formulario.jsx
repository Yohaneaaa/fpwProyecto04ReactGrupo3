import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = ({ guardarNuevoJugador }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");

  const capturarDatos = (e) => {
    e.preventDefault();

    const nuevoJugador = {
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      edad: edad.trim(),
    };
    console.log(nuevoJugador);

    guardarNuevoJugador(nuevoJugador);

    setNombre("");
    setApellido("");
    setEdad("");
  };

  return (
    <div>
      <Form onSubmit={capturarDatos}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Apellido: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="edad">
          <Form.Label>Edad: </Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Lanzar Dados
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;