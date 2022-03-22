import './App.css';
import data from './data/database.json';
import { Card, Container, Row, Col, Tab, Tabs, Nav, Navbar, NavDropdown, Modal, Button} from 'react-bootstrap';
import Ripples from 'react-ripples';

function Cards(yearN, monthN, onclick) {
  return (
    data.filter((data) => data.year === yearN && data.month === monthN).map((data) => {
      return (
        <Col md={3}>
          <Card id={data.id} style={{ textAlign: 'center', margin: '10px' }}>
            { 
              data.premiere ? 
                <Card.Header>Premiera</Card.Header>
              : <Card.Header>
                { data.stock ? "Dostępny" : "Niedostępny"}
              </Card.Header> 
            }
            <Ripples>
              <Card.Img variant="top" src={data.img} onClick={onclick} />
            </Ripples>
            <Card.Body>
              <Card.Title>{`${data.title}`}</Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted">{data.month} {data.year}</Card.Footer>
          </Card>
        </Col>
      )
    })
  )
}

function CardsAll(onclick) {
  return (
    data.map((data) => {
      return (
        <Col md={3}>
          <Card id={data.id} style={{ textAlign: 'center', margin: '10px' }}>
            { 
              data.premiere ? 
                <Card.Header>Premiera</Card.Header>
                : <Card.Header>
                  { data.stock ? "Dostępny" : "Niedostępny"}
                </Card.Header> 
              }
              <Ripples>
                <Card.Img variant="top" src={data.img} onClick={onclick} />
              </Ripples>
              <Card.Body>
                <Card.Title>{`${data.title}`}</Card.Title>
              </Card.Body>
              <Card.Footer className="text-muted">{data.month} {data.year}</Card.Footer>
          </Card>
        </Col>
      )
    })
  )
}

function CardsPrem(onclick) {
  return (
    data.filter((data) => data.premiere === true).map((data) => {
      return (
        <Col md={3}>
          <Card id={data.id} style={{ textAlign: 'center', margin: '10px' }}>
            { 
              data.premiere ? 
                <Card.Header>Premiera</Card.Header>
                : <Card.Header>
                  { data.stock ? "Dostępny" : "Niedostępny"}
                </Card.Header> 
              }
              <Ripples>
                <Card.Img variant="top" src={data.img} onClick={onclick} />
              </Ripples>
              <Card.Body>
                <Card.Title>{`${data.title}`}</Card.Title>
              </Card.Body>
              <Card.Footer className="text-muted">{data.month} {data.year}</Card.Footer>
          </Card>
        </Col>
      )
    })
  )
}

function Empty() {
  return (
    <Col md={6} style={{ margin: 'auto', 'margin-top': '50px' }}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Brak towarów</Card.Title>
          <Card.Text>
            Wyślij zapytanie odnośnie interesującego Cię produktu.
          </Card.Text>
          <Button variant="primary">Zapytanie</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

function OpenImageModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src='./img/menara.png' className='img-thumbnail img-full'></img>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
}


function App() {
  let nowDate = new Date();
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" >
        <Container>
        <Navbar.Brand><img src='./img/logo.svg'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Strona Główna</Nav.Link>
            <Nav.Link>Premiery</Nav.Link>
            <NavDropdown title="Wybierz rok" id="collasible-nav-dropdown">
              <NavDropdown.Item>2021</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>2022</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="p-5 bg-primary text-white text-center">
        <h3>Najlepsze gry planszowe w Polsce</h3>
      </Container>
      
      <Tab.Content>
        <Tab.Pane>
          <Container>
            <Row>
              { CardsAll().length === 0 ? Empty() : CardsAll() }
            </Row>
          </Container>
        </Tab.Pane>
        <Tab.Pane>
          <Container>
            <Row>
              { CardsPrem().length === 0 ? Empty() : CardsPrem() }
            </Row>
            
          </Container>
        </Tab.Pane>
        <Tab.Pane>
          <Tabs 
            variant="pills"
            defaultActiveKey={nowDate.getMonth()}
            transition={false}
            id="noanim-tab-example"
            className="nav-justified nav-tabs nav"
          >
            {["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"].map((m, mi) =>
              <Tab eventKey={mi} title={m}>
                <Container>
                  <Row>
                    { Cards().length === 0 ? Empty() : Cards() }
                  </Row>
                </Container>
              </Tab>
            )}
          </Tabs>
        </Tab.Pane>
      </Tab.Content>
      
      <OpenImageModal
        
      />
    </div>
  );
}

export default App;
