import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';
const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup>
                  <input
                    className="billing__form-input"
                    type="text"
                    placeholder="Enter your name"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    className="billing__form-input"
                    type="email"
                    placeholder="Enter your email"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    className="billing__form-input"
                    type="number"
                    placeholder="Phone number"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    className="billing__form-input"
                    type="text"
                    placeholder="Adress"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    className="billing__form-input"
                    type="text"
                    placeholder="City"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    className="billing__form-input"
                    type="text"
                    placeholder="Postal code"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    className="billing__form-input"
                    type="text"
                    placeholder="Country"
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty:<span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal:<span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shiping: <br />
                    Free shiping
                  </span>
                  <span>$0</span>
                </h6>

                <h6>
                  Total Cost:<span>${totalAmount}</span>
                </h6>
                <button className="auth__btn w-100">Place a order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
