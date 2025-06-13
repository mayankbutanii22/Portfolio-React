import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from "../Redux/actions";

const ContactForm = () => {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.contactForm);


  const { firstName, lastName, email, message } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>First Name:</h3>
      <input
        type="text"
        name="firstName"
        value={firstName}
        placeholder="Enter your first name"
        onChange={handleChange}
      />
      <h3>Last Name:</h3>
      <input
        type="text"
        name="lastName"
        value={lastName}
        placeholder="Enter your last name"
        onChange={handleChange}
      />
      <h3>Email:</h3>
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <h3>Message:</h3>
      <textarea
        name="message"
        value={message}
        placeholder="Enter your message"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

