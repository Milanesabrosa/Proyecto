import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Card, Button, Modal} from 'react-bootstrap';

function Principal(props){
  return(
    <div className="principal p-4">
      <h2 className="text-center mb-4">Películas Destacadas</h2>
      <Row>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://www.eldiario.net/portal/wp-content/uploads/2024/10/El-ladron-de-perros-la-nueva-joya-del-cine-boliviano-se-estreno-el-17-de-octubre.jpg" alt="Película 1" />
            <Card.Body>
              <Card.Title>El ladrón de perros</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Director: Vinko Tomicic</Card.Subtitle>
              <Card.Text>Martín, un limpiabotas huérfano de 13 años, comienza a sospechar que un cliente suyo, el señor Novoa, un solitario sastre, es su padre biológico.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://www.retinalatina.org/wp-content/uploads/2021/07/gal-juanaazurduy-6.jpg" alt="Película 2" />
            <Card.Body>
              <Card.Title>Juana Azurduy, guerrillera de la Patria Grande</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Director: Jorge Sanjinés</Card.Subtitle>
              <Card.Text>En noviembre de 1825, en Chuquisaca, Juana Azurduy Bermúdez de Padilla, heroína de la guerra contra el ejército español, recibe la visita de los libertadores Simón Bolívar, Antonio José de Sucre y José Miguel Lanza.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://frombolivia.com/wp-content/uploads/2012/09/El-cementerio-de-los-elefantes-2008_2.webp" alt="Película 3" />
            <Card.Body>
              <Card.Title>El Cementerio de Elefantes</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Director: Tonchy Antezana</Card.Subtitle>
              <Card.Text>Drama urbano que explora relaciones humanas complejas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function Peliculas(props) {
  const [modalStates, setModalStates] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false
  });

  const toggleModal = (modalKey) => {
    setModalStates(prev => ({
      ...prev,
      [modalKey]: !prev[modalKey]
    }));
  };

  return (
    <div className="peliculas p-4">
      <h2 className="text-center mb-4">Películas Bolivianas</h2>
      
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <Button variant="primary" onClick={() => toggleModal('modal1')}>Yawar Mallku</Button>
        <Button variant="success" onClick={() => toggleModal('modal2')}>Zona Sur</Button>
        <Button variant="danger" onClick={() => toggleModal('modal3')}>El Cementerio de Elefantes</Button>
        <Button variant="warning" onClick={() => toggleModal('modal4')}>American Visa</Button>
        <Button variant="info" onClick={() => toggleModal('modal5')}>Los Andes no creen en Dios</Button>
      </div>

      <Modal show={modalStates.modal1} onHide={() => toggleModal('modal1')}>
        <Modal.Header closeButton>
          <Modal.Title>Yawar Mallku</Modal.Title>
        </Modal.Header>
        <Modal.Body>Clásico del cine boliviano (1969) dirigido por Jorge Sanjinés que aborda la discriminación y el conflicto cultural.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal('modal1')}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalStates.modal2} onHide={() => toggleModal('modal2')}>
        <Modal.Header closeButton>
          <Modal.Title>Zona Sur</Modal.Title>
        </Modal.Header>
        <Modal.Body>Película (2009) que muestra las diferencias de clase en La Paz, dirigida por Juan Carlos Valdivia.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal('modal2')}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalStates.modal3} onHide={() => toggleModal('modal3')}>
        <Modal.Header closeButton>
          <Modal.Title>El Cementerio de Elefantes</Modal.Title>
        </Modal.Header>
        <Modal.Body>Drama (2016) de Tonchy Antezana que explora relaciones humanas complejas en Santa Cruz.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal('modal3')}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalStates.modal4} onHide={() => toggleModal('modal4')}>
        <Modal.Header closeButton>
          <Modal.Title>American Visa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Comedia dramática (2005) sobre un profesor que busca una visa americana, dirigida por Juan Carlos Valdivia.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal('modal4')}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalStates.modal5} onHide={() => toggleModal('modal5')}>
        <Modal.Header closeButton>
          <Modal.Title>Los Andes no creen en Dios</Modal.Title>
        </Modal.Header>
        <Modal.Body>Adaptación (2007) de la novela homónima sobre la vida minera, dirigida por Antonio Eguino.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal('modal5')}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function Aloja(props){
  return(
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white p-3 text-center">
        <h1>Cinematica boliviana</h1>
      </header>
      <Navbar bg="info" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-black mx-2">Principal</Nav.Link>
            <Nav.Link as={Link} to="/pag2" className="text-black mx-2">Película</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main className="flex-grow-1 my-4">
        <Container>
          <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/pag2" element={<Peliculas/>}/>
          </Routes>
        </Container>
      </main>
      <footer className="bg-light p-3">
        <Container>
          <Row>
            <Col md={9}>
              <p className="mb-0">John Antony Ticona Huarachi</p>
            </Col>
            <Col md={3} className="text-end">
              <p className="mb-0 text-muted">INF122 - Programación Web</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Aloja;