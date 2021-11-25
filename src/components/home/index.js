import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import image from "../../images/nft.png";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <div className="content-box">
              <h2 className="title">NFT Artist</h2>
              <p className="description">
                Successfully manage and coordinate graphic design projects from
                concept through completion. Work closely with clients to create
                vision, conceive designs, and consistently meet deadlines and
                requirements.
              </p>
            </div>
          </Col>
          <Col className="d-none d-md-block">
            <div className="image">
              <img alt="" src={image} className="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
