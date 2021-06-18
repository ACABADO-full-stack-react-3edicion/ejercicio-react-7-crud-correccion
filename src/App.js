import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Formulario } from "./componentes/Formulario";
import { Listado } from "./componentes/Listado";

function App() {
  const [formularioAbierto, setFormularioAbierto] = useState(null);
  const [tipos, setTipos] = useState([]);
  const idMasAlta = tipos
    .map((tipo) => tipo.id)
    .reduce((acumulador, id) => (id > acumulador ? id : acumulador), 0);
  const nuevoTipo = (tipo) => {
    setTipos([...tipos, tipo]);
  };
  const borrarTipo = (tipo) => {
    setTipos(tipos.filter((tipoGato) => tipoGato.id !== tipo.id));
  };
  const editarTipo = (tipo) => {
    setTipos(
      tipos.map((tipoGato) => {
        if (tipoGato.id === tipo.id) {
          return {
            ...tipoGato,
            tipo: tipo.tipo,
          };
        } else {
          return tipoGato;
        }
      })
    );
  };
  return (
    <Container className="contenedor">
      <Row as="header">
        <Col as="h1">Tipos de gatos</Col>
      </Row>
      <Row as="main">
        {formularioAbierto ? (
          <Formulario
            formularioAbierto={formularioAbierto}
            idMasAlta={idMasAlta}
            nuevoTipo={nuevoTipo}
            editarTipo={editarTipo}
            setFormularioAbierto={setFormularioAbierto}
          />
        ) : (
          <Listado
            tipos={tipos}
            formularioAbierto={formularioAbierto}
            borrarTipo={borrarTipo}
            setFormularioAbierto={setFormularioAbierto}
          />
        )}
      </Row>
    </Container>
  );
}

export default App;
