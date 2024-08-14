import React, { useState } from "react";
import styled from "styled-components";

// Styled-components for styling the contact section
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
  min-height: 100vh; /* Ensure the wrapper takes up at least the full viewport height */
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px; /* Limit the width of the form */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  display: block;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical; /* Allow vertical resizing */
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Main Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <ContactWrapper>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormField>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
