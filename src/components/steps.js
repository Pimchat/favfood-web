import React from "react";
import "./steps.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//image
import step1 from "./restaurant-pic/icon-basket.png";
import step2 from "./restaurant-pic/icon-payment.png";
import step3 from "./restaurant-pic/icon-delivery.png";
import step4 from "./restaurant-pic/icon-receive.png";

function Steps() {
  return (
    <div className="steps-container">
      <div className="sub-topic">How it works</div>
      <div className="card-box-main">
        <Container fluid>
          <Row xs={1} md={2} lg={4}>
            <Col className="col-pad">
              <div className="card-box">
                <div className="step-number">1</div>
                <div className="step-img-box">
                  <img className="step-img" alt="basket" src={step1} />
                </div>
                <div className="step-detail-box">
                  <div className="step-name">Select Food Items</div>
                  <div className="dash" />
                  <div className="step-detail">
                    Choose from a variety of home services and select the date
                    and time you'd like a qualified faster to show up. Give us
                    the details and we'll find you the help.
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-pad">
              <div className="card-box">
                <div className="step-number">2</div>
                <div className="step-img-box">
                  <img className="step-img" alt="basket" src={step2} />
                </div>
                <div className="step-detail-box">
                  <div className="step-name">Make a Payment</div>
                  <div className="dash" />
                  <div className="step-detail">
                    Choose from a variety of home services and select the date
                    and time you'd like a qualified faster to show up. Give us
                    the details and we'll find you the help.
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-pad">
              <div className="card-box">
                <div className="step-number">3</div>
                <div className="step-img-box">
                  <img className="step-img" alt="basket" src={step3} />
                </div>
                <div className="step-detail-box">
                  <div className="step-name">Delivery</div>
                  <div className="dash" />
                  <div className="step-detail">
                    Choose from a variety of home services and select the date
                    and time you'd like a qualified faster to show up. Give us
                    the details and we'll find you the help.
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-pad">
              <div className="card-box">
                <div className="step-number">4</div>
                <div className="step-img-box">
                  <img className="step-img" alt="basket" src={step4} />
                </div>
                <div className="step-detail-box">
                  <div className="step-name">Enjoy Your Meal!</div>
                  <div className="dash" />
                  <div className="step-detail">
                    Choose from a variety of home services and select the date
                    and time you'd like a qualified faster to show up. Give us
                    the details and we'll find you the help.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Steps;
