import React, { Component } from 'react';
import CartOverview from "../components/CartOverview";
import PymesPaymentForm from "../components/PymesPaymentForm";

export default class FeaturePymes extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://live.decidir.com/static/v2.5/decidir.js ";
    script.async = true;
    document.body.appendChild(script)
  }
  render() {
    
    return (
      <div className="pymes-checkout">
      <section className="cart-overview">
        <CartOverview />
      </section>
      <div className="pagination-bullets">
        <span
          className="pagination-bullet-active"
          tabIndex="0"
          role="button"
          aria-label="Go to slide 1"
        ></span>
        <span
          className="pagination-bullet"
          tabIndex="0"
          role="button"
          aria-label="Go to slide 2"
        ></span>
        <span
          className="pagination-bullet"
          tabIndex="0"
          role="button"
          aria-label="Go to slide 3"
        ></span>
      </div>
      <div className="step-title">
        <h2 className="cart-title">Ingresá una nueva tarjeta</h2>
      </div>
      <section className="pymes-form">
        <PymesPaymentForm />
      </section>
    </div>
    )
  }
}
