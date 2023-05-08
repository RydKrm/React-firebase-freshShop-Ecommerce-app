import React from 'react';

const BillingAddress = () => {
    return (
      <div class="col-sm-6 col-lg-6 mb-3 text-left">
        <div className="checkout-address">
          <div className="title-left">
            <h3>Billing address</h3>
          </div>
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">First name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Valid first name is required.{" "}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Valid last name is required.{" "}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="username">Username *</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Your username is required.{" "}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="email">Email Address *</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder=""
              />
              <div className="invalid-feedback">
                {" "}
                Please enter a valid email address for shipping updates.{" "}
              </div>
            </div>
            <div className="mb-3">
              <label for="address">Address *</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder=""
                required
              />
              <div className="invalid-feedback">
                {" "}
                Please enter your shipping address.{" "}
              </div>
            </div>
            <div className="mb-3">
              <label for="address2">Address 2 *</label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder=""
              />{" "}
            </div>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="country">Country *</label>
                <select className="wide w-100" id="country">
                  <option value="Choose..." data-display="Select">
                    Choose...
                  </option>
                  <option value="United States">United States</option>
                </select>
                <div className="invalid-feedback">
                  {" "}
                  Please select a valid country.{" "}
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="state">State *</label>
                <select className="wide w-100" id="state">
                  <option data-display="Select">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  {" "}
                  Please provide a valid state.{" "}
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Zip *</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback"> Zip code required. </div>
              </div>
            </div>
            <hr className="mb-4" />
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="same-address"
              />
              <label className="custom-control-label" for="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="save-info"
              />
              <label className="custom-control-label" for="save-info">
                Save this information for next time
              </label>
            </div>
            <hr className="mb-4" />
            <div className="title">
              {" "}
              <span>Payment</span>{" "}
            </div>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  checked
                  required
                />
                <label className="custom-control-label" for="credit">
                  Credit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" for="debit">
                  Debit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" for="paypal">
                  Paypal
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />{" "}
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">
                  {" "}
                  Name on card is required{" "}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Credit card number is required{" "}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Expiration date required{" "}
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback"> Security code required </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="payment-icon">
                  <ul>
                    <li>
                      <img
                        className="img-fluid"
                        src="images/payment-icon/1.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="images/payment-icon/2.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="images/payment-icon/3.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="images/payment-icon/5.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="images/payment-icon/7.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="mb-1" />{" "}
          </form>
        </div>
      </div>
    );
};

export default BillingAddress;