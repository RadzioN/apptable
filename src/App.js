import './App.css';
import data from './data/database.json';
import { Card, Container, Row, Col, Tab, Tabs } from 'react-bootstrap';

function Cards (month) {
  return (
    data.filter((data) => data.date === (month + " 2022")).map((data) => {
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
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
              <Card.Title>{`${data.title}`}</Card.Title>
              
            </Card.Body>
            <Card.Footer className="text-muted">{data.date}</Card.Footer>
          </Card>
        </Col>
      )
    })
  )
}


function App() {
  let nowDate = new Date();
  return (
    <div className="App">
      <Tabs
        defaultActiveKey={nowDate.getMonth()}
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        {["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"].map((x, i) =>
          <Tab eventKey={i} title={x}>
          <Container>
            <Row>
              {Cards({x})}
            </Row>
          </Container>
        </Tab>
        )}
      </Tabs>
      
    </div>
  );
}

export default App;
