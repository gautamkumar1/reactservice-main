import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    else if (!/^\d+$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Phone Number must be digits only';
    if (!formData.email) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.message) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log('Form submitted successfully', formData);
      alert(`Full Name: ${formData.fullName}`);
      // Reset the form data
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
    <div className='contactus'>
    <div className='mx-5 text-center pt-5'>
      <h1>Contact us</h1>
    </div>

    <div className='container contact_div pb-5'>
      <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          isInvalid={!!errors.fullName}
        />
        <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          isInvalid={!!errors.phoneNumber}
        />
        <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
          isInvalid={!!errors.message}
        />
        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
      </Form.Group>

      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact