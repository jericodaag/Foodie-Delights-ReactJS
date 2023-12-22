import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic using emailjs
    emailjs.sendForm('service_47vftxq', 'template_ds8mpqk', form.current, 'E6Iy2AWNPSdhlpAwx')
      .then((result) => {
        console.log(result.text);
        // Set the submitted state to true to display the success message
        setIsSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="body-contact">
      <div className="contact-form">
        <h1>Contact Form</h1>
        {isSubmitted ? (
          <div>
            <p>Thank you for submitting the form!</p>
            {/* You can add additional content or redirect the user after submission */}
          </div>
        ) : (
          <form ref={form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="inputs-contact"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="inputs-contact"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label htmlFor="subject"></label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="inputs-contact"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="label-message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="message"
              ></textarea>
            </div>
            <button className="button-contact" type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
