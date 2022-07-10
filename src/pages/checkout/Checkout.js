import './checkout.scss';
import React from 'react';
import { useFormik } from 'formik';


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.billing) {
    errors.billing = 'Required';
  }

  if (!values.delivery) {
    errors.delivery = 'Required';
  }

  if (!values.telephone) {
    errors.telephone = 'Required';
  }

  if (!values.date) {
    errors.date = 'Required';
  }

  return errors;
};

const Checkout = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      billing: '',
      delivery: '',
      telephone: '',
      date: today,
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  let man = require('../../img/checkout.png');
  return (
    <div className="checkout">
      <div className="left">
        <img src={man} alt="man" />
      </div>
      <div className="right">
        <h1>Please Fill the Checkout Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-item">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div style={{ color: 'crimson' }}>{formik.errors.firstName}</div> : null}
          </div>
          <div className="form-item">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div style={{ color: 'crimson' }}>{formik.errors.lastName}</div> : null}
          </div>
          <div className="form-item">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <div style={{ color: 'crimson' }}>{formik.errors.email}</div> : null}
          </div>
          <div className="form-item">
            <label htmlFor="email">Billing Address</label>
            <input
              id="billing"
              name="billing"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.billing}
            />
            {formik.errors.billing ? <div style={{ color: 'crimson' }}>{formik.errors.billing}</div> : null}
          </div>
          <div className="form-item">
            <label htmlFor="email">Delivery Address</label>
            <input
              id="delivery"
              name="delivery"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.delivery}
            />
            {formik.errors.delivery ? <div style={{ color: 'crimson' }}>{formik.errors.delivery}</div> : null}
          </div>
          <div className="form-item">
            <label htmlFor="email">Telephone</label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              pattern="[0-9]{10}"
              placeholder='1234567890'
              onChange={formik.handleChange}
              value={formik.values.telephone}
            />
            {formik.errors.telephone ? <div style={{ color: 'crimson' }}>{formik.errors.telephone}</div> : null}
          </div>
          <div className="form-item">
            <label htmlFor="email">Date</label>
            <input
              id="date"
              name="date"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.date}
              disabled
            />
            {formik.errors.date ? <div style={{ color: 'crimson' }}>{formik.errors.date}</div> : null}
          </div>
          <div className="form-item">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout

